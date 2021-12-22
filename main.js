nose_x=0;
nose_y=0;
left_wristx=0;
right_wristx=0;
difference=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,550);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x= "+nose_x+"nose y= "+nose_y);
        left_wristx=results[0].pose.leftWrist.x;
        right_wristx=results[0].pose.rightWrist.x;
        console.log("right wrist= "+right_wristx+"left wrist= "+left_wristx);
        difference=floor(left_wristx-right_wristx);
        console.log("difference = "+difference);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    background(51);
    fill('#EEDD82');
    stroke('#000000');
    square(nose_x,nose_y,difference);
}
