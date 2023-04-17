import React, { useEffect } from 'react';
import $ from 'jquery';

const HeaderScript = () => {
  useEffect(() => {
    const shrinkHeader = 10;
    $(window).scroll(function() {
      const scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $('.header').addClass('shrink');
      } else {
        $('.header').removeClass('shrink');
      }
    });
  }, []);

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  return null;
};

export default HeaderScript;
