const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('../content/subfolder/first.txt','utf-8');
const second = readFileSync('../content/subfolder/second.txt','utf-8');

console.log(first, second)

writeFileSync(
    '../content/subfolder/result-sync.txt', 
    `Here is the result ${first}, ${second}`,
    { flag : 'a' }
)

console.log('done with this task')
console.log('starting the next task')

// { flag : 'a' } = appends the result each time it is executed