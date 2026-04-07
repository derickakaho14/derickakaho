import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";


function About() {
  const technologies = [
    ["JavaScript (ES6+)", "React", "NextJS", "Redux"],
    ["C#", "ASP.NET Core", "Python","PostgresSQL", "MySQL", "NodeJS"],
  ];

  const socialLinks = [
    { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/derick-akaho-b7b974400/" },
  ];

  return (
    <div
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      id="aboutme"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="md:flex items-center">
          {/* Image Section */}
          <div className="md:w-1/3 p-8 flex justify-center">
            <div className="relative">
              <img
                src={"/abtimg.jpg"}
                alt=""
                className="w-64 h-64 object-cover rounded-full border-4 border-green-600 shadow-lg"
              />
              <div className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <span role="img" aria-label="Developer">
                  👨‍💻
                </span>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              About Me
            </h1>

            <p className="text-gray-700 mb-6">
              Hello, my name is Derick Akaho. I'm a full-stack developer experienced in building modern
                web applications using React, Next.js and backend
                technologies like C# and Python. I enjoy designing clean
                interfaces and building scalable systems backed by
                PostgreSQL databases.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Technologies I've Been Working With
              </h3>
              <div className="flex space-x-8">
                {technologies.map((techColumn, columnIndex) => (
                  <ul key={columnIndex} className="space-y-2">
                    {techColumn.map((tech, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {tech}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="./assets/DerickAkaho.docx"
                download="DerickAkaho.docx"
                rel="noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
              >
                Resume 📃
              </a>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 hover:text-green-900  transition-colors text-2xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About