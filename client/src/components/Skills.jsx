import { useEffect, useState } from "react";
import { getSkills } from "../api";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-box" key={s._id}>
            <strong>{s.name}</strong>
            <span>{s.level}</span>
            <p className="skill-sub">
              {s.keywords?.join(", ") || "Technology skill"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
