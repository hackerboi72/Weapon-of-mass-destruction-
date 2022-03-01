nosex = ""
nosey = ""
difference = ""
rightwtistx = 0 
leftwristx = 0 
function preload() {

}
function setup() {
    video = createCapture(VIDEO)
    video.size(600,600)    
    video.position(150,80)
    canvas = createCanvas(550,500)
    canvas.position(900,80)
    posenet = ml5.poseNet(video, modelloaded) 
    posenet.on("pose", gotposes)
}
function draw() {
    background("#F7B0E2")
    fill("red")
    stroke("black")
    square(nosex,nosey,difference)    
    document.getElementById("square_dimensions").innerHTML = "width and height of a square is " + difference + " px"
}
function modelloaded() {
    console.log("posenet initiated successfully") 
}
function gotposes(results) {
    if(results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y 
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        difference = floor(leftwristx - rightwristx)
    }
}
