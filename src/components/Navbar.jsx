import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const togglerMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const Offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + Offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <a href="#">
                                <img src={logo} width={150} alt="logo" />
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-small hover:text-yellow" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={90} className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={togglerMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" />
                                ) : (
                                    <FaBars className="m-2 h-6 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block w-full text-lg" onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
