//Create date variable
var date = new Date()
let displayDate = "Date : "+date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function () {
    $("#display_date").html(displayDate)
})

//Define variable to store predicted emotion
let predicted_emotion

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        $.ajax({
            type:"POST",
            url:"/predict-emotion",
            data: JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result){
                predicted_emotion = result.predicted_emotion
                predicted_emotion_img_url = result.predicted_emotion_img_url

                $("#prediction").html(predicted_emotion)
                $("#emo_img_url").attr("src",predicted_emotion_img_url )
            },
            error : function(result){
                alert(result.responseJSON.message)
            }
            
        });
    });
})

