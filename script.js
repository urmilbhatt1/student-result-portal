function checkResult() {
    var rollNumber = document.getElementById("rollNumber").value;
    var resultContainer = document.getElementById("result");

    // Sample student data (for demonstration purposes)
    var studentData = {
        "13": { "marks": 9.5 Out of 20},
        "06": { "marks": 14 Out of 20},
        "07": { "marks": 13.5 Out of 20},
        "03": { "marks": 12 Out of 20},
        "05": { "marks": 11 Out of 20},
        "01": { "marks": 10 Out of 20},
        "11": { "marks": 10 Out of 20},
        "14": { "marks": 11 Out of 20},
        "16": { "marks": 7.5 Out of 20},
        "02": { "marks": 14 Out of 20},
        "10": { "marks": 13 Out of 20}
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
