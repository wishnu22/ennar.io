import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FiArrowDown, FiPlayCircle } from 'react-icons/fi'
import heroVideo from '../../assets/videos/vid7.mp4'
import heroPoster from '../../assets/images/img1.jpg'

function Hero() {
  const container = useRef(null)
  const titleRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const indicatorRef = useRef(null)

  useGSAP(() => {
    const words = titleRef.current?.querySelectorAll('.hero-word')
    const subtitle = contentRef.current?.querySelector('.hero-subtitle')
    const actions = contentRef.current?.querySelectorAll('.hero-action')
    const chips = contentRef.current?.querySelectorAll('.hero-chip')
    const navbar = document.querySelector('.site-navbar')

    gsap.set(videoRef.current, { autoAlpha: 0, scale: 1.04 })
    gsap.set(navbar, { autoAlpha: 0, y: -16 })
    gsap.set(words, {
      y: 96,
      autoAlpha: 0,
      clipPath: 'inset(0 0 100% 0)',
      rotateX: -16,
      transformPerspective: 700,
      filter: 'blur(12px)',
    })
    gsap.set([subtitle, ...chips, ...actions, indicatorRef.current], {
      y: 26,
      autoAlpha: 0,
    })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.to(videoRef.current, { autoAlpha: 1, duration: 1.15 }, 0)
      .to(navbar, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.1)
      .to(words, {
        y: 0,
        autoAlpha: 1,
        clipPath: 'inset(0 0 0% 0)',
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.35,
        stagger: 0.11,
      }, 0.45)
      .to(subtitle, { y: 0, autoAlpha: 1, duration: 0.78 }, 0.9)
      .to(chips, { y: 0, autoAlpha: 1, duration: 0.72, stagger: 0.08 }, 1.02)
      .to(actions, { y: 0, autoAlpha: 1, duration: 0.82, stagger: 0.12 }, 1.14)
      .to(indicatorRef.current, { y: 0, autoAlpha: 1, duration: 0.72 }, 1.28)

    gsap.to(videoRef.current, {
      scale: 1.1,
      duration: 14,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })

    gsap.to(indicatorRef.current, {
      y: 6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, { scope: container })

  return (
    <section id="top" ref={container} className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0b0b0b]">
      <div className="hero-ambient pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#C7A15A]/20 blur-3xl" />
      <div className="hero-ambient pointer-events-none absolute -right-10 bottom-8 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,161,90,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full min-h-screen w-full min-w-full object-cover object-center opacity-80 brightness-[70%] contrast-[110%] saturate-[104%]"
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,10,14,0.96)_0%,rgba(17,24,39,0.7)_52%,rgba(17,24,39,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.66)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col justify-between px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pt-28 xl:pb-24">
        <div ref={contentRef} className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center py-10 text-center sm:items-start sm:py-16 sm:text-left lg:min-h-[72vh] lg:justify-center">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.42em] text-[#C7A15A] sm:mb-6 sm:text-[0.82rem]">
            Ennar Enterprises / Luxury Bathroom Design
          </p>

          <h1
            ref={titleRef}
            className="font-display max-w-[11ch] text-[2.8rem] font-medium leading-[0.95] tracking-[-0.06em] text-white md:text-[4rem] xl:text-[clamp(4.5rem,8vw,8rem)]"
          >
            <span className="hero-word mb-1 block">Crafting</span>
            <span className="hero-word mb-1 block">Spaces</span>
            <span className="hero-word mb-1 block">That</span>
            <span className="hero-word mb-1 block">Feel</span>
            <span className="hero-word mb-1 block">Timeless</span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-[38rem] text-[0.98rem] leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8 xl:max-w-[40rem]">
            Premium sanitaryware, faucets, wash basins, showers and bathroom solutions designed for modern living.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:justify-start">
            <span className="hero-chip rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-slate-200 backdrop-blur">
              Bespoke Fixtures
            </span>
            <span className="hero-chip rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-slate-200 backdrop-blur">
              Private Residences
            </span>
            <span className="hero-chip rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-slate-200 backdrop-blur">
              Hospitality
            </span>
          </div>

          <div className="hero-actions mt-8 flex w-full max-w-[26rem] flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-5">
            <a
              href="#collections"
              className="hero-action inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C7A15A] px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_42px_rgba(199,161,90,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(199,161,90,0.4)] sm:w-auto sm:px-8"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              className="hero-action inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C7A15A]/80 hover:bg-white/15 hover:shadow-[0_18px_44px_rgba(255,255,255,0.14)] sm:w-auto sm:px-8"
            >
              <FiPlayCircle size={18} />
              Visit Showroom
            </a>
          </div>
        </div>

        <div
          ref={indicatorRef}
          className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[18rem] leading-7 sm:max-w-xs">
            Curated for private residences, hospitality, and architecture-led interiors.
          </p>
          <a
            href="#story"
            className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 px-4 py-2 transition hover:border-[#C7A15A] hover:text-[#C7A15A] sm:self-start"
          >
            <span>Scroll</span>
            <FiArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
