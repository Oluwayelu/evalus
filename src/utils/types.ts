/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IACTION {
  type: string;
  payload?: any;
}

export interface ISTATE {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  overwrite: boolean;
}

export type Evaluate = {
  currentOperand: string;
  previousOperand: string;
  operation: string;
};
