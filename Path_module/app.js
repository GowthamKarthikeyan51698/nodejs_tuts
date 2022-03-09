const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

// Access the last portion of the file path
const base = path.basename(filePath)
console.log(base)

// Get absolute path of the file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)

