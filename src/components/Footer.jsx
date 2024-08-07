import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import "../Style/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashnode } from '@fortawesome/free-brands-svg-icons';

const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://twitter.com/IngoleNehal",
        icon: <FaFacebook fontSize={25} />,
        name: "Twitter"
    },
    {
        href: "https://github.com/Ingole712521",
        icon: <FaGithub fontSize={25} />,
        name: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/nehal-ingole/",
        icon: <FaLinkedin fontSize={25} />,
        name: "LinkedIn"
    },
    {
        href: "https://hashnode.com/@Nehal71",
        icon: <FontAwesomeIcon icon={faHashnode} className="fa-hashnode" />, // Apply CSS class here
        name: "Hashnode"
    }
];

const Footer = () => {
    return (
        <div className="footer mb-8 mt-20">
            <div className="social-links">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
                        <span className="icon">{link.icon}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;
