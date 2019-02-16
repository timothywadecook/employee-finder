const employees = [
    {
        "name": "Steve",
        "photo": "https://media.wired.com/photos/5932639bedfced5820d10022/master/w_1025,c_limit/steve-jobs.jpg",
        "scores": [
            2,
            3,
            5,
            5,
            2,
            1,
            2,
            5,
            4,
            3,
        ],
    },
    {
        "name": "Justin",
        "photo": "https://cnet2.cbsistatic.com/img/L0kNsMhNWkpSUY9D9vF9IITzG6s=/830x467/2018/01/05/f41e6a6c-e2a1-4643-9da3-01ea4644ba1b/justintimberlakestevejobs.jpg",
        "scores": [
            2,
            3,
            2,
            5,
            2,
            1,
            2,
            1,
            1,
            1,
        ],
    },
    {
        "name": "Hillary",
        "photo": "https://www.hrw.org/sites/default/files/styles/square/public/media/images/photographs/Hillary_Margolis_webbio.jpg?itok=gO1iySpI",
        "scores": [
            2,
            3,
            4,
            5,
            5,
            5,
            2,
            5,
            5,
            5,
        ],
    }
]

module.exports = {
    getEmployees: employees,
    postEmployee: (newEmployee) => {
        employees.push(newEmployee)
    }
}