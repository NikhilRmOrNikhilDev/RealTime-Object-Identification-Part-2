video = "";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(500,300)
    canvas.position();

}
function draw(){
    image(video, 0, 0, 500, 300);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modeloaded())
    document.getElementById("btn-3").innerHTML = "Status: Detecting Object"
}
function modeloaded(){
    console.log('Modeloaded!!!')
    status = true
    video.loop();
    video.speed(1);
    video.volume(0);
}