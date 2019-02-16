const employees = [
    {
        "name": "bob",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
        "name": "janet",
        "photo": "https://i2-prod.mirror.co.uk/incoming/article9301796.ece/ALTERNATES/s615/Girl-taking-a-Selfie.jpg",
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
    }
]

module.exports = {
    getEmployees: employees,
    postEmployee: (newEmployee) => {
        employees.push(newEmployee)
    }
}