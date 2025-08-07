"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Bell, Shield, CreditCard, Download, Trash2, LogOut } from 'lucide-react'
import { useState } from "react"
import { useAuth } from "../auth-provider"

export function Settings() {
  const { logout } = useAuth()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await logout()
      // The AuthProvider will handle the state change and redirect
    } catch (error) {
      console.error("Error logging out:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="space-y-6 p-4 md:p-8 relative">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-indigo-500 to-purple-600 animate-gradient-xy"></div>
      <div>
        <h2 className="text-2xl font-bold text-white">Configuración</h2>
        <p className="text-gray-200">Personaliza tu experiencia en la aplicación</p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <User className="h-5 w-5" />
            Perfil de Usuario
          </CardTitle>
          <CardDescription className="text-gray-300">Actualiza tu información personal y preferencias de cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">Nombre</Label>
              <Input id="firstName" placeholder="Tu nombre" defaultValue="Usuario" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">Apellido</Label>
              <Input id="lastName" placeholder="Tu apellido" defaultValue="Demo" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" defaultValue="usuario@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency" className="text-white">Moneda Principal</Label>
            <Select defaultValue="usd">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - Dólar Estadounidense</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="mxn">MXN - Peso Mexicano</SelectItem>
                <SelectItem value="cop">COP - Peso Colombiano</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Guardar Cambios</Button>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-white">Apariencia</CardTitle>
          <CardDescription className="text-gray-300">Personaliza la apariencia de la aplicación</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Tema</Label>
              <p className="text-sm text-gray-300">Selecciona el tema de la aplicación</p>
            </div>
            <ThemeToggle />
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Formato de Fecha</Label>
              <p className="text-sm text-gray-300">Cómo se muestran las fechas</p>
            </div>
            <Select defaultValue="dd/mm/yyyy">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Bell className="h-5 w-5" />
            Notificaciones
          </CardTitle>
          <CardDescription className="text-gray-300">Configura cómo y cuándo recibir notificaciones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Alertas de Presupuesto</Label>
              <p className="text-sm text-gray-300">
                Recibe alertas cuando te acerques al límite de tu presupuesto
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Recordatorios de Transacciones</Label>
              <p className="text-sm text-gray-300">Recordatorios para registrar transacciones pendientes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Reportes Mensuales</Label>
              <p className="text-sm text-gray-300">Recibe un resumen mensual de tus finanzas</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Shield className="h-5 w-5" />
            Seguridad
          </CardTitle>
          <CardDescription className="text-gray-300">Mantén tu cuenta segura</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white">Cambiar Contraseña</Label>
            <div className="space-y-2">
              <Input type="password" placeholder="Contraseña actual" />
              <Input type="password" placeholder="Nueva contraseña" />
              <Input type="password" placeholder="Confirmar nueva contraseña" />
            </div>
            <Button variant="outline">Actualizar Contraseña</Button>
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Autenticación de Dos Factores</Label>
              <p className="text-sm text-gray-300">Agrega una capa extra de seguridad a tu cuenta</p>
            </div>
            <Button variant="outline">Configurar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <CreditCard className="h-5 w-5" />
            Gestión de Datos
          </CardTitle>
          <CardDescription className="text-gray-300">Administra tus datos financieros</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Exportar Datos</Label>
              <p className="text-sm text-gray-300">Descarga todos tus datos financieros</p>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Eliminar Cuenta</Label>
              <p className="text-sm text-gray-300">Elimina permanentemente tu cuenta y todos los datos</p>
            </div>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Eliminar
            </Button>
          </div>
          <Separator className="bg-white/20" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-white">Cerrar Sesión</Label>
              <p className="text-sm text-gray-300">Cierra tu sesión en la aplicación</p>
            </div>
            <Button variant="secondary" onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="h-4 w-4 mr-2" />
              {isLoggingOut ? "Cerrando..." : "Cerrar Sesión"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Information */}
      <Card className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-white">Información de la Aplicación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm text-white">
            <span>Versión:</span>
            <span>23.0.0</span>
          </div>
          <div className="flex justify-between text-sm text-white">
            <span>Última actualización:</span>
            <span>15 de Enero, 2024</span>
          </div>
          <div className="flex justify-between text-sm text-white">
            <span>Soporte:</span>
            <span>soporte@financeapp.com</span>
          </div>
        </CardContent>
      </Card>
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
  )
}
