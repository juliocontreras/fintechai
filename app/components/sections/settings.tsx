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
      // El AuthProvider se encargará del cambio de estado y la redirección
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  // Clases de estilo para reutilizar
  const cardClasses = "bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50"
  const labelClasses = "text-gray-300"
  const descriptionClasses = "text-gray-400"
  const inputClasses = "bg-slate-900/70 border-slate-700 text-white placeholder:text-gray-500 rounded-md"
  const selectTriggerClasses = "bg-slate-900/70 border-slate-700 text-white rounded-md"
  const separatorClasses = "bg-slate-700"

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Configuración</h2>
        <p className={descriptionClasses}>Personaliza tu experiencia en la aplicación</p>
      </div>

      {/* Profile Settings */}
      <Card className={cardClasses}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-white">
            <User className="h-6 w-6" />
            Perfil de Usuario
          </CardTitle>
          <CardDescription className={descriptionClasses}>Actualiza tu información personal y preferencias de cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className={labelClasses}>Nombre</Label>
              <Input id="firstName" placeholder="Tu nombre" defaultValue="Usuario" className={inputClasses} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className={labelClasses}>Apellido</Label>
              <Input id="lastName" placeholder="Tu apellido" defaultValue="Demo" className={inputClasses} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClasses}>Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" defaultValue="usuario@email.com" className={inputClasses} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency" className={labelClasses}>Moneda Principal</Label>
            <Select defaultValue="usd">
              <SelectTrigger className={selectTriggerClasses}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="usd">USD - Dólar Estadounidense</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="mxn">MXN - Peso Mexicano</SelectItem>
                <SelectItem value="cop">COP - Peso Colombiano</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full md:w-auto">Guardar Cambios</Button>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card className={cardClasses}>
        <CardHeader>
          <CardTitle className="text-white">Apariencia</CardTitle>
          <CardDescription className={descriptionClasses}>Personaliza la apariencia de la aplicación</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className={labelClasses}>Tema</Label>
              <p className="text-sm text-gray-400">Selecciona el tema de la aplicación</p>
            </div>
            <ThemeToggle />
          </div>
          <Separator className={separatorClasses} />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className={labelClasses}>Formato de Fecha</Label>
              <p className="text-sm text-gray-400">Cómo se muestran las fechas</p>
            </div>
            <Select defaultValue="dd/mm/yyyy">
              <SelectTrigger className={`w-[180px] ${selectTriggerClasses}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className={cardClasses}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-white">
            <Bell className="h-6 w-6" />
            Notificaciones
          </CardTitle>
          <CardDescription className={descriptionClasses}>Configura cómo y cuándo recibir notificaciones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className={labelClasses}>Alertas de Presupuesto</Label>
              <p className="text-sm text-gray-400">
                Recibe alertas cuando te acerques al límite de tu presupuesto
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className={separatorClasses} />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className={labelClasses}>Recordatorios de Transacciones</Label>
              <p className="text-sm text-gray-400">Recordatorios para registrar transacciones pendientes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className={separatorClasses} />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className={labelClasses}>Reportes Mensuales</Label>
              <p className="text-sm text-gray-400">Recibe un resumen mensual de tus finanzas</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security & Data Management */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className={cardClasses}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <Shield className="h-6 w-6" />
              Seguridad
            </CardTitle>
            <CardDescription className={descriptionClasses}>Mantén tu cuenta segura</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className={labelClasses}>Cambiar Contraseña</Label>
              <div className="space-y-2">
                <Input type="password" placeholder="Contraseña actual" className={inputClasses} />
                <Input type="password" placeholder="Nueva contraseña" className={inputClasses} />
                <Input type="password" placeholder="Confirmar nueva contraseña" className={inputClasses} />
              </div>
              <Button variant="outline" className="w-full">Actualizar Contraseña</Button>
            </div>
            <Separator className={separatorClasses} />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className={labelClasses}>Autenticación de Dos Factores</Label>
              </div>
              <Button variant="outline">Activar</Button>
            </div>
          </CardContent>
        </Card>

        <Card className={cardClasses}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <CreditCard className="h-6 w-6" />
              Gestión de Cuenta
            </CardTitle>
            <CardDescription className={descriptionClasses}>Administra tus datos y sesión</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className={labelClasses}>Exportar Datos</Label>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
            <Separator className={separatorClasses} />
            <div className="flex items-center justify-between">
              <Label className={labelClasses}>Cerrar Sesión</Label>
              <Button variant="secondary" onClick={handleLogout} disabled={isLoggingOut}>
                <LogOut className="h-4 w-4 mr-2" />
                {isLoggingOut ? "Cerrando..." : "Cerrar Sesión"}
              </Button>
            </div>
            <Separator className={separatorClasses} />
            <div className="flex items-center justify-between">
              <Label className={`${labelClasses} text-red-500`}>Eliminar Cuenta</Label>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}