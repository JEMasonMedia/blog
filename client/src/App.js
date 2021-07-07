import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [temp, setTemp] = useState(null)

  // axios.defaults.baseURL = 'http://localhost:4000'
  // axios.defaults.headers.post['Content-Type'] = 'application/json'

  useEffect(() => {
    axios.get('http://localhost:4000').then(function (res) {
      setTemp(res.data.msg)
    })

    return () => {}
  }, [temp])

  return (
    <div className='App'>
      <h1>{temp}</h1>
    </div>
  )
}

export default App
