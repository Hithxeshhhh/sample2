const details = [{
    name:"Cristiano Ronaldo",
    followers: 612,
    jpeg:"./Images/cr7.jpeg"
},
{
    name:"Leonel Messi",
    followers: 492,
    jpeg:"./Images/messi.jpeg"
},
{
    name:"Neymar JR",
    followers: 16,
    jpeg:"./Images/Neymar.jpg"
},
{
    name:"kylie Jenner",
    followers: 390,
    jpeg:"./Images/kylie.jpg"
},
{
    name:"Kim Kardashian",
    followers: 364,
    jpeg:"./Images/kim.jpg"
},
{
   name:"David Bechkam",
   followers:85,
   jpeg:"./Images/david.jpg"
},
{
    name:"Virat Kholi",
    followers: 263,
    jpeg:"./Images/virat.jpg"
},
{
    name:"Ishowspeed",
    followers:13,
    jpeg:"./Images/speed.jpg"
},
{
    name:"Sidemen",
    followers:5,
    jpeg:"./Images/sidemen.jpg"
},
{
    name:"MrBeast",
    followers:45,
    jpeg:"./Images/mrbeast.jpg"
},
{
    name:"Shah Rukh Khan",
    followers:44,
    jpeg:"./Images/shahrukhkhan.jpg"
},
{
    name:"Selena Gomez",
    followers:429,
    jpeg:"./Images/selenagomez.jpg"
},
{
    name:"Robert Downey Jr.",
    followers:57,
    jpeg:"./Images/robertdowneyjr.jpg"
},
{
    name:"Chris Bumstead",
    followers:22,
    jpeg:"./Images/cbum.jpg"
},
{
    name:"M S Dhoni",
    followers:46,
    jpeg:"./Images/msdhoni.jpg"
},
{
    name:"Chris Hemsworth",
    followers:58,
    jpeg:"./Images/chrishemsworth.jpg"
},
{
    name:"Megan Fox",
    followers:21,
    jpeg:"./Images/megan.jpg"
},
{
    name:"Taylor Swift",
    followers:278,
    jpeg:"./Images/taylorswift.jpg"
},
{
    name:"The Weeknd",
    followers:68,
    jpeg:"./Images/weeknd.jpg"
},
{
    name:"Will Smith",
    followers:64,
    jpeg:"./Images/willsmith.jpg"
}
];


function startGame() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
   
}

const leftname = document.querySelector(".leftname");
const rightname = document.querySelector(".rightname");
const rightimage = document.querySelector(".rightimage");
const rightslide = document.querySelector(".rightslide");
const leftslide = document.querySelector(".leftslide");
const follow = document.querySelector(".follow");
const follows = document.querySelector(".follows")
let randomnum = Math.floor(Math.random() * details.length);
let rando = Math.floor(Math.random() * details.length);
let score = 0;
function animateFollowerCount(element, targetCount) {
    let currentCount = 0;
    const interval = 50;
    const increment = Math.ceil(targetCount / (2000 / interval));

    const updateDisplay = () => {
        if (currentCount <= targetCount) {
            element.innerHTML = currentCount + " Million";
            currentCount += increment;
        } else {
            element.innerHTML = targetCount + " Million";
            clearInterval(animationInterval);
        }
    };

    const animationInterval = setInterval(updateDisplay, interval);
}

function step1() {
    randomnum = getRandomIndex();
    rando = getRandomIndex();

    
    while (rando === randomnum) {
        rando = getRandomIndex();
    }

    leftname.innerHTML = details[randomnum].name;
    leftslide.style.backgroundImage = `url(${details[randomnum].jpeg})`;
    rightname.innerHTML = details[rando].name;
    rightslide.style.backgroundImage = `url(${details[rando].jpeg})`;
    follow.innerHTML = details[randomnum].followers + " Million ";
    follows.innerHTML = details[rando].followers + " Million";
    animateFollowerCount(follow, details[randomnum].followers);
    animateFollowerCount(follows, details[rando].followers);
    follows.style.visibility = "hidden";
}


function getRandomIndex() {
    return Math.floor(Math.random() * details.length);
}



  


document.querySelector(".scoreinnumber").innerHTML = score;

