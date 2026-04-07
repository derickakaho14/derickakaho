const projects = [
  {
    title: "TaskFlow",
    description: "Task management web application",
  },
  {
    title: "DevShowcase CMS",
    description: "Portfolio management system",
  },
  {
    title: "ShopSphere",
    description: "E-commerce web application",
  }
]

function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border p-6 rounded-lg hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects