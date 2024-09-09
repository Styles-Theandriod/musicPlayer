let audioMusic = document.querySelector('.audio');
let screen = document.querySelector('.screen');

let fruits = ['./Commas _ 5starloaded.com.mp3', './AnotherSong.mp3', './ThirdSong.mp3'];
let currentIndex = 0;
let playIcon = document.querySelector('.fa -play');
function playMusic(){
    if(audioMusic.paused){
        audioMusic.src = fruits[currentIndex]; // Set the current audio source
        screen.value = fruits[currentIndex];
        audioMusic.play();
    } else {
        audioMusic.pause();
    }
}

function forward(){
    if (currentIndex < fruits.length - 1) {
        currentIndex++; // Move to the next song
    } else {
        currentIndex = 0; // Loop back to the first song if at the end
    }

    screen.value = `Now playing: ${fruits[currentIndex]}`; // Display the current song
    playMusic(); // Automatically play the next song when moving forward
}
function backward(){
    if (currentIndex < fruits.length) {
        currentIndex--; // Move to the next song
    } else {
        currentIndex = 0; // Loop back to the first song if at the end
    }

    screen.value = `Now playing: ${fruits[currentIndex]}`; // Display the current song
    playMusic(); // Automatically play the next song when moving forward
}
