noseX=0;
noseY=0;
differece=0;
rightWristx=0;
leftWristx=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150); 
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = " + noseY );
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        differece = leftWristx - rightWristx;
        console.log("leftWristX " + leftWristx + "rightWristx =" + rightWristx + "differece =" + differece);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#52d8f2');  
    fill('#f58d0f');
    stroke('#0ff5f5');
    square(noseX, noseY, differece);
}


