$(window).scroll(()=> {
    changeNav()
})

changeNav()

function changeNav(){
    if ($(window).scrollTop() > $('#home').outerHeight(true) - $('#main-nav').outerHeight(true)) {
        $('#main-nav').css ('backgroundColor', '#09c')
        $('.nav-container').css ('width', '80%')
    }else{
        $('#main-nav').css ('backgroundColor', 'transparent')
        $('.nav-container').css ('width', '90%')
    }
}