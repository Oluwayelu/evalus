import Button from "./Button";
import { CHOOSE_OPERATION } from "../reducers/actions";

import type { IACTION } from "../utils/types";
import type { Dispatch } from "react";

type Props = {
  operation: string;
  className?: string;
  dispatch: Dispatch<IACTION>;
};

const OperatorButton = ({ dispatch, operation, className }: Props) => {
  return (
    <Button
      onClick={() =>
        dispatch({ type: CHOOSE_OPERATION, payload: { operation } })
      }
      className={className}
    >
      {operation}
    </Button>
  );
};

export default OperatorButton;
