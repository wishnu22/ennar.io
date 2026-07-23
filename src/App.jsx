import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { FiArrowRight, FiAward, FiCheckCircle, FiCompass, FiDroplet, FiLayers } from 'react-icons/fi'
import Hero from './components/hero/Hero'
import Navbar from './components/layout/Navbar'
import SectionHeading from './components/common/SectionHeading'
import InfoCard from './components/common/InfoCard'
import img1 from './assets/images/img1.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'
import img6 from './assets/images/img6.jpg'
import img7 from './assets/images/img7.jpg'
import img8 from './assets/images/img8.jpeg'

gsap.registerPlugin(ScrollTrigger)

const collections = [
  {
    title: 'Architectural Faucets',
    text: 'Sculptural forms with precision engineering and intuitive performance.',
    image: img6,
  },
  {
    title: 'Ceramic Essentials',
    text: 'Wash basins and sanitaryware finished with remarkable softness and texture.',
    image: img7,
  },
  {
    title: 'Immersive Showers',
    text: 'Thermal comfort and refined detail for the most considered spaces.',
    image: img8,
  },
]

const whyChoose = [
  { icon: FiAward, title: 'Crafted Excellence', text: 'Each composition is honed through superior materials and meticulous finishing.' },
  { icon: FiCompass, title: 'Design-led Guidance', text: 'Our team pairs architectural vision with tailored specification support.' },
  { icon: FiCheckCircle, title: 'Tailored Precision', text: 'Solutions are curated for residences, hospitality and private developments.' },
]

