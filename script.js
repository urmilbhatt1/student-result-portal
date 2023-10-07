function checkResult() {
    var rollNumber = document.getElementById("rollNumber").value;
    var resultContainer = document.getElementById("result");

    // Sample student data (for demonstration purposes)
    var studentData = {
        "06": { "subject": "DBMS", "marks": 14 },
         "13": { "subject": "DBMS", "marks": 9.5 },
        "07": { "subject": "DBMS", "marks": 13.5},
        "03": { "subject": "DBMS", "marks": 12},
        "05": { "subject": "DBMS", "marks": 11},
        "01": { "subject": "DBMS", "marks": 10},
        "11": { "subject": "DBMS", "marks": 10},
        "14": { "subject": "DBMS", "marks": 11},
        "16": { "subject": "DBMS", "marks": 7.5},
        "02": { "subject": "DBMS", "marks": 14},
        "10": { "subject": "DBMS", "marks": 13}
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
