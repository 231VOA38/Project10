import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h3 className={`${styles.heroSubText}`}>Dhruti Biddappa</h3>
        <p>Blender Studio, 71, 3rd Main, Prashanthanagar, Bengaluru 560079</p>
        <p>Website: <a href="https://github.com/231VOA38">My Github Repository</a></p>
        <p>Phone Number: +91 7760612608</p>
          <p>email: dhruti.charm@gmail.com</p>
        
        <div className="flex flex-row justify-between">
          <a href="https://www.facebook.com/share/16YrpAgWfH/" target="_blank"><img src="icons/fb.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.instagram.com/_.dhruti.bidds._?igsh=MTRvc3pmcW50ZHAxcg==" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://youtube.com/@dhrutibiddappa8018?si=k3-81KvWAkL1tT9C" target="_blank"><img src="icons/yt.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.linkedin.com/in/dhruti-biddappa-b706132b3/" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://x.com/BiddappaDru" target="_blank"><img src="icons/twitter.svg" className="mt-2 h-10 v-10" /></a>
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")