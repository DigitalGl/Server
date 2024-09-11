const SERVER_URL = 'http://localhost:3000'

async function serverAddStudent(obj){
    let response = await fetch(SERVER_URL + '/api/students', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    let data = response.json()

    return data
}

console.log();





// let lisStudent = [
//     {
//         name: 'Илья',
//         lastname: 'Иванов',
//         surename: 'Олегович',
//         birthday: new Date(1994, 5, 12),
//         faculty: 'Экономика',
//         studyStart: 2010,
//     },
//     {
//         name: 'Оля',
//         lastname: 'Студентова',
//         surename: 'Александровна',
//         birthday: new Date(1991, 11, 18),
//         faculty: 'Экономика',
//         studyStart: 2011,
//     },
//     {
//         name: 'Татьяна',
//         lastname: 'Иванова',
//         surename: 'Олеговина',
//         birthday: new Date(1997, 4, 1),
//         faculty: 'Информатика',
//         studyStart: 2016,
//     },
// ]

let lisStudent = []


function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}





function $getNewStudentTR(studObj){
    const $tr = document.createElement("tr")
    const $tdFIO = document.createElement("td")
    const $tdBirthday = document.createElement("td")
    const $tdFaculty = document.createElement("td")
    const $tdStudyStart = document.createElement("td")

    $tdFIO.textContent = `${studObj.lastname} ${studObj.name} ${studObj.surename}`
    $tdBirthday.textContent = formatDate(studObj.birthday)
    $tdFaculty.textContent = studObj.faculty
    $tdStudyStart.textContent = studObj.studyStart


    $tr.append($tdFIO, $tdBirthday, $tdFaculty, $tdStudyStart)
    return $tr
}





function render(arr){
    let copyArr = [...arr]

    const $studeTable = document.getElementById('stud-table')
    $studeTable.innerHTML = ''

for (const studObj of copyArr) {
    const $newTr = $getNewStudentTR(studObj)

    $studeTable.append($newTr)
}
}

render(lisStudent)


document.getElementById("add-form").addEventListener("submit", async function(event){
    event.preventDefault()

    let newStudentObj = {
        name: document.getElementById("name-inp").value,
        lastname: document.getElementById("lastname-inp").value,
        surename: document.getElementById("surename-inp").value,
        birthday: new Date(document.getElementById("birthday-inp").value),
        faculty: document.getElementById("faculty-inp").value,
        studyStart: document.getElementById("studyStart-inp").value,
    }

    let servDataObj =  await serverAddStudent(newStudentObj)
    servDataObj.birthday = new Date(servDataObj.birthday)

    lisStudent.push(servDataObj)
    render(lisStudent)

})
