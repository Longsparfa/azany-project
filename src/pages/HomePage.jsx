import React from "react";
import Slider from "../components/slider/Slider";
import Card from "../components/Card";
import {
  bags,
  camera,
  cosmetic,
  dress,
  fashion,
  fitness,
  gadgets,
  gaming,
  kids,
  shopWithCon,
  watch,
} from "../assets";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-full h-screen m-auto ">
          <Slider />
          <section className="bg-[#1c0b1e] mb-10 p-20 min-h-[1000px] ">
            <div className="flex justify-between items-center px-2 pb-10 ">
              <p className="text-xl text-white lg:text-2xl ">Exclusive Deals</p>
              <p className="text-xl text-white lg:text-2xl uppercase">
                See All
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 ">
              <Card
                img={fitness}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={shopWithCon}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={fashion}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={kids}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={bags}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={gadgets}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={watch}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />

              <Card
                img={dress}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
            </div>
          </section>
          <section className="bg-[#1c0b1e] mb-10 p-20 min-h-[1000px] ">
            <div className="flex justify-between items-center px-2 pb-10 ">
              <p className="text-xl text-white lg:text-2xl ">Exclusive Deals</p>
              <p className="text-xl text-white lg:text-2xl uppercase">
                See All
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 ">
              <Card
                img={fitness}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={shopWithCon}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={fashion}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={kids}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={bags}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={camera}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={cosmetic}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
            </div>
          </section>
          <section className="bg-[#1c0b1e] mb-10 p-20 min-h-[1000px] ">
            <div className="flex justify-between items-center px-2 pb-10 ">
              <p className="text-xl text-white lg:text-2xl ">Exclusive Deals</p>
              <p className="text-xl text-white lg:text-2xl uppercase">
                See All
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 ">
              <Card
                img={fitness}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={shopWithCon}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={fashion}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={kids}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={bags}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={camera}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
              <Card
                img={cosmetic}
                title={"We have a surprise for you"}
                link={"See terms and conditon"}
              />
            </div>
          </section>
          <div className="">
            <section className="bg-[#1c0b1e] mb-10 p-20 min-h-[1000px] ">
              <div className="flex justify-between items-center px-2 pb-10 ">
                <p className="text-xl text-white lg:text-2xl ">
                  Exclusive Deals
                </p>
                <p className="text-xl text-white lg:text-2xl uppercase">
                  See All
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-4 ">
                <Card
                  img={fitness}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={shopWithCon}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={fashion}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={kids}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={bags}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={camera}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
                <Card
                  img={cosmetic}
                  title={"We have a surprise for you"}
                  link={"See terms and conditon"}
                />
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
