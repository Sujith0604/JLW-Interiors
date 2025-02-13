import { motion } from "motion/react";
const HomeGallery = () => {
  const data = [
    {
      imageLink: "/images/1.jpg",
    },
    {
      imageLink: "/images/2.jpg",
    },
    {
      imageLink: "/images/3.jpg",
    },
    {
      imageLink: "/images/4.jpg",
    },
    {
      imageLink: "/images/5.jpg",
    },
    {
      imageLink: "/images/6.jpg",
    },
    {
      imageLink: "/images/7.jpg",
    },
    {
      imageLink: "/images/8.jpg",
    },
    {
      imageLink: "/images/9.jpg",
    },
    {
      imageLink: "/images/10.jpg",
    },
    {
      imageLink: "/images/11.jpg",
    },
    {
      imageLink: "/images/12.jpg",
    },
    {
      imageLink: "/images/13.jpg",
    },
    {
      imageLink: "/images/14.jpg",
    },
    {
      imageLink: "/images/15.jpg",
    },
  ];

  return (
    <div
      id="gallery"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <motion.img
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.95 }}
            className="h-95 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeGallery;
