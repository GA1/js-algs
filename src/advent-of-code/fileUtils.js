const fs = require('fs')

function getLines(filePath) {
  const text = fs.readFileSync(filePath).toString('utf-8')
  return text.split('\n')
}

function saveString(filePath, stringToSave) {
  fs.writeFile(filePath, stringToSave, (error) => {
    if (error) {
      console.log('ERROR: ' + error)
    } else {
      console.log('SUCCESS')
    }
  })
}

module.exports.getLines = getLines
module.exports.saveString = saveString
