import "./App.css";
import MobileView from "./components/MobileView";
import { useCalculator } from "./reducers/calculator";

function App() {
  const { currentOperand, previousOperand, operation, dispatch } =
    useCalculator();

  return (
    <div className="w-full h-screen ">
      {/* desktop view */}
      <div className="w-full h-full hidden md:flex justify-center items-center bg-gradient-to-br from-primary to-secondary text-white">
        <div className="w-1/2 xl:w-1/3 h-full flex justify-center items-center">
          <img src="/logo.svg" className="w-20 h-20" />
          <h1 className="text-5xl font-semibold font-mono">YCalculator</h1>
        </div>
        <div className="w-1/2 xl:w-2/3 flex items-center justify-center min-h-screen">
          {/* iPhone Container */}
          <div className="relative w-[200px] h-[440px] sm:w-[260px] sm:h-[570px] rounded-[30px] sm:rounded-[40px] bg-black shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[120px] h-[18px] sm:h-[24px] bg-black rounded-b-3xl z-10"></div>

            {/* Screen */}
            <div className="absolute top-[8px] sm:top-[10px] left-[8px] sm:left-[10px] right-[8px] sm:right-[10px] bottom-[8px] sm:bottom-[10px] rounded-[30px] sm:rounded-[40px] bg-white overflow-hidden">
              {/* Inner Content */}
              <MobileView
                operation={operation}
                currentOperand={currentOperand}
                previousOperand={previousOperand}
                dispatch={dispatch}
                className="flex"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <MobileView
        dispatch={dispatch}
        operation={operation}
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        className="flex md:hidden"
      />
    </div>
  );
}

export default App;

