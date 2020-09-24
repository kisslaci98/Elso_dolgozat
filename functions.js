'use strict'

const students = [
    {name : 'Tóth Balázs', class : '14SZF'},
    {name : 'Börcsök Dávid', class : '14SZF'},
    {name : 'Kiss László', class : '14SZF'},
    {name : 'Németh Christopher', class : '14SZF'},
    {name : 'Szabó Levente', class : '14SZF'},
    {name : 'Pásztor Krisztián', class : '14SZF'},
    {name : 'Visnyei Ádám', class : '14SZF'},
    {name : 'Kucsera Kinga', class : '14SZF'}
]

function getClass () {
    let output = '<table>';
    output += '<tr><th>Osztály</th><th>Név</th></tr>';

    students.forEach((student) => {
        output += `<tr><td>${student.class}</td><td>${student.name}</td></tr>`;
    })

    output += '</table>';

    document.getElementById('tablazat').innerHTML = output;
}

//getClass();

function upload() {
    let Name = document.getElementById("name").value;
    let Class = document.getElementById("class").value;
    console.log(Name + ' ' + Class);
    students.push({ 'class' : `${Class}`, 'name' : `${Name}`});
    getClass();
}