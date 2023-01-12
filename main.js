song = "";
function preLoad() {
    song = loadSound("music.mp3");
}
function setUp() {
  canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}
function draw() {
    Image(video, 0, 0, 600, 500());
}
function play() {
    song.play();
}
