//1
$('#sub').attr('disabled', true);
$('input').click(function(){
    $('button').attr('disabled',!this.checked);
});

//3
setInterval(function() {
    $("#clignote").fadeOut(1000).fadeIn(1000);
}, 3000 );

//4
$(document).ready(function(){
    $("tr:even").css("background-color","red");
});

//5
$('a').click(function () {
    window.print();
});

//6
let char = "5";//max charterer
$("#texte").keydown(function(){
    let msgLength = $(this).val().length;
    if (msgLength > char) {
        $(this).val($(this).val().substring(0, char));
    }
});

//7
$('.bold').css('font-weight', 'bold');

//8
$('#color').css({
    "background": "red",
    "width" : "20px",
    "height" : "20px"
});

//9
$("#bigDiv").append($("#move"));
$('#bigDiv').css('background', 'blue');

//10
let obj = {
    animal : "dog",
    value : "ouaf",
    eat : "snack"
}
$('#object').text(obj.animal + " " + obj.value + " " + obj.eat);

//11
$("#ingredient").click(function(){
     $("ul").append("<li>vinaigre</li>");
});

//12
$('#options').children().remove().end().append('<option selected value="Option">Nouvelle option</option>');

//13
$('#underline').css('text-decoration', 'underline');

//14
