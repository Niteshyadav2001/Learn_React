import { useState } from 'react'
import InputBox from './components/index.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.jsx'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)


  // console.log(currencyInfo[to])
  const convert = () => {
    setConvertedAmount(amount * 0.41234324)
  }


  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className='w-full flex flex-wrap bg-zinc-800 justify-center items-center min-h-screen'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/70' >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
              // alert('Form Submitted')
            }}>

            {/* input box 1 */}
            <div className='w-full mb-1 bg-white rounded-lg'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectedCurrency={from}
                onAmountChange={(e) => {
                  setAmount(e)
                }}
                onCurrencyChange={(e) => setAmount(amount)}
              />
            </div>

            {/* swap button  */}
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                onClick={swap}
                className="absolute left-1/2 -translate-y-4 -translate-x-1 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>

            {/* input box 2  */}

            <div className='w-full mb-1 bg-white rounded-lg'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={from}
                amountDisabled
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 py-2 rounded-lg text-white border-white border-2'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>

      </div>
    </div>
  );

}

export default App
