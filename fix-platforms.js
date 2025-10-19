import fs from 'fs';

// Read the mockData.ts file
const filePath = 'services/mockData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find all firms that have drawdownType but are missing platforms
// Look for the pattern: drawdownType: '...', followed by evaluationProcessSummary without platforms in between
const pattern = /(\s+drawdownType:\s*['"][^'"]+['"],\s*)(\s+evaluationProcessSummary:)/g;

// Replace with platforms property added
const replacement = '$1\n    platforms: [\'MT4\', \'MT5\'],$2';

// Apply the replacement
content = content.replace(pattern, replacement);

// Write the fixed content back
fs.writeFileSync(filePath, content);

console.log('Fixed missing platforms property in mockData.ts');
