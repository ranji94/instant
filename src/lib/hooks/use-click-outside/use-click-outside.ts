import { useEffect, useState } from 'react'

interface Reference {
    current: {
        contains: (target: EventTarget | null) => boolean
    }
}

export const useClickOutside = (refs: Reference[]) => {
    const [enabled, setEnabled] = useState<boolean>(false)

    useEffect(() => {
        const checkIfClickedOutside = (e: Event) => {
          if (enabled && refs.every((ref: Reference) => !ref.current.contains(e.target))) {
            setEnabled(false)
          }
        }
  
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [enabled])

    return { enabled, setEnabled }
}