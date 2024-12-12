'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Us
        </motion.h1>

        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Founded in 2010, LensCraft Studio has been dedicated to providing high-quality photography services for individuals, families, and businesses. Our team of skilled photographers brings a wealth of experience and a keen eye for detail to every project, ensuring that your special moments are preserved beautifully.
          </motion.p>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Adinova Indra', title: 'CEO', bio: 'Adinova has over 20 years of experience in the industry.' },
              { name: 'Jane Smith', title: 'CTO', bio: 'Jane leads our technology initiatives with her innovative approach.' },
              { name: 'Mike Johnson', title: 'COO', bio: 'Mike ensures smooth operations across all our departments.' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-zinc-300 mb-2">{member.title}</p>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us ?</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ul>
                <li>Professionalism: Our team of photographers is dedicated to providing top-notch service and delivering high-quality images.</li>
                <li>Creativity: We bring a creative approach to every project, ensuring that your photos are unique and captivating.</li>
                <li>Experience: With years of experience in the industry, we have the expertise to handle any photography needs you may have.</li>
                <li>Personalized Service: We work closely with our clients to understand their vision and bring it to life through our photography.</li>
            </ul>
            <br /><br />
            <p>At LensCraft Studio, we don't just take pictures; we capture memories. Let us help you preserve your precious moments for a lifetime.</p>
          </motion.p>
        </section>
      </div>
    </div>
  )
}

