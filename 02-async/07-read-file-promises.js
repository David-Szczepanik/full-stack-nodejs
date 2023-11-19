const fs = require('fs').promises;
const filename = '07-read-file-promises.js';

fs.readFile(filename)
  .then(data => console.log(`${filename}: ${data.length}`))
  .catch(err => console.error(err))

//Promise has separate methods for success and failure
//Unlike callback that are a single function with both error and results arguments
