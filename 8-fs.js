const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');

first.split('\n').map(a => { console.log(a); console.log('jit'); });

writeFileSync('./content/result.txt', `The result is ${first}`, { flag: '' });

readFile('./content/first.txt', 'utf-8', (err, success) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = success;

    writeFile('./content/result.txt', `the result is ${first}`, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('done');
    });
    console.log('next');
})
