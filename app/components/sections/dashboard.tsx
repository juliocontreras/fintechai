"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PatrimonioChart } from "@/components/charts/patrimonio-chart"
import { ExpensesChart } from "@/components/charts/expenses-chart"
import { TrendingUp, TrendingDown, DollarSign, CreditCard } from "lucide-react"

export function Dashboard() {
  return (
    // Se ha eliminado el 'min-h-screen' y el 'items-center' para que el contenido comience en la parte superior.
    <div className="flex justify-center text-white p-4">
      {/* The md:w-[45%] class has been removed to make the dashboard 100% width. */}
      <div className="space-y-6 w-full md:mx-auto">
        {/* Balance section */}
        <div className="mb-6 text-center">
          <p className="text-xl font-medium text-gray-400 mb-2">Patrimonio</p>
          <h1 className="text-4xl font-bold text-cyan-300">$32,440.00</h1>
        </div>

        {/* Action buttons with perfect square format and background color */}
        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          {/* Payment Button */}
          <div className="flex flex-col items-center">
            <button className="bg-[#1e5c70] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Payment</span>
          </div>
          {/* Receive Button */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Receive</span>
          </div>
          {/* Top Up Button */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Top Up</span>
          </div>
          {/* Transfer Button */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Transfer</span>
          </div>
        </div>

        {/* Add Card Button */}
        <div className="mb-6 flex justify-center">
          <button className="bg-gray-800 text-gray-400 hover:text-white border border-dashed border-gray-700 p-4 rounded-xl w-full flex items-center justify-center transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Your Card
          </button>
        </div>

        {/* Transaction History */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-400">
            <span className="font-semibold text-gray-200">Transaction History</span>
            <a href="#" className="text-sm text-cyan-300 hover:underline">See All</a>
          </div>

          {/* Transaction Card Example 1 */}
          <div className="bg-[#20333b] p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <div className="ml-3">
                <p className="font-semibold text-gray-200">Bank Account</p>
                <p className="text-sm text-gray-400">4322 **** **** 8900</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Transaction Card Example 2 */}
          <div className="bg-[#20333b] p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 .895-2 2-2zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-3">
                <p className="font-semibold text-gray-200">VISA</p>
                <p className="text-sm text-gray-400">5567 **** **** 8910</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
