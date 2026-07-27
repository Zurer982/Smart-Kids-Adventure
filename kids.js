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
["A","Apple","🍎"],
["B","Ball","⚽"],
["C","Cat","🐱"],
["D","Dog","🐶"],
["E","Elephant","🐘"],
["F","Fish","🐟"],
["G","Grapes","🍇"],
["H","Horse","🐴"],
["I","Ice Cream","🍦"],
["J","Jug","🏺"],
["K","Kite","🪁"],
["L","Lion","🦁"],
["M","Monkey","🐒"],
["N","Nest","🪺"],
["O","Orange","🍊"],
["P","Parrot","🦜"],
["Q","Queen","👑"],
["R","Rabbit","🐰"],
["S","Sun","☀️"],
["T","Tiger","🐯"],
["U","Umbrella","☂️"],
["V","Van","🚐"],
["W","Watch","⌚"],
["X","Xylophone","🎼"],
["Y","Yo-Yo","🪀"],
["Z","Zebra","🦓"]
];

let html = `
<h2>🔤 Alphabet A-Z</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

alphabet.forEach(a=>{

html += `

<div class="card">

<div class="big-emoji">${a[2]}</div>

<h2>${a[0]}</h2>

<h3>${a[1]}</h3>

<button class="listen-btn"
onclick="speak('${a[0]} for ${a[1]}')">

🔊 Listen

</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

