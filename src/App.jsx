import { useState } from 'react'
import Loader from './loader'
import Portfolio from './portfolio'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <Portfolio />
      )}
    </>
  )
}
