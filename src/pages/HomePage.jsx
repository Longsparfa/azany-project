import React from "react";
import Slider from "../components/slider/Slider";
import Card from "../components/Card";
import {
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
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#626a6b]">
        <div className="w-full h-screen m-auto ">
          <Header />
          <Slider />
          <div className="grid grid-cols-2 lg:grid-cols-4 ">
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
              img={gaming}
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
