var resumeButton;
var resumeText;

function resume()
{
    resumeButton.style.visibility = "hidden";
    resumeText.style.visibility = "hidden";
    var vid = document.getElementById("resume-coaster");
    vid.play();
    vid.onended = function() {
        window.open("media/resume.pdf", '_blank').focus();
        resumeButton.style.visibility = "visible";
        resumeText.style.visibility = "visible";
        vid.currentTime = 0;
    };
    // document.getElementById("resume-button").style.visibility = "visible";
}

function on()
{
    resumeText.style.color = "lightcoral";
    resumeButton.style.fill = "#F9D840";
}

function off()
{
    resumeText.style.color = "#F9D840";
    resumeButton.style.fill = "lightcoral";
}

document.addEventListener("DOMContentLoaded", function(){
    resumeButton = document.getElementById("resume-button");
    resumeText = document.getElementById("download");
    resumeButton.addEventListener("click", resume);
    resumeText.addEventListener("click", resume);
    resumeButton.addEventListener("mouseover", on);
    resumeButton.addEventListener("mouseout", off);
    resumeText.addEventListener("mouseover", on);
    resumeText.addEventListener("mouseout", off);
});