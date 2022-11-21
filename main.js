mp3 = ""

function preload() {
    mp3 = loadSound("Asheru.mp3")
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,0 , 600,500)
    classifier.classify(video, gotResult)
}