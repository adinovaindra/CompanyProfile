'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TeamMember {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
  }
}

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(data => setTeamMembers(data.results))
  }, [])

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800 rounded-lg shadow-md p-6 text-center"
            >
              <img
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{`${member.name.first} ${member.name.last}`}</h2>
              <p className="text-sm">{member.email}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

