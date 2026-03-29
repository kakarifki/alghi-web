import { skillCategories } from '../data/portfolioData';
import { Award, Briefcase, Globe } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '4+', label: 'Years Experience' },
  { icon: Award, value: '6', label: 'Niches Covered' },
  { icon: Globe, value: "10+", label: 'Medium Publications' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title mb-6">
              The writer behind the{' '}
              <span className="text-green-400">words</span>.
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-200">Alghi</strong> is a writer with over{' '}
                <strong className="text-gray-200">4 years</strong> of experience creating content across psychology, pop culture, technology, finance, and personal development.
              </p>
              <p>
                He has also worked as a Social Media Strategist and Creative Project Manager, managing creative projects and collaborating with cross-functional teams to deliver clear and engaging brand communication.
              </p>
              {/* <p>
                With a passion for storytelling and a talent for crafting compelling copy that appeals to both casual and
                hardcore readers, Alghi holds a{' '}
                <strong className="text-gray-200">Bachelor of Communication Science in Marketing Communication</strong>{' '}
                from Telkom University with multiple certifications in digital marketing and analytics.
              </p> */}
            </div>

            {/* Skills pills */}
            <div className="mt-8 space-y-6">
              {skillCategories.map((category, idx) => (
                <div key={idx}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                    {category.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.label}
                        className={`skill-pill border text-sm ${skill.color}`}
                      >
                        {skill.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="flex flex-col gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-5 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-400/30 transition-colors duration-300"
              >
                <div className="p-3 bg-green-400/10 rounded-lg flex-shrink-0">
                  <Icon size={22} className="text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-100">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}

            {/* Certifications note */}
            <div className="p-5 bg-purple-500/5 border border-purple-500/20 rounded-xl">
              <p className="text-sm text-purple-400 font-semibold mb-1">Certifications</p>
              <p className="text-sm text-gray-400">Digital Marketing &amp; Analytics — multiple platforms</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
