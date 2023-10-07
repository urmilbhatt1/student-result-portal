function checkResult() {
    var rollNumber = document.getElementById("rollNumber").value;
    var resultContainer = document.getElementById("result");

    // Sample student data (for demonstration purposes)
    var studentData = {
        "123": { "subject": "Math", "marks": 95 },
        "124": { "subject": "Science", "marks": 89 }
    };

    // Check if the roll number exists in the student data
    if (studentData.hasOwnProperty(rollNumber)) {
        var result = studentData[rollNumber];
        resultContainer.innerText = "Subject: " + result.subject + ", Marks: " + result.marks;
        resultContainer.classList.remove("error");
        resultContainer.classList.add("success");
    } else {
        resultContainer.innerText = "Roll number not found";
        resultContainer.classList.remove("success");
        resultContainer.classList.add("error");
    }
}
