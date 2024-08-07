import { FaFacebook, FaGithub, FaLinkedin, FaHashnode } from 'react-icons/fa';

export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://twitter.com/IngoleNehal",
        icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
        name: "Twitter"
    },
    {
        href: "https://github.com/Ingole712521",
        icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
        name: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/nehal-ingole/",
        icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
        name: "LinkedIn"
    },
    {
        href: "https://hashnode.com/@Nehal71",
        icon: <FaHashnode fontSize={25} className="hover:opacity-80" />,
        name: "Hashnode"
    }
];
