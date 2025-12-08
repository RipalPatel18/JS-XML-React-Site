import { useEffect, useState } from "react";
import { getProjects } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p._id}>
            <h3>{p.title}</h3>

            <p className="project-desc">
              {p.description || "Full-stack web project using modern tools."}
            </p>

            {p.tags && (
              <div className="project-tags">
                {p.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}

            <div className="project-links">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank">Live Demo</a>
              )}
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank">Source Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
