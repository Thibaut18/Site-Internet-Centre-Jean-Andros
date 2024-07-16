import Navbar from "../components/Navbar";
import { useEffect } from 'react';
import logo from "../assets/Images/logo.png"
import "../styles/header.scss"
import { useNavigate } from "react-router-dom";

function Header({ mainContainerRef }) {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            const currentScrollTop = mainContainerRef.current.scrollTop;

            if (currentScrollTop > 0) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        const mainContainer = mainContainerRef.current;

        if (mainContainer) {
            mainContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainContainer) {
                mainContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [mainContainerRef]);

    const redirectToHomePage = () => {
        navigate('/accueil');
    }

    return (
        <header className="header">
            <div className="header-content">
            <img src={logo} className="header-logo" onClick={redirectToHomePage}/>
            <Navbar/>
            </div>
        </header>
    );
}

export default Header;

