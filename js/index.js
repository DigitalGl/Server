let lisStudent = [
    {
        name: 'Илья',
        lastname: 'Иванов',
        surename: 'Олегович',
        birthday: new Date(1994, 5, 12),
        faculty: 'Экономика',
        start: 2010,
    },
    {
        name: 'Оля',
        lastname: 'Студентова',
        surename: 'Александровна',
        birthday: new Date(1991, 11, 18),
        faculty: 'Экономика',
        start: 2011,
    },
    {
        name: 'Татьяна',
        lastname: 'Иванова',
        surename: 'Олеговина',
        birthday: new Date(1997, 4, 1),
        faculty: 'Информатика',
        start: 2016,
    },
]



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
    const $tdStart = document.createElement("td")

    $tdFIO.textContent = `${studObj.lastname} ${studObj.name} ${studObj.surename}`
    $tdBirthday.textContent = formatDate(studObj.birthday)
    $tdFaculty.textContent = studObj.faculty
    $tdStart.textContent = studObj.start


    $tr.append($tdFIO, $tdBirthday, $tdFaculty, $tdStart)
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


document.getElementById("add-form").addEventListener("submit", function(event){
    event.preventDefault()

    let newStudentObj = {
        name: document.getElementById("name-inp").value,
        lastname: document.getElementById("lastname-inp").value,
        surename: document.getElementById("surename-inp").value,
        birthday: new Date(document.getElementById("birthday-inp").value),
        faculty: document.getElementById("faculty-inp").value,
        start: document.getElementById("start-inp").value,
    }

    lisStudent.push(newStudentObj)
    render(lisStudent)

})
