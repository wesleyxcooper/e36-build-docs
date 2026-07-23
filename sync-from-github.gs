// ============================================================
// E36 Build Costs — GitHub CSV Sync
// ============================================================
// FIRST RUN:  run exportAllToGoogleDrive() to bootstrap CSVs from Sheets
// ONGOING:    run syncAllFromGitHub() (or set a time-driven trigger)
// ============================================================

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/wesleyxcooper/e36-build-docs/main/E36_CSVs/";

// CSV filename → exact sheet tab name
// Phase 1A and 1B are combined into one sheet, exported as one CSV
const SHEET_CONFIG = [
  { csv: "E36_Phase0_Chassis.csv",         sheet: "E36_Phase0_Chassis" },
  { csv: "E36_Phase1_Foundation.csv",      sheet: "E36_Phase1_Foundation" },
  { csv: "E36_Phase1_Combined.csv",        sheet: "E36_Phase1_N/A M52 or Turbo M50" },
  { csv: "E36_Phase2_07KBuild.csv",        sheet: "E36_Phase2_07KBuild" },
  { csv: "E36_Phase3_FinalSwap.csv",       sheet: "E36_Phase3_FinalSwap" },
  { csv: "E36_Phase4_Calibration.csv",     sheet: "E36_Phase4_Calibration" },
];

const HEADER_ROWS = 1;

// ============================================================
// EXPORT: Sheets → Google Drive CSVs  (run once to bootstrap)
// ============================================================
function exportAllToGoogleDrive() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const folderName = "E36 CSV Export " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");
  const folder = DriveApp.createFolder(folderName);

  const results = [];
  for (const config of SHEET_CONFIG) {
    try {
      const sheet = ss.getSheetByName(config.sheet);
      if (!sheet) { results.push(`SKIPPED: ${config.sheet} not found`); continue; }

      const totalRow = findTotalRow(sheet);
      const lastDataRow = totalRow > 0 ? totalRow - 1 : sheet.getLastRow();
      const data = sheet.getRange(1, 1, lastDataRow, sheet.getLastColumn()).getValues();
      const csvText = arrayToCsv(data);

      folder.createFile(config.csv, csvText, MimeType.PLAIN_TEXT);
      results.push(`✓ ${config.csv}: ${data.length - 1} data rows`);
    } catch (e) {
      results.push(`✗ ${config.csv}: ${e.message}`);
    }
  }

  const msg = results.join("\n") + "\n\nFolder: " + folder.getUrl();
  Logger.log(msg);
  SpreadsheetApp.getUi().alert("Export complete:\n\n" + msg);
}

// ============================================================
// SYNC: GitHub CSVs → Sheets  (ongoing, set a trigger)
// ============================================================
function syncAllFromGitHub() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const results = [];

  for (const config of SHEET_CONFIG) {
    try {
      const result = syncSheet(ss, config.csv, config.sheet);
      results.push(`✓ ${config.sheet}: ${result}`);
    } catch (e) {
      results.push(`✗ ${config.sheet}: ${e.message}`);
    }
  }

  Logger.log(results.join("\n"));
  SpreadsheetApp.getUi().alert("Sync complete:\n\n" + results.join("\n"));
}

function syncSheet(ss, csvFile, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return `SKIPPED — sheet not found`;

  const url = GITHUB_RAW_BASE + csvFile;
  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (response.getResponseCode() !== 200) {
    throw new Error(`HTTP ${response.getResponseCode()} fetching ${csvFile}`);
  }

  const dataRows = parseCsvRobust(response.getContentText()).slice(1); // drop header
  if (dataRows.length === 0) return "no data rows";

  const totalRowIndex = findTotalRow(sheet);
  const firstDataRow = HEADER_ROWS + 1;
  const lastDataRow  = totalRowIndex > 0 ? totalRowIndex - 1 : sheet.getLastRow();
  const sheetCols    = sheet.getLastColumn();

  if (lastDataRow >= firstDataRow) {
    sheet.getRange(firstDataRow, 1, lastDataRow - firstDataRow + 1, sheetCols).clearContent();
  }

  // Normalize all rows to same width before writing
  const maxCols = Math.max(...dataRows.map(r => r.length));
  const normalized = dataRows.map(r => {
    while (r.length < maxCols) r.push("");
    return r.slice(0, maxCols);
  });

  const writeCount = totalRowIndex > 0 ? Math.min(normalized.length, totalRowIndex - firstDataRow) : normalized.length;
  sheet.getRange(firstDataRow, 1, writeCount, maxCols).setValues(normalized.slice(0, writeCount));
  return `${writeCount} rows written`;
}

// ============================================================
// Helpers
// ============================================================

function findTotalRow(sheet) {
  const colA = sheet.getRange("A:A").getValues();
  for (let i = 0; i < colA.length; i++) {
    if (String(colA[i][0]).trim().toLowerCase() === "total") return i + 1;
  }
  return -1;
}

// RFC 4180 CSV parser — handles quoted fields with embedded commas/newlines/"" escapes
function parseCsvRobust(text) {
  const rows = [];
  let row = [], field = "", inQuote = false;
  const n = text.length;
  for (let i = 0; i < n; i++) {
    const c = text[i];
    if (inQuote) {
      if (c === '"') {
        if (i + 1 < n && text[i + 1] === '"') { field += '"'; i++; } // escaped quote
        else inQuote = false;
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuote = true;
      } else if (c === ',') {
        row.push(field); field = "";
      } else if (c === '\n') {
        row.push(field); field = "";
        rows.push(row); row = [];
      } else if (c === '\r') {
        // skip bare CR (handles CRLF)
      } else {
        field += c;
      }
    }
  }
  if (field !== "" || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

// Properly quoted CSV from a 2D array
function arrayToCsv(data) {
  return data.map(row =>
    row.map(cell => {
      const s = String(cell === null || cell === undefined ? "" : cell);
      return (s.includes(",") || s.includes('"') || s.includes("\n"))
        ? '"' + s.replace(/"/g, '""') + '"'
        : s;
    }).join(",")
  ).join("\n");
}
