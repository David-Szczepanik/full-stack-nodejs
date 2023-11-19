//Get a directory list
//For each item on that list, print the file's name and size (in the same alphabetical order as the list)
//Once all names and sizes have been printed, print "done!"

const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) return console.error(err)

    files.forEach(function (file) {
      fs.readFile(file, (err, fileData)=> {
        if (err) return console.error(err)

        console.log(`${file}: ${fileData.length}`)
      })
    })
    console.log('done!')
  }
)