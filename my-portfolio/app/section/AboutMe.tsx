"use client";

import {motion} from "framer-motion";
import { Download } from "lucide-react";
import { Globe, Monitor, Server } from "lucide-react";


export default function AboutMe(){


    return(
        <div className="flex flex-col items-center justify-center overflow-hidden w-full " >
            <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="  px-2 md:px-3 lg:px-5 py-5 md:py-10"
                    >
                        <motion.h2
                            className="text-3xl md:text-8xl font-bold ml-4 text-[#01B5D1] mb-2"
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
                                I&apos;m Abel a full-stack developer focused on building scalable, user-centered web applications. I specialize in developing clean, maintainable code across both frontend and backend systems.
                            </p>

                            <p>
                                On the frontend, I work primarily with React and Next.js to create responsive, intuitive interfaces. On the backend, I use Node.js and Express to design efficient, reliable APIs and application logic.
                            </p>
                            
                            
                    </motion.p> 

            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
                <motion.div 
                    className="text-sm md:text-2xl font-bold bg-[#151131] px-4 py-6 md:px-10 md:py-15 rounded-xl text-center w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}>

                    <Globe size={32} className="mb-3 text-[#01B5D1]" />
                

                    Web Developer
                </motion.div>

                <motion.div 
                    className="text-sm md:text-2xl font-bold bg-[#151131] px-4 py-6 md:px-10 md:py-15 rounded-xl text-center w-full sm:w-auto "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}>

                    <Monitor size={32} className="mb-3 text-[#01B5D1]" />

                    Frontend developer
                </motion.div>
                <motion.div 
                    className="text-sm md:text-2xl font-bold bg-[#151131] px-4 py-6 md:px-10 md:py-15 rounded-xl text-center w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}>

                    <Server size={32} className="mb-3 text-[#01B5D1]" />

                        
                    Backed develpoer 
                </motion.div>
            </div>
            
                <div className="text-center gap-4 flex flex-col md:flex-row justify-center items-center">
                    <a
                        href="/ABEL-CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-2xl bg-[#151131] text-white font-medium hover:scale-105 transition "
                        >
                        <Download size={18} />
                        Download CV
                    </a>
                    <a
                        className="inline-flex items-center gap-2 px-6 py-3 mt-10 rounded-2xl bg-[#151131] text-white font-medium hover:scale-105 transition "
                        >
                        Let&apos;s connect
                    </a>
                </div>


        </div>
    )
}       