export const SelectProject = () => {
  return (
    <div className=" flex flex-col gap-11   ">
      <h1 className=" lg:text-7xl text-5xl  font-bold lg:px-[100px]">
        Select your Project
      </h1>
      <div className=" flex flex-wrap items-center justify-around gap-2 px-2">
        <img
          src="/images/5.jpg"
          className=" h-[400px] w-[725px] bg-center bg-cover  rounded-3xl"
          alt="image"
          loading="lazy"
        />
        <img
          src="/images/6.jpg"
          alt="image"
          className=" h-[400px] bg-center bg-cover w-[725px] rounded-3xl"
          loading="lazy"
        />
        <img
          src="/images/7.jpg"
          alt="image"
          className=" h-[400px] bg-center bg-cover w-[725px] rounded-3xl"
          loading="lazy"
        />
        <img
          src="/images/15.jpg"
          alt="image"
          className=" h-[400px] bg-center bg-cover w-[725px] rounded-3xl"
          loading="lazy"
        />
        <img
          src="/images/16.jpg"
          alt="image"
          className=" h-[400px] bg-center bg-cover w-[725px] rounded-3xl"
          loading="lazy"
        />
        <img
          src="/images/10.jpg"
          alt="image"
          className=" h-[400px] bg-center bg-cover w-[725px] rounded-3xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};
