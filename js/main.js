// $(function(){

// var tagP = $('.mainText p');
// tagP.hide(4000).text('Новый текст').show(1000);

// });

$(function () {
  // $('.mainText').click(function(e){
  // alert(e.screenX+" " +e.screenY);
  // })

  // $('.btn,.arrowDown').click(function(e){
  // e.preventDefault();
  // })

  // $('.btn,.arrowDown').click(function(e){
  //     return false;
  //     })

  // $('.mainText').click(function(e){
  //     alert(e.altKey);
  //     })

  // var link = $('menu li a ');
  // link.hover(
  //     function(){
  //         $(this).addClass('border');
  //     },function(){
  //         $(this).removeClass('border');
  //     });

  // $("p").on("click",function(){
  //     $(this).hide();
  // });

  // $("input").keypress(function(){
  //     $(this).hide();
  // })

  // $("p").mouseenter(function(){
  //     $(this).hide();
  // });

  // $('.logo').mouseover(function(){
  //     alert('Сработало событие')
  // })

  // $('.logo').mouseout(function(){
  //     alert('Сработало событие')
  // })

  // $('.logo').click(function(){
  //     alert('Сработало событие')
  // })

  $(".logo").mousemove(function () {
    alert("Сработало событие");
  });

  // $('.logo').mouseup(function(){
  //     alert('Сработало событие')
  // })

  // var mainText = $('.mainText').clone();
  // $('body').append(mainText);

  // alert($('li').length);

  // $('.icons img').each(function(){
  //     if ($(this).attr('src')=='img/icon3.png') {
  //         $(this).fadeOut(2000).fadeIn(2000);
  //     }
  // })

  // $('.mainText').before('<span>Новый блок</span>');
  // $('.mainText').after('<span>Новый блок</span>');
  // $('.mainText').append('<span>Новый блок</span>');
  // $('.mainText').prepend('<span>Новый блок</span>');

  // $('nav menu li a').animate({
  //     'font-size':'24px',
  //     'padding':'20px'
  //     },3000,function(){
  //         alert('успешная анимация')
  //     });

  // $('nav menu li a').css({
  //     'color':'#ff0000',
  //     'font-size':'24px',
  //     'padding':'10px'
  // })

  // $('nav menu li a').css('color','red').css('font-size','25px')

  // alert($('nav menu').css('font-size'));

  // $('nav menu').addClass('border');

  // var src =  $('.logo img').attr('src');
  // alert(src);

  // var src =  $('.logo img').attr('src', 'img/icon1.png');
  // alert(src);

  // $('.logo img').attr('title','Подсказка');

  // $('.logo img').removeAttr('src');

  // $('.mainText p').fadeIn(3000);

  // $('.mainText').fadeTo(4000,0.2).fadeTo(2000,1);

  $(".mainText").slideUp(1000).slideDown(2000);

  // function elementOut (element,time) {
  // if (time>5000 || time<1000 ) {
  //     return false;
  // }
  // else {
  //     var Classname = "." + element;
  //     $(Classname).fadeOut(time).fadeIn(3000);
  // }

  // }
  // elementOut('mainText',3000);

  // var w = $('.btn').width();
  // alert(w);

  // var h = $('.btn').height();
  // alert(h);

  // var P = $('.mainText p').text("новый текст");

  var P = $(".mainText p").hide(3000);
  var P = $(".mainText p").show(3000);

  // var tagP = $('.mainText p')
  // tagP.text('новый текст').hide(2000).show(3000);

  // $('.mainText').click(function(e){
  // alert(e.altKey);
  // })

  // $('.btn, .arrowDown').click(function(){
  //     return false;
  //     })

  // $('.btn, .arrowDown').click(function(e){
  //     var answer = confirm ('Вы хотите отправить данные ?');
  //     if (!answer) {
  //         e.preventDefault();
  //     }
  //     })

  // $('.btn, .arrowDown').click(function(e){
  //     e.preventDefault();
  //     })

  // var link = $('menu li a');
  // link.mouseover()
  // link.mouseout(function(){
  //     $(this).removeClass('border');
  // })

  // $('nav menu li').hide(5000);

  // $('button').click(function(){
  //     $("p").toggle(3000);
  //   });

  // var link = $('menu li a');
  // link.hover(
  //     function(){
  //     $(this).addClass('border');
  // },  function(){
  //     $(this).removeClass('border');
  // });

  //

  // $('.arrowDown').click(function(){
  // var clone = $(this).clone();
  // $(this).after(clone);

  // })

  // $('.logo').mouseover(function(){
  // window.alert('сработало событие')
  // });

  // $('.logo').mouseout(function(){
  // window.alert('сработало событие')
  // });

  // $('.logo').click(function(){
  //     window.alert('сработало событие')
  //     });

  $(".logo").mousemove(function () {
    window.alert("сработало событие");
  });

  // $('.logo').mouseup(function(){
  //     window.alert('сработало событие')
  //     });

  $("#myDiv2").click(function () {
    $("#myDiv").toggle(3000);
  });

  // $('img,a').css('background','#222');
  // $('img[alt]').css('background','#222');

  // var mainText = $('.mainText').clone();
  // $('body').append(mainText);

  // var mainText = $('.mainText').remove();
  // $('nav').before(mainText);

  // $('nav menu li a').css({
  //     'color':'#ff0000',
  //     'font-size':'30px',
  //     'padding':'10px'
  // })

  // alert($('div').length);

  // $('.icons img').each(function(){
  // if ($(this).attr('src')=='img/icon3.png') {
  //     $(this).fadeOut(1000);
  // }
  // });

  // $('.mainText').before('<span>Новый блок</span>');
  // $('.mainText').after('<ins>НОВЫЙ БЛОК</ins>');
  // $('.mainText').append('<strike>текст</strike>');
  // $('.mainText').prepend('<i>новый текст</i>');

  // $('nav menu li a').animate({
  //     'font-size':'30px',
  //     'padding':'10px'
  // },3000,function(){
  //     window.alert("Успешная анимация")
  // });

  // $('nav menu li a').css('color','#ff0000').css('font-size','25px');

  // $('nav menu').addClass('border');

  // $('nav menu').addClass('border').removeClass('border');

  // var tagP = $('.mainText p').text(); //тут можно написать новый текст
  // alert(tagP);
  // $('.icons > div').hide(4000).show(3000);

  // $('.mainText').fadeTo(4000,0.1).fadeTo(2000,1);

  // $('.mainText').slideUp(2000).slideDown(1000);

  // function elementOut (element,time) {
  // if (time>5000 || time <1000||isNaN(time)){
  // return false;
  // } else {
  //     var className = "."+element;
  //     $(className).fadeOut(time).fadeIn(3000);
  //            }

  //     }
  // elementOut('mainText',5000);

  // $('.mainText').html('<b>НОВЫЙ ТЕКСТ</b>');
  // $('.mainText').fadeOut(2000).fadeIn(3000);

  // var w = $('.btn').width();
  // alert(w);
  // var h = $('.btn').height();
  // alert(h);

  // $("p").click(function(){
  //     $(this).hide("slow");
  // });

  // var tagP = $('.mainText p').hide(2000)
  // $('.mainText p').show(2000);
  // var tagP = $('.mainText p');
  // tagP.hide(1000).text('Новый текст').show(1000);

  // $('.icons > div').hide(3000).show(3000);

  $("#dd").append("YES!");

  // $("#a1").val("John Doe");
});

$("#recive");
$(".logo");
$("a");
$("nav menu li");
$(".icons > div");
$(".icons img + h4");
$("img[height=150]");
$("img [src^=img/]");
$("img[src$=.png]");
$("a[href*=#]");
$("menu li:even");
$("menu li:odd");
$("img:not(.logo img)");
$("li:has(a)");
$("li:has(a)");
$("p:contains(client)");
$("li:first");
$("li:last");

// $(function(){
//    $(':submit').click(function(e) {
//       $('.text2').attr('disabled','disabled');
//       e.preventDefault();
//    });
//    $(':reset').click(function(e) {
//       $('.text2').removeAttr('disabled');
//       e.preventDefault();
//    });
// });
