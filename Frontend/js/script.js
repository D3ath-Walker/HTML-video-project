const form = document.getElementById("student-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const college = document.getElementById("college").value;

    localStorage.setItem("name", name);
    localStorage.setItem("course", course);
    localStorage.setItem("college", college);

    window.location.href = "/Frontend/Pages/dashboard.html";
});