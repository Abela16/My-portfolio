"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import amboLogo from "../../public/ambo_uni_logo.jpeg";
import udacityLogo from "../../public/udacity.png";
import {useState} from "react";


export default function AboutMe(){

const [activeTab, setActiveTab] = useState("education");


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



            <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-10 mb-10 text-xl px-2 py-1 bg-[#142f33] rounded-lg">
                            <button
                                className="cursor-pointer hover:text-[#01B5D1] transition-colors duration-300"
                                onClick={() => setActiveTab("education")}>
                            Education
                            </button>
                    </div>
                    {activeTab === "education" && (
                    <motion.div
                        className="flex flex-col items-center justify-center gap-5 mt-20 text-sm md:text-2xl lg:text-3xl w-max"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}>
                        <div className="flex flex-col items-start gap-5 mt-5">
                            <ul>
                                <li className="flex mb-5">
                                    <div className="flex gap-3">
                                        <div>
                                            <Image 
                                            src={amboLogo} alt="Ambo University Logo" 
                                            className="w-16 h-16 rounded-full mb-2" />

                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                Ambo University
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                BSc in Computer Science,
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            
                            <li>
                                <div className="flex gap-3">
                                    <div>
                                        <Image 
                                        src={udacityLogo} 
                                        alt="Udacity Logo" 
                                        className="w-16 h-16 rounded-full mb-2" />

                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Udacity
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Frontend Web Developer Nanodegree
                                        </p>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </motion.div> 
                    )}
                </div>



           
        
        </div>
    )
}       