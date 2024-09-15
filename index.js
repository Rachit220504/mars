document.addEventListener("DOMContentLoaded", function() {
    const modelViewer = document.getElementById("model-viewer");

    modelViewer.cameraControls = false;

    let isDragging = false;
    let prevX = 0;
    let prevY = 0;


    modelViewer.addEventListener("mousedown", function(e) {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
    });


    modelViewer.addEventListener("mousemove", function(e) {
        if (isDragging) {
            let deltaX = e.clientX - prevX;
            let deltaY = e.clientY - prevY;
            modelViewer.cameraOrbit(deltaX, deltaY); // Rotate the model
            prevX = e.clientX;
            prevY = e.clientY;
        }
    });


    modelViewer.addEventListener("mouseup", function(e) {
        isDragging = false;
    });

    
    modelViewer.addEventListener("touchmove", function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });

    window.addEventListener("wheel", function(e) {
        e.preventDefault();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const emailButton = document.getElementById("emailButton");

    emailButton.addEventListener("click", function() {
        window.open("","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const githubButton = document.getElementById("githubButton");

    githubButton.addEventListener("click", function() {
        window.open("https://github.com/mars-rover-society","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const instagramButton = document.getElementById("instagramButton");

    instagramButton.addEventListener("click", function() {
        window.open("https://www.instagram.com/mars_iiitdm?igsh=eHBkY2Focm11NWlk","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const linkedinButton = document.getElementById("linkedinButton");

    linkedinButton.addEventListener("click", function() {
        window.open("https://www.linkedin.com/company/mars-research-station/","_blank");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const youtubeButton = document.getElementById("youtubeButton");

    youtubeButton.addEventListener("click", function() {
        window.open("https://www.youtube.com/channel/UCw3WSgL5W77NTWJPN18qzng","_blank");
    });
});

function ProjectPage(){
    window.location.href="./project.html";
};
function SponsorsPage(){
    window.location.href="./sponsors.html";
};


function toggleSubTeam() {
    var subTeam = document.getElementById('subTeam');
    subTeam.classList.toggle('show'); // Toggle the 'show' class
}
