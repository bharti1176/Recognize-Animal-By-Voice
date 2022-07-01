function StartClassification()
{
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qKhlvll2P/model.json',modelready);


}
function modelready()
{
    classifier.classify(gotResult);

}
function gotResult ()
{
    console.log("got result");
}