$("#monsters").fadeOut(0);

$("#name-button").click(function () {
    displayName();
});

$("body").keydown(function (event) {
    if (event.key === "Enter") {
        displayName();
    }
});


function displayName() {
    $("#name-button").fadeOut();
    $("#input-name").fadeOut();
    const name = $("#input-name").val();
    $(".name").text("Welcome " + name + " click a monster to make sounds.");
    $("#monsters").fadeIn();
    $("#mystery-monsters").fadeOut(0);
    openingMusic.pause();
}

const audioMammott = new Audio("sounds/mammott.mp3");
const audioKayna = new Audio("sounds/kayna.mp3");
const audioClamble = new Audio("sounds/clamble.mp3");
const audioDrumpler = new Audio("sounds/drumpler.mp3");
const audioFurcorn = new Audio("sounds/furcorn.mp3");
const audioNoggin = new Audio("sounds/noggin.mp3");
const audioParlsona = new Audio("sounds/parlsona.mp3");
const audioQuibble = new Audio("sounds/quibble.mp3");
const audioRareJammer = new Audio("sounds/rare-jammer.mp3");
const audioShrubb = new Audio("sounds/shrubb.mp3");
const audioTawkerr = new Audio("sounds/tawkerr.mp3");
const audioTweedle = new Audio("sounds/tweedle.mp3");


const audioPotbelly = new Audio("sounds/potbelly.mp3")
const audioMaw = new Audio("sounds/maw.mp3")
const audioStoowarb = new Audio("sounds/stoowarb.mp3")
const audioStogg = new Audio("sounds/stogg.mp3")
const audioBowhead= new Audio("sounds/bowhead.mp3")
const audioWubbox = new Audio("sounds/Wubbox.mp3")
const audioRareWubbox = new Audio("sounds/Rare-Wubbox.mp3")
const audioHoola = new Audio("sounds/hoola.mp3")
const audioPompom = new Audio("sounds/pompom.mp3")
const audioScups = new Audio("sounds/scups.mp3")
const audioQuarrister = new Audio("sounds/quarrister.mp3")
const audioEpicWubbox = new Audio("sounds/epic-wubbox.mp3")

const openingMusic = new Audio("sounds/opening-music.mp3");

openingMusic.play();


$(".mammott").click(function () {

    const isPlaying = function () {
        return audioMammott
            && audioMammott.currentTime > 0
            && !audioMammott.paused
            && !audioMammott.ended
            && audioMammott.readyState > 2;
    }

    if (isPlaying()) {
        audioMammott.pause();
        audioMammott.currentTime = 0;
        $(".mammott").removeClass("monster-background-color");
    } else {
        audioMammott.play();
        $(".mammott").addClass("monster-background-color");
    }
});


$(".kayna").click(function () {

    const isPlaying = function () {
        return audioKayna
            && audioKayna.currentTime > 0
            && !audioKayna.paused
            && !audioKayna.ended
            && audioKayna.readyState > 2;
    }

    if (isPlaying()) {
        audioKayna.pause();
        audioKayna.currentTime = 0;
        $(".kayna").removeClass("monster-background-color");
    } else {
        audioKayna.play();
        $(".kayna").addClass("monster-background-color");
    }
});

$(".clamble").click(function () {

    const isPlaying = function () {
        return audioClamble
            && audioClamble.currentTime > 0
            && !audioClamble.paused
            && !audioClamble.ended
            && audioClamble.readyState > 2;
    }

    if (isPlaying()) {
        audioClamble.pause();
        audioClamble.currentTime = 0;
        $(".clamble").removeClass("monster-background-color");
    } else {
        audioClamble.play();
        $(".clamble").addClass("monster-background-color");
    }

});

$(".drumpler").click(function () {

    const isPlaying = function () {
        return audioDrumpler
            && audioDrumpler.currentTime > 0
            && !audioDrumpler.paused
            && !audioDrumpler.ended
            && audioDrumpler.readyState > 2;
    }

    if (isPlaying()) {
        audioDrumpler.pause();
        audioDrumpler.currentTime = 0;
        $(".drumpler").removeClass("monster-background-color");
    } else {
        audioDrumpler.play();
        $(".drumpler").addClass("monster-background-color");
    }
});

