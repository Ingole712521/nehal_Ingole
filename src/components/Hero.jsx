import { motion } from "framer-motion";
import { HERO } from "../constants";
import carImg from "../assets/Nehal_Ingole.jpeg";
import resume from "../assets/Nehal_Ingole_7397966719.pdf";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-screen items-center p-4">
            {/* Text and Buttons Section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }} 
                className="w-full md:w-1/2 text-center md:text-left md:pl-8 mb-8 md:mb-0 mt-4 mb-4"
            >
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
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={resume}
                        download
                        className="inline-flex items-center px-4 py-2 text-white border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-transform transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                    >
                        <FaDownload className="mr-2 text-lg md:text-xl" />
                        Download Resume
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://www.linkedin.com/in/nehal-ingole/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white border-2 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-transform transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                    >
                        <FaLinkedin className="mr-2 text-lg md:text-xl" />
                        LinkedIn Profile
                    </motion.a>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }} 
                className="w-full md:w-1/2 flex justify-center md:justify-end pt-8 md:pt-16 mt-4 mb-4"
            >
                <img
                    src={carImg}
                    width={350}
                    height={350}
                    alt="Nehal Ingole"
                    className="rounded-3xl"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
