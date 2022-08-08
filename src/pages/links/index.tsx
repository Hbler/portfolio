import { useTranslation } from "react-i18next";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdFileDownload, MdMail, MdTextSnippet } from "react-icons/md";

import { Section } from "./style";

interface Props {
  windowSize: {
    windowWidth: number;
    windowHeight: number;
  };
}

export default function Links({ windowSize }: Props) {
  const { t } = useTranslation();

  return (
    <Section id="links">
      <div className="container">
        <div>
          <h2>{t("links.title1")}</h2>
          <div className="link_list">
            <section>
              <a
                href="https://www.linkedin.com/in/hbler"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <h3>{t("links.linkedin.title")}</h3>
              </a>
              <p>{t("links.linkedin.text")}</p>
            </section>
            <section>
              <a
                href="https://github.com/Hbler"
                target="_blank"
                rel="noreferrer"
              >
                <GoMarkGithub />
                <h3>{t("links.github.title")}</h3>
              </a>
              <p>{t("links.github.text")}</p>
            </section>
            <section>
              <h3>
                <MdTextSnippet />
                {t("links.resume.title")}
              </h3>
              <p>{t("links.resume.text")}</p>
              <a
                href={
                  process.env.PUBLIC_URL + "/assets/resume/Resumé-Hugo_Bler.pdf"
                }
                target="_blank"
                rel="noreferrer"
              >
                <MdFileDownload />
                English Version
              </a>
              <a
                href={
                  process.env.PUBLIC_URL + "/assets/resume/CV-Hugo_Bler.pdf"
                }
                target="_blank"
                rel="noreferrer"
              >
                <MdFileDownload />
                Versão em Portugês
              </a>
            </section>
          </div>
        </div>
        <div id="talk">
          <h2>{t("links.title2")}</h2>
          <div className="link_list">
            <section>
              <a
                href={
                  windowSize.windowWidth > 768
                    ? "https://web.whatsapp.com/send?phone=5511954294654&text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portif%C3%B3lio!"
                    : "https://api.whatsapp.com/send?phone=5511954294654&text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portif%C3%B3lio!"
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <h3>{t("links.whats.title")}</h3>
              </a>
              <p>{t("links.whats.text")}</p>
            </section>
            <section>
              <a href="https://t.me/hblerdev" target="_blank" rel="noreferrer">
                <FaTelegram />
                <h3>{t("links.telegram.title")}</h3>
              </a>
              <p
                dangerouslySetInnerHTML={{ __html: t("links.telegram.text") }}
              />
            </section>
            <section>
              <a
                href="mailto:mail.hbler@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdMail />
                <h3>{t("links.email.title")}</h3>
              </a>
              <p>{t("links.email.text")}</p>
            </section>
          </div>
          <h4>{t("links.thanks")}</h4>
        </div>
      </div>
    </Section>
  );
}
