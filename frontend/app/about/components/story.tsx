export default function Story() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#2C4F50] mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Aurora Event Collective brings together three passionate founders united by a vision: to create
                meaningful connections between local Vietnamese communities and international expats through
                unforgettable cultural experiences.
              </p>
              <p>
                LūmenFest is more than a festival—it's a celebration of unity, where traditional Tet festivities meet
                modern entertainment, creating a space where worlds truly meet and cultures shine brighter together.
              </p>
            </div>
          </div>

          {/* Video Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900">
            {/* <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Aurora Event Collective"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            <img
                src ="/black.webp"
                alt="Aurora Event Collective"
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
