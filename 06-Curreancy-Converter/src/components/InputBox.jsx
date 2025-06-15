import { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId(); // useId hook is used to generate a unique id for the input element, which can be useful for accessibility and testing purposes.
  // Note :- do not use to generate key in a list, use it only for unique ids in forms or other elements where a unique identifier is needed.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex transform transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block transition-all duration-200 hover:text-black/60">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5 transition-all duration-200 focus:scale-105 hover:bg-gray-50 rounded"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full transition-all duration-200 hover:text-black/60">
          Currency Type
        </p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:scale-105 hover:shadow-md"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option 
              key={currency} 
              value={currency}
              className="hover:bg-blue-50 transition-colors duration-150"
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;