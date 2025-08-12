import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/Experience";


function ExperienceSection() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-4 sm:px-6 mt-10 mb-16">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      {/* Timeline spine */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="space-y-2">
          {experience.map((job) => (
            <ExperienceItem key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
