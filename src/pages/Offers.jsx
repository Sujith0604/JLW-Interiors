const Offers = () => {
  const offerDeatails = [
    {
      id: 1,
      title: "EVERYTHING",
      description: "ESSENTIAL",
      realPrice: "5.5 lac",
      offerPrice: "4 lac",
      image: "/images/2.jpg",
      paracontents: "Essential Wood Work for 2BHK",
    },
    {
      id: 2,
      title: "STARTER",
      description: "ELEGANZA",
      realPrice: "10.5 lac",
      offerPrice: "8 lac",
      image: "/images/3.jpg",
      paracontents: "detailed woodwork for 3bhk",
    },
    {
      id: 3,
      title: "PLUS",
      description: "ELEGANZA",
      realPrice: "15.5 lac",
      offerPrice: "12 lac",
      image: "/images/4.jpg",
      paracontents: "woodwork and beautification for 3bhk",
    },
    {
      id: 4,
      title: "SMALL",
      description: "ESSENTIAL",
      realPrice: "2.5 lac",
      offerPrice: "2 lac",
      image: "/images/4.jpg",
      paracontents: "Essential Wood Work for 1BHK",
    },
    {
      id: 5,
      title: "MEDIUM",
      description: "ESSENTIALS",
      realPrice: "5 lac",
      offerPrice: "4 lac",
      image: "/images/5.jpg",
      paracontents: "detailed woodwork for 2bhk",
    },
    {
      id: 6,
      title: "LARGE",
      description: "ESSENTIALS",
      realPrice: "10.5 lac",
      offerPrice: "8 lac",
      image: "/images/6.jpg",
      paracontents: "woodwork and beautification for 3bhk",
    },
  ];
  return (
    <div className=" flex flex-col gap-10 ">
      <div className=" flex flex-col gap-5 lg:h-screen items-center justify-center">
        <h1 className=" text-5xl font-bold text-center">
          WELCOME TO JLW INTERIORS
        </h1>
        <h2 className=" text-2xl">#BringHappinessInside®</h2>
        <p className=" text-center">
          D’LIFE Interiors Pvt. Ltd. (Formerly known as JM Lifestyle Interior
          Projects Pvt. Ltd.) is the largest and most reliable home interior
          design company in Navi Mumbai, Hyderabad, Pune, Bangalore, Kerala,
          Mysore, Chennai, Nagercoil, Coimbatore, Madurai & Mangalore with more
          than 1300 employees. It is one of the prominent names in 100%
          customized furniture and modular kitchens. Here, the manufacturer
          deals directly with clients, avoiding all intermediaries and thus
          reducing costs. Durability of products, systematic procedure for work
          and teamwork of highly efficient people make this firm the best in the
          industry. Contemporary designs and creative space plans by
          professionals ensure elegant home furnishing. This way, the company is
          able to meet the expectations of clients since its inception in the
          year 2004.
        </p>
      </div>
      <div className=" shadow-lg bg-[url('/images/About-Background.jpg')] bg-cover text-white bg-center bg-fixed h-screen flex flex-col items-center justify-center gap-5">
        <h1>Since 2025</h1>
        <p>WE HAVE BEEN CREATING THE HISTORY OF DESIGN FOR FOUR GENERATION.</p>
      </div>
      <h1 className=" text-3xl font-bold text-center">OUR OFFERS</h1>
      <div className=" flex items-center justify-around w-full px-4 gap-2 flex-wrap">
        {offerDeatails.map((offer) => (
          <div
            key={offer.id}
            className=" flex flex-col gap-2 border w-[450px] h-[500px] items-center justify-center rounded-md"
          >
            <div className="relative">
              <img
                src={offer.image}
                className="h-[400px] w-[400px] bg-center bg-cover"
              />
              <div className=" absolute bottom-0 left-25 bg-white w-[200px] h-[100px] flex items-center flex-col justify-center">
                <h1>{offer.title}</h1>
                <p className=" text-xl font-bold">{offer.description}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-2 items-center justify-center">
              <h1>
                OFFER <del>{offer.realPrice}</del> {offer.offerPrice}
              </h1>
              <p className=" text-gray-500 capitalize">{offer.paracontents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
