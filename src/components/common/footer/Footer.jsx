import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.png";

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            {t("footer.logoName")}
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {/* Navigation items can be added here if needed */}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          {t("footer.copyright")} &copy; {copyrightYear} {t("footer.logoName")}.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        {t("footer.contactText")} {" "}
        <a
          href="mailto:quanghuy37934@gmail.com"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          quanghuy37934@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