function App() {
  const contentRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true, wheelMultiplier: 1.08 })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const timer = window.setTimeout(() => setIsLoading(false), 950)

    const revealSections = gsap.utils.toArray('.reveal-section')
    const parallaxTargets = gsap.utils.toArray('.reveal-parallax')

    parallaxTargets.forEach((target) => {
      gsap.to(target, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    revealSections.forEach((section, index) => {
      const heading = section.querySelector('.reveal-heading')
      const paragraph = section.querySelector('.reveal-para')
      const media = section.querySelector('.reveal-media')
      const items = section.querySelectorAll('.reveal-item')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })

      if (heading) {
        tl.fromTo(
          heading,
          { y: 34, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
          { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power3.out' },
          index * 0.04,
        )
      }
      if (paragraph) {
        tl.fromTo(paragraph, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.5')
      }
      if (media) {
        tl.fromTo(
          media,
          { y: 40, opacity: 0, scale: 0.985, clipPath: 'inset(4% 0 10% 0)' },
          { y: 0, opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.15, ease: 'power3.out' },
          '-=0.62',
        )
      }
      if (items.length) {
        tl.fromTo(items, { y: 26, opacity: 0, rotateX: -6, filter: 'blur(5px)' }, { y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)', duration: 0.95, stagger: 0.11, ease: 'power3.out' }, '-=0.58')
      }
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div ref={contentRef} className="relative min-h-screen overflow-x-clip bg-[#F7F5F2] text-slate-900">
      {isLoading && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#111827] text-white">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#C7A15A]">Ennar Enterprises</p>
            <p className="mt-3 text-2xl font-semibold tracking-[0.2em]">Curating timeless spaces</p>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />

      <main className="pb-8">
        <section id="story" className="reveal-section scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 xl:py-40">
          <div className="mx-auto grid max-w-[1380px] items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div className="reveal-heading min-w-0 pt-2 lg:pt-10">
              <SectionHeading
                eyebrow="Our Story"
                title="Quiet luxury, shaped by form and function."
                description="Ennar Enterprises creates bathroom environments that feel timeless, tactile and deeply considered—where architecture and ritual meet with exceptional restraint."
              />
              <p className="reveal-para mt-10 max-w-[36rem] text-[1.02rem] leading-8 text-slate-700 sm:text-[1.08rem] sm:leading-9">
                From sculptural fixtures to refined finishes, every detail is shaped to elevate the everyday ritual of bathing and grooming.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_80px_rgba(17,24,39,0.05)] backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#C7A15A]">Signature Approach</p>
                  <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">A considered balance of material richness, architectural clarity and deeply personal comfort.</p>
                </div>
                <div className="rounded-[1.6rem] border border-slate-200/80 bg-[#111827] p-5 text-white shadow-[0_20px_80px_rgba(17,24,39,0.1)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#C7A15A]">Editorial Focus</p>
                  <p className="mt-3 text-[0.96rem] leading-7 text-slate-300">Spatial calm, sculptural restraint and a beautifully measured experience from arrival to ritual.</p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="reveal-media reveal-parallax relative min-w-0 overflow-hidden rounded-[2.75rem] border border-slate-200/80 bg-white p-3 shadow-[0_32px_110px_rgba(17,24,39,0.10)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.1),rgba(17,24,39,0.52))]" />
              <div className="absolute inset-x-6 top-6 z-10 rounded-full border border-white/40 bg-black/15 px-3 py-1 text-[0.62rem] uppercase tracking-[0.35em] text-white backdrop-blur-sm">
                Editorial detail
              </div>
              <img
                loading="lazy"
                src={img4}
                alt="Luxury bathroom interior"
                className="w-full rounded-[2rem] object-cover object-[center_58%] aspect-[4/5] sm:aspect-[16/10]"
              />
              <div className="absolute bottom-6 left-6 right-6 z-10 max-w-md rounded-[1.3rem] border border-white/20 bg-black/22 px-4 py-3 text-white backdrop-blur-sm">
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-[#E7CD9A]">Material Story</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Monumental surfaces, warm reflections and a precise softness that brings the space to rest.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="collections" className="reveal-section scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 xl:py-40">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading
              eyebrow="Collections"
              title="A home for sculptural essentials."
              description="Discover a collection of premium sanitaryware and architectural fittings designed to speak in calm, elevated lines."
              align="center"
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
              <motion.article
                key={collections[0].title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="reveal-item group min-w-0 overflow-hidden rounded-[2.3rem] border border-slate-200/70 bg-white shadow-[0_24px_90px_rgba(17,24,39,0.06)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={collections[0].image}
                    alt={collections[0].title}
                    className="reveal-parallax w-full object-cover object-center transition duration-900 group-hover:scale-105 aspect-[4/5] sm:aspect-[16/10]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08),rgba(17,24,39,0.56))]" />
                  <div className="absolute inset-x-6 bottom-6 z-10 max-w-xl rounded-[1.35rem] border border-white/20 bg-black/20 p-5 text-white backdrop-blur-sm">
                    <p className="text-[0.66rem] uppercase tracking-[0.38em] text-[#E7CD9A]">Collection 01</p>
                    <h3 className="mt-2 font-display text-[2.1rem] leading-none">{collections[0].title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200">{collections[0].text}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3">
                      View details <FiArrowRight />
                    </a>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-6">
                {collections.slice(1).map((item, index) => (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="reveal-item group min-w-0 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_16px_72px_rgba(17,24,39,0.05)]"
                  >
                    <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
                      <div className="min-w-0 overflow-hidden">
                        <img
                          loading="lazy"
                          src={item.image}
                          alt={item.title}
                          className="reveal-parallax w-full object-cover transition duration-900 group-hover:scale-105 aspect-[4/3] sm:aspect-auto sm:min-h-[220px]"
                        />
                      </div>
                      <div className="flex min-w-0 flex-col justify-center p-6 sm:p-7">
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.38em] text-[#C7A15A]">Collection 0{index + 2}</p>
                        <h3 className="mt-2 font-display text-[1.9rem] leading-none text-slate-900">{item.title}</h3>
                        <p className="mt-3 text-[0.94rem] leading-7 text-slate-600">{item.text}</p>
                        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C7A15A] transition hover:gap-3">
                          View details <FiArrowRight />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-section scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 xl:py-40">
          <div className="mx-auto grid max-w-[1380px] gap-10 rounded-[3.2rem] border border-slate-200/70 bg-[#111827] p-8 text-white shadow-[0_30px_120px_rgba(17,24,39,0.14)] lg:grid-cols-[0.84fr_1.16fr] lg:p-14 xl:p-16">
            <div className="reveal-heading flex min-w-0 flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A15A]">Featured Collection</p>
                <h2 className="mt-4 max-w-[9ch] font-display text-[clamp(2.8rem,4vw,4.7rem)] leading-[0.95] tracking-[-0.02em] text-white">
                  The signature suite for modern residences.
                </h2>
                <p className="reveal-para mt-6 max-w-lg text-[1rem] leading-8 text-slate-300">
                  A composition of bath fixtures, bespoke hardware and tactile surfaces designed to create a calm, architectural atmosphere.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/10 p-5">
                <div className="flex items-center gap-3 text-[#C7A15A]">
                  <FiLayers size={20} />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.34em]">Specification Support</span>
                </div>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-300">
                  Our specialists coordinate finishes, dimensions and project delivery with the quiet confidence expected of high-end interiors.
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-6 md:grid-cols-2">
              <img
                loading="lazy"
                src={img5}
                alt="Luxury bathroom vanity"
                className="reveal-item reveal-media reveal-parallax w-full rounded-[2rem] object-cover aspect-[4/3] md:aspect-auto md:min-h-[340px]"
              />
              <motion.div whileHover={{ y: -4, scale: 1.01 }} className="reveal-item flex min-w-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/10 p-6 sm:p-7">
                <div>
                  <div className="inline-flex rounded-full bg-[#C7A15A]/20 p-3 text-[#C7A15A]">
                    <FiDroplet size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-[2rem] leading-none text-white">Immersive Wellness</h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-slate-300">Elevated bathing rituals, crafted with a soft, restorative language.</p>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3">
                  Book a consultation <FiArrowRight />
                </a>
              </motion.div>
              <div className="reveal-item md:col-span-2 min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10">
                <img loading="lazy" src={img1} alt="Luxury bathroom ambience" className="reveal-parallax w-full object-cover object-[center_58%] aspect-[16/9]" />
              </div>
            </div>
          </div>
        </section>

        <section id="craft" className="reveal-section scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 xl:py-40">
          <div className="mx-auto max-w-[1380px]">
            <SectionHeading
              eyebrow="Why Ennar"
              title="Refined expertise for exceptional spaces."
              description="We blend architectural detail with tactile luxury to create bathrooms that feel calm, personal and enduring."
              align="center"
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {whyChoose.map((item) => (
                <div key={item.title} className="reveal-item">
                  <InfoCard icon={item.icon} title={item.title} text={item.text} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal-section scroll-mt-24 overflow-hidden px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32 xl:pb-40">
          <div className="mx-auto flex max-w-[1380px] flex-col gap-8 rounded-[3.2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_25px_100px_rgba(17,24,39,0.06)] backdrop-blur lg:flex-row lg:items-end lg:justify-between lg:p-12 xl:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A15A]">Visit the Showroom</p>
              <h2 className="reveal-heading mt-4 max-w-[11ch] font-display text-[clamp(2.7rem,4.5vw,4.8rem)] leading-[0.95] text-slate-900">
                Experience the collection in person.
              </h2>
              <p className="reveal-para mt-5 max-w-2xl text-[1rem] leading-8 text-slate-600">
                Arrange a private consultation to explore our latest arrivals and discover bespoke bathroom solutions for your project.
              </p>
            </div>

            <a href="mailto:studio@ennarenterprises.com" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f2937]">
              studio@ennarenterprises.com <FiArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer id="footer-contact" className="border-t border-slate-200/70 bg-[#F7F5F2] px-4 py-10 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#C7A15A]">Visit Store</p>
            <p className="mt-3 text-base font-semibold text-slate-900">Ennar Enterprises</p>
            <p className="mt-1">+91 8848 630199</p>
            <p className="mt-2 leading-7">Moonupedika Beach RD, Devamnagalam, Kerala 680681</p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#top" className="transition hover:text-[#C7A15A]">Top</a>
            <a href="#collections" className="transition hover:text-[#C7A15A]">Collections</a>
            <a href="#contact" className="transition hover:text-[#C7A15A]">Contact</a>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1380px] border-t border-slate-200/70 pt-4">
          <p>© 2026 Ennar Enterprises. Crafted for timeless interiors.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
