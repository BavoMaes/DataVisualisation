document.getElementById("course").onchange = function () { changeCourse() };

function changeCourse() {
    let course = document.getElementById("course").value;
    let teacher = document.getElementById("teacher");
    if (course == "Creative Programming I") {
        teacher.value = "Peter Dickx";
    } else if (course == "Creative Programming II" || course == "Creative Programming III") {
        teacher.value = "Maarten Heylen";
    } else if (course == "Project Management" || course == "Business French") {
        teacher.value = "Jan Alen";
    } else if (course == "Data Management") {
        teacher.value = "Pieter Steyaert";
    } else if (course == "Web Advanced" || course == "Static Web Dev") {
        teacher.value = "Mike Derycke";
    } else if (course == "Information Design") {
        teacher.value = "Els Vande Kerckhove";
    }
}