function comparehigher() {
    
    const followerCount = parseInt(follow.innerHTML);
    const followsCount = parseInt(follows.innerHTML);

    if (followerCount > followsCount) {
        var wrong = document.querySelector(".wrong");
            wrong.innerHTML = 'X';
            wrong.style.backgroundColor = "red";
            wrong.classList.add("pop");
        setTimeout(() => {
            showGameOverPage();
        showGameOverPages();
        },1000);
        
        } else if (followerCount < followsCount) {
        leftslide.style.backgroundImage = rightslide.style.backgroundImage;
        leftname.innerHTML = rightname.innerHTML
        follow.innerHTML = follows.innerHTML;
        const swap = Math.floor(Math.random() * details.length);
        rightname.innerHTML = details[swap].name;
        rightslide.style.backgroundImage = `url(${details[swap].jpeg})`;
        follows.innerHTML = details[swap].followers + " Million";
        animateFollowerCount(follow, parseInt(follow.innerHTML), details[randomnum].followers);
        animateFollowerCount(follows, parseInt(follows.innerHTML), details[rando].followers);
        var correctSymbol = document.querySelector(".correct");
        correctSymbol.innerHTML = '&#x2714';
        correctSymbol.style.backgroundColor = "#08FF09";
        correctSymbol.classList.add("pop");
setTimeout(() => {
    correctSymbol.innerHTML = 'vs';
    correctSymbol.style.backgroundColor = ""; 
    correctSymbol.classList.remove("pop"); 


    score += 1;
    document.querySelector(".scoreinnumber").innerHTML = score;
    const element = document.querySelector(".score");
    element.style.transform = "scale(1.4)";

    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 500);
}, 1000);
}
}
function comparelower() { 
    const followerCount = parseInt(follow.innerHTML);
    const followsCount = parseInt(follows.innerHTML);

    if (followerCount < followsCount) {
        var wrong = document.querySelector(".wrong");
            wrong.innerHTML = 'X';
            wrong.style.backgroundColor = "red";
            wrong.classList.add("pop");
        setTimeout(() => {
            showGameOverPage();
        showGameOverPages();
        },1000);
        element.style.transform = "scale(1.2)";

        setTimeout(() => {
            element.style.transform = "scale(1)";
        }, 300);
    }
    else if (followerCount > followsCount) {
        leftslide.style.backgroundImage = rightslide.style.backgroundImage;
        leftname.innerHTML = rightname.innerHTML
        follow.innerHTML = follows.innerHTML;
        const swap = Math.floor(Math.random() * details.length);
        rightname.innerHTML = details[swap].name;
        rightslide.style.backgroundImage = `url(${details[swap].jpeg})`;
        follows.innerHTML = details[swap].followers + " Million";
        animateFollowerCount(follow, parseInt(follow.innerHTML), details[randomnum].followers);
        animateFollowerCount(follows, parseInt(follows.innerHTML), details[rando].followers);
        var correctSymbol = document.querySelector(".correct");
        correctSymbol.innerHTML = '&#x2714';
        correctSymbol.style.backgroundColor = "#08FF09";
        correctSymbol.classList.add("pop");
setTimeout(() => {
    correctSymbol.innerHTML = 'vs';
    correctSymbol.style.backgroundColor = ""; 
    correctSymbol.classList.remove("pop");

   
    score += 1;
    document.querySelector(".scoreinnumber").innerHTML = score;
    const element = document.querySelector(".score");
    element.style.transform = "scale(1.4)";

    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 500);
}, 1000); 
}
}
function showGameOverPage() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    document.querySelector(".scoreupdation").innerHTML = score;
}
step1();



document.querySelector(".button3").addEventListener("click", backToMenu);
document.querySelector(".button4").addEventListener("click", playAgain);

function backToMenu() {
    
    var vs = document.querySelector(".vs");
    vs.innerHTML = 'VS';
    vs.style.backgroundColor = "white";
    vs.classList.add("pop");
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
    step1();
    
}

function playAgain() {

    var vs = document.querySelector(".vs");
    vs.innerHTML = 'VS';
    vs.style.backgroundColor = "white";
    vs.classList.add("pop");

    document.getElementById('page3').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    score = 0;
    document.querySelector(".scoreinnumber").innerHTML = score;
    step1();
    
}

function showGameOverPages() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    document.querySelector(".scoreupdation").innerHTML = score;

    const endSection = document.querySelector('.end');

    if(score == 0){
        endSection.style.background = 'url(./Images/lol.gif)';
        endSection.style

    }
    else if (score < 10) {
        endSection.style.background = 'url(./Images/bean.gif)';
    } else {
        endSection.style.background = 'url(./Images/perfectscore.gif)';
    }
    endSection.style.backgroundRepeat = 'no-repeat';
    endSection.style.backgroundSize = 'cover';
    endSection.style.backgroundPosition = 'center'
}
















    // else if(followerCount == followsCount){
    //     const swap = Math.floor(Math.random() * details.length);
    //     leftname.innerHTML = details[swap].name;
    //     leftslide.style.backgroundImage = `url(${details[swap].jpeg})`;
    //     follows.innerHTML = details[swap].followers + " Million";
    // } 

