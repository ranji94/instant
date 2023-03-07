import { renderHook, waitFor } from '@testing-library/react'
import { useFetch } from '../use-fetch'
import { FETCH_STATUS } from '../fetch-status'
import { vi } from 'vitest'

describe('useFetch', () => {
    vi.mock('./httpCall', () => ({
        httpCall: vi.fn()
    }))

  beforeEach(() => {
    vi.spyOn(global, 'fetch')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return initial status and data when url is not provided', () => {
    const { result } = renderHook(() => useFetch('', {}))
    expect(result.current.status).toBe(FETCH_STATUS.IDLE)
    expect(result.current.data).toBeNull()
  })

  it('should fetch data and update status to FETCHED when url is provided and fetch is successful', async () => {
    const mockData = { message: 'Hello World!' }
    // @ts-ignore
    global.fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    })
    const { result } = renderHook(() =>
      useFetch('https://example.com')
    )
    expect(result.current.status).toBe(FETCH_STATUS.FETCHING)
    expect(result.current.data).toBeNull()

    await waitFor(() => {
        expect(result.current.status).toBe(FETCH_STATUS.FETCHED)
        expect(result.current.data).toEqual(mockData)
        expect(global.fetch).toHaveBeenCalledWith('https://example.com', {
          signal: expect.any(AbortSignal),
        })
    })
  })
})
