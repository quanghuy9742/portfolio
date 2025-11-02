import { useTranslation } from "react-i18next";

const videos = [
  {
    id: 1,
    youtubeId: "-dHf37mzIk0",
  },
  {
    id: 2,
    youtubeId: "RIGLZd0oElU",
  },
  {
    id: 3,
    youtubeId: "ha9svQQIZjc",
  },
];

const WorkTogether = () => {
  const { t } = useTranslation();

  return (
    <div className="py-25 max-w-169 mx-auto px-2" id="video-knowledge">
      <div className="text-center mb-6">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-4">
          {t("video.title")}
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-4">
          {t("video.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                title={`YouTube video ${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTogether;
