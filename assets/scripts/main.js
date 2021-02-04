// main.js

const volume_number = document.getElementById("volume-number");
const volume_slider = document.getElementById("volume-slider");
const volume_image = document.getElementById("volume-image");
const audio = document.getElementById("horn-sound");
const sound_image = document.getElementById("sound-image");
const btn = document.getElementById("honk-btn");
const radio_air_horn = document.getElementById("radio-air-horn");
const radio_car_horn = document.getElementById("radio-car-horn");
const radio_party_horn = document.getElementById("radio-party-horn");

btn.onclick = function(e){ 
    audio.play() 
    e.preventDefault();
};
volume_number.addEventListener('input', updateVolumeSlider);
volume_slider.addEventListener('input', updateVolumeNum);
radio_air_horn.addEventListener('input', function(){
    if (radio_air_horn.checked){
        sound_image.src="./assets/media/images/air-horn.svg"
        audio.src="./assets/media/audio/air-horn.mp3"
    }
});
radio_car_horn.addEventListener('input', function(){
    if (radio_car_horn.checked){
        sound_image.src="./assets/media/images/car.svg"
        audio.src="./assets/media/audio/car-horn.mp3"
    }
});
radio_party_horn.addEventListener('input', function(){
    if (radio_party_horn.checked){
        sound_image.src="./assets/media/images/party-horn.svg"
        audio.src="./assets/media/audio/party-horn.mp3"
    }
});

function updateVolumeNum(){
    current_volume = volume_slider.value;
    volume_number.value = current_volume;
    updateVolume(current_volume);
}
function updateVolumeSlider(){
    current_volume = volume_number.value;
    volume_slider.value = current_volume;
    updateVolume(current_volume);
}
function updateVolume(num){
    audio.volume = num/100;
    if (num == 0){
        btn.disabled = true;
        volume_image.src = "./assets/media/icons/volume-level-0.svg";
    } 
    else if (num <= 33){
        volume_image.src = "./assets/media/icons/volume-level-1.svg";
        btn.disabled = false;
    }
    else if (num<=66){
        volume_image.src = "./assets/media/icons/volume-level-2.svg";
        btn.disabled = false;
    }
    else if (num<=100){
        volume_image.src = "./assets/media/icons/volume-level-3.svg";
        btn.disabled = false;
    }
}