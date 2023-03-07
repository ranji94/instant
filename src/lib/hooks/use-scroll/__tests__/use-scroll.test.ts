import { renderHook } from '@testing-library/react-hooks'
import { useScrollPosition } from '../use-scroll'
import { vi } from 'vitest'

describe('useScrollPosition', () => {
  it('should set initial scroll position to 0', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current).toBe(0)
  })

  it('should update scroll position when window is scrolled', () => {
    const { result } = renderHook(() => useScrollPosition())

    expect(result.current).toBe(0)

    window.pageYOffset = 100
    window.dispatchEvent(new Event('scroll'))

    expect(result.current).toBe(100)
  })

  it('should remove event listener on unmount', () => {
    const { unmount } = renderHook(() => useScrollPosition())

    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})