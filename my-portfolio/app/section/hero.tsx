'use client'

import Image from "next/image";
import ablexPhotp from "@/public/abel_image.jpg"
import { motion } from "framer-motion";

export default function Hero(){
    return(
      <div id="home"
      className="relative min-h-screen mt-10 flex flex-col items-center justify-center px-5 overflow-hidden" >
            <motion.div 
                className="flex flex-col md:flex-row items-center gap-8 md:gap-20 rounded-2xl px-6 md:px-12 lg:px-20 py-10 md:py-20 bg-[#221c22] max-w-[90rem] w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}>
                <div>
                    <motion.div
                        className="overflow-hidden mt-10 md:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Image
                        src={ablexPhotp}
                        alt="profile picture"
                        className="w-40 md:w-64 lg:w-80 rounded-full mt-5"
                    />
                    </motion.div>
                </div>
                <div >
                    <motion.p
                        className=" text-sm md:text-2xl font-bold  mb-0 "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        >
                        HELLO I'M
                    </motion.p> 
                    <motion.h1
                        className="font-bold text-2xl md:text-5xl lg:text-7xl text-[#01B5D1]"
                        initial={{opacity: 0, y:20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration:0.5}}
                    >
                     ABEL YOHANIS
                    </motion.h1>
                    <motion.div
                        className="font-bold text-sm md:text-2xl mt-5 mb-5 "
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 0.5}}>
                             Full-stack Developer 
                    </motion.div>
                    <motion.p
                        className="text-base md:text-xl font-bold text-white max-w-xl md:max-w-3xl"    
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        >
                        I build web applications using modern technologies. 
                        I enjoy creating efficient and scalable solutions that provide great user experiences.
                    </motion.p>
                </div>
                
            </motion.div>
            

            
       </div>
    )
}

