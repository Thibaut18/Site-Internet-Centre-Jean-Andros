import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import "../styles/slider.scss"

function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <FontAwesomeIcon icon={faChevronLeft} onClick={goToPrevious} className="slider-arrow left" />
      <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronRight} onClick={goToNext} className="slider-arrow right" />
      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;