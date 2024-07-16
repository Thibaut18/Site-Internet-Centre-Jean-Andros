import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/testimonyslider.scss';

const TestimonySlider = () => {
    const phrases = [
        "\"Vous êtes une équipe formidable, merci pour le bonheur que vous m'avez apporté.\"",
        "\"La ligne de bonne conduite qui fut celle des moniteurs (amitié, cohésion, camaraderie) m'a guidé tout au long de ma vie.\"",
        "\"Rapport d'inspection 2016 : Il est important de noter qu'il a été particulièrement apprécié le classement et la tenue des éléments administratifs.\"",
        "\"Rapport d'inspection 2016 : On perçoit une ambiance très chaleureuse et presque familiale particulièrement sereine.\"",
        "\"Rapport d'inspection 2016 : Il est assez rare de constater autant de vigilance et d'accompagnements.\"",
        "\"Conclusion du rapport d'inspection 2016 : Un très grand sérieux administratif et pédagogique est constaté, un centre particulièrement à cheval sur la sécurité, le bien être des enfants et de l’équipe en place.\""
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('up'); // Direction de l'animation

  const prevSlide = () => {
    setDirection('down'); // Définir la direction vers le bas
    const index = currentIndex === 0 ? phrases.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection('up'); // Définir la direction vers le haut
    const index = currentIndex === phrases.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimony-slider">
      <FontAwesomeIcon icon={faChevronUp} onClick={prevSlide} className="testimony-slider-arrow up" />
      <div className="testimony-slider-content">
        {phrases.map((phrase, index) => (
          <div key={index} className={`testimony-slide ${index === currentIndex ? 'active' : ''} ${direction}`}>
            <p>{phrase}</p>
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronDown} onClick={nextSlide} className="testimony-slider-arrow down" />
      <div className="testimony-dots">
        {phrases.map((_, index) => (
          <span
            key={index}
            className={`testimony-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonySlider;