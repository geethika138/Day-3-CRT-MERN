const fs = require('fs');
fs.writeFile('abc.txt', 'Everybody', (err) => {
    if(err) 
        console.error('Error writing to file', err);
        else console.log("Successsfully updated")
})
