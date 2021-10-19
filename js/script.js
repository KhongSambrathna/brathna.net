
//Change Class Menu
function changeClass(x){
    x.classList.toggle("fa-window-close");  
}
function changeClassResize(x){
    x.classList.toggle("fa-bars");  
}
//Navbar toggle button
$(document).ready(function(){
    window.addEventListener('resize', function(event){
    var w = window.innerWidth;
    if(w<750){
        $(".responsive").hide();
    } else {
        $(".responsive").show();
    }
    });
    $(".menu-toggle").click(function(){
        $(".responsive").fadeToggle(200);
    });
});
//Footer

//Get Height
function getHeightFootContent_1() {     
    divElement = document.querySelector("#foot-content-1");
    elemHeight = divElement.offsetHeight;
    return elemHeight;
}
function getHeightFootContent_2() {
    divElement = document.querySelector("#foot-content-2");
    elemHeight = divElement.offsetHeight;
    return elemHeight;
}
function getHeightFootContent_3() {
    divElement = document.querySelector("#foot-content-3");
    elemHeight = divElement.offsetHeight;
    return elemHeight;
}
$(document).ready(function(){
    var w = window.innerWidth;
        if(w<750) {
            let sum = getHeightFootContent_1() + getHeightFootContent_2() + getHeightFootContent_3();
            $("footer").css(
                // 40 is height of padding and margin of #footer-content
                "height", sum + 40 + "px"
            );
        } else {
            $("footer").css(
                // 10 is padding in footer tag
                "height", getHeightFootContent_1() + 10 + "px"
            );
        }
    $(window).resize(function(){
        var w = window.innerWidth;
        if(w<750) {
            let sum = getHeightFootContent_1() + getHeightFootContent_2() + getHeightFootContent_3();
            $("footer").css(
                // 40 is height of padding and margin of #footer-content
                "height", sum + 40 + "px"
            );
        } else {
            $("footer").css(
                // 10 is padding in footer tag
                "height", getHeightFootContent_1() + 10 + "px"
            );
        }
    });
});g