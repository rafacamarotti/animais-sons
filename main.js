function startclassification(){
    navigator.mediaDevice.getUserMedia({ audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/UX3FYf54B/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
cachorro=0;
baleia=0;
function gotResults(error, results){
 if(error){
    console.error(error)
 }
 else{
    console.log(results);
    random_number_r = Math.floor(Math.random() *255) +1;
    random_number_g = Math.floor(Math.random() *255) +1;
    random_number_b = Math.floor(Math.random() *255) +1;
    document.getElementById("result_label").innerHTML = 'posso ouvir'+ results[0].label; 
    document.getElementById("result_confidence").innerHTML = 'precisão'+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img= document.getElementById('alien1'); 
  
    if(results[0].label=="latido"){
        img.src='alien1.gif';
      
    }else if(results[0].label=="baleia"){
        img.src='alien1.png';
       
        }else if(results[0].label=="sino"){
        img.src='alien1.png';
       
        }else{
        img.src='alien1.png';
      
        }
 }
}
