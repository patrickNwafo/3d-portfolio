import { Tilt } from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, source_code_link, url }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=" relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2" />

            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={link}
                alt="link"
                className="object-contain w-1/2 h-1/2" />

            </div>

          </div>
        </div>

        <div className="mt-5 ">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p className=" mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 ">
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText} >
          Projects.
        </h2>
      </motion.div>
      <div className="flex w-full ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Dive into my portfolio! These projects are more than just code - they&apos;re testaments to my ability to solve real-world challenges. Explore the code repositories and live demos to see how I leverage diverse technologies to deliver impactful results..
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");