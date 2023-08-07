nosex=0;
nosey=0;
clown="";
function preload(){
clown=loadImage('https://i.postimg.cc/SKznvTJy/noseyyyy.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is ready")
}

function gotPoses (results){

    if(results.length>0){
        console.log(results);
 nosex=results[0].pose.nose.x;
 nosey=results[0].pose.nose.y;
 
        console.log("nose x is",results[0].pose.nose.x)
        console.log("nose y is",results[0].pose.nose.y)

    }
}


function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nosex,nosey,30);
image(clown,nosex-50,nosey-50,70,70)
}

function take_snapshot(){
    save('clownpic.png');
}