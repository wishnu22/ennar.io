import { motion } from 'framer-motion'

function InfoCard({ icon: Icon, title, text }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="flex h-full min-w-0 flex-col rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_72px_rgba(17,24,39,0.05)] backdrop-blur sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3 text-[#C7A15A]">
        <div className="rounded-full bg-[#F7F5F2] p-2.5">
          <Icon size={18} />
        </div>
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.34em]">Studio Note</p>
      </div>
      <h3 className="font-display text-[1.9rem] leading-none text-slate-900">{title}</h3>
      <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">{text}</p>
    </motion.article>
  )
}

export default InfoCard
