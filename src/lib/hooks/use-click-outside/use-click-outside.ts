import { useEffect, useState } from 'react'

interface Reference {
    current: {
        contains: (target: EventTarget | null) => boolean
    }
}

export const useClickOutside = (refs: Reference[]) => {
    const [isClickedOutside, setClickedOutside] = useState<boolean>(false)

    useEffect(() => {
        const checkIfClickedOutside = (e: Event) => 
          setClickedOutside(isClickedOutside 
            && refs.every((ref: Reference) => !ref.current.contains(e.target)))
  
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isClickedOutside])

    return { isClickedOutside, setClickedOutside }
}