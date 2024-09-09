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


const $studeTable = document.getElementById('stud-table')

for (const studObj of lisStudent) {
    const $tr = document.createElement("tr")
    const $tdFIO = document.createElement("td")
    const $tdBirthday = document.createElement("tr")
    const $tdFaculty = document.createElement("tr")
    const $tdStart = document.createElement("tr")

    $studeTable.append()
}


