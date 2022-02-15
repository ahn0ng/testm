// 최적화 
var screen_height;
var drag_top_height;
var route_position;

function resize_home(){    
    screen_height =$(window).height();
    var route_height = screen_height*0.85;
    var menu_height = screen_height*0.95;
    // route_position = screen_height-90;
    route_position = (screen_height*0.9)-35;
    

    $("#wrap").css("height",screen_height)
    $("#route").css("top",route_position);
    $("#route").css("height",route_height);
    // $("#list").css("height",menu_height);
}

$(function() {

    //최적화 기능 열었다 닫기
    var a = 0;
    var b = 0;
    
    $("#route").css("top",route_position);
    resize_home()

    $(window).resize(function() {
        resize_home()
    });
    
    $(".drag_bar").click(function(){
        a++;
        b=a%2;

        if(b==1){
            $("#route").stop().animate({"top":"80px"},500,"linear");
        }else{
            $("#route").stop().animate({"top":route_position},500,"linear");
        }
    });

    // 리스트와 메뉴 열었다 닫기 
    // 리스트 변수
    var c = 0;
    var d = 0;
    // 메뉴 변수
    var e = 0;
    var f = 0;
    // 로그인 변수
    var g = 0;
    var h = 0;
    // 회원가입 변수
    var i = 0;
    var j = 0;
    // 비번찾기 변수
    var k = 0;
    var l = 0;


    $("#menu_btn").click(function(){
        c++;
        d=c%2;

        if(d==1){
            $("#menu_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/71d4b0/menu.png") no-repeat center').css('background-size','contain');
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#list").hide();
            e=e*0;
            f=f*0;
            $("#menu").show();
            
        }else{
            $("#menu_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
            $("#menu").hide();
            i=i*0;
            j=j*0;
            $("#register").hide();
            g=g*0;
            h=h*0;
            $("#login").hide();
            k=k*0;
            l=l*0;
            $("#password").hide();
            $('.menuBtn').prop('checked',false);
        }
    });
    $("#list_btn").click(function(){
        e++;
        f=e%2;

        if(f==1){
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/71d4b0/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#menu_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
            $("#menu").hide();
            c=c*0;
            d=d*0;
            $("#list").show();
            i=i*0;
            j=j*0;
            $("#register").hide();
            g=g*0;
            h=h*0;
            $("#login").hide();
            k=k*0;
            l=l*0;
            $("#password").hide();
            $('.menuBtn').prop('checked',false);

    
            
        }else{
            $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
            $("#list").hide();
    
        }
    });

    // 홈 버튼기능

    $("#home_btn").click(function(){

        if(d==1 || f==1){
        c=c*0;
        d=d*0;
        e=e*0;
        f=f*0;
        g=g*0;
        h=h*0;
        i=i*0;
        j=j*0;
        k=k*0;
        l=l*0;
        $('.menuBtn').prop('checked',false);
        $("#menu").hide();
        $("#list").hide();
        $("#menu_icon").css('background','url("https://img.icons8.com/fluency-systems-filled/48/000000/menu.png") no-repeat center').css('background-size','contain');
        $("#list_icon").css('background','url("https://img.icons8.com/material-outlined/50/000000/ingredients-list.png") no-repeat center').css('background-size','contain');
        $("#login").hide();
        $("#register").hide();
        $("#password").hide();

        }else if(b==1){
            b=b*0;
            a=a*0;
            $("#route").stop().animate({"top":route_position},500,"linear");
        }else{
            a++;
            b=a%2;
            $("#route").stop().animate({"top":"80px"},500,"linear");
        }
    });

    // 로그인

    $("#loginout_btn").click(function(){
        g++;
        h=g%2;

        if(h==1){
            $("#menu").hide();
            $("#login").show();
            
        }else{
            $("#menu").show();
            $("#login").hide();
        }
    });

    $("#back_btn").click(function(){
        g=g*0;
        h=h*0;
        $("#login").hide();
        $("#menu").show();
    });

    // 회원가입

    $("#register_btn").click(function(){
        i++;
        j=i%2;

        if(j==1){
            $("#register").show();
            $("#login").hide();
        }else{
            $("#login").show();
            $("#register").hide();
        }
    });

    $("#back_btn2").click(function(){
        i=i*0;
        j=j*0;
        $("#register").hide();
        $("#login").show();
    });

    $("#login_pg").click(function(){
        i=i*0;
        j=j*0;
        $("#register").hide();
        $("#login").show();
    });

    // 비밀번호 찾기
    
    $("#password_btn").click(function(){
        k++;
        l=k%2;

        if(l==1){
            $("#password").show();
            $("#login").hide();
        }else{
            $("#login").show();
            $("#password").hide();
        }
    });

    $("#back_btn3").click(function(){
        k=k*0;
        l=l*0;
        $("#password").hide();
        $("#login").show();
    });

    $("#login_pg2").click(function(){
        k=k*0;
        l=l*0;
        $("#password").hide();
        $("#login").show();
    });


    $(".menu_back_btn").click(function(){
        $('.menuBtn').prop('checked',false);
    });


});




