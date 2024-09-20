import { Evaluate } from "./types";

export default function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: Evaluate) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  return computation.toString();
}

// formatting integers to have comma's, to not have comma's following a decimal
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string) {
  if (operand == null) return;
  const operandInt = parseInt(operand);
  const maximum = 10000000000;
  if (operandInt > maximum) {
    // operand / maximum
    return (
      (operandInt / parseInt("1" + "0".repeat(operand.length - 1))).toFixed(2) +
      "E" +
      (operand.length - 1).toString()
    );
  }
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(parseInt(integer));
  // we don't want to format what comes after the decimal:
  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`;
}
