const videoList = document.getElementById("video-list");

const videoTitle = document.getElementById("video-title");
const videoNotes = document.getElementById("video-notes");
const videoCode = document.getElementById("video-code");
const outputImage = document.getElementById("output-image");

for(let i = 1; i <= 50; i++){

    const li = document.createElement("li");

    li.textContent = `📘 HTML Video ${i}`;

    li.addEventListener("click", () => {

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