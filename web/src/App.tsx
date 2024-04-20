
import { QueryClientProvider } from '@tanstack/react-query'
import { Router } from './routes/router'
import { ThemeProvider } from './providers/ThemeProvider'
import { ToastContainer } from 'react-toastify'
import { queryClient } from './lib/queryClient'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
      <ToastContainer limit={1} />
    </QueryClientProvider>
  )
}

export default App
