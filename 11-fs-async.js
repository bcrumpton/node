const { readFile, writeFile } = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err)
        return
    }

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        const second = first
        
        writeFile(
            './content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('done with this task')
            }
        );
    })
})

console.log('starting the next one')