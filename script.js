var numberOfButtons = document.querySelectorAll(".drum").length; /* bütün drum seçicisi */

for (var i = 0; i < numberOfButtons; i++) { /* dinleyici ekleme kısmı */

    document.querySelectorAll(".drum") [i].addEventListener("click",function() {

        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) /* klavye trigger kısmı*/
{
    makesound(event.key)

    buttonAnimation(event.key)
})

function makesound(key) { /* ses dosyalarını çalıştıran kısım*/
    switch (key) {
        case "w":
            var tom1 = new Audio("kit/sound/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("kit/sound/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("kit/sound/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("kit/sound/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("kit/sound/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("kit/sound/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("kit/sound/kick.wav");
            kick.play();
            break;
        case "z":
            var jerry = new Audio("kit/sound/jerry.mp3");
            jerry.play();
            break;
    }
}

function buttonAnimation(currentKey) { /* basit animasyon kısmı*/
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSound() { /* bonus ses kısmı */
    let audio = new Audio("kit/sound/jerry.mp3");
    audio.play();
}

document.getElementById("showButton").addEventListener("click", function() { /* gizli butonu açma kısmı */
    document.getElementById("hiddenButton").style.display = "block";
});