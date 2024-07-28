

// let speech = new SpeechSynthesisUtterance();

// let button = document.querySelector("button");
// let textarea = document.querySelector("textarea");

//  textarea.style.padding = "10px 15px";

// button.addEventListener("click", () =>{
//     speech.text = textarea.value;
//     window.speechSynthesis.speak(speech);
//     console.log("it is working");
// });

// let voices = [];
// let voiceselect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () =>{
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];

//     voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));

// };

// voiceselect.addEventListener("change", () =>{
//     speech.voice = voices[voiceselect.value];
// });


let speech = new SpeechSynthesisUtterance();

let button = document.querySelector("button");
let textarea = document.querySelector("textarea");
let voiceselect = document.querySelector("select");

textarea.style.padding = "10px 15px";

button.addEventListener("click", () => {
    speech.text = textarea.value;
    textarea.style.padding = "10px 15px";  // Correct way to add padding
    window.speechSynthesis.speak(speech);
    console.log("it is working");
});

let voices = [];

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  // Ensure there are voices before setting this

    voiceselect.innerHTML = ''; // Clear previous options

    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceselect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceselect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceselect.value)];
});

