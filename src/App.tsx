import { useState } from 'react'

import './App.css'

function App() {
  const [showAlert, setShowAlert] = useState(false)


    const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    inStock: true,
  };



  return (
    <>
      
    </>
  )
}

export default App
