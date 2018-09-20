import fs from 'fs';
import path from 'path';


const args = process.argv.slice(2);
// const pathToFile1 = 'src/lib/mihnea.json'
// const pathToFile2 = path.parse('src/lib/students.json');
const pathToFile3 = path.parse(args[0]);
console.log(pathToFile3);


fs.readFile(args[0], (err, data) => {
    if (err) throw err;

    const students = JSON.parse(data);

    let tableHeader = Object.keys(students[0]).join(', ');

    let tableLine = students.map(student => (
        Object.values(student).join(', ')
    )).join('\n') + '\n\n';


    fs.writeFile(path.join(pathToFile3.dir, pathToFile3.name) + '.csv', (tableHeader + '\n' + tableLine), err => {
        if (err) throw err;
        console.log('Successfully generated!');
    });
});
