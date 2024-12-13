'use client'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Event Photography</h2>
            <p className="mb-4">200 high-resolution edited photos, Online gallery for downloading and sharing, USB drive with all photos</p>
            <p className="text-xl font-bold">$99/6 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Commercial Photography</h2>
            <p className="mb-4">100 high-resolution edited photos, Online gallery for downloading and sharing, Image rights for commercial use, Studio setup for product photography</p>
            <p className="text-xl font-bold">$199/8 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Travel Photography</h2>
            <p className="mb-4">Up to 10 locations, 200 high-resolution edited photos, Online gallery for downloading and sharing, Travel photo book, Drone photography</p>
            <p className="text-xl font-bold">$299/day</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 rounded-lg p-6">
              <p className="mb-4">{"The team at Shutter Bliss Photography captured every special moment of our wedding day beautifully. The photos are stunning, and we can&apos;t stop looking at them!"}</p>
              <p className="font-semibold"> - Dino & Hanna</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6">
              <p className="mb-4">{"Their creative approach to our corporate headshots was refreshing. The photos came out great, and the entire team enjoyed the experience."}</p>
              <p className="font-semibold">{"- Emily W, HR Manager at Gembiraloka Zoo"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
