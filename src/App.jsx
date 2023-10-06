import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      {/* <div className=" ">
        <Header />
        <main className=" ">
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
      </div> */}
    </>
  );
}

export default App;
