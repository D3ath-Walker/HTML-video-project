const form = document.getElementById("student-form");

form.addEventListener("submit", async function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const college = document.getElementById("college").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("name", name);
    localStorage.setItem("course", course);
    localStorage.setItem("college", college);
    localStorage.setItem("email", email);

    try{

        const response = await fetch(
            "https://html-video-project.onrender.com/students",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    course,
                    college
                })
            }
        );

       const data = await response.json();
       const completedVideosObject = {};

        (data.completedVideos || []).forEach(videoNumber => {

            completedVideosObject[videoNumber] = true;

        });

        localStorage.setItem(
            "completedVideos",
            JSON.stringify(completedVideosObject)
        );

        window.location.href =
            "./Frontend/Pages/dashboard.html";

    }
    catch(error){

        console.log(error);

        alert("Failed to save student");
    }
});