
window.onload = function() {

    var openMenu = document.querySelector('.page-header__nav-toggle');
    var nav = document.querySelector(".main-nav");
    var width = window.innerWidth;
    if (width >=768 ) {
        nav.classList.remove("main-nav--closed");
    }

    openMenu.addEventListener("click", function() {
        event.preventDefault();
        if ( openMenu.classList.contains("page-header__nav-toggle--cross") ) {
            openMenu.classList.remove("page-header__nav-toggle--cross");
            nav.classList.add("main-nav--closed");
        } else {
            nav.classList.remove("main-nav--closed");
            openMenu.classList.add("page-header__nav-toggle--cross");
        }
    });

    window.onresize = function(event) {
        var width = window.innerWidth;
        if (width >= 768) {
            nav.classList.remove("main-nav--closed");
        } else {
            if ( openMenu.classList.contains("page-header__nav-toggle--cross") ) {
                nav.classList.remove("main-nav--closed");
            } else {
                nav.classList.add("main-nav--closed");
            }
        }
    };
};
