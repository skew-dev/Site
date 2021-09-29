console.log("Hello everyone!")

let b = baffle('.baffleme');
let btoo = baffle('.bafflemetoo');

btoo.start().set({
    characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>'
})

b.start()
    .set({
        characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>'
    })
    .text(text => 'skew.dev </>')


// sleep time expects milliseconds
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// Usage!
sleep(1000).then(() => {
    b.reveal(1000)
});

const audio = new Audio("assets/media/mixkit-water-bubble-1317.wav")

document.querySelector("body").addEventListener("click", function (e) {
    audio.currentTime = 0;
    audio.play();
    var tag = document.createElement("div");
    var text = document.createTextNode("</>");
    tag.appendChild(text);
    tag.classList.add("floaty")
    let id = makeid(4)
    tag.setAttribute('id', id)
    var element = document.querySelector("body");
    element.appendChild(tag);
    tag.style.left = (e.pageX - 5) + "px";
    tag.style.top = (e.pageY - 5) + "px";
    setTimeout(function () {
        document.getElementById(id).style.display = 'none'
    }, 600)
}, false)