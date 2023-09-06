function getDiscordLink(){
    document.getElementById("dc").innerHTML = "<p class='dc'>.gg/UniverseX";
    setTimeout(() => {
        document.getElementById('dc').innerHTML = "";
    }, 1000);
}