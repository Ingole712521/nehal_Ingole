import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCES } from "../constants";

const WorkExperience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1     // Trigger when 10% of the section is visible
    });

    return (
        <section className="pt-20" id="work">
            <h2 className="text-center text-4xl font-semibold tracking-tighter">Work Experience</h2>
            <div className="space-y-8 p-10">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl border border-stone50/30 bg-white/10 p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        ref={ref}
                    >
                        <h3 className="text-2xl font-semibold">{experience.title}</h3>
                        <p className="text-xl">{experience.company}</p>
                        <p className="text-sm text-stone-300">{experience.duration}</p>
                        <p className="mt-2 text-base">{experience.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
