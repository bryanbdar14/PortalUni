$(function () {
    $('#triple').tooltip()
});

$('#triple').on('click',function(){
    $('.sidebar').toggle();
    if($('.cuerpo div').hasClass('completado')){
        $('.cuerpo div.descripcion').removeClass('completado');
    }
    else{
        $('.cuerpo div.descripcion').addClass('completado');
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

$('.tercera-header span').on('click',function(){
    var a=$(this).parents('.col-lg-12').siblings('.col-lg-12');

    if($(a).hasClass('ocultar')){
        $(a).children('div').slideUp(0);
        $(a).removeClass('ocultar');
    }
    else{
        $(a).children('div').slideDown(0);
        $(a).addClass('ocultar')
    }
    /*var a = $(d).parent().eq(0);
    var b = $(a).parent().eq(0);
    var c = $(b).parent().eq(0);
    var e = $(c).siblings('div').eq(1);
    if($('e').hasClass('ocultar')){
        $('e').children('div').slideUp(0);
        $('e').removeClass('ocultar');
    }
    else{
        $('e').children('div').slideDown(0);
        $('e').addClass('ocultar')
    }*/
});
    /*if($('.cuerpo div').hasClass('arreglado')){
        $('.cuerpo div.descripcion').removeClass('arreglado');
    }
    else{
        $('.cuerpo div.descripcion').addClass('arreglado');
    }
)};
$('.tercera-header span').on('click',function(d){
    var a = $(this).parent().eq(0);
    var b = $(a).parent().eq(0);
    var c = $(b).parent().eq(0);
    var d = $(c).siblings('div').eq(1);
    if($('.d').hasClass('ocultar')){
        $('.descripcion div div div').children('div').slideUp(0);
            $('.descripcion div div div').removeClass('ocultar')
    }
    else{
        $('.d').children('div').slideDown(0);
        $('.d').addClass('ocultar')
    }
});
/*
$('.flecha').on('click',function(){
    if($('.crecer li').hasClass('activado')){
        $('.crecer li.date2').slideDown(0);
        $('.crecer li').removeClass('activado');
        $('.descripcion div div div table.first-table').removeClass('mejorado')
    }
    else{
        $('.crecer li.date2').slideUp(0);
        $('.crecer li.date2').addClass('activado')
        $('.descripcion div div div table.first-table').addClass('mejorado')
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