$(document).ready(function(){


    // $(".right").click(function(){
    //     if($(".active").next().length != 0){
    //         $(this).removeClass("active")
    //         $(".active").next().addClass("active")
    //     }
    //     else{
    //         $(".active").removeClass("active")
    //         $(".active").parent().children().eq(0).addClass("active")
    //     }
    // })

    function right(){
        let activeİmage = $(".active");
        if(activeİmage.next().length != 0){
            $(activeİmage).removeClass("active")
            $(activeİmage).next().addClass("active")
        }
        else{
            $(activeİmage).removeClass("active")
            $(activeİmage).parent().children().eq(0).addClass("active")
        }
    }

    function left(){
        let activeİmage = $(".active");
        if(activeİmage.prev().length != 0){
            $(activeİmage).removeClass("active")
            $(activeİmage).prev().addClass("active")
        }
        else{
            $(activeİmage).removeClass("active")
            $(activeİmage).parent().children().eq(2).addClass("active")
        }
    }





    $(document).on("click",".right",right)
    $(document).on("click",".left",left)
    $(document).on("mouseover",".right",right)
    $(document).on("mouseover",".left",left)

})