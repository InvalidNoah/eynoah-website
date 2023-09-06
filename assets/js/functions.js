function getDiscordLink(){
    document.getElementById("dc").innerHTML = "<span class='loading loading-bars loading-xs'></span>";
    setTimeout(() => {
        document.getElementById('dc').innerHTML = "<p class='dc'>.gg/universex</p>";
        setTimeout(() => {
            document.getElementById('dc').innerHTML = "";
            setTimeout(() => {
                window.open('https://discord.gg/Zt3TfwjXsR', '_blank')
            }, 1000);
        }, 1000);
    }, 1000);
}

function myGithub(){
    document.getElementById('github').innerHTML = "<span class='loading loading-bars loading-xs'></span>";
    setTimeout(() => {
        document.getElementById('github').innerHTML = "<p class='git'>Leite";
        setTimeout(() => {
            document.getElementById('github').innerHTML = "<p class='git'> weiter....";
            setTimeout(() => {
                document.getElementById('github').innerHTML = "";
                setTimeout(() => {
                    window.open('https://github.com/InvalidNoah', '_blank')
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};

function title(){
    setInterval(() => {
        document.innerHTML = "<title>EyNoah best Site EU WEst";
    }, 5000);
}