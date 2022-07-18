$(document).ready(function(){
    $(".tab li:first").addClass("active")
    $(".tl1").show()
    $(".tab li a").mouseenter(function(event){
        $(".tab li:first").removeClass("active")
        var num = $(this).parent().index()
        $(".tabCont .tl").hide()
        $(".tabCont .tl").eq(num).show()
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")

        event.preventDefault()
    })

    $(".midtab li:first").addClass("active")
    $(".mtl1").show()
    $(".midtab li a").mouseenter(function(event){
        $(".midtab li:first").removeClass("active")
        var num = $(this).parent().index()
        $(".midtabCont .mtl").hide()
        $(".midtabCont .mtl").eq(num).show()
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")

        event.preventDefault()
    })
    
    // gnb 서브
    $(".sub > a").mouseenter(function(){
        $(this).next().slideDown("fast")
        $(this).parent().siblings().children("ul").hide()
        // $(this).siblings("ul").hide()
    })
    $(".sub > ul").mouseleave(function(){
        $(".sub > ul").hide()
    });

    // 사이트맵 토글
    $(".bartxt").click(function(event){
        $(".sitemap").toggleClass("on")
        $(".hidden").toggleClass("on")
        event.preventDefault()
    })

    // 슬라이더
    var mySlider = $(".bxslider-viewport").bxSlider({
        mode:"horizontal",    // 가로 수평으로 슬라이드된다.
        speed:500,        // 이동 속도를 설정한다.
        pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
        moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
        slideWidth:300,    // 슬라이드 너비를 설정한다.
        minSlides:6,    // 최소 노출 개수를 설정한다.
        maxSlides:6,    // 최대 노출 개수를 설정한다.
        slideMargin:10, // 슬라이드 간의 간격을 설정한다.
        controls:false    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
        
    });
    $(".bx-prev").on("click", function(){
        // 이전 슬라이드 배너로 이동된다.
        mySlider.goToPrevSlide();
        // <a>의 링크를 차단한다.
        return false;
    });
    $(".bx-next").on("click", function(){
        // 이전 슬라이드 배너로 이동된다.
        mySlider.goToNextSlide();
        // <a>의 링크를 차단한다.
        return false;
    });
});