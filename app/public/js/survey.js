
// Define findMatch()
const findMatch = function(employeeList, inputArray) {
    const diffArray = [];
    for (let employee of employeeList) {
        let diff;
        let totalDiff =0 ;
        inputArray.forEach((ans, i) => {
            diff = Math.abs(ans - employee.scores[i]);
            totalDiff += diff;
        });
        diffArray.push(totalDiff);
    }
    console.log('diffArray = ', diffArray)
    console.log('min ',Math.min(...diffArray))
    console.log('index ', diffArray.indexOf(Math.min(...diffArray)));
    const match = employeeList[diffArray.indexOf(Math.min(...diffArray))];
    console.log('math = ', match);
    $('#match-name').text(match.name);
    $('#match-img').attr('src', match.photo);
    $('#results-modal').modal({show: true});

}

// Define findMatch(inputArray)
const getEmployeeList = function(inputArray) {
    // get employee list to compare with 
    $.ajax({
        url: '/api/employees',
        method: "GET"
    }).then(function(employeeList) {
            findMatch(employeeList, inputArray)
    });
};

// Define getInput(e)
const getInput = function(e) {
    e.preventDefault();
    const inputArray = [
        $('#q1').val(), 
        $('#q2').val(),
        $('#q3').val(),
        $('#q4').val(),
        $('#q5').val(),
        $('#q6').val(),
        $('#q7').val(),
        $('#q8').val(),
        $('#q9').val(),
        $('#q10').val(),
    ];
    getEmployeeList(inputArray);
};

const relocateHome = function() {
    location.href = "/";
};

// Add event listener to form submit button
$('#submit').on('click', getInput);
