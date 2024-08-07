import { HERO } from "../constants";
import carImg from "../assets/Nehal_Ingole.jpeg";
import resume from "../assets/Nehal_Ingole_7397966719.pdf";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-screen items-center p-4">
            {/* Text and Buttons Section */}
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {HERO.name}
                </h2>
                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    {HERO.greet}
                </p>
                <p className="mb-8 p-2 text-xl">
                    {HERO.description}
                </p>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-4">
                    <a
                        href={resume}
                        download
                        className="inline-flex items-center px-4 py-2 text-white border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-transform transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                    >
                        <FaDownload className="mr-2 text-lg md:text-xl" />
                        Download Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nehal-ingole/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-transform transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                    >
                        <FaLinkedin className="mr-2 text-lg md:text-xl" />
                        LinkedIn Profile
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end pt-8 md:pt-16">
                <img
                    src={carImg}
                    width={350}
                    height={350}
                    alt="Carl Frank"
                    className="rounded-3xl"
                />
            </div>
        </section>
    );
};

export default Hero;
