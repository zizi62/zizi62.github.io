"use strict";document.querySelector(".slider__scroll").addEventListener("click",function(){var t=document.documentElement.clientHeight;!function e(){window.pageYOffset<t&&(window.scrollBy(0,10),setTimeout(e,0)),window.pageYOffset>t&&window.scrollTo(0,t)}()});   window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }

      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  pageScroll.addEventListener('click', scrollDown);
}();