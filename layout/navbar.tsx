import React, { useState } from "react";
import Link from "next/link";
// import "./Navbar.scss";
import { FullLine, DevhausLine } from "../components/HorizontalLine";
import ReactLanguageSelect from "react-languages-select";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";

const logo = "/images/devhaus-logo.svg";

function NavLinks() {
  const { t } = useTranslation();

  return [
    { to: "/academy", title: t("nav:academy"), color: "blue" },
    { to: "/studio", title: t("nav:studio"), color: "green" },
    { to: "/events", title: t("nav:events"), color: "yellow" },
    { to: "/stories", title: t("nav:stories"), color: "red" },
    { to: "/faq", title: "FAQ" },
    { to: "/about", title: t("nav:about") },
    { to: "/contact", title: t("nav:contact") },
  ];
}

function HamburgerIcon({ onClick }) {
  return (
    <div onClick={onClick} className="w-8 cursor-pointer">
      <svg viewBox="0 0 100 68" width="100%" height="100%">
        <rect width="100" height="8"></rect>
        <rect y="30" width="100" height="8"></rect>
        <rect y="60" width="100" height="8"></rect>
      </svg>
    </div>
  );
}

function NavLink(link) {
  const router = useRouter();
  const isActive = router.pathname === link.to;
  const line = (
    <DevhausLine
      active={isActive}
      color={link.color}
      width={32}
      numSegments={4}
    />
  );
  return (
    <Link href={link.to} key={link.to}>
      <a
        target={link.external ? "_blank" : null}
        rel={link.external ? "noreferrer" : null}
        className="text-xl uppercase tracking-wide antialiased"
      >
        {link.title}
        {line}
      </a>
    </Link>
  );
}

function Navbar({ toggleMobileMenu }) {
  return (
    <div className="mb-4 flex items-center justify-between xl:mb-8">
      <div className="w-20">
        <Link href="/">
          <a>
            <img className="h-20" src={logo} alt="Devhaus Leipzig"></img>
          </a>
        </Link>
      </div>
      <nav className="hidden space-x-6 lg:flex">
        {NavLinks().map((link) => NavLink(link))}
      </nav>
      <nav className="lg:hidden">
        <HamburgerIcon onClick={toggleMobileMenu} />
      </nav>
      <LanguagePicker id="langpicker"></LanguagePicker>
    </div>
  );
}

function LanguagePicker(...props) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      {...props}
      className="absolute top-0 right-[1vw] z-50 rounded-2xl bg-white"
    >
      <ReactLanguageSelect
        languages={["en", "de"]}
        names="international"
        defaultLanguage="en"
        onSelect={changeLanguage}
        customLabels={{ en: "English", de: "Deutsch" }}
      />
    </div>
  );
}

// function MobileMenu({ toggleMobileMenu, visible }) {
//   return (
//     <div
//       className={
//         "fixed inset-x-0 top-0 bg-white z-40 -translate-y-full transition-transform duration-500 px-8 pt-8 pb-4 overflow-auto " +
//         (visible ? "block  opacity-100 transform-none" : "")
//       }
//       onClick={toggleMobileMenu}
//     >
//       <div className="flex justify-between items-center w-full">
//         <nav className="hidden lg:flex">
//           {NavLinks().map((link) =>
//             NavLink(link, "uppercase tracking-[0.05ch]")
//           )}
//         </nav>
//       </div>
//       <div className="absolute inset-x-0 bottom-0 w-full">
//         {/* width = 16 */}
//         <FullLine color="devhaus" numSegments={6} />
//       </div>
//     </div>
//   );
// }

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = (event) => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <Navbar toggleMobileMenu={toggleMobileMenu} />
    // <div className="relative">
    //   <div className="p-8 absolute lg:hidden top-0 w-full z-30">
    //     <Navbar toggleMobileMenu={toggleMobileMenu} />
    //   </div>
    //   <div className="p-8 top-0 w-full z-30 -translate-y-full transition-transform duration-200 ease-linear fixed left-0 bg-white">
    //     <Navbar toggleMobileMenu={toggleMobileMenu} />
    //   </div>
    //   <MobileMenu
    //     toggleMobileMenu={toggleMobileMenu}
    //     visible={showMobileMenu}
    //   ></MobileMenu>
    // </div>
  );
}
