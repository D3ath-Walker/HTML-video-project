const videoList = document.getElementById("video-list");

const videoTitle = document.getElementById("video-title");
const videoNotes = document.getElementById("video-notes");
const videoCode = document.getElementById("video-code");
const outputImage = document.getElementById("output-image");
const progressText = document.getElementById("progress-text");
const completeCheckbox = document.getElementById("complete-checkbox");
const welcomeText = document.getElementById("welcome-text");
const progressFill = document.getElementById("progress-fill");
const studentName = localStorage.getItem("name");
const studentEmail = localStorage.getItem("email");
const searchInput = document.getElementById("search-input");

if(studentName){
    welcomeText.textContent = `Welcome, ${studentName} `;
}

let currentVideo = 0;
let completedVideos =
    JSON.parse(
        localStorage.getItem("completedVideos")
    ) || {};

const totalCompleted =
    Object.values(completedVideos)
          .filter(value => value).length;

progressText.textContent =
    `${totalCompleted} / 50 Videos Completed`;

const percentage =
    (totalCompleted / 50) * 100;

progressFill.style.width =
    `${percentage}%`;    

for(let i = 1; i <= 50; i++){

    const li = document.createElement("li");

    li.textContent = `📘 HTML Video ${i}`;

    li.addEventListener("click", () => {

        currentVideo = i;

        completeCheckbox.checked =
        completedVideos[i] || false;

        const video = videos[i];

        if(video){

            videoTitle.textContent = video.title;

            videoNotes.textContent = video.notes;

            videoCode.textContent = video.code;

            if(video.image){

                outputImage.src = video.image;

                outputImage.style.display = "block";
            }
            else{

                outputImage.style.display = "none";
            }
        }
    });

    videoList.appendChild(li);
}

completeCheckbox.addEventListener("change", async () => {

    if(currentVideo === 0){
        return;
    }

    completedVideos[currentVideo] =
        completeCheckbox.checked;

    localStorage.setItem(
        "completedVideos",
        JSON.stringify(completedVideos)
    );

    const totalCompleted =
        Object.values(completedVideos)
              .filter(value => value).length;

    progressText.textContent =
        `${totalCompleted} / 50 Videos Completed`;

    const percentage =
        (totalCompleted / 50) * 100;

    progressFill.style.width =
        `${percentage}%`;

    try{

        const completedArray =
            Object.keys(completedVideos)
                  .filter(key => completedVideos[key])
                  .map(Number);

        await fetch(
            "http://localhost:5000/progress",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: studentEmail,
                    completedVideos: completedArray
                })
            }
        );

    }
    catch(error){

        console.log(error);
    }
});

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase();

    const videoItems =
        document.querySelectorAll("#video-list li");

    videoItems.forEach(video => {

        const text =
            video.textContent.toLowerCase();

        if(text.includes(searchText)){

            video.style.display = "block";
        }
        else{

            video.style.display = "none";
        }
    });
});

const items = document.querySelectorAll('.video-list li');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Deselect all items first
    items.forEach(i => i.classList.remove('selected'));
    // Select the clicked one
    item.classList.add('selected');
  });
});