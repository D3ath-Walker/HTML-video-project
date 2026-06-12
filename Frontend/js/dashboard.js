const videoList = document.getElementById("video-list");

const videoTitle = document.getElementById("video-title");
const videoNotes = document.getElementById("video-notes");
const videoCode = document.getElementById("video-code");
const outputImage = document.getElementById("output-image");
const progressText = document.getElementById("progress-text");
const completeCheckbox = document.getElementById("complete-checkbox");
const welcomeText = document.getElementById("welcome-text");

const studentName = localStorage.getItem("name");

if(studentName){
    welcomeText.textContent = `Welcome, ${studentName} 👋`;
}

let currentVideo = 0;
let completedVideos = {};

for(let i = 1; i <= 50; i++){

    const li = document.createElement("li");

    li.textContent = `📘 HTML Video ${i}`;

    li.addEventListener("click", () => {

        currentVideo = i;

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

completeCheckbox.addEventListener("change", () => {

    if(currentVideo === 0){
        return;
    }

    completedVideos[currentVideo] = completeCheckbox.checked;

    const totalCompleted =
        Object.values(completedVideos)
              .filter(value => value).length;

    progressText.textContent =
        `${totalCompleted} / 50 Videos Completed`;
});