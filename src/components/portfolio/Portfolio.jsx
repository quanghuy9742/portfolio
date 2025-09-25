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

const projectData = [
  {
    id: 1,
    image: card1,
    category: "LẬP TRÌNH WEBSITE, HỆ THỐNG",
    title: "Hệ thống quản lý Cuộc thi chứng khoán Rồng Việt Invest",
    description:
      "Tôi giúp Công ty Chứng khoán Rồng Việt xây dựng hệ thống tổ chức và quản lý các cuộc thi chứng khoán. Hệ thống hoạt động ổn định từ năm 2023 đến nay, giúp cho công ty thu hút hàng ngàn khách hàng tiềm năng hàng năm.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "LẬP TRÌNH WEBSITE, HỆ THỐNG",
    title: "Hệ thống quản lý quy trình xuất nhập khẩu Dương Minh Logistics",
    description:
      "Tôi giúp Công ty Dương Minh Logistics xây dựng hệ thống quản lý quy trình xuất nhập khẩu. Hệ thống giúp công ty tối ưu hóa quy trình làm việc, giảm thiểu sai sót của nhân viên và nâng cao sự hài lòng của khách hàng dành cho công ty.",
    link: "#!",
  },
  {
    id: 3,
    image: card7,
    category: "LẬP TRÌNH APP",
    title: "App TabDragon - giao dịch chứng khoán Rồng Việt",
    description:
      "Tôi giúp Công ty Chứng khoán Rồng Việt xây dựng app giao dịch chứng khoán trên Android và iOS. App giúp khách hàng của công ty giao dịch chứng khoán một cách nhanh chóng và tiện lợi trên sàn chứng khoán Việt Nam",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "LẬP TRÌNH APP",
    title: "App thương mại điện tử S24",
    description:
      "Tôi giúp Công ty Nhất Vinh xây dựng app thương mại điện tử S24 trên Android và iOS. App giúp công ty mở rộng kênh bán hàng và tiếp cận nhiều khách hàng hơn tại tỉnh Bình Thuận.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "LẬP TRÌNH APP, HỆ THỐNG",
    title: "App bán hàng Gạo Việt",
    description:
      "Tôi giúp Công ty Gạo Việt xây dựng app bán hàng trên Android và iOS. App giúp công ty chăm sóc khách hàng hiệu quả và tăng doanh số bán hàng.",
    link: "#!",
  },
  {
    id: 6,
    image: card3,
    category: "LẬP TRÌNH WEBSITE, HỆ THỐNG",
    title: "Hệ thống quản lý bài đăng bất động sản FiHome",
    description:
      "Tôi giúp Công ty bất động sản FiHome xây dựng hệ thống giúp khách hàng đăng tin bán và cho thuê nhà đất trên App nền tảng Android và iOS. Hệ thống giúp công ty thu hút nhiều khách hàng tiềm năng và tăng doanh số bán hàng thông qua giao dịch bất động sản.",
    link: "#!",
  },
  {
    id: 7,
    image: card6,
    category: "LẬP TRÌNH APP",
    title: "App mở cửa bằng Bluetooth Alligate",
    description:
      "Tôi giúp đối tác Nhật Bản xây dựng app trên nền tảng iOS. App sử dụng công nghệ Bluetooth để mở cửa từ xa, mang lại sự tiện lợi và bảo mật cho người dùng.",
    link: "#!",
  },
  {
    id: 8,
    image: card8,
    category: "LẬP TRÌNH APP",
    title: "App tin tức chứng khoán dành cho nhà đầu tư",
    description:
      "Tôi giúp một khách hàng cá nhân tạo app tin tức chứng khoán trên Android và iOS. App cung cấp các tin tức mới nhất về thị trường chứng khoán từ nhiều nguồn phổ biến, giúp người dùng cập nhật thông tin nhanh chóng và chính xác để đưa ra quyết định đầu tư thông minh.",
    link: "#!",
  },
  {
    id: 9,
    image: card9,
    category: "LẬP TRÌNH APP",
    title: "App tin tức chứng khoán dành cho nhân viên môi giới",
    description:
      "Tôi giúp một giám đốc của công ty chứng khoán xây dựng app tin tức chứng khoán dành riêng cho đội ngũ môi giới của công ty. App cung cấp các tin tức, thống kê mới nhất về thị trường chứng khoán, giúp đội ngũ môi giới cập nhật thông tin nhanh chóng và chính xác để tư vấn khách hàng hiệu quả hơn.",
    link: "#!",
  },
  {
    id: 10,
    image: card10,
    category: "LẬP TRÌNH APP",
    title: "App tin bất động sản mới nhất Hodace",
    description:
      "Tôi giúp một khách hàng cá nhân xây dựng app tin tức bất động sản trên Android và iOS. App cung cấp các bài đăng mới nhất trong thị trường bất động sản từ nhiều nguồn phổ biến, giúp người mua tiếp cận sản phẩm tốt sớm nhất.",
    link: "#!",
  },
  {
    id: 11,
    image: card11,
    category: "LẬP TRÌNH APP",
    title: "App mỹ phẩm online",
    description:
      "Tôi giúp một khách hàng cá nhân xây dựng app bán mỹ phẩm online trên Android và iOS. App hiển thị sản phẩm và giúp người dùng thanh toán trực tuyến.",
    link: "#!",
  },
  {
    id: 12,
    image: card12,
    category: "LẬP TRÌNH APP",
    title: "App báo thức IDOL",
    description:
      "Tôi giúp đối tác Nhật Bản xây dựng app báo thức trên nền tảng iOS. App cho phép người hâm mộ đặt báo thức với bài hát của một ca sĩ nổi tiếng ở Nhật Bản, mang lại trải nghiệm thú vị và cá nhân hóa cho người dùng.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Dự án</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Đây là một số những dự án nổi bật mà tôi đã thực hiện cho khách hàng
            doanh nghiệp và khách hàng cá nhân
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
          ...và còn rất nhiều dự án khác
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
