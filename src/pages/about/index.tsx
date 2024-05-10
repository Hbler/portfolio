import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import avatar from "../../assets/img/hb/avatar_circle.png";
import Tech from "../../components/tech";
import { Section } from "./style";

export default function About() {
  const { t } = useTranslation();

  const most = [
    "devicon-css3-plain",
    "devicon-django-plain",
    "devicon-express-original",
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-graphql-plain",
    "devicon-html5-plain",
    "devicon-javascript-plain",
    "devicon-nodejs-plain",
    "devicon-postgresql-plain",
    "devicon-python-plain",
    "devicon-react-original",
    "devicon-redux-original",
    "devicon-tailwindcss-plain",
    "devicon-typescript-plain",
  ];

  const some = [
    "devicon-amazonwebservices-plain",
    "devicon-docker-plain",
    "devicon-eslint-plain",
    "devicon-go-original-wordmark",
    "devicon-jest-plain",
    "devicon-markdown-original",
    "devicon-npm-original-wordmark",
    "devicon-sass-original",
    "devicon-storybook-plain",
    "devicon-vuejs-plain",
  ];

  const softwares = [
    "devicon-apple-original",
    "devicon-blender-original",
    "devicon-confluence-plain",
    "devicon-figma-plain",
    "devicon-illustrator-line",
    "devicon-jira-plain",
    "devicon-jupyter-plain",
    "devicon-neovim-plain",
    "devicon-photoshop-plain",
    "devicon-slack-plain",
    "devicon-trello-plain",
    "devicon-ubuntu-plain",
    "devicon-vscode-plain",
  ];

  return (
    <Section id="about">
      <div className="container">
        <div>
          <div className="title">
            <h2>{t("about.title")}</h2>
            <img src={avatar} alt="Hugo Bler with a slight smile" />
          </div>
          <div className="text">
            <p>{t("about.part1")}</p>
            <p>{t("about.part2")}</p>
            <p>{t("about.part3")}</p>
          </div>
        </div>
        <div>
          <h3>{t("about.techs.title")}</h3>
          <div className="tech_list">
            <h4>{t("about.techs.most")}</h4>
            {most.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
          <div className="tech_list">
            <h4>{t("about.techs.some")}</h4>
            {some.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
          <div className="tech_list">
            <h4>{t("about.techs.softwares")}</h4>
            {softwares.map((str) => (
              <Tech key={uuidv4()} tech={str} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
