$(function () {
    $('#triple').tooltip()
});

$('#triple').on('click',function(){
    $('.sidebar').toggle();
    if($('.arreglar').hasClass('corregido')){
        $('.arreglar').removeClass('corregido');
    }
    else{
        $('.arreglar').addClass('corregido');
    }
    
});
$('.menu li:has(ul)').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('activado')){
        $(this).removeClass('activado');
        $(this).children('ul').slideUp();
    }
    else{
        $('.menu li ul').slideUp();
        $('.menu li').removeClass('activado');
        $(this).addClass('activado');
        $(this).children('ul').slideDown();
    }
});
/*
$('.menu li a').on('click',function(){
    if($(this).parents('li').hasClass('activado') ==true){
        $('.menu li').removeClass('activado');
    }else{
        $('.menu li').removeClass('activado');
        $(this).parents('li').addClass('activado');
    }
});*/