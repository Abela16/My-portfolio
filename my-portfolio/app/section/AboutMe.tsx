"use client";

import {motion} from "framer-motion";
import { Download } from "lucide-react";


export default function AboutMe(){


    return(
        <div id="about" className=" flex flex-col items-center justify-center bg-[#221c22] max-w-[90rem] overflow-hidden w-full mx-auto" >
            <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}w-full
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="  px-2 md:px-3 lg:px-5 py-5 md:py-10"
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-center text-[#01B5D1] mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="md:text-xl max-w-4xl mx-auto text-base leading-relaxed text-justify space-y-4 p-7"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            >
                            <p>
                                I'm Abel a full-stack developer focused on building scalable, user-centered web applications. I specialize in developing clean, maintainable code across both frontend and backend systems.
                            </p>

                            <p>
                                On the frontend, I work primarily with React and Next.js to create responsive, intuitive interfaces. On the backend, I use Node.js and Express to design efficient, reliable APIs and application logic.
                            </p>
                            
                    </motion.p> 

            </motion.div>

            <a
                    href="/ABEL-CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white font-medium hover:scale-105 transition"
                    >
                    <Download size={18} />
                    Download CV
            </a>

        </div>
    )
}       