window.scrollTo(0,0);

}
// Numbers
function showNumbers(){

let numberWords=[
"",
"One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"
];


let html=`
<h2>🔢 Numbers 1 - 100</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;


for(let i=1;i<=100;i++){

html+=`

<div class="card">

<h2>🔢 ${i} ${numberWords[i] || ""}</h2>

<button class="listen-btn" onclick="speak('${numberWords[i] || i}')">
🔊 Listen
</button>

</div>

`;

}


document.getElementById("content").innerHTML=html;

window.scrollTo(0,0);

}
// Colors
function showColors(){

let colors=[
["❤️","Red"],
["💙","Blue"],
["💚","Green"],
["💛","Yellow"],
["🧡","Orange"],
["💜","Purple"],
["🤍","White"],
["🖤","Black"],
["🤎","Brown"],
["🩷","Pink"]
];

let html=`
<h2>🎨 Colors</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

colors.forEach(c=>{

html+=`

<div class="card">

<div class="big-emoji">${c[0]}</div>

<h2>${c[1]}</h2>

<button class="listen-btn"
onclick="speak('${c[1]}')">

🔊 Listen

</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

window.scrollTo(0,0);

}

// Animals
function showAnimals(){

let animals=[
["🐘","Elephant"],
["🦁","Lion"],
["🐯","Tiger"],
["🐶","Dog"],
["🐱","Cat"],
["🐴","Horse"],
["🐮","Cow"],
["🐑","Sheep"],
["🐐","Goat"],
["🐒","Monkey"],
["🐻","Bear"],
["🦓","Zebra"],
["🦒","Giraffe"],
["🦊","Fox"],
["🐰","Rabbit"],
["🦌","Deer"],
["🐪","Camel"],
["🦛","Hippo"],
["🦏","Rhino"],
["🐼","Panda"]
];

let html=`
<h2>🐘 Animals</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

animals.forEach(a=>{

html+=`
<div class="card">

<div class="big-emoji">${a[0]}</div>

<h2>${a[1]}</h2>

<button class="listen-btn" onclick="speak('${a[1]}')">
🔊 Listen
</button>

</div>
`;

});

document.getElementById("content").innerHTML=html;
window.scrollTo(0,0);

}



// Fruits
function showFruits(){

let fruits=[
["🍎","Apple"],
["🍌","Banana"],
["🍇","Grapes"],
["🍊","Orange"],
["🥭","Mango"],
["🍍","Pineapple"],
["🍉","Watermelon"],
["🍓","Strawberry"],
["🥝","Kiwi"],
["🍒","Cherry"],
["🍐","Pear"],
["🍑","Peach"],
["🥥","Coconut"],
["🍋","Lemon"],
["🫐","Blueberry"]
];

let html=`
<h2>🍎 Fruits</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

fruits.forEach(f=>{

html+=`
<div class="card">

<div class="big-emoji">${f[0]}</div>

<h2>${f[1]}</h2>

<button class="listen-btn" onclick="speak('${f[1]}')">
🔊 Listen
</button>

</div>
`;

});

document.getElementById("content").innerHTML=html;
window.scrollTo(0,0);

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
// Shapes
function showShapes(){

let shapes=[
["⚪","Circle"],
["⬜","Square"],
["🔺","Triangle"],
["▭","Rectangle"],
["⭐","Star"],
["❤️","Heart"],
["💎","Diamond"],
["⬟","Pentagon"],
["⬢","Hexagon"],
["🥚","Oval"]
];

let html=`
<h2>🔷 Shapes</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

shapes.forEach(s=>{

html+=`

<div class="card">

<div class="big-emoji">${s[0]}</div>

<h2>${s[1]}</h2>

<button class="listen-btn"
onclick="speak('${s[1]}')">

🔊 Listen

</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

window.scrollTo(0,0);

}



// Vehicles
function showVehicles(){

let vehicles=[
["🚗","Car"],
["🚌","Bus"],
["🚆","Train"],
["✈️","Airplane"],
["🚁","Helicopter"],
["🚲","Bicycle"],
["🏍️","Motorcycle"],
["🚜","Tractor"],
["🚢","Ship"],
["⛵","Boat"],
["🚒","Fire Truck"],
["🚑","Ambulance"],
["🚓","Police Car"],
["🚚","Truck"],
["🚐","Van"]
];

let html=`
<h2>🚗 Vehicles</h2>

<button class="home-btn" onclick="location.reload()">
🏠 Home
</button>
`;

vehicles.forEach(v=>{

html+=`

<div class="card">

<div class="big-emoji">${v[0]}</div>

<h2>${v[1]}</h2>

<button class="listen-btn"
onclick="speak('${v[1]}')">

🔊 Listen

</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

window.scrollTo(0,0);

}
// Birds
function showBirds(){

let birds=[
"Bird",
"Eagle",
"Parrot",
"Sparrow",
"Peacock",
"Crow",
"Duck",
"Owl"
];

let html=`<h2>🐦 Birds</h2>`;

birds.forEach(bird=>{

html+=`

<div class="card">

<div class="big-emoji">🐦</div>

<h2>${bird}</h2>

<button class="listen-btn" onclick="speak('${bird}')">
🔊 Listen
</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

}


// Body Parts
function showBodyParts(){

let parts=[
"Eye",
"Nose",
"Ear",
"Hand",
"Leg",
"Foot",
"Mouth",
"Head"
];

let html=`<h2>👦 Body Parts</h2>`;

parts.forEach(part=>{

html+=`

<div class="card">

<div class="big-emoji">👦</div>

<h2>${part}</h2>

<button class="listen-btn" onclick="speak('${part}')">
🔊 Listen
</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

}


// Days
function showDays(){

let days=[
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

let html=`<h2>📅 Days</h2>`;

days.forEach(day=>{

html+=`

<div class="card">

<div class="big-emoji">📅</div>

<h2>${day}</h2>

<button class="listen-btn" onclick="speak('${day}')">
🔊 Listen
</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

}


// Months
function showMonths(){

let months=[
"January","February","March","April",
"May","June","July","August",
"September","October","November","December"
];

let html=`<h2>🗓️ Months</h2>`;

months.forEach(month=>{

html+=`

<div class="card">

<div class="big-emoji">🗓️</div>

<h2>${month}</h2>

<button class="listen-btn" onclick="speak('${month}')">
🔊 Listen
</button>

</div>

`;

});

document.getElementById("content").innerHTML=html;

    }
