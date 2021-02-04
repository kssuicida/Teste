$(function(){

        var ex = $('.ex1'); //criando a variavel fora da função de click pois se criada dentro seria valida somente para aquele elemento
        var a = 0;
        var b = 0;
        
    $('.ev1').click(function(){
        $(this).css("background","#ccc");
        ex.text("Você Clicou!");
    });

     $('.ev2').dblclick(function(){
        $(this).css("background","#ccc");
        ex.text("Você deu dois Cliques!");
     });
     $('.ev3').focusin(function(){
        $(this).css("background","#ccc");
        ex.text("Você deu Foco!");
     }).focusout(function(){
        $(this).css("background","#000");
        ex.text("Você tirou o Foco!");
     });
     $('.ev4').hover(function(){
        $(this).css("background","#ccc");
        ex.text("Você passou o Mouse!");
     });
     $('.ev5').mousedown(function(){
        $(this).css("background","#ccc");
        ex.text("Você apertou o botão do Mouse!");
     }).mouseup(function(){
        $(this).css("background","#000");
        ex.text("Você soltou o botão do Mouse!");
     });
     $('.ev6').mouseenter(function(){
        a +=1;
        ex.text("Entradas do Mouse: "+a);
    }).mouseout(function(){
        ex.text("Saidas do Mouse: "+a);
    });
    $('.ev7').mouseover(function(){
        b +=1;
        ex.text("Mouse Over: "+b);
    }).mouseleave(function(){
        ex.text("Mouse Leave");
    });
    $('.ev8').mousemove(function(move){
        var localx = move.pageX;
        var localy = move.pageY;
        ex.text("Movimento X: "+localx+" - Movimento Y: "+localy);
    });


    
});