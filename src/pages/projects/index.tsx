import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/projectCard";
import { projects } from "../../database/projects/index";
import { Section } from "./style";

export default function Projects() {
  const { t } = useTranslation();

  const [list, setList] = useState([...projects]);

  const filterProjects = (str: string) => {
    if (str === "all") {
      setList([...projects.reverse()]);
    } else {
      const filtered = projects.filter((obj) => obj.type === str);
      setList([...filtered.reverse()]);
    }
  };

  return (
    <Section id="projects">
      <div className="container">
        <div>
          <h2>{t("projects.title")}</h2>
          <div className="menu">
            <h4
              onClick={() => {
                filterProjects("all");
              }}
            >
              {t("projects.menu.all")}
            </h4>
            <h4
              onClick={() => {
                filterProjects("team");
              }}
            >
              {t("projects.menu.team")}
            </h4>
            <h4
              onClick={() => {
                filterProjects("study");
              }}
            >
              {t("projects.menu.study")}
            </h4>
            <h4
              onClick={() => {
                filterProjects("personal");
              }}
            >
              {t("projects.menu.personal")}
            </h4>
          </div>
        </div>
        <div className="list">
          {list?.reverse().map((obj) => (
            <ProjectCard project={obj} key={obj.alias} alias={obj.alias} />
          ))}
        </div>
      </div>
    </Section>
  );
}
