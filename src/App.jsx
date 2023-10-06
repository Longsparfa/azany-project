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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
