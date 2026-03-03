import Image from "next/image";
import ab from "@/public/backgroundImage.jpeg"

export default function Hero(){
    return(
        <div>
            <Image
                src={ab}
                alt="kal_X image"
                fill
                className="absolute object-cover dark:brightness-[0.8] brightness-[0.8] -z-10"
                priority
            />
        </div>
    )
}

