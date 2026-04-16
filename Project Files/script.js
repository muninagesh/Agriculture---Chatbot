function sendMessage(){
let input=document.getElementById("userInput");
let chat=document.getElementById("chatBox");
let text=input.value;
if(!text.trim()) return;

chat.innerHTML+=`<p><b>You:</b> ${text}</p>`;
let reply=getBotResponse(text);
chat.innerHTML+=`<p><b>Bot:</b> ${reply}</p>`;
speak(reply);

input.value="";
chat.scrollTop=chat.scrollHeight;
}

function getBotResponse(input){
input=input.toLowerCase();

if(input.includes("crop")) return "Grow rice, wheat or maize.";
if(input.includes("pest")) return "Use neem oil spray.";
if(input.includes("fertilizer")) return "Use organic compost.";
if(input.includes("farmer")){
return "Farmer data: "+ JSON.stringify(farmers);
}
return "Ask about crops, pests, fertilizer or farmers.";
}

// Voice output
function speak(text){
let speech=new SpeechSynthesisUtterance(text);
speech.lang="en-US";
speechSynthesis.speak(speech);
}

// Voice input
function startVoice(){
let recognition=new(window.SpeechRecognition||window.webkitSpeechRecognition)();
recognition.lang="en-US";
recognition.onresult=function(e){
document.getElementById("userInput").value=e.results[0][0].transcript;
sendMessage();
};
recognition.start();
}
