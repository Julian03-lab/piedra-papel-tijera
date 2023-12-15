import Logo from "./assets/logo.svg";
import Close from "./assets/icon-close.svg";
import Rules from "./assets/image-rules.svg";
import SelectScreen from "./components/SelectScreen";
import SelectedScreen from "./components/SelectedScreen";
import { useScore, useSelector } from "./utils/context";
import { useRef } from "react";

function App() {
  const { selection } = useSelector();
  const { score } = useScore();
  const modalRef = useRef(null);

  const handleModal = () => {
    if (!modalRef) return;
    if (modalRef.current.open) {
      modalRef.current.close();
    } else {
      modalRef.current.showModal();
    }
  };

  return (
    <main className="h-screen bg-radial-gradient flex flex-col items-center px-4 py-8">
      <dialog className="bg-white rounded-lg py-6 px-10" ref={modalRef}>
        <div className="flex justify-between mb-12">
          <p className="text-3xl font-bold text-darkText">RULES</p>
          <button onClick={handleModal}>
            <img src={Close} />
          </button>
        </div>
        <img src={Rules} />
      </dialog>
      <header className="p-4 rounded-xl border-2 border-headerOutline flex justify-between w-full md:w-3/5 lg:w-2/5">
        <img src={Logo} className="w-1/3 md:w-auto" />
        <div className="bg-white flex justify-center items-center flex-col px-6 py-2 md:px-8 md:py-3 rounded-lg">
          <span className="font-semibold text-scoreText text-sm md:text-lg">
            SCORE
          </span>
          <p className="font-bold text-darkText text-4xl lg:text-6xl">
            {score}
          </p>
        </div>
      </header>
      {selection ? <SelectedScreen /> : <SelectScreen />}
      <button
        className="text-white border-white border-2 rounded-lg py-2 px-8 font-semibold sm:fixed bottom-8 right-8"
        onClick={handleModal}
      >
        Rules
      </button>
    </main>
  );
}

export default App;
