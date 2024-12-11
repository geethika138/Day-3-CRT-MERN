const fs = require('fs');

const content = 'Hello, World!';


fs.writeFile('abc.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file', err);
        return;
    }
    console.log('File written successfully');
});
