import { ADD_DIGIT } from "../reducers/actions";

import type { IACTION } from "../utils/types";
import type { Dispatch } from "react";
import Button from "./Button";

type Props = {
  digit: string;
  className?: string;
  dispatch: Dispatch<IACTION>;
};

const DigitButton = ({ dispatch, digit, className }: Props) => {
  return (
    <Button
      onClick={() => dispatch({ type: ADD_DIGIT, payload: { digit } })}
      className={className}
    >
      {digit}
    </Button>
  );
};

export default DigitButton;
