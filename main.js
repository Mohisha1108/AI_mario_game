
function preload() {
	world_start = loadSound("world_start.wav");
	coins_get = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);//this will setup all the required function and variables needed for the game 
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log('posenet model is loaded')
}
function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
function draw() {
	game();
}