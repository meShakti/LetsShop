const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const {exec} = require('child_process');

const performLighthouseTests = async () => {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {output: 'html', port: chrome.port};
    const testResult = await lighthouse('http://localhost:3000', options);
    const report = testResult.report;
    fs.writeFileSync('./public/report.html', report);
    await chrome.kill();
}

(async () => {
    const childProcess = await exec('serve -s build');
    await performLighthouseTests();   
    childProcess.kill();
})();