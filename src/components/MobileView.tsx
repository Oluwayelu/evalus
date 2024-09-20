import Button from "./Button";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorBotton";

import { formatOperand } from "../utils";
import { CLEAR, DELETE_DIGIT, EVALUATE } from "../reducers/actions";
import { Dispatch } from "react";
import { IACTION } from "../utils/types";

type Props = {
  operation: string;
  className?: string;
  currentOperand: string;
  previousOperand: string;
  dispatch: Dispatch<IACTION>;
};

const MobileView = ({
  dispatch,
  operation,
  className,
  currentOperand,
  previousOperand,
}: Props) => {
  return (
    <div
      className={`${className} w-full flex-col items-center justify-center h-full bg-gradient-to-br from-primary/20 to-secondary/20`}
    >
      <div className="w-full h-2/5 px-1 py-2 flex flex-col text-right text-primary font-semibold items-end justify-between space-y-1">
        <div className="w-full pt-2 flex justify-center items-center">
          <img src="/logo.svg" className="w-10 h-10 md:w-6 md:h-6" />
          <p className="font-mono text-3xl md:text-base">Evalus</p>
        </div>

        <div>
          <div className="w-full text-lg">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="w-full text-3xl">
            {formatOperand(currentOperand ? currentOperand : "0")}
          </div>
        </div>
      </div>
      <div className="w-full pt-0.5 p-px h-3/5 grid grid-cols-4 grid-rows-5 gap-0.5">
        <Button
          onClick={() => dispatch({ type: CLEAR })}
          className="col-span-2"
        >
          AC
        </Button>
        <Button onClick={() => dispatch({ type: DELETE_DIGIT })}>DEL</Button>
        <OperatorButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperatorButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <Button
          onClick={() => dispatch({ type: EVALUATE })}
          className="col-span-2"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default MobileView;
