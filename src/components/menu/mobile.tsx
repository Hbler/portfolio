import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdAccountCircle,
  MdClearAll,
  MdForum,
  MdInvertColors,
  MdOutlineLink,
  MdTranslate,
  MdViewCarousel,
} from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { v4 as uuidv4 } from "uuid";

import { ThemeContext } from "../../styles/theme";
import { MobileNav } from "./style";

export default function MobileMenu() {
  const [viewNav, setViewNav] = useState(false);

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

  const displayNav = () => setViewNav(!viewNav);

  return (
    <MobileNav>
      {!viewNav ? (
        <HashLink to={"/#showNav"} id="showNav" onClick={displayNav}>
          <MdClearAll />
          {t("menu.nav")}
        </HashLink>
      ) : (
        <div className="container">
          <ul>
            <li onClick={displayNav}>
              <MdAccountCircle />
              <HashLink to={"/#about"}>{t("menu.about")}</HashLink>
            </li>
            <li onClick={displayNav}>
              <MdViewCarousel />
              <HashLink to={"/#projects"}>{t("menu.projects")}</HashLink>
            </li>
            <li onClick={displayNav}>
              <MdOutlineLink />
              <HashLink to={"/#links"}>{t("menu.links")}</HashLink>
            </li>
          </ul>
          <ul>
            <li onClick={changeTheme}>
              <button
                className={currentTheme === "dark" ? "active" : "standby"}
              >
                {t("menu.theme.dark")}
              </button>{" "}
              |{" "}
              <button
                className={currentTheme === "light" ? "active" : "standby"}
              >
                {t("menu.theme.light")}
              </button>
              <MdInvertColors />
            </li>
            <li>
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
              <MdTranslate />
            </li>
            <li onClick={displayNav}>
              <HashLink to={"/#talk"}>{t("menu.talk")}</HashLink>
              <MdForum />
            </li>
          </ul>
        </div>
      )}
    </MobileNav>
  );
}
