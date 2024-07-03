import { AiFillLinkedin } from "react-icons/ai"
import SocialIcon from "../social-icon"
import profilePic from "../../public/cv.png";
import Image from "next/image";

interface AboutSectionProps {
    setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
}
const AboutSection = ({setShowCursor}: AboutSectionProps) => {

     return (
   <section
       className="min-h-screen px-10 md:px-20 lg:px-40 relative mx-auto my-auto "
       onMouseEnter={() => setShowCursor(true)}
       onMouseLeave={() => setShowCursor(false)}
     >
       <div className="bg-white bg-opacity-10 rounded-lg shadow-lg hover:shadow-xl p-6">
         <div className="text-center md:p-10">
           <h2 className="text-5xl py-2 text-teal-600 font-medium md: 6-xl">
             Adam Samko
           </h2>
           <h3 className="text-2xl py-2">FE Developer</h3>
           <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
             I&apos;m a Front End Developer with 4+ years of experience. I
             have a passion for web design and love to create for web and
             mobile devices. I have a strong understanding of HTML, CSS,
             JavaScript, Typescript, and Angular. I&apos;m always looking to
             learn new technologies and improve my skills.
           </p>
         </div>
         <div className=" text-3xl md:text-5xl flex justify-center gap-8 md:gap-16 py-3 text-[#e23237] z-10 dark:text-[#e23237]">
           <SocialIcon link="https://linkedin.com">
             <AiFillLinkedin color="#000" />
           </SocialIcon>

           <a href="/cv.png" download>
             <Image src={profilePic} alt="Download Icon" />
           </a>
         </div>
       </div>
     </section>);

}

export default AboutSection;