import googlemapImg from "../assets/Images/googlemap.png"
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import "../styles/contactpage.scss"

function ContactPage () {
    return (
        <section className="contact-section">
            <div className="googlemap-div">
            <a rel="noreferrer "href="https://www.google.fr/maps/dir/Vierzon/Le+Carruge,+71260+P%C3%A9ronne/@46.6575453,3.6207987,8.75z/data=!4m13!4m12!1m5!1m1!1s0x47fada32ae36c057:0x40dc8d7053a7990!2m2!1d2.069791!2d47.221438!1m5!1m1!1s0x47f30d3f7c598767:0xce5394becaf4f944!2m2!1d4.7876994!2d46.4324494" target="_blank">
            <img className="googlemap-img" src={googlemapImg}></img>
            <p className="link-txt">Clique ici pour voir sur GoogleMap</p>
            </a>
            </div>
            <div className="contact-details">
            <ContactDetails />
            </div>
            <div className="contact-form">
                <ContactForm />
            </div>
    </section>
);
}

export default ContactPage