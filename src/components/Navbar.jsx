import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/navbar.scss";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const path = location.pathname;
        // Updated path checks for the new structure of the navbar
        if (path.includes('/accueil')) setActiveItem('Accueil');
        else if (path.includes('/a-propos')) setActiveItem('À Propos De Nous');
        else if (path.includes('/contact')) setActiveItem('Nous Contacter');
        else if (path.includes('/sejours')) setActiveItem('Les Séjours');
        else if (path.includes('/locaux-et-equipements')) setActiveItem('Les Locaux et équipements');
        else if (path.includes('/activites')) setActiveItem('Les Activités');
        else setActiveItem('');
    }, [location]);

    const handleNavigation = (path, name) => {
        navigate(path);
        setActiveItem(name);
    };

    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                <li className={`header-nav-li ${activeItem === 'Accueil' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/accueil', 'Accueil')}>
                    Accueil
                </li>
                <li className={`header-nav-li ${activeItem === 'À Propos De Nous' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/a-propos', 'À Propos De Nous')}>
                    À Propos De Nous
                </li>
                <li className={`header-nav-li ${activeItem === 'Nous Contacter' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/contact', 'Nous Contacter')}>
                    Nous Contacter
                </li>
                <li className={`header-nav-li ${activeItem === 'Les Séjours' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/sejours', 'Les Séjours')}>
                    Les Séjours
                </li>
                <li className={`header-nav-li ${activeItem === 'Les Locaux' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/locaux-et-equipements', 'Les Locaux')}>
                    Les Locaux & équipements
                </li>
                <li className={`header-nav-li ${activeItem === 'Les Activités' ? 'active' : ''}`}
                    onClick={() => handleNavigation('/activites', 'Les Activités')}>
                    Les Activités
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;