import { bags, camera, cosmetic, dress, gadgets, kids, watch } from "./assets/index";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <div className=" ">
        <Header />
        <main className="bg-[#626a6b] ">
          <Slider />
          <div className="grid grid-cols-2 gap-x-[5rem] gap-y-[5rem] ">
            <Card src={cosmetic} />
            <Card src={kids} />
            <Card src={dress} />
            <Card src={watch} />
            <Card src={gadgets} />
            <Card src={camera} />
            <Card src={bags} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
