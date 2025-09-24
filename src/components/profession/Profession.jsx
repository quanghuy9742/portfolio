import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "1. Tư vấn (miễn phí)",
    description:
      "Bằng tất cả kinh nghiệm và kiến thức của mình, tôi sẽ giúp bạn tìm ra phương án kèm chi phí phù hợp nhất.",
  },
  {
    id: 2,
    title: "2. Thiết kế giải pháp",
    description:
      "Nếu bạn đồng ý với phương án và chi phí mà tôi đưa ra, chúng ta sẽ cùng nhau thiết kế giải pháp chi tiết và lập kế hoạch phát triển phần mềm.",
  },
  {
    id: 3,
    title: "3. Lập trình phần mềm",
    description:
      "Bất kể là website, app mobile hay phần mềm trên máy tính Window, MacOS, tôi và đội ngũ của mình sẽ giúp bạn phát triển chúng một cách nhanh chóng, tiết kiệm và hiệu quả.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Công việc của tôi</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Tôi thường tóm tắt công việc của mình qua câu nói sau:{" "}
            <span className="bg-highlight text-xl lg:text-2xl font-bold">
              "Biến ý tưởng phần mềm thành hiện thực".
            </span>{" "}
          </p>
          {/* <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p> */}
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Liên hệ ngay
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
