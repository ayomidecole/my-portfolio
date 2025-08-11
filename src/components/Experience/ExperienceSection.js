import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/Experience";

function ExperienceSection() {
  return (
    <section id="experience" style={{ maxWidth: 840, margin: "2rem auto", padding: "0 1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Experience</h2>

      {experience.map((job, idx) => (
        <ExperienceItem key={idx} {...job} />
      ))}
    </section>
  );
}

export default ExperienceSection;
