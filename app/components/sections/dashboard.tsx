"use client"

import { useState } from "react"
import { Edit, Check } from "lucide-react"

export function Dashboard() {
  // Estado para el saldo y el modo de edición
  const [balance, setBalance] = useState(32440.00);
  const [isEditing, setIsEditing] = useState(false);
  // Estado separado para el valor del input para no formatear mientras se escribe
  const [inputValue, setInputValue] = useState(balance.toFixed(2));

  // Función para entrar en modo de edición
  const handleEdit = () => {
    setInputValue(balance.toFixed(2)); // Asegura que el input muestre el valor actual sin formato
    setIsEditing(true);
  };

  // Función para guardar el nuevo saldo
  const handleSave = () => {
    const newBalance = parseFloat(inputValue);
    if (!isNaN(newBalance)) {
      setBalance(newBalance);
    }
    setIsEditing(false);
  };

  // Maneja los cambios en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  // Formatea el saldo a un string de moneda para mostrarlo
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance);

  return (
    <div className="flex justify-center text-white p-4">
      <div className="space-y-6 w-full md:mx-auto">
        {/* Sección de Saldo */}
        <div className="mb-6 text-center">
          <p className="text-xl font-medium text-gray-400 mb-2">Patrimonio</p>
          <div className="flex items-center justify-center gap-2 h-12">
            {isEditing ? (
              // Vista de edición con input
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-cyan-300">$</span>
                <input
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave} // Guarda cuando el input pierde el foco
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Guarda al presionar Enter
                  autoFocus
                  className="text-4xl font-bold text-cyan-300 bg-transparent border-b-2 border-cyan-300 w-48 text-center outline-none"
                />
                <button onClick={handleSave} className="text-green-400 hover:text-green-300">
                  <Check size={28} />
                </button>
              </div>
            ) : (
              // Vista de visualización
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-bold text-cyan-300">{formattedBalance}</h1>
                <button onClick={handleEdit} className="text-gray-400 hover:text-white">
                  <Edit size={24} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          {/* Botón Payment */}
          <div className="flex flex-col items-center">
            <button className="bg-[#1e5c70] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Payment</span>
          </div>
          {/* Botón Receive */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Receive</span>
          </div>
          {/* Botón Top Up */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Top Up</span>
          </div>
          {/* Botón Transfer */}
          <div className="flex flex-col items-center">
            <button className="bg-[#20333b] text-white p-2 rounded-xl shadow-lg transition-colors duration-200 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            <span className="mt-2 text-sm text-gray-400">Transfer</span>
          </div>
        </div>

        {/* Botón Add Card */}
        <div className="mb-6 flex justify-center">
          <button className="bg-gray-800 text-gray-400 hover:text-white border border-dashed border-gray-700 p-4 rounded-xl w-full flex items-center justify-center transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Your Card
          </button>
        </div>

        {/* Historial de Transacciones */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-400">
            <span className="font-semibold text-gray-200">Transaction History</span>
            <a href="#" className="text-sm text-cyan-300 hover:underline">See All</a>
          </div>

          {/* Ejemplo de Tarjeta de Transacción 1 */}
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
          
          {/* Ejemplo de Tarjeta de Transacción 2 */}
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
