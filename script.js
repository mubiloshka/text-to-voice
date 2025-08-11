// function loadVoices(){
//     const voices = speechSynthesis.getVoices();
//     const voiceselect = document.getElementById('voiceSelect');
//     voiceselect.innerHTML = ''
//     voices.forEach((voice,index) => {
//         const option = document.createElement('option')
//         option.value = index;
//         option.textContent =  `${voice.name} (${voice.lang})`
//         voiceselect.appendChild(option)
//     })
// }

// speechSynthesis.onvoiceschanged = loadVoices;

// function speakText() {
//     const text = document.getElementById('inputtext').value
//     if(!text) {
//         alert('enter txt')
//         return
//     }

//     const utterance = new SpeechSynthesisUtterance(text)
//     const voices = speechSynthesis.getVoices()
// }


// скорость пауза остановить громкость 




function loadVoices() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = '';
    
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent =  `${voice.name} (${voice.lang})`
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = loadVoices;

function speakText() {
    const text = document.getElementById('inputtext').value;
    if (!text) {
        alert('Введите текст!');
        return;
    }
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    
    const voices = speechSynthesis.getVoices();
    const selectedVoice = document.getElementById('voiceSelect').value;
    speech.voice = voices[selectedVoice];
    
    const rate = document.getElementById('rate').value;
    if (rate) {
        speech.rate = rate;
    }
    
    const volume = document.getElementById('volume').value;
    if (volume) {
        speech.volume = volume;
    }
    
    speechSynthesis.speak(speech);
}

function pauseSpeech() {
    speechSynthesis.pause();
}

function resumeSpeech() {
    speechSynthesis.resume();
}

function stopSpeech() {
    speechSynthesis.cancel();
}