"use client";

import {motion} from "framer-motion";


export default function AboutMe(){
    return(
        <div id="home"
            className="relative flex flex-col items-center justify-center px-5 overflow-hidden" >
             <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                id="aboutMe"
                className="items-center rounded-2xl px-6 md:px-12 lg:px-20 py-10 md:py-20 bg-[#221c22] overflow-hidden max-w-[90rem] w-full"
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
                <p>
                    I prioritize performance, code quality, and simplicity—ensuring that the solutions I build are not only functional, but also easy to maintain and scale.
                </p>
            </motion.p>     
        </motion.div>
        </div>
    )
}       