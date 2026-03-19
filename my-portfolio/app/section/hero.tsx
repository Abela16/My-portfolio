'use client'

import Image from "next/image";
import ablexPhotp from "@/public/abel_image.jpg"
import { motion } from "framer-motion";

export default function Hero(){
    return(
      <div id="home"
      className="relative h-screen mt-10 flex flex-col items-center justify-center px-5 overflow-hidden" >
            <div className="flex space-x-30 ">

                <div >
                    <motion.p
                        className="text-sm font-bold  mb-0 text-[#01B5D1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.0, duration: 0.1 }}
                        >
                        HELLO, I'M
                    </motion.p> 
                    <motion.h1
                        className="font-bold text-4xl"
                        initial={{opacity: 0, y:20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration:0.5}}
                    >
                        ABEL YOHANIS
                    </motion.h1>
                    <motion.div
                        className="font-bold mb-10 mt-0"
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 0.5}}>
                             Full-stack Developer 
                    </motion.div>
                    <motion.p
                        className="text-sm font-bold text-white mb-0 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        >
                        I build web applications using modern technologies. 
                        I enjoy creating efficient and scalable solutions that provide great user experiences.
                    </motion.p>
                </div>
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
                        width={300}
                        height={300}
                        className="rounded-full mt-5"
                    />
                    </motion.div>
                </div>
            </div>
            

            
       </div>
    )
}

