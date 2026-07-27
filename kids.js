// Smart Kids Adventure

function speak(text){
    speechSynthesis.cancel();
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";
    msg.rate = 0.8;
    msg.pitch = 1;
    speechSynthesis.speak(msg);
}

// Splash Screen
setTimeout(function(){
    let splash = document.getElementById("splash");
    if(splash){
        splash.style.display = "none";
    }
},3000);

function welcomeSound(){
    speak("Welcome to Smart Kids Adventure. Learn Play Grow");
}

// Alphabet
function showAlphabet(){

let alphabet=[
["A","Apple 🍎"],
["B","Ball ⚽"],
["C","Cat 🐱"],
["D","Dog 🐶"],
["E","Elephant 🐘"],
["F","Fish 🐟"],
["G","Grapes 🍇"],
["H","Horse 🐴"],
["I","Ice Cream 🍦"],
["J","Jug 🏺"],
["K","Kite 🪁"],
["L","Lion 🦁"],
["M","Monkey 🐒"],
["N","Nest 🪺"],
["O","Orange 🍊"],
["P","Parrot 🦜"],
["Q","Queen 👑"],
["R","Rabbit 🐰"],
["S","Sun ☀️"],
["T","Tiger 🐯"],
["U","Umbrella ☂️"],
["V","Van 🚐"],
["W","Watch ⌚"],
["X","Xylophone 🎼"],
["Y","Yo-Yo 🪀"],
["Z","Zebra 🦓"]
];

let html="<h2>🔤 Alphabet A-Z</h2>";

alphabet.forEach(a=>{
html+=`
<div class="card">
<h3>${a[0]} - ${a[1]}</h3>
<button onclick="speak('${a[0]} for ${a[1]}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;
}

function showNumbers(){

let words=[
"One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
"Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty",
"Twenty One","Twenty Two","Twenty Three","Twenty Four","Twenty Five","Twenty Six","Twenty Seven","Twenty Eight","Twenty Nine","Thirty",
"Thirty One","Thirty Two","Thirty Three","Thirty Four","Thirty Five","Thirty Six","Thirty Seven","Thirty Eight","Thirty Nine","Forty",
"Forty One","Forty Two","Forty Three","Forty Four","Forty Five","Forty Six","Forty Seven","Forty Eight","Forty Nine","Fifty",
"Fifty One","Fifty Two","Fifty Three","Fifty Four","Fifty Five","Fifty Six","Fifty Seven","Fifty Eight","Fifty Nine","Sixty",
"Sixty One","Sixty Two","Sixty Three","Sixty Four","Sixty Five","Sixty Six","Sixty Seven","Sixty Eight","Sixty Nine","Seventy",
"Seventy One","Seventy Two","Seventy Three","Seventy Four","Seventy Five","Seventy Six","Seventy Seven","Seventy Eight","Seventy Nine","Eighty",
"Eighty One","Eighty Two","Eighty Three","Eighty Four","Eighty Five","Eighty Six","Eighty Seven","Eighty Eight","Eighty Nine","Ninety",
"Ninety One","Ninety Two","Ninety Three","Ninety Four","Ninety Five","Ninety Six","Ninety Seven","Ninety Eight","Ninety Nine","One Hundred"
];

let html="<h2>🔢 Numbers 1-100</h2>";

for(let i=1;i<=100;i++){

html+=`
<div class="card">
<h3>${i} - ${words[i-1]}</h3>

<button onclick="speak('${i}. ${words[i-1]}')">
🔊 Listen
</button>

</div>
`;

}

document.getElementById("content").innerHTML=html;

}
// Colors
function showColors(){

let colors=[
["Red 🔴","Red"],
["Blue 🔵","Blue"],
["Green 🟢","Green"],
["Yellow 🟡","Yellow"],
["Black ⚫","Black"],
["White ⚪","White"],
["Pink 🩷","Pink"],
["Orange 🟠","Orange"]
];

let html="<h2>🎨 Colors</h2>";

colors.forEach(c=>{
html+=`
<div class="card">
<h3>${c[0]}</h3>
<button onclick="speak('${c[1]}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;
}

// Animals
function showAnimals(){

let animals=[
["A","Ant 🐜"],["B","Bear 🐻"],["C","Cat 🐱"],["D","Dog 🐶"],
["E","Elephant 🐘"],["F","Fox 🦊"],["G","Giraffe 🦒"],["H","Horse 🐴"],
["I","Iguana 🦎"],["J","Jaguar 🐆"],["K","Kangaroo 🦘"],["L","Lion 🦁"],
["M","Monkey 🐒"],["N","Nightingale 🐦"],["O","Owl 🦉"],["P","Panda 🐼"],
["Q","Quail 🐦"],["R","Rabbit 🐰"],["S","Snake 🐍"],["T","Tiger 🐯"],
["U","Urial 🐏"],["V","Vulture 🦅"],["W","Whale 🐳"],["X","Xerus 🐿️"],
["Y","Yak 🦬"],["Z","Zebra 🦓"]
];

let html="<h2>🐘 Animals A-Z</h2>";

animals.forEach(a=>{
html+=`
<div class="card">
<h3>${a[0]} - ${a[1]}</h3>
<button onclick="speak('${a[0]} for ${a[1]}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;
}

// Fruits
function showFruits(){

let fruits=[
["A","Apple 🍎"],["B","Banana 🍌"],["C","Cherry 🍒"],["D","Date 🌴"],
["E","Elderberry 🫐"],["F","Fig 🟣"],["G","Grapes 🍇"],["H","Honeydew 🍈"],
["I","Indian Fig 🍈"],["J","Jackfruit 🍈"],["K","Kiwi 🥝"],["L","Lemon 🍋"],
["M","Mango 🥭"],["N","Nectarine 🍑"],["O","Orange 🍊"],["P","Papaya 🧡"],
["Q","Quince 🍐"],["R","Raspberry 🍓"],["S","Strawberry 🍓"],["T","Tomato 🍅"],
["U","Ugli Fruit 🍊"],["V","Velvet Apple 🍎"],["W","Watermelon 🍉"],
["X","Xigua 🍉"],["Y","Yellow Passion Fruit 🟡"],["Z","Zucchini 🥒"]
];

let html="<h2>🍎 Fruits A-Z</h2>";

fruits.forEach(f=>{
html+=`
<div class="card">
<h3>${f[0]} - ${f[1]}</h3>
<button onclick="speak('${f[0]} for ${f[1]}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;
}


// ===== Advanced Math Quiz =====

let totalQuestions = 20;
let currentQuestion = 1;

let score = 0;
let stars = 0;
let medals = 0;

let correct = 0;
let wrong = 0;

let answer = 0;
let timeLeft = 30;
let timer;
let balloonScore = 0;
let studentName = "";
let memoryScore = 0;
let matchedPairs = 0;
function randomQuestion(){

let a = Math.floor(Math.random()*10)+1;
let b = Math.floor(Math.random()*10)+1;

let type = Math.floor(Math.random()*4);

let question = "";

switch(type){

case 0:
question = `${a} + ${b}`;
answer = a+b;
break;

case 1:
if(a<b){
let t=a;
a=b;
b=t;
}
question = `${a} - ${b}`;
answer = a-b;
break;

case 2:
question = `${a} × ${b}`;
answer = a*b;
break;

case 3:
answer = a;
let result = a*b;
question = `${result} ÷ ${b}`;
break;

}
clearInterval(timer);
timeLeft = 30;
document.getElementById("content").innerHTML = `

<div class="card">

<h2>🧮 Math Quiz</h2>

<h3>Question ${currentQuestion}/${totalQuestions}</h3>
<h3>⏱️ Time Left: <span id="timer">30</span> sec</h3>
<h1>${question} = ?</h1>

<input type="number" id="userAnswer">

<br><br>

<button onclick="checkAnswer()">✅ Check</button>

<hr>

<p>⭐ Stars : ${stars}</p>

<p>🏅 Medals : ${medals}</p>

<p>🎯 Score : ${score}</p>

</div>

`;

speak(question);

timer = setInterval(function(){

timeLeft--;

document.getElementById("timer").innerHTML = timeLeft;

if(timeLeft <= 0){

clearInterval(timer);

wrong++;

currentQuestion++;

if(currentQuestion > totalQuestions){

showResult();

}else{

randomQuestion();

}

}

},1000);

}

function showMath(){

studentName = prompt("👦 Enter Student Name");

if(studentName == null || studentName == ""){
    studentName = "Student";
}

currentQuestion=1;
score=0;
stars=0;
medals=0;
correct=0;
wrong=0;

randomQuestion();

}

// Games
function showGames(){

document.getElementById("content").innerHTML = `
<div class="card">
<h2>🎮 Games</h2>

<button onclick="alphabetQuiz()">🔤 Alphabet Quiz</button>

<br><br><br>

<button onclick="numberQuiz()">🔢 Number Quiz</button>

<br><br>

<button onclick="memoryGame()">🧠 Memory Game</button><br><br>

<button onclick="balloonGame()">🎈 Balloon Pop</button>

</div>
`;
}

// Rhymes
function showRhymes(){

document.getElementById("content").innerHTML = `

<div class="card">

<h2>🎵 Rhymes</h2>

<h3>⭐ Twinkle Twinkle Little Star</h3>

<p>
Twinkle, twinkle, little star,<br>
How I wonder what you are!<br>
Up above the world so high,<br>
Like a diamond in the sky.
</p>

<button onclick="speak('Twinkle twinkle little star. How I wonder what you are. Up above the world so high. Like a diamond in the sky.')">
🔊 Listen
</button>

<hr>

<h3>🚌 Wheels on the Bus</h3>

<p>
The wheels on the bus go round and round,<br>
Round and round,<br>
All through the town.
</p>

<button onclick="speak('The wheels on the bus go round and round. Round and round. All through the town.')">
🔊 Listen
</button>

<hr>

<h3>🖐️ Johnny Johnny Yes Papa</h3>

<p>
Johnny Johnny, Yes Papa,<br>
Eating sugar? No Papa,<br>
Telling lies? No Papa,<br>
Open your mouth. Ha Ha Ha!
</p>

<button onclick="speak('Johnny Johnny Yes Papa. Eating sugar No Papa. Telling lies No Papa. Open your mouth. Ha Ha Ha.')">
🔊 Listen
</button>

<hr>

<h3>👶 Baby Shark</h3>

<p>
Baby shark doo doo doo doo doo doo,<br>
Baby shark doo doo doo doo doo doo,<br>
Baby shark!
</p>

<button onclick="speak('Baby Shark doo doo doo doo doo doo. Baby Shark.')">
🔊 Listen
</button>

</div>

`;

}

// Greetings
function showGreetings(){

let hour = new Date().getHours();

let greeting = "";
let emoji = "";

if(hour >= 5 && hour < 12){
    greeting = "Good Morning";
    emoji = "🌅";
}
else if(hour >= 12 && hour < 17){
    greeting = "Good Afternoon";
    emoji = "☀️";
}
else if(hour >= 17 && hour < 21){
    greeting = "Good Evening";
    emoji = "🌇";
}
else{
    greeting = "Good Night";
    emoji = "🌙";
}

document.getElementById("content").innerHTML = `

<div class="card">

<h2>👋 Greetings</h2>

<h1>${emoji} ${greeting}</h1>

<button onclick="speak('${greeting}')">
🔊 Listen
</button>

</div>

`;

}
function checkAnswer(){

clearInterval(timer);

let user = parseInt(document.getElementById("userAnswer").value);

if(user === answer){

    correct++;
    score += 10;
    stars++;

    if(stars % 5 === 0){
        medals++;
    }

    alert("🎉 Correct!");

}else{

    wrong++;
    alert("❌ Wrong!\nCorrect Answer: " + answer);

}

currentQuestion++;

if(currentQuestion > totalQuestions){

    showResult();

}else{

    randomQuestion();

}
}




function showResult(){

let percent = Math.round((correct / totalQuestions) * 100);

let grade = "";

if(percent >= 90){
grade = "🥇 A+";
}else if(percent >= 80){
grade = "🥈 A";
}else if(percent >= 70){
grade = "🥉 B";
}else if(percent >= 60){
grade = "👍 C";
}else{
grade = "📚 Keep Practicing";
}
saveHighScore(score);
celebrate();
document.getElementById("content").innerHTML = `

<div class="card">

<h2>🏆 Math Quiz Completed</h2>
<h3>👦 Student: ${studentName}</h3>
<h3>⭐ Stars : ${stars}</h3>

<h3>🏅 Medals : ${medals}</h3>

<h3>✅ Correct : ${correct}</h3>

<h3>❌ Wrong : ${wrong}</h3>

<h3>🎯 Score : ${score}</h3>
<p>🏆 Best Score : ${getHighScore()}</p>
<h3>📊 Percentage : ${percent}%</h3>

<h2>${grade}</h2>
<hr>

<h2>🎓 CERTIFICATE OF ACHIEVEMENT</h2>

<p>This Certificate is Awarded to</p>

<h2>👦 ${studentName}</h2>

<p>For Successfully Completing</p>

<h3>🧮 Smart Kids Math Quiz</h3>

<h2>🎉 Congratulations! 🎉</h2>

<button onclick="showCertificate()">📜 View Certificate</button>

<br><br>

<button onclick="showMath()">🔄 Play Again</button>

<button onclick="speak('Congratulations ${studentName}. You scored ${score} points. Your grade is ${grade}')">
🔊 Speak Result
</button>

<br><br>


<button onclick="location.reload()">🏠 Home</button>
</div>

`;

}
function showCertificate(){

let percent = Math.round((correct / totalQuestions) * 100);

let grade = "";

if(percent >= 90){
    grade = "🥇 A+";
}else if(percent >= 80){
    grade = "🥈 A";
}else if(percent >= 70){
    grade = "🥉 B";
}else if(percent >= 60){
    grade = "👍 C";
}else{
    grade = "📚 Keep Practicing";
}

document.getElementById("content").innerHTML = `

<div class="certificate">

<h1>🏆 CERTIFICATE OF ACHIEVEMENT</h1>

<h3>🎓 Smart Kids Adventure</h3>

<hr>

<p>This Certificate is Proudly Awarded To</p>

<h1>👦 ${studentName}</h1>

<p>For Successfully Completing</p>

<h2>🧮 Smart Kids Math Quiz</h2>

<h2>${grade}</h2>

<h3>⭐ Stars : ${stars}</h3>

<h3>🏅 Medals : ${medals}</h3>

<h3>🎯 Score : ${score} / 200</h3>

<h3>📊 Percentage : ${percent}%</h3>

<p>📅 Date : ${new Date().toLocaleDateString()}</p>

<hr>

<div style="display:flex;justify-content:space-between;margin-top:30px;">
<div>
_________________<br>
👨‍🏫 Teacher
</div>

<div>
_________________<br>
🏫 Principal
</div>
</div>

<h2 style="color:green;">🎉 Congratulations! 🎉</h2>

<br>

<button onclick="window.print()">🖨️ Print Certificate</button>

<br><br>

<button onclick="showResult()">⬅ Back</button>

</div>

`;

}
function goHome(){

document.getElementById("content").innerHTML="";

window.scrollTo(0,0);

}
function balloonGame(){

balloonScore = 0;

let balloons=[
"A","B","C","D","E",
"F","G","H","I","J"
];

let html=`
<div class="card">

<h2>🎈 Balloon Pop Game</h2>

<h3>⭐ Score: <span id="bscore">0</span></h3>

<p>Tap any balloon</p>

`;

balloons.forEach(letter=>{

html+=`
<button class="balloon"
onclick="popBalloon('${letter}')">
🎈 ${letter}
</button>
`;

});

html+=`</div>`;

document.getElementById("content").innerHTML = html;

}

function popBalloon(letter){

balloonScore += 10;

document.getElementById("bscore").innerHTML = balloonScore;

switch(letter){
case "A": speak("A for Apple"); break;
case "B": speak("B for Ball"); break;
case "C": speak("C for Cat"); break;
case "D": speak("D for Dog"); break;
case "E": speak("E for Elephant"); break;
case "F": speak("F for Fish"); break;
case "G": speak("G for Grapes"); break;
case "H": speak("H for Horse"); break;
case "I": speak("I for Ice Cream"); break;
case "J": speak("J for Jug"); break;
}

alert("🎉 Great! You popped " + letter);

}
let memoryCards = [
"A","A",
"B","B",
"C","C",
"D","D",
"E","E",
"F","F"
];

let firstCard = null;
let firstButton = null;
let lock = false;



function memoryGame(){

memoryScore = 0;
matchedPairs = 0;
firstCard = null;
firstButton = null;
lock = false;

memoryCards.sort(()=>Math.random()-0.5);

let html = `

<div class="card">

<h2>🧠 Memory Game</h2>

<p>Match the same letters</p>

<h3>⭐ Score: <span id="mscore">0</span></h3>

<div class="memory">

`;

memoryCards.forEach((letter,index)=>{

html += `

<button class="memory-card"
id="card${index}"
onclick="flipCard(${index},'${letter}')">

❓

</button>

`;

});


html += `

</div>
</div>

`;


document.getElementById("content").innerHTML = html;

}
// ===== Alphabet Quiz =====

let alphabetQuizData = [
["A","Apple"],["B","Ball"],["C","Cat"],["D","Dog"],["E","Elephant"],
["F","Fish"],["G","Grapes"],["H","Horse"],["I","Ice Cream"],["J","Jug"],
["K","Kite"],["L","Lion"],["M","Monkey"],["N","Nest"],["O","Orange"],
["P","Parrot"],["Q","Queen"],["R","Rabbit"],["S","Sun"],["T","Tiger"]
];

let aqCurrent = 0;
let aqAnswer = "";
let aqScore = 0;
let aqStars = 0;
let aqMedals = 0;
let aqCorrect = 0;
let aqWrong = 0;
let aqTime = 30;
let aqTimer;

function alphabetQuiz(){

aqCurrent = 0;
aqScore = 0;
aqStars = 0;
aqMedals = 0;
aqCorrect = 0;
aqWrong = 0;

nextAlphabetQuestion();

}
function nextAlphabetQuestion(){

clearInterval(aqTimer);

aqTime = 30;

let q = alphabetQuizData[aqCurrent];
aqAnswer = q[1];

document.getElementById("content").innerHTML = `

<div class="card">

<h2>🔤 Alphabet Quiz</h2>

<h3>Question ${aqCurrent+1}/20</h3>

<h3>⏱️ Time Left: <span id="aqtimer">30</span> sec</h3>

<h1>${q[0]} for ?</h1>

<input type="text" id="aqInput">

<br><br>

<button onclick="checkAlphabetQuiz()">✅ Check</button>

<hr>

<p>⭐ Stars : ${aqStars}</p>

<p>🏅 Medals : ${aqMedals}</p>

<p>🎯 Score : ${aqScore}</p>

</div>

`;

aqTimer = setInterval(function(){

aqTime--;

document.getElementById("aqtimer").innerHTML = aqTime;

if(aqTime<=0){

clearInterval(aqTimer);

aqWrong++;
aqCurrent++;

if(aqCurrent>=20){

alphabetResult();

}else{

nextAlphabetQuestion();

}

}

},1000);

}
function checkAlphabetQuiz(){

clearInterval(aqTimer);

let user = document.getElementById("aqInput").value.trim().toLowerCase();

if(user === aqAnswer.toLowerCase()){

    aqCorrect++;
    aqScore += 10;
    aqStars++;

    if(aqStars % 5 === 0){
        aqMedals++;
    }

    alert("🎉 Correct!");

}else{

    aqWrong++;
    alert("❌ Wrong!\nCorrect Answer: " + aqAnswer);

}

aqCurrent++;

if(aqCurrent >= 20){

    alphabetResult();

}else{

    nextAlphabetQuestion();

}

}
function alphabetResult(){

let percent = Math.round((aqCorrect / 20) * 100);

let grade = "";

if(percent >= 90){
    grade = "🥇 A+";
}else if(percent >= 80){
    grade = "🥈 A";
}else if(percent >= 70){
    grade = "🥉 B";
}else if(percent >= 60){
    grade = "👍 C";
}else{
    grade = "📚 Keep Practicing";
}

document.getElementById("content").innerHTML = `

<div class="card">

<h2>🏆 Alphabet Quiz Completed</h2>

<h3>⭐ Stars : ${aqStars}</h3>

<h3>🏅 Medals : ${aqMedals}</h3>

<h3>✅ Correct : ${aqCorrect}</h3>

<h3>❌ Wrong : ${aqWrong}</h3>

<h3>🎯 Score : ${aqScore}</h3>

<h3>📊 Percentage : ${percent}%</h3>

<h2>${grade}</h2>

<br>

<button onclick="alphabetQuiz()">🔄 Play Again</button>

<br><br>

<button onclick="goHome()">🏠 Home</button>

</div>

`;

}
function flipCard(index,value){

if(lock) return;

let btn = document.getElementById("card"+index);

if(btn.innerText.trim() !== "❓") return;

btn.innerText = value;


if(firstCard == null){

    firstCard = value;
    firstButton = btn;

}else{

    if(firstCard == value){

memoryScore += 10;
matchedPairs++;

document.getElementById("mscore").innerHTML = memoryScore;

speak(value + " matched");

// matched cards disable
btn.disabled = true;
firstButton.disabled = true;

firstCard = null;
firstButton = null;

        if(matchedPairs == 6){

            setTimeout(()=>{
                alert("🏆 Congratulations! You completed Memory Game");
            },500);

        }


    }else{

        lock = true;

        setTimeout(()=>{

            btn.innerText = "❓";
            firstButton.innerText = "❓";

            firstCard = null;
            firstButton = null;
            lock = false;

        },800);

    }

}

}
// Save High Score
function saveHighScore(score){

    let best = localStorage.getItem("bestScore");

    if(best == null || score > Number(best)){
        localStorage.setItem("bestScore", score);
    }

}

// Get High Score
function getHighScore(){
    return localStorage.getItem("bestScore") || 0;
}
function celebrate(){

    confetti({
        particleCount:200,
        spread:120,
        startVelocity:40,
        origin:{x:0.5,y:0.6}
    });

}
function playClick(){

    let sound = document.getElementById("clickSound");

    if(sound){
        sound.currentTime = 0;
        sound.play();
    }

}
// ===== Number Quiz =====

let nqCurrent = 0;
let nqScore = 0;
let nqStars = 0;
let nqMedals = 0;
let nqCorrect = 0;
let nqWrong = 0;
let nqTime = 30;
let nqTimer;

let nqAnswer = 0;

function numberQuiz(){

nqCurrent = 1;
nqScore = 0;
nqStars = 0;
nqMedals = 0;
nqCorrect = 0;
nqWrong = 0;

nextNumberQuestion();

}

function nextNumberQuestion(){

clearInterval(nqTimer);

nqTime = 30;

nqAnswer = Math.floor(Math.random()*100)+1;

document.getElementById("content").innerHTML = `

<div class="card">

<h2>🔢 Number Quiz</h2>

<h3>Question ${nqCurrent}/20</h3>

<h3>⏱️ Time Left: <span id="nqtimer">30</span> sec</h3>

<h1>Type this number:</h1>

<h1>${nqAnswer}</h1>
speak("Type number " + nqAnswer);
<input type="number" id="nqInput">

<br><br>

<button onclick="checkNumberQuiz()">✅ Check</button>

<hr>

<p>⭐ Stars : ${nqStars}</p>

<p>🏅 Medals : ${nqMedals}</p>

<p>🎯 Score : ${nqScore}</p>

</div>

`;

nqTimer = setInterval(function(){

nqTime--;

document.getElementById("nqtimer").innerHTML = nqTime;

if(nqTime <= 0){

clearInterval(nqTimer);

nqWrong++;
nqCurrent++;

if(nqCurrent > 20){

numberResult();

}else{

nextNumberQuestion();

}

}

},1000);

}
function checkNumberQuiz(){

clearInterval(nqTimer);

let user = parseInt(document.getElementById("nqInput").value);

if(user === nqAnswer){

    nqCorrect++;
    nqScore += 10;
    nqStars++;

    if(nqStars % 5 === 0){
        nqMedals++;
    }

    alert("🎉 Correct!");

}else{

    nqWrong++;
    alert("❌ Wrong!\nCorrect Answer: " + nqAnswer);

}

nqCurrent++;

if(nqCurrent > 20){

    numberResult();

}else{

    nextNumberQuestion();

}

}

function numberResult(){

saveHighScore(nqScore);

let percent = Math.round((nqCorrect / 20) * 100);

let grade = "";

if(percent >= 90){
grade = "🥇 A+";
}else if(percent >= 80){
grade = "🥈 A";
}else if(percent >= 70){
grade = "🥉 B";
}else if(percent >= 60){
grade = "👍 C";
}else{
grade = "📚 Keep Practicing";
}

celebrate();

document.getElementById("content").innerHTML = `

<div class="card">

<h2>🏆 Number Quiz Completed</h2>

<h3>⭐ Stars : ${nqStars}</h3>

<h3>🏅 Medals : ${nqMedals}</h3>

<h3>✅ Correct : ${nqCorrect}</h3>

<h3>❌ Wrong : ${nqWrong}</h3>

<h3>🎯 Score : ${nqScore}</h3>

<h3>🏆 Best Score : ${getHighScore()}</h3>

<h3>📊 Percentage : ${percent}%</h3>

<h2>${grade}</h2>

<br>

<button onclick="numberQuiz()">🔄 Play Again</button>

<br><br>

<button onclick="goHome()">🏠 Home</button>

</div>

`;

}
function showShapes(){

let shapes=[
["⚪ Circle","Circle"],
["⬜ Square","Square"],
["🔺 Triangle","Triangle"],
["▭ Rectangle","Rectangle"],
["⭐ Star","Star"],
["❤️ Heart","Heart"],
["🔷 Diamond","Diamond"],
["🥚 Oval","Oval"]
];

let html="<h2>🔷 Shapes</h2>";

shapes.forEach(s=>{
html+=`
<div class="card">
<h1 style="font-size:60px;">${s[0]}</h1>
<button onclick="speak('${s[1]}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;

}
function showVehicles(){

let vehicles=[
["✈️","Airplane"],
["🚲","Bicycle"],
["🚗","Car"],
["🚚","Dump Truck"],
["🚜","Excavator"],
["⛴️","Ferry"],
["⛽","Gas Truck"],
["🚁","Helicopter"],
["🚛","Ice Cream Truck"],
["🛩️","Jet"],
["🛶","Kayak"],
["🚂","Locomotive"],
["🏍️","Motorcycle"],
["🚐","Minivan"],
["🚓","Police Car"],
["🚀","Rocket"],
["⛵","Sailboat"],
["🚆","Train"],
["🚲","Unicycle"],
["🚐","Van"],
["🦽","Wheelchair"],
["🚤","X-Speed Boat"],
["🛥️","Yacht"],
["🚓","Zebra Crossing Patrol Car"]
];

let html="<h2>🚗 Vehicles A-Z</h2>";

vehicles.forEach(v=>{

html+=`
<div class="card">

<h1 style="font-size:45px;">${v[0]}</h1>

<h2>${v[1]}</h2>

<button onclick="speak('${v[1]}. This is a ${v[1]}.')">
🔊 Listen
</button>

</div>
`;

});

document.getElementById("content").innerHTML=html;

}
function showBirds(){

let birds=[
["🦅","Eagle"],
["🦜","Parrot"],
["🐦","Sparrow"],
["🦉","Owl"],
["🦆","Duck"],
["🦢","Swan"],
["🦚","Peacock"],
["🐧","Penguin"],
["🦩","Flamingo"],
["🕊️","Dove"],
["🐥","Chick"],
["🐓","Rooster"],
["🐔","Hen"],
["🐦‍⬛","Crow"],
["🦃","Turkey"],
["🦤","Dodo"],
["🦇","Bat"],
["🪿","Goose"],
["🐤","Baby Bird"],
["🦅","Hawk"]
];

let html="<h2>🐦 Birds</h2>";

birds.forEach(b=>{

html+=`
<div class="card">

<h1 style="font-size:45px;">${b[0]}</h1>

<h2>${b[1]}</h2>

<button onclick="speak('${b[1]}. This is a ${b[1]}.')">
🔊 Listen
</button>

</div>
`;

});

document.getElementById("content").innerHTML=html;

}
function showBodyParts(){

let bodyParts=[
["👀","Eyes"],
["👂","Ears"],
["👃","Nose"],
["👄","Mouth"],
["😁","Teeth"],
["👅","Tongue"],
["💇","Hair"],
["🧠","Brain"],
["❤️","Heart"],
["💪","Arm"],
["✋","Hand"],
["👆","Finger"],
["🦵","Leg"],
["🦶","Foot"],
["🦴","Bone"],
["🫁","Lungs"],
["🫀","Heart Organ"],
["🧍","Body"],
["🦿","Knee"],
["🧒","Head"]
];

let html="<h2>👨‍👩‍👧 Body Parts</h2>";

bodyParts.forEach(b=>{

html+=`
<div class="card">

<h1 style="font-size:45px;">${b[0]}</h1>

<h2>${b[1]}</h2>

<button onclick="speak('${b[1]}. This is a ${b[1]}.')">
🔊 Listen
</button>

</div>
`;

});

document.getElementById("content").innerHTML=html;

}
function showDaysMonths(){

let days=[
"Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday","Sunday"
];

let months=[
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

let html="<h2>🌍 Days & Months</h2>";

html+="<h3>📅 Days</h3>";

days.forEach(d=>{
html+=`
<div class="card">
<h2>${d}</h2>
<button onclick="speak('${d}')">🔊 Listen</button>
</div>`;
});

html+="<h3>🗓️ Months</h3>";

months.forEach(m=>{
html+=`
<div class="card">
<h2>${m}</h2>
<button onclick="speak('${m}')">🔊 Listen</button>
</div>`;
});

document.getElementById("content").innerHTML=html;

    }
    

