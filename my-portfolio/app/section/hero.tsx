'use client'

import Image from "next/image";
import ablexPhotp from "@/public/abel_image.jpg"

export default function Hero(){
    return(
      <div id="home"
      className="relative h-screen mt-10 flex flex-col items-center justify-center px-5 overflow-hidden" >
            <div className="flex space-x-30 ">
                <div>
                    <Image
                        src={ablexPhotp}
                        alt="profile picture"
                        width={300}
                        height={300}
                        className="rounded-full mt-5"
                    />
                </div>
            </div>
            

            
       </div>
    )
}

