const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.text', 'utf8')
const second = readFileSync('./content/second.text', 'utf8')

writeFileSync(
    './content/result-third.text', `Here is the result: ${first},${second}`, { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')