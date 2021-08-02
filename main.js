song1="";
song2="";
leftWristY =0;
leftWristX =0;
rightWristY =0;
rightWristX =0;
score_left=0;
song1_status="";
song2_status="";
function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(500, 450);
canvas.center();

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet is loaded");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        score_left=results[0].pose.keypoints[9];
        console.log(rightWristX, rightWristY, leftWristX, leftWristY, score_left);
    }
}
function draw(){
    image(video, 0, 0 , 500, 500);
    song1_status = song1.isPlaying()
    if (score>0.2) {
        circle(leftWristX, leftWristY, 30);
        song2.stop()
    }
    if (song1_status == false) {
        song1.play();
        document.getElementById("song_name").innerHTML = "Avengers Theme Song";
    }
}

    

    
