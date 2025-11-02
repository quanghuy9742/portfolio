import { useTranslation } from "react-i18next";
import Projects from "./Projects";
import card1 from "../../assets/images/project-images/rongvietinvest.png";
import card2 from "../../assets/images/project-images/duongminhlogistics.png";
import card3 from "../../assets/images/project-images/fihome.png";
import card4 from "../../assets/images/project-images/S24.png";
import card5 from "../../assets/images/project-images/gaoviet.png";
import card6 from "../../assets/images/project-images/alligator.png";
import card7 from "../../assets/images/project-images/tabdragon.png";
import card8 from "../../assets/images/project-images/chungkhoanviahe.png";
import card9 from "../../assets/images/project-images/brokernews.png";
import card10 from "../../assets/images/project-images/hodace.png";
import card11 from "../../assets/images/project-images/mypham.png";
import card12 from "../../assets/images/project-images/mezamail.png";

const imageMap = {
  1: card1,
  2: card2,
  3: card7,
  4: card4,
  5: card5,
  6: card3,
  7: card6,
  8: card8,
  9: card9,
  10: card10,
  11: card11,
  12: card12,
};

const Portfolio = () => {
  const { t } = useTranslation();

  // Build project data from translations
  const projectData = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;
    const project = t(`portfolio.projects.${id}`, { returnObjects: true });
    return {
      id,
      image: imageMap[id],
      category: t(`portfolio.categories.${project.category}`),
      title: project.title,
      description: project.description,
      link: "#!",
    };
  });

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">{t("portfolio.title")}</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            {t("portfolio.description")}
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          {t("portfolio.moreProjects")}
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
