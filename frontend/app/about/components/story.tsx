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
                We, Taimz Event Collective, are not a big name in event organizations and we are certainly not boring either. What we do have is a shared commitment to crafting unforgettable experiences. We, like you, have journeyed through the challenges of finding meaningful 
                connections during Tet, and we understand the desire for events that go beyond the ordinary.    
              </p>
              <p>
                LūmenFest is more than a festival,<br/>
                It is <em>THAT</em> one day which will make your whole Tết break feel worthwhile.<br/>
                It is <em>THAT</em> place for newcomers who want to expand their circle fast.<br/>
                It is <em>THAT</em> event where you can finally meet people who share your interests.<br/>
                It is <em>THAT</em> opportunity to create lasting memories and connections.
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
            {/* <img
                src ="/black.webp"
                alt="Aurora Event Collective"
                className="w-full h-full object-cover"
              /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
