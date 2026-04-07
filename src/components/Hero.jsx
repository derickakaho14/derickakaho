function Hero() {
  return (
    <section className="text-center py-32 px-6">
      <h1 className="text-5xl font-bold mb-6">
        Hi, I'm Derick
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Full-Stack Developer building modern web applications
      </p>

      <div className="space-x-4">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Projects
        </a>

        <a
          href="https://github.com/derickakaho14"
          className="border px-6 py-3 rounded-lg"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero