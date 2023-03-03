import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}