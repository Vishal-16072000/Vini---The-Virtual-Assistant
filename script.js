let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice  = document.querySelector('#voice');

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = 'En-GB';
    speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day = new Date();
    let hours = day.getHours();
    
    if(hours>=0 && hours < 12){
        speak("Good Morning!, How can I assist you?");
    } else if(hours>=12 && hours < 16){
        speak("Good Afternoon!, How can I assist you?");
    } else {
        speak("Good Evening!, How can I assist you?");
    }
}

window.addEventListener('load', () => {
    wishMe()
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentResultIndex = event.resultIndex; 
    let transcript = event.results[currentResultIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
    btn.style.display = 'none';
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = 'flex';
    voice.style.display = "none";
    if(message.includes("hello")){
        speak("Hello sir, I'm here to help you.");
    } else if(message.includes("hi")) {
        speak("Hi sir, I'm here to help you");
    } else if(message.includes("who is vini") || message.includes("hu is vini") || message.includes("vini")){
        speak("I'm Vini, Your Virtual Assistant, I'm here to help you");
    } else if(message.includes("hey")){
        speak("hey dude, how can I help you?");
    }  else if(message.includes("good morning")){
        let day = new Date();
        let hours = day.getHours();
        if(hours>=0 && hours < 12){
            speak("Very good morning! How can I help you?");
        } else if(hours>=12 && hours < 16){
            speak("Very Good Afternoon!, How can I assist you?");
        } else {
            speak("Very Good Evening!, How can I assist you?");
        }  
    } else if(message.includes("good afternoon")){
        let day = new Date();
        let hours = day.getHours();
        if(hours>=0 && hours < 12){
            speak("Very good mornging! How can I help you?");
        } else if(hours>=12 && hours < 16){
            speak("Very Good Afternoon!, How can I assist you?");
        } else {
            speak("Very Good Evening!, How can I assist you?");
        }
    } else if(message.includes("good evening")){
        let day = new Date();
        let hours = day.getHours();
        if(hours>=0 && hours < 12){
            speak("Very good mornging! How can I help you?");
        } else if(hours>=12 && hours < 16){
            speak("Very Good Afternoon!, How can I assist you?");
        } else {
            speak("Very Good Evening!, How can I assist you?");
        }
    } else if(message.includes("how are you") || message.includes("how r u")){
        speak("I'm Good, Thank you! How are you?");
    } else if(message.includes("i am fine") || message.includes("i'm fine") || message.includes("i am good") || message.includes("i'm good")){
        speak("Glad to hear that! How can I assist you today?");
    } else if(message.includes("who are you") || message.includes("hu r u")){
        speak("I'm a Vini - The Virtual assistant, developed by Vishaal Sir and I'm designed to help you with your day-to-day tasks.");
    } else if(message.includes("who is vishal") || message.includes("hu is vishal") || message.includes("vishal")){
        speak("Vishaal sir is a visionary who not only drives innovation but also played a key role in developing me, shaping my path toward success and growth");
    }  else if(message.includes("open youtube")){
        speak("Opening YouTube");
        window.open("https://www.youtube.com/");
    } else if(message.includes("open google")){
        speak("Opening Google");
        window.open("https://www.google.com/");
    } else if(message.includes("open facebook")){
        speak("Opening Facebook");
        window.open("https://www.facebook.com/");
    } else if(message.includes("open instagram")){
        speak("Opening Instagram");
        window.open("https://www.instagram.com/");
    } else if(message.includes("open linkedin")){
        speak("Opening Linkedin");
        window.open("https://www.linkedin.com/");
    } else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined, {hour : "numeric", minute : "numeric"});
        speak(`it's ${time}`);
    } else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined, {day : "numeric", month : "short"});
        speak(`it's ${date}`);
    } else if(message.includes("day")){
        let day = new Date().toLocaleString(undefined, {weekday : "long"});
        speak(`Today's ${day}`);
    }else if(message.includes("open calculator")){
        window.open("calculator://");
        speak("Opening calculator...");
    } else if(message.includes("open whatsapp")){
        speak("Opening Whatsapp...");
        window.open("whatsapp://");
    } else if (message.includes("tell me a joke")) {
        let jokes = [
            "Why don’t skeletons fight each other? Because they don’t have the guts!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta!",
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the math book look sad? Because it had too many problems."
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    } else if (message.includes("tell me a fact")) {
        let facts = [
            "Honey never spoils. Archaeologists have found pots of honey in Egyptian tombs that are over 3,000 years old and still edible!",
            "A day on Venus is longer than a year on Venus.",
            "Bananas are berries, but strawberries aren't.",
            "Octopuses have three hearts and their blood is blue.",
            "The Eiffel Tower can be 15 cm taller during hot days due to thermal expansion."
        ];
        let fact = facts[Math.floor(Math.random() * facts.length)];
        speak(fact);
    } else if (message.includes("motivate me")) {
        let quotes = [
            "Believe in yourself! You are capable of achieving great things.",
            "Don't watch the clock; do what it does. Keep going.",
            "Your limitation—it’s only your imagination.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The only way to do great work is to love what you do."
        ];
        let quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    } else if (message.includes("flip a coin")) {
        let outcome = Math.random() < 0.5 ? "Heads" : "Tails";
        speak(`It's ${outcome}.`);
    } else if (message.includes("roll a dice")) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        speak(`You rolled a ${diceRoll}.`);
    } else {
        let finalText = "this is what I found on internet regarding" + message.replace("Vini", "");
        speak(finalText);
        window.open("https://www.google.com/search?q=" + message.replace("Vini", ""), "_blank");
    }
}

voice.addEventListener("click", function (event) {
    recognition.stop();
    voice.style.display = "none";
    btn.style.display = 'flex';
})