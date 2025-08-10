"use client"

import { useState } from "react"
// Se asume que estos imports son correctos y los componentes existen.
// import { Bell, User, LogOut } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dashboard } from "./sections/dashboard"
import { Transactions } from "./sections/transactions"
import { Investments } from "./sections/investments"
import { Budgets } from "./sections/budgets"
import { Settings } from "./sections/settings"
import { BottomNavigation } from "./bottom-navigation"
import { CustomSidebar } from "./custom-sidebar"
import { useAuth } from "./auth-provider"

export function MainApp() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { logout } = useAuth()

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "transactions":
        return <Transactions />
      case "investments":
        return <Investments />
      case "budgets":
        return <Budgets />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    // MODIFICACIÓN 1: Se cambió a `h-screen` y se añadió `overflow-x-hidden`
    // para ocupar toda la altura de la pantalla y prevenir el scroll lateral.
    <div className="flex h-screen overflow-x-hidden" style={{ background: 'linear-gradient(to bottom, #152C37, #0C181E)' }}>
      {/* Custom Sidebar */}
      <CustomSidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      {/* MODIFICACIÓN 2: Se añadió `overflow-hidden` para que el scroll se gestione internamente. */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* MODIFICACIÓN 3: El header ahora es fijo en la parte superior del contenedor principal. */}
        <header className="bg-transparent z-10">
          <div className="flex justify-between items-center h-14 px-4 bg-transparent">
              {/* Menú de hamburguesa y campana a la izquierda con círculos */}
              <div className="flex items-center space-x-4">
                  {/* Botón de hamburguesa que abre el sidebar */}
                  <button 
                    className="text-gray-400 hover:text-white p-2 rounded-full bg-[#20333b]"
                    onClick={toggleSidebar}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  </button>
                  {/* Botón de campana */}
                  <button className="text-gray-400 hover:text-white p-2 rounded-full bg-[#20333b]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                  </button>
              </div>
              {/* Texto "Hello!" y nombre de usuario con foto a la derecha */}
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => setActiveSection("settings")}
              >
                  <div className="flex flex-col items-end">
                      <p className="font-normal text-sm text-gray-200">Bienvenido!</p>
                      <p className="text-lg font-bold text-white">Julio Contreras</p>
                  </div>
                  {/* MODIFICACIÓN 4: Foto de perfil actualizada, más grande y con borde. */}
                  <img 
                    src="https://i.imgur.com/8b2dJ3E.jpeg" // URL de la nueva imagen
                    alt="Profile" 
                    // Se aumentó el tamaño un 10% (de h-10/w-10 a h-11/w-11)
                    // y se añadió un borde circular con el color solicitado.
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-[#29c2a3]"
                  />
              </div>
          </div>
        </header>

        {/* MODIFICACIÓN 5: El contenido principal ahora tiene su propio scroll vertical. */}
        <main className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="w-full md:w-1/2 lg:w-[45%] mx-auto">
            {renderActiveSection()}
          </div>
        </main>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onMenuClick={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

// ========= Componentes de ejemplo (placeholders) =========
// Estos son componentes de ejemplo para que el código sea funcional.
// Deberías reemplazarlos con tus propias implementaciones.

const PlaceholderSection = ({ title }) => (
  <div className="text-white bg-gray-800/50 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>Contenido de la sección {title}.</p>
  </div>
);

const Dashboard = () => <PlaceholderSection title="Dashboard" />;
const Transactions = () => <PlaceholderSection title="Transactions" />;
const Investments = () => <PlaceholderSection title="Investments" />;
const Budgets = () => <PlaceholderSection title="Budgets" />;
const Settings = () => <PlaceholderSection title="Settings" />;

const CustomSidebar = ({ isOpen, onClose, activeSection, onSectionChange }) => (
  <div className={`fixed top-0 left-0 h-full bg-[#152C37] text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 md:w-64`}>
    <div className="p-4">
      <h2 className="text-xl font-bold">Menú</h2>
      <ul>
        <li className={`p-2 cursor-pointer ${activeSection === 'dashboard' ? 'bg-gray-700' : ''}`} onClick={() => onSectionChange('dashboard')}>Dashboard</li>
        <li className={`p-2 cursor-pointer ${activeSection === 'transactions' ? 'bg-gray-700' : ''}`} onClick={() => onSectionChange('transactions')}>Transactions</li>
      </ul>
    </div>
  </div>
);

const BottomNavigation = ({ activeSection, onSectionChange, onMenuClick }) => (
  <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#152C37] text-white flex justify-around items-center md:hidden z-20">
    <button onClick={() => onSectionChange('dashboard')} className={activeSection === 'dashboard' ? 'text-[#29c2a3]' : ''}>Dashboard</button>
    <button onClick={() => onSectionChange('transactions')} className={activeSection === 'transactions' ? 'text-[#29c2a3]' : ''}>Transactions</button>
    <button onClick={onMenuClick}>Menu</button>
  </div>
);

const useAuth = () => ({
  logout: () => console.log('Logged out'),
});