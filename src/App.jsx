import { AuthProvider } from './context/AuthProvider'
import Routing from './router/Routing'
/*import './assets/js/index'*/

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  )
}

export default App
