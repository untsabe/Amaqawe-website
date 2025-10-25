"use client"

import Image from "next/image"

export default function GalleryPage() {
  const images = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    "/gallery/image4.jpg",
    "/gallery/image5.jpg",
    "/gallery/image6.jpg",
    "/gallery/image7.jpg",
    "/gallery/image8.jpg",
    "/gallery/image9.jpg",
     "/gallery/image10.jpg",
      "/gallery/image11.jpg",
       "/gallery/image12.jpg",
        "/gallery/image13.jpg",
  ]

  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Our Gallery
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          A showcase of our projects, installations, and community work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
