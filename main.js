song = "";
lefthandX = "";
righthandX = "";
lefthandY = "";
righthandY = "";

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        lefthandX = results[0].pose.leftWrist.x;
        lefthandY = results[0].pose.leftWrist.y;
        console.log("left wrist x = "+lefthandX + ", left wrist y = " + lefthandY);

        righthandX = results[0].pose.rightWrist.x;
        righthandY = results[0].pose.rightWrist.y;
        console.log("right wrist x = "+righthandX + ", right wrist y = " + righthandY);
    }
}