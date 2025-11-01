import person from "../../assets/images/huy.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Kinh nghiệm lập trình",
    description: "10 năm",
  },
  {
    id: 2,
    title: "Dự án hoàn thành",
    description: "25+",
  },
  {
    id: 3,
    title: "Khách hàng",
    description: "50+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Xin chào, tôi là
            <span className="text-nowrap shrink-0 inline-block w-full">
              Huy Phần Mềm
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Tôi là một{" "}
            <span className="bg-highlight text-xl lg:text-2xl font-bold">
              Kỹ Sư Phần Mềm
            </span>{" "}
            đang sinh sống ở quận 10, thành phố Hồ Chí Minh. Mỗi ngày, tôi đều
            trò chuyện với khách hàng để lắng nghe khó khăn của họ, rồi biến
            những thách thức đó thành giải pháp phần mềm tinh gọn, hiệu quả và
            dễ dùng.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:quanghuy37934@gmail.com"
            >
              Phone & Zalo: 0909 179 042
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
