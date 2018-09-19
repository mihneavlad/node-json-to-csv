import fs from 'fs';

const pathToFile = 'src/lib/students.json';

fs.readFile(pathToFile, (err, data) => {
    if (err) throw err;

    const students = JSON.parse(data);

		let tableHeader = Object.keys(students[0]).join(', ');

    let tableLine = students.map(student => (
        Object.values(student).join(', ')
    )).join('\n') + '\n\n';


    fs.writeFile('src/lib/student-summary.csv', (tableHeader + '\n' + tableLine), err => {
        if (err) throw err;
    });
});
