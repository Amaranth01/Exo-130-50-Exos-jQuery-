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
    $('#texte').keyup(function() {
        if ($('#texte').val() !== content) {
            content = $('#myContent').val();
            alert('Content has been changed');
        }
    });
});

//7
$('.bold').css('font-weight', 'bold');

//8 et 17
$('#color').css({
    "background": "red",
    "width" : "40px",
    "height" : "40px"
}).mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Left Mouse button pressed.');
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
    }
});

//9 et 16
$("#bigDiv").append($("#move"));
$('#bigDiv').css('background', 'blue').removeAttr('style');

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
$("#buttonInput").click(function(){
    let value = $("#input").val();
    alert(value);
});

//15
$('div').removeClass("del");

//18
function isInt(n) {
    return n % 1 === 0;
}
isInt();
//19
$('#input').on('keypress',function(e) {
    if(e.which === 13) {
        alert('You pressed enter!');
    }
});

//20
let trLength = $('tr').length;
console.log(trLength);

//21
$('#valueTexte').click(function (){
    let valText = $("#texte").val();
    console.log(valText);
})

//22
$("#containerRadio").append('<input type="radio" />');

//23
let position = $('#ingredient').offset();
console.log(position);

//24
let upper = "hello world";
let up = document.querySelector('#up')
up.innerHTML = upper.toUpperCase();

//26
$('#del').closest('tr').remove();

//27
$("#sub").text('change')

//28
let myOptions = {
    val1 : 'text1',
    val2 : 'text2'
};
$.each(myOptions, function(val, text) {
    $('#options').append( new Option(text,val) );
});

//29
$('body').css('background', 'green');

//30
$('table tr:not(:first)').remove();

//31
let val = $('#options>option:selected').text();
console.log(val)

//32
$('a').removeAttr('href');

//33
$('.radio').attr('class','choisi');

//34
$('ul').addClass('.ul').css('font-weight', 'bold');

//35
let count = $('#selected p').length;
console.log(count)

//37
