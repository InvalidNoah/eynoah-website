function getDiscordLink(){
    document.getElementById("dc").innerHTML = "<span class='loading loading-bars loading-xs'></span>";
    setTimeout(() => {
        document.getElementById('dc').innerHTML = "<p class='dc'>.gg/universex</p>";
        setTimeout(() => {
            document.getElementById('dc').innerHTML = "";
        }, 1000);
    }, 1000);
}