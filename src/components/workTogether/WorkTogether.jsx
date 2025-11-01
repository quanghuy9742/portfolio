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
  return (
    <div className="py-25 max-w-169 mx-auto px-2" id="video-knowledge">
      <div className="text-center mb-6">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-4">
          Video kiến thức phần mềm
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-4">
          Một số video hướng dẫn và chia sẻ kiến thức về phần mềm mà tôi đã làm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                title={`YouTube video ${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTogether;
