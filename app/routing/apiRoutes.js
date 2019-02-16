const employeeData = require('../data/employees.js')

module.exports = function(app) {
    app.get('/api/employees', (req, res) => {
        // grab latest list of employees and send back
        res.json(employeeData.getEmployees)
    });
    app.post('/api/employees', (req, res) => {
        // append the list of employees
        const newEmployee = req.body;
        employeeData.postEmployee(newEmployee);
        console.log("list has been updated...", employeeData.getemployees);
    });


}

// A GET route with the url /api/employees. This will be used to display a JSON of all possible employees.
// A POST routes /api/employees. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.