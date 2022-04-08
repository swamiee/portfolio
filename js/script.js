window.addEventListener('wheel',scrollAni);
window.addEventListener('load' , pfTitle);
var offset;
var sectionCounter = 0;
var wheelCounter = 0;



function scrollAni(e){
    var go = wheelCounter%5;
    if(e.wheelDelta>0){
        wheelCounter++;
        if(go == 0 && sectionCounter>0){
            console.log("Up");
            sectionCounter--;
        }
       
    }else{
        if(go == 0 && sectionCounter>5){
            console.log("Down");
            sectionCounter++;
        }
        
    }
    offset = innerHeight*sectionCounter;

$("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
};



$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});

var $gnb =$(".gnb a");
$gnb.click(
    function(){
        sectionCounter = $(this).attr('dataNum');

       offset = innerHeight*sectionCounter;
       $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    }
);

function pfTitle(){
    $(".pptitle").addClass("on");
}

$(".gnb li a").click(
    function(){
        sectionCounter = $(this).attr("dateNum");
        offset = innerHeight*sectionCounter;
        $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    }
)

// /* burger */

// $(".burger").click(
//     function(){
//         $(this).toggleClass("on");
//         $("#popupNAV").toggleClass("on");

//     }
// );