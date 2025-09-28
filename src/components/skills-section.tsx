import React from "react"

export function SkillsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> {`skills & technologies`}
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
          <p className="text-gray-300 mb-6">
            TypeScript, Python, HTML, CSS,PHP
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Frameworks & Libraries</h3>
          <p className="text-gray-300 mb-6">React, Next.js, Node.js, Express</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Databases</h3>
          <p className="text-gray-300 mb-6">SQL, MySQL, PostgreSQL, MongoDb</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Tools & Platforms</h3>
          <p className="text-gray-300 mb-6">Git, Prisma, Drizzle, Docker</p>
        </div>
      </div>
    </section>
  )
}
