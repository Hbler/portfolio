import { useTranslation } from "react-i18next";
import { MdExpandMore } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";

import { Section } from "./style";

export default function Landing() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="container">
        <div>
          <small>{t("landing.update")}</small>
        </div>
        <div>
          <div className="title">
            <h1>Hugo Bler</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    t("landing.dev.front"),
                    t("landing.dev.back"),
                    t("landing.dev.full"),
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  delay: 100,
                }}
              />
            </h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("landing.text") }} />

          <HashLink to={"/#about"}>
            <MdExpandMore />
            {t("landing.scroll")}
          </HashLink>
        </div>
      </div>
    </Section>
  );
}
