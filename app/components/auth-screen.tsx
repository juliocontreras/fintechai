export function AuthScreen() {
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  useEffect(() => {
    // MODIFICACIÓN 1: Bloquear scroll en <html> y <body> para máxima compatibilidad móvil.
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const meta = document.querySelector('meta[name="viewport"]');
    let originalContent = '';
    if (meta) {
        originalContent = meta.getAttribute('content') || '';
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    };

    document.addEventListener('focusout', handleFocusOut);

    return () => {
        // Restaurar estilos al desmontar el componente
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        if (meta && originalContent) {
            meta.setAttribute('content', originalContent);
        }
        document.removeEventListener('focusout', handleFocusOut);
    }
  }, []);

  const handleAnonymousLogin = async () => {
    setLoading(true)
    try {
      await login("guest@financeapp.com", "anonymous")
    } catch (error: any) {
      console.error("Login error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    // MODIFICACIÓN 2: Usar "fixed inset-0" para fijar el contenedor a la pantalla.
    <div
      className="fixed inset-0 text-white flex flex-col items-center justify-center p-4 font-sans overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #152C37, #0C181E)" }}
    >
      <style>{`
        .blinking-cursor {
            animation: blink 1s step-end infinite;
            color: #2dd4bf;
        }
        @keyframes blink {
            from, to { color: transparent; }
            50% { color: #2dd4bf; }
        }
      `}</style>
      
      <InteractiveParticleCanvas />

      <div className="w-full max-w-xs mx-auto relative z-10">
        {/* ...el resto de tu JSX no necesita cambios... */}
        <div className="flex flex-col items-center space-y-4 mb-10">
          <FintechAILogo className="h-20 w-20 text-teal-400 rotate-90" />
          <h1 className="text-5xl font-medium leading-7">Fintech AI</h1>
          <TypingEffect textToType="Finance Technology Investment" className="text-teal-400 text-sm tracking-wide h-4" />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <a href="#" className="block text-right text-teal-400 text-sm hover:underline">
            Forgot password?
          </a>

          <button
            onClick={handleAnonymousLogin}
            disabled={loading}
            className="w-full bg-teal-400 text-black font-bold py-3 px-4 rounded-full hover:bg-teal-500 transition-colors duration-300 disabled:bg-teal-700 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                <span>Logging In...</span>
              </>
            ) : (
              "Log In"
            )}
          </button>
          
          <div className="flex items-center justify-center space-x-4 my-4">
            <span className="text-gray-500">or</span>
          </div>
          <div className="flex justify-center">
            <ScanFace className="h-10 w-10 text-gray-500" />
          </div>

          <button className="w-full border-2 border-teal-400 text-teal-400 font-bold py-3 px-4 rounded-full hover:bg-teal-400 hover:text-black transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
