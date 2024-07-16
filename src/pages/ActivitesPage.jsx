import Slider from "../components/Slider"
import "../styles/activitespage.scss"
import babyfoot from "../assets/Images/Activites/Slider/babyfoot.jpg"
import bouee2 from "../assets/Images/Activites/Slider/bouee2.jpg"
import velo from "../assets/Images/Activites/Slider/velo.jpg"

function ActivitesPage () {
    const slides = [
        {
          url: babyfoot,
          alt: 'Description de l\'image 1'
        },
        {
          url: bouee2,
          alt: 'Description de l\'image 2'
        },
        {
          url: velo,
          alt: 'Description de l\'image 3'
        }
      ]
    return (
<div className="activites-section">
  <div className="activites-section-slider">
<Slider slides={slides} text="Ceci est un test" />
</div>
<div className="activites-section-txt">
  <h1>Les activités</h1>
  <p>En fonction des qualifications des animateurs, des désirs des enfants, de multiples activités sont proposées quotidiennement: activités manuelles, création de saynètes, chant, bibliothèque….  
Pendant le séjour, 1 ou 2 nuits de camping peuvent être proposées aux enfants en fonction de leur âge. Le parc du Moulin, le camping départemental d’Azé, les campings municipaux de Cluny ou de Pont de Vaux offrent toutes les conditions de sécurité optimales et permettent des découvertes et des activités variées et intéressantes.  
La région mâconnaise offre de nombreuses occasions de découvertes : grottes et musée préhistorique d’Azé, gouffre de Blanot, musée de Solutré, panoramas au mont Saint Romain ou à Burgy, visite d’exploitations agricoles (viticulteurs, éleveurs, apiculteurs…), randonnées dans les chemins ou dans la forêt...</p>
</div>
</div>
    );
}

export default ActivitesPage 