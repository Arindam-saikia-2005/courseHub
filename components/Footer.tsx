
import { BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";



export default function Page() {
    return (
        <div className="w-full h-auto  flex justify-center flex-col flex-wrap p-20 bg-black space-y-4">

            {/* text div */}
            <div className="flex flex-wrap justify-between items-center gap-5">
               <p className="text-white font-bold text-4xl">100<span className="text-red-600">x</span>Devs</p>

               <div className="text-white flex flex-col flex-wrap md:space-y-5 font-mono">
                <p>Terms & Conditions</p>
                <p>Privacy Policy </p>
                <p>Refund & Cancellation</p>
               </div>

               <div className="flex flex-wrap space-x-4">
                <a href="https://x.com/ArindamSai58511">
                <span className="text-white"><BsTwitterX size={40}/></span>
                </a>
                <a href="https://www.linkedin.com/in/arindam-saikia-480351323/">
                <span className="text-white"><SiLinkedin size={40} /></span>
                </a>
                <span className="text-white"><SlSocialInstagram  size={40}/></span>
               </div>
            </div>

          <p className="font-semibold text-white mt-4 text-center text-5xl md:text-[120px] lg:text-[200px]">100xDEVS</p>
        
        </div>
    )
}