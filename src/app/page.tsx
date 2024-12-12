'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to LensCraft Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Capturing Moments, Creating Memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href=" https://wa.me/+6282214383335?text=I'm%20inquiring%20about%20the%20service%20list." className="bg-zinc-900 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Company Overview</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission : Capturing Timeless Moments</h3>
              <p>To create lasting memories by capturing life's most precious moments with artistry and excellence.</p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>To create a lasting legacy of unforgettable memories, enriching lives through the power of visual storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products or Services */}
      <section className="py-16">
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
            className="bg-zinc-700 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Event Photography</h2>
            <p className="mb-4">Whether it's a wedding, corporate event, or birthday party, we document every moment so you can relive the memories.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-700 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Commercial Photography</h2>
            <p className="mb-4">Enhance your brand with professional images that showcase your products, services, and corporate events.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-700 rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Travel Photography</h2>
            <p className="mb-4">Explore the world through our lens as we capture breathtaking landscapes and vibrant cultures.</p>
            
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >  
        </motion.div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-zinc-300">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Marc Klok', title: 'CEO, Astra Indonesia', text: '"LensCraft Studio helped elevate our brand with their amazing product shots. The images were high-quality and really brought our products to life."' },
              { name: 'Jane Smith', title: 'Solo Traveler', text: '"The travel photography session exceeded our expectations. The drone shots were particularly impressive, adding a unique perspective to our travel memories."' },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black rounded-lg shadow-md p-6"
              >
                <p className="mb-4 text-zinc-300">{testimonial.text}</p>
                <p className="font-semibold text-zinc-300">{testimonial.name}</p>
                <p className="text-sm text-zinc-300">{testimonial.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

