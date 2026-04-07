const skills = [
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "C#",
  "Python",
  "PostgreSQL",
  "SQL"
]

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white shadow rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills