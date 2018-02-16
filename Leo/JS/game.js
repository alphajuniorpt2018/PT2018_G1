var gameCanvas = document.createElement("canvas");
var gameCanvasContext = gameCanvas.getContext("2d"); // Creating the Canvas

gameCanvas.width = 800;
gameCanvas.height = 600;
document.getElementById('gameContainer').appendChild(gameCanvas); // Placing the Canvas
gameCanvasContext.fillStyle = "#808080";
gameCanvasContext.fillRect(0,0,800,600); // General background
gameCanvasContext.fillStyle = "#B6ACAC";
gameCanvasContext.fillRect(170,0,460,600); // Game-area background
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.fillRect(170,220,460,5); // Player 1's track
gameCanvasContext.fillRect(170,340,460,5); // Player 2's track

// Begginning to draw Player 1's Gauge
gameCanvasContext.shadowBlur = 40;
gameCanvasContext.shadowColor = "rgba(255,180,180,0.5)"; // Red aura
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.beginPath();
gameCanvasContext.moveTo(45, 50);
gameCanvasContext.lineTo(125,50);
gameCanvasContext.arc(125,67,17,1.5*Math.PI,0.5*Math.PI);
gameCanvasContext.lineTo(50,84);
gameCanvasContext.arc(45,67,17,0.5*Math.PI,1.5*Math.PI);
gameCanvasContext.fill();
// End Player 1's Gauge
// The Gauge is 80px + 34px long and 30px tall

// Begginning to draw Player 2's Gauge
gameCanvasContext.shadowBlur = 40;
gameCanvasContext.shadowColor = "rgba(180,180,255,0.5)"; // Blue aura
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.beginPath();
gameCanvasContext.moveTo(675,50)
gameCanvasContext.lineTo(755,50);
gameCanvasContext.arc(755,67,17,1.5*Math.PI,0.5*Math.PI);
gameCanvasContext.lineTo(675,84);
gameCanvasContext.arc(675,67,17,0.5*Math.PI,1.5*Math.PI);
gameCanvasContext.fill();
// End Player 2's Gauge
// The Gauge is 80px + 34px long and 30px tall

// End Canvas' Drawings

// Declaring global variables for functions
var gameStarted = 0; // This indicates to several functions whether the game has started
var nowTime = new Date(); // This will be used by more than one function that calculates time in some way
var startTime = 0;
var elapsedTime = 0;
var elapsedTimeSec = 0;
var elapsedTimeMin = 0;

// startButton's function: startGame. Initiates the game loop and attributes values to some needed variables.
function startGame() {
	if (gameStarted == 0) {
		gameStarted = 1;
		startTime = new Date();
		setInterval(gameLoop, 16);
	}
	else {
		alert("Game has already started!")
	}
}

// Calculates how much time has passed since startGame. Needs to be in the game loop to work properly, but would preferably be in its own independent loop.
function calculateElapsedTime() {
	nowTime = new Date();
	
	elapsedTime = (nowTime - startTime) / 1000; // Stores, in seconds, the round's elapsed time
	elapsedTimeMillisec = (nowTime - startTime) % 1000; // Meant to be used for display, stores, in milliseconds, the elapsed time, resetting every 1000 milliseconds
	elapsedTimeSec = Math.floor(elapsedTime % 60); // Meant to be used for display, stores, in seconds, the elapsed time, resetting every 60 seconds
	elapsedTimeMin = Math.floor(elapsedTime / 60); // Meant to be used for display, stores, in minutes, the elapsed time.
}

function updateElapsedTimeDisplay() {
	if (elapsedTimeSec < 10) {
		document.getElementById("timeElapsedClock").innerHTML = '0' + elapsedTimeSec + ':' + elapsedTimeMillisec.toString().substr(0,2);
	}
	else {
		document.getElementById("timeElapsedClock").innerHTML = elapsedTimeSec + ':' + elapsedTimeMillisec.toString().substr(0,2);
	}
}

function gameLoop() {
	calculateElapsedTime();
	updateElapsedTimeDisplay();
}