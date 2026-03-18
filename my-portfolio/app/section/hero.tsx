'use client'

import Image from "next/image";
import ablexPhotp from "@/public/abel_image.jpg"
import { motion } from "framer-motion";

export default function Hero(){
    return(
        <div className="relative h-screen mt-10 flex flex-col items-center justify-center px-5 overflow-hidden" >
            <div>
                <div className="">
                Hello, I'm
            </div>
            <div className="">
                Abel Yohanis
            </div>
            <div className="text-lg text-muted-foreground">
               Full-stack developer
            </div>
            <div>
                <Image
                    src={ablexPhotp}
                    alt="profile picture"
                    width={200}
                    height={200}
                    className="rounded-full mt-5"
                />
            </div>
        </div>
            
        </div>
    )
}

