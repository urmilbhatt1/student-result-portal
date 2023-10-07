function checkResult() {
    var rollNumber = document.getElementById("rollNumber").value;
    var resultContainer = document.getElementById("result");

    // Sample student data (for demonstration purposes)
    var studentData = {
        "13": { "marks": 9.5},
        "06": { "marks": 14},
        "07": { "marks": 13.5},
        "03": { "marks": 12},
        "05": { "marks": 11},
        "01": { "marks": 10},
        "11": { "marks": 10},
        "14": { "marks": 11},
        "16": { "marks": 7.5},
        "02": { "marks": 14},
        "10": { "marks": 13}
    };

    // Check if the roll number exists in the student data
    if (studentData.hasOwnProperty(rollNumber)) {
        var result = studentData[rollNumber];
        resultContainer.innerText = Marks: " + result.marks;
        resultContainer.classList.remove("error");
        resultContainer.classList.add("success");
    } else {
        resultContainer.innerText = "Roll number not found";
        resultContainer.classList.remove("success");
        resultContainer.classList.add("error");
    }
}
