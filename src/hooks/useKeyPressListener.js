import { useEffect } from 'react'

export const useKeyPressListener = (key, callback) => {
  useEffect(() => {
    function click(event) {
      if (event.key === key) {
        callback()
      }
    }

    document.body.addEventListener('keydown', click, { passive: true })

    return () => {
      document.body.removeEventListener('keydown', click, { passive: true })
    }
  }, [key, callback])
}
