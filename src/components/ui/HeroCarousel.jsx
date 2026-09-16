import { useEffect, useRef, useState } from 'react'
import './HeroCarousel.css'

const DEFAULT_SLIDES = [
  { label: 'Hero image 1' },
  { label: 'Hero image 2' },
  { label: 'Hero image 3' },
]

/**
 * @param {{
 *   slides?: { src?: string, alt?: string, label?: string }[],
 *   interval?: number,
 * }} props
 */
function HeroCarousel({ slides = DEFAULT_SLIDES, interval = 2500 }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, interval)

    return () => clearInterval(timerRef.current)
  }, [slides.length, interval, isPaused])

  if (slides.length === 0) return null

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="hero-carousel-viewport">
        {slides.map((slide, index) => (
          <div
            key={slide.src ?? slide.label ?? index}
            className={`hero-carousel-slide placeholder-box${index === activeIndex ? ' is-active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            {slide.src ? (
              <img src={slide.src} alt={slide.alt ?? ''} className="hero-carousel-image" />
            ) : (
              <span>{slide.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel
