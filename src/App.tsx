import { useState } from 'react'

function App() {
  const [safuraHours, setSafuraHours] = useState(0)
  const [otherHours, setOtherHours] = useState(0)
  const [totalAmount, setTotalAmount] = useState<string>('0')

  const totalHours = safuraHours + otherHours
  const amountSafura = totalHours > 0 ? (safuraHours / totalHours) * parseFloat(totalAmount) : 0
  const amountOther = parseFloat(totalAmount) - amountSafura

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Safura Calculator</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Hours Section</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="safura" className="block text-sm font-medium text-gray-600 mb-1">Safura:</label>
              <input
                type="number"
                id="safura"
                value={safuraHours}
                onChange={(e) => setSafuraHours(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="other" className="block text-sm font-medium text-gray-600 mb-1">Other:</label>
              <input
                type="number"
                id="other"
                value={otherHours}
                onChange={(e) => setOtherHours(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Total Amount</h2>
          <div>
            <label htmlFor="total" className="block text-sm font-medium text-gray-600 mb-1">Total:</label>
            <input
              type="number"
              id="total"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Result</h2>
          <p className="text-lg text-indigo-600 font-medium">Amount Safura: €{amountSafura.toFixed(2)}</p>
          <p className="text-lg text-indigo-600 font-medium">Amount Other: €{amountOther.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default App
