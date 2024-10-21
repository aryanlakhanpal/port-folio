import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://aryanlakhanpal.github.io/Nqueen/"
          h3="N-Queens Visualiser"
          p="DSA Problem"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/aryanlakhanpal/food-delivery-app"
          h3="Food Delivery App"
          p="MERN Stack Project"
        />
        <ProjectCard
          src={hipsster}
          link="https://aryanlakhanpal.github.io/particle-effect/"
          h3="Particle Motion Effect"
          p="Canvas Effect"
        />
        <ProjectCard
          src={fitLift}
          link="https://aryanlakhanpal.github.io/My-Tik-Tak-Toe/"
          h3="MIN-MAX Algorithm Implementation"
          p="AI Implementation "
        />
      </div>
    </section>
  );
}

export default Projects;
