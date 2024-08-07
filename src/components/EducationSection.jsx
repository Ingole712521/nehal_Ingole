import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { useInView } from "react-intersection-observer";

const EducationSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger animation only once
        threshold: 0.1      // Trigger when 10% of the section is visible
    });

    return (
        <section className="py-8" id="education">
            <h2 className="mb-4 text-center text-4xl font-bold">Education</h2>
            {EDUCATION.map((edu, index) => (
                <motion.div
                    key={index}
                    className="mb-6 p-10"
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                    <p className="text-xl">{edu.institution}</p>
                    <p className="text-md text-stone-300">{edu.duration}</p>
                    <p className="mt-2 text-lg">{edu.description}</p>
                </motion.div>
            ))}
        </section>
    );
}

export default EducationSection;
