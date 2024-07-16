import Slider from "../components/Slider"
import "../styles/homepage.scss"
import firstimg from "../assets/Images/background3.jpg"
import accro from "../assets/Images/Slider/accrobranche.jpg"
import bouee from "../assets/Images/Slider/bouee.jpg"
import chateau from "../assets/Images/Slider/chateau.jpg"
import colo from "../assets/Images/Slider/colo.jpg"
import course from "../assets/Images/Slider/course.jpg"
import piscine from "../assets/Images/Slider/piscine.jpg"
import plongee from "../assets/Images/Slider/plongee.jpg"

function HomePage () {
    const slides = [
      {
        url: firstimg,
        alt: 'Description de l\'image 1'
      },
        {
          url: accro,
          alt: 'Description de l\'image 1'
        },
        {
          url: bouee,
          alt: 'Description de l\'image 2'
        },
        {
          url: chateau,
          alt: 'Description de l\'image 3'
        },
        {
          url: colo,
          alt: 'Description de l\'image 4'
        },
        {
            url:course,
            alt:'Description de l\'image 4'
        },
        {
            url:piscine,
            alt:'Description de l\'image 4'
        },
        {
            url:plongee,
            alt:'Description de l\'image 4'
        }
      ]
    return (
<div className='slider-section'>
    <div className="slider-section-txt">
        <h1>Colo de Péronnne en Bourgogne</h1>
        <h2>Centre Jean Andros</h2>
        <p>Séjours pour les 6 à 14 ans</p>

    </div>
<Slider slides={slides} text="Votre texte fixe ici" />
</div>
    );
}

export default HomePage