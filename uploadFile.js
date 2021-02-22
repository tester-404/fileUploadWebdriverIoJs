const path = require('path');

describe('Upload File', () => {
    it('should be able to upload a file', () => {
    const input = $('#file-upload');
    const submitBtn = $('#file-submit');

    const filePath = path.join(__dirname, '../la.PNG');
    const remoteFilePath = browser.uploadFile(filePath);

    browser.url('https://the-internet.herokuapp.com/upload');
    input.setValue(remoteFilePath);
    submitBtn.click();
    browser.pause(2000); // chai assertion

    });
    
});

// npx wdio wdio.conf.js