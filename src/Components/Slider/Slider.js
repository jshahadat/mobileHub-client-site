import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import "./style.css";

const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide>
          <div className="absolute bg-gray-800 opacity-90 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white py-20 p-5 md:p-20">
              <h1 className=" text-xl md:text-3xl font-extrabold mb-2">
                Order your preferred phone <br /> before it's too late.
              </h1>
              <p className="md:text-xl text-xs">
                Trade with assurance on our platform, <br /> where you can also sell your phone <br /> for a competitive price.
              </p>
              <div className="mt-2">
                <Link to="/reg">
                  <button className="px-4 py-2 hover:bg-[#1559c0] bg-[#c801ff]">
                    Offer Today
                  </button>
                </Link>
                <Link to="/categories">
                  {" "}
                  <button className="px-4 py-2 hover:bg-[#1559c0] ml-2 border border-white">
                    See All Phone
                  </button>
                </Link>
              </div>
            </section>
          </div>

          <img src={img2} className="w-full" alt="00" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-gray-900 opacity-90 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white py-20 p-5 md:p-20">
              <h1 className=" text-xl md:text-3xl font-extrabold mb-2">
                Trade Your Device <br /> for Top Value
              </h1>
              <p className="md:text-xl text-xs">
                Trade with trust on our platform, <br /> offering the ability to sell  your <br /> phone at a favorable rate
              </p>
              <div className="mt-2">
                <Link to="/reg">
                  <button className="px-4 py-2 hover:bg-[#1559c0] bg-[#c801ff]">
                    Offer Today
                  </button>
                </Link>
                <Link to="/categories">
                  {" "}
                  <button className="px-4 py-2 hover:bg-[#1559c0] ml-2 border border-white">
                    See All Phone
                  </button>
                </Link>
              </div>
            </section>
          </div>

          <img src={img3} className="w-full" alt="00" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
