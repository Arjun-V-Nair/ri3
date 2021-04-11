function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/C24r0tRHv/model.json",modelLoaded);
    }
    function draw(){
        image(video,0,0,300,300);
        classifier.classify(video,gotResult);
    }
    function preload(){
    
    }
    function modelLoaded() {
        console.log("Model is loaded Model is loaded Model is loaded Model is loaded Mod...");
    }
    function gotResult(error,results) {
        if (error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].label;
        }
        }
        