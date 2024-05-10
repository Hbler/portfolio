import { useTranslation } from "react-i18next";
import { MdExitToApp, MdOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { Card } from "./style";

type ProjectModel = {
  alias: string;
  repo: string;
  type: string;
  video: string;
  app: string;
  img: string;
};

interface Project {
  project: ProjectModel;
  alias: string;
}

export default function ProjectCard({ project, alias }: Project) {
  const { t } = useTranslation();

  return (
    <Card>
      <h3>{t(`projects.list.${alias}.title`)}</h3>
      <figure>
        <img src={project.img} alt={t(`projects.list.${alias}`)} />
      </figure>
      <div className="info">
        <small>{t(`projects.list.${alias}.type`)}</small>
        <p>{t(`projects.list.${alias}.description`)}</p>
      </div>
      <div className="links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            <FaGithub />
            {t(`projects.buttons.repo`)}
          </a>
        )}
        {project.app && (
          <a href={project.app} target="_blank" rel="noreferrer">
            <MdExitToApp />
            {t(`projects.buttons.app`)}
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noreferrer">
            <MdOndemandVideo />
            {t(`projects.buttons.video`)}
          </a>
        )}
      </div>
    </Card>
  );
}