$(".furcorn").click(function () {

    const isPlaying = function () {
        return audioFurcorn
            && audioFurcorn.currentTime > 0
            && !audioFurcorn.paused
            && !audioFurcorn.ended
            && audioFurcorn.readyState > 2;
    }

    if (isPlaying()) {
        audioFurcorn.pause();
        audioFurcorn.currentTime = 0;
        $(".furcorn").removeClass("monster-background-color");
    } else {
        audioFurcorn.play();
        $(".furcorn").addClass("monster-background-color");
    }
});

$(".noggin").click(function () {

    const isPlaying = function () {
        return audioNoggin
            && audioNoggin.currentTime > 0
            && !audioNoggin.paused
            && !audioNoggin.ended
            && audioNoggin.readyState > 2;
    }

    if (isPlaying()) {
        audioNoggin.pause();
        audioNoggin.currentTime = 0;
        $(".noggin").removeClass("monster-background-color");
    } else {
        audioNoggin.play();
        $(".noggin").addClass("monster-background-color");
    }
});

$(".parlsona").click(function () {

    const isPlaying = function () {
        return audioParlsona
            && audioParlsona.currentTime > 0
            && !audioParlsona.paused
            && !audioParlsona.ended
            && audioParlsona.readyState > 2;
    }

    if (isPlaying()) {
        audioParlsona.pause();
        audioParlsona.currentTime = 0;
        $(".parlsona").removeClass("monster-background-color");
    } else {
        audioParlsona.play();
        $(".parlsona").addClass("monster-background-color");
    }
});

$(".quibble").click(function () {

    const isPlaying = function () {
        return audioQuibble
            && audioQuibble.currentTime > 0
            && !audioQuibble.paused
            && !audioQuibble.ended
            && audioQuibble.readyState > 2;
    }

    if (isPlaying()) {
        audioQuibble.pause();
        audioQuibble.currentTime = 0;
        $(".quibble").removeClass("monster-background-color");
    } else {
        audioQuibble.play();
        $(".quibble").addClass("monster-background-color");
    }
});

$(".rare-jammer").click(function () {

    const isPlaying = function () {
        return audioRareJammer
            && audioRareJammer.currentTime > 0
            && !audioRareJammer.paused
            && !audioRareJammer.ended
            && audioRareJammer.readyState > 2;
    }

    if (isPlaying()) {
        audioRareJammer.pause();
        audioRareJammer.currentTime = 0;
        $(".rare-jammer").removeClass("monster-background-color");
    } else {
        audioRareJammer.play();
        $(".rare-jammer").addClass("monster-background-color");
    }
});

$(".shrubb").click(function () {

    const isPlaying = function () {
        return audioShrubb
            && audioShrubb.currentTime > 0
            && !audioShrubb.paused
            && !audioShrubb.ended
            && audioShrubb.readyState > 2;
    }

    if (isPlaying()) {
        audioShrubb.pause();
        audioShrubb.currentTime = 0;
        $(".shrubb").removeClass("monster-background-color");
    } else {
        audioShrubb.play();
        $(".shrubb").addClass("monster-background-color");
    }
});

$(".tawkerr").click(function () {

    const isPlaying = function () {
        return audioTawkerr
            && audioTawkerr.currentTime > 0
            && !audioTawkerr.paused
            && !audioTawkerr.ended
            && audioTawkerr.readyState > 2;
    }

    if (isPlaying()) {
        audioTawkerr.pause();
        audioTawkerr.currentTime = 0;
        $(".tawkerr").removeClass("monster-background-color");
    } else {
        audioTawkerr.play();
        $(".tawkerr").addClass("monster-background-color");
    }
});

$(".tweedle").click(function () {

    const isPlaying = function () {
        return audioTweedle
            && audioTweedle.currentTime > 0
            && !audioTweedle.paused
            && !audioTweedle.ended
            && audioTweedle.readyState > 2;
    }

    if (isPlaying()) {
        audioTweedle.pause();
        audioTweedle.currentTime = 0;
        $(".tweedle").removeClass("monster-background-color");
    } else {
        audioTweedle.play();
        $(".tweedle").addClass("monster-background-color");
    }
});














