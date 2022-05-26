var timer;
var current_video = document.getElementsByTagName("video")[0];

console.log("Youtube Tab Closer for Music Queue ON");

if (current_video) {
    console.log("Youtube Tab Closer for Music Queue : Video found");
    current_video.addEventListener("ended", function() {
        timer = setTimeout(closeTab, 1000);
        current_video.onmouseover = function() { stopTimer(); };
        console.log("Youtube Tab Closer for Music Queue : Video ended, closing the tab...");
    });
}
else {
    console.error("Youtube Tab Closer for Music Queue : Video not found on this YouTube page");
}

function closeTab()
{
    chrome.runtime.sendMessage({closeThis: true});    
}
function stopTimer()
{
    console.log("Youtube Tab Closer for Music Queue : Timer reset, mouse moved over the video");
    clearTimeout(timer);
}


