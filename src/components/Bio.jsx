import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BIO } from "../constants";

const Bio = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            className="flex max-w-4xl flex-col gap-12 pt-20"
            id="bio"
            ref={ref}
        >
            <h2 className="text-center text-4xl font-bold mb-8  ">Bio</h2>
            <div>
                {BIO.map((bio, index) => (
                    <motion.p
                        key={index}
                        className="mmb-8 p-2 text-xl justify-evenly"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {bio}
                    </motion.p>
                ))}
            </div>
        </section>
    );
};

export default Bio;
