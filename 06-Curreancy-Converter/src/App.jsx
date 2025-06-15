import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo' 
import { useState } from 'react'
function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState('');
  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    if (!amount) return;
    const result = amount * CurrencyInfo[to];
    setConvertedAmount(result || '');
  }

  const handleAmountChange = (value) => {
    const newAmount = value === 0 ? '' : value;
    setAmount(newAmount);
  }

  return (
    <>
    <h1 className='text-4xl text-center bg-none bg-amber-100 font-stretch-50% text-fuchsia-600 '>Curreancy-Converter</h1>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x transition-all duration-500">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-lg bg-white/30 hover:bg-white/40 transition-all duration-300 shadow-lg">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1 relative">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={handleAmountChange}
                selectedCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                className="relative z-10"
              />
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 z-20 hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 transform"
                onClick={swap}
              >
                swap
              </button>
              <div className="relative z-0 mt-1 pt-6">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  selectedCurrency={to}
                  onCurrencyChange={(currency) => setTo(currency)}
                  currencyOptions={options}
                  amountDisabled={true}
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl transform">
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default App
