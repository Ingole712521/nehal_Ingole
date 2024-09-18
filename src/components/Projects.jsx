import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import "../Style/projects.css";

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1     // Trigger when 10% of the section is visible
    });

    return (
        <section className="pt-20" id="projects">
            <h2 className=" text-center text-4xl font-bold mb-8">Projects</h2>
            <div
                ref={ref}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
                {PROJECTS.map((project) => (
                    <motion.div
                        key={project.id}
                        className="group relative overflow-hidden rounded-3xl flex flex-col justify-center items-center h-96"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 p-4">
                            <h3 className="mb-2 text-xl text-center">{project.name}</h3>
                            <p className="mb-4 text-center text-sm md:text-base">{project.description}</p>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                            >
                                <div className="flex items-center">
                                    <span>View on GitHub</span>
                                    <MdArrowOutward />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
