import { motion } from 'framer-motion'

const experience = [
  {
    company: "Infosys",
    role: "System Engineer (Upcoming)",
    period: "Joining Soon",
    points: [
      "Successfully placed at Infosys as a System Engineer through campus recruitment.",
      "Preparing to contribute to enterprise-level software solutions and system architecture.",
      "Focusing on enhancing technical proficiency in large-scale system deployment and maintenance."
    ],
    upcoming: true
  },
  {
    company: "UptoSkill",
    role: "Team Lead - HRMS Project",
    period: "Jan 2025 — Apr 2025",
    points: [
      "Led a cross-functional team to develop a robust Human Resource Management System (HRMS).",
      "Architected the frontend using React and optimized the backend with Node.js and RESTful APIs.",
      "Collaborated with stakeholders to ensure timely delivery and followed Git + Agile best practices.",
      "Managed role-based access control and implemented complex employee tracking features."
    ],
    upcoming: false
  }
]

export default function Experience() {
  return (
    <section id="experience" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="heading-line mb-16 uppercase tracking-widest font-black text-sm">
          <span className="text-brand font-mono text-xl mr-4 font-black">02.</span>
          Professional Journey
        </div>

        <div className="max-w-4xl space-y-12">
          {experience.map((exp, i) => (
            <div key={i} className={`glass p-8 md:p-12 rounded-[2.5rem] border-brand/10 hover:border-brand/30 transition-all shadow-2xl shadow-brand/5 relative overflow-hidden ${exp.upcoming ? 'bg-brand/5' : ''}`}>
              {exp.upcoming && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-brand text-bg text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                  New Milestone
                </div>
              )}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 border-b border-slate-800/50 pb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                    {exp.role} <span className="text-brand">@ {exp.company}</span>
                  </h3>
                  <p className="text-slate-500 font-mono text-sm mt-2 font-bold uppercase tracking-widest">{exp.period}</p>
                </div>
                <div className={`mt-4 md:mt-0 px-6 py-2 glass rounded-full text-xs font-black uppercase tracking-widest ${exp.upcoming ? 'text-brand border-brand/30' : 'text-slate-400 border-slate-800'}`}>
                  {exp.upcoming ? 'Full-Time' : 'Internship'}
                </div>
              </div>
              <ul className="space-y-6">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-4 text-slate-400 leading-relaxed font-medium">
                    <span className="text-brand text-lg shrink-0 mt-1">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
