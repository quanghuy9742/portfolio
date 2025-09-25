import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "../blog/MonoBlog";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Designing Engaging User Interfaces for Modern Web Apps",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Tips for Effective Dashboard Layouts and Usability",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "22 Oct, 2020",
    comments: 246,
    title: "How to Visualize Data for Better Product Decisions",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Responsive Design: Adapting to All Devices Seamlessly",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Streamlining Workflows with UI/UX Best Practices",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Optimizing Interface Components for Performance",
    link: "#!",
  },
];

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Video kiến thức phần mềm
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
