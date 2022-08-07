import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  MdAccountCircle,
  MdForum,
  MdInvertColors,
  MdOutlineLink,
  MdTranslate,
  MdViewCarousel,
} from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { v4 as uuidv4 } from "uuid";

import { ThemeContext } from "../../styles/theme";
import { Nav } from "./style";

export default function Menu() {
  const { t, i18n } = useTranslation();
  const { currentTheme, setCurrentTheme, getOppositTheme } =
    useContext(ThemeContext);

  interface Langs {
    en: { nativeName: string };
    pt: { nativeName: string };
  }

  type L = keyof Langs;

  const lngs: Langs = {
    en: { nativeName: "en" },
    pt: { nativeName: "pt-br" },
  };

  const changeTheme = () => {
    setCurrentTheme(getOppositTheme());
  };

  return (
    <Nav>
      <div className="container">
        <ul>
          <li>
            <MdAccountCircle />
            <HashLink to={"/#about"}>{t("menu.about")}</HashLink>
          </li>
          <li>
            <MdViewCarousel />
            <HashLink to={"/#projects"}>{t("menu.projects")}</HashLink>
          </li>
          <li>
            <MdOutlineLink />
            <HashLink to={"/#teste"}>{t("menu.links")}</HashLink>
          </li>
        </ul>
        <ul>
          <li onClick={changeTheme}>
            <MdInvertColors />
            <button className={currentTheme === "dark" ? "active" : "standby"}>
              {t("menu.theme.dark")}
            </button>{" "}
            |{" "}
            <button className={currentTheme === "light" ? "active" : "standby"}>
              {t("menu.theme.light")}
            </button>
          </li>
          <li>
            <MdTranslate />
            {Object.keys(lngs).map((lng, i) => (
              <>
                <button
                  key={uuidv4()}
                  className={
                    i18n.resolvedLanguage === lng ? "active" : "standby"
                  }
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng as L].nativeName}
                </button>
                {i === 0 && "|"}
              </>
            ))}
          </li>
          <li>
            <MdForum />
            <HashLink to={"/#teste"}>{t("menu.talk")}</HashLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
