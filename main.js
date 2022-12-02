mp3 = ""
var leftWristX, leftWristY, rightWristX, rightWristY

scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload() {
    song1 = loadSound("Asheru.mp3")
    song2 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500)


if(scoreLeftWrist > 0.2){
 

    noFill()
    stroke("magenta")
    circle(leftWristX, leftWristY, 50, 50)

    song2.stop()
}

if(song1 == false){
     song1.isPlaying(true)  

     document.getElementById("song").innerHTML = "Judo Flip"
     
}
    
}

function gotPoses(results) {
    if (results > 0) {
        console.log(results)
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist ="+scoreLeftWrist)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX ="+rightWristX+"rightWristY ="+rightWristY)
        

        
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("leftWristX ="+leftWristX+"leftWristY ="+leftWristY)
    }
}

function modelLoaded() {
    console.log("the posenet model has been loaded")
}