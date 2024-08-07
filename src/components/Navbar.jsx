import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
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
            <nav className="fixed left-0 right-0 top-4 z-50 bg-black/20 py-4 rounded-lg shadow-lg">
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 lg:flex">
                    <div className="flex items-center justify-between gap-8">
                        <div>
                            <a href="#" className="text-2xl font-bold text-white hover:text-yellow">
                                Home
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-6">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="text-lg text-white hover:text-yellow"
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <div className="flex items-center justify-between px-4 bg-black/20 py-4 rounded-lg shadow-lg">
                        <div>
                            {/* No logo or Home link */}
                        </div>
                        <div className="flex items-center">
                            <button
                                className="focus:outline-none"
                                onClick={togglerMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className="h-8 w-8 text-white" />
                                ) : (
                                    <FaBars className="h-8 w-8 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-6 text-white bg-black/20 rounded-lg p-4">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block text-xl hover:text-yellow"
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
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
