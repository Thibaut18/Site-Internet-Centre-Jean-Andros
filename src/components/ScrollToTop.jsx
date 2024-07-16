import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function smoothScrollToTop(element) {
    const startPosition = element.scrollTop;
    const change = -startPosition;
    const duration = 700; 
    let startTime = null;

    function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const nextScrollPosition = easeInOutQuad(timeElapsed, startPosition, change, duration);

    element.scrollTop = nextScrollPosition;

    if (timeElapsed < duration) {
        requestAnimationFrame(animation);
    }
    }

    function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
    t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function ScrollToTop({ mainContainerRef }) {
    const location = useLocation();

    useEffect(() => {
    if (mainContainerRef.current) {
        smoothScrollToTop(mainContainerRef.current);
    }
    }, [location, mainContainerRef]);

    return null;
}

export default ScrollToTop;
