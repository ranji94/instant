import { useEffect, useState } from 'react'
import { FETCH_STATUS } from './fetch-status'

const useFetch = (url: string, options?: RequestInit) => {
    const [status, setStatus] = useState<string>(FETCH_STATUS.IDLE)
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        const signal = controller.signal

        const fetchData = async () => {
            setStatus(FETCH_STATUS.FETCHING)

            try {
                const response = await fetch(
                    url,
                    {
                        signal,
                        ...options
                    }
                )
                const data = await response.json()
                setData(data)
                setStatus(FETCH_STATUS.FETCHED)
            } catch (error: any) {
                if (error.name === 'AbortError') {
                    setData(error.response.data)
                    setStatus(FETCH_STATUS.FAILED)
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url])

    return { status, data }
}

export { FETCH_STATUS, useFetch }