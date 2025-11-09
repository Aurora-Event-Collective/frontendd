"use client"

export default function CTA() {
  return (
    <div className="bg-[#F5D5C0] py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C4F50] mb-6 text-balance">
          Come for the laughter. Stay for the light.
        </h2>
        {/* <p className="text-xl text-[#2C4F50]/80 mb-12 text-balance"> */}
        <p className="text-xl mb-12 text-black text-balance">
          LūmenFest isn't just a party — it's a meeting of worlds.
        </p>

        <button className="bg-[#2C4F50] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1a3334] transition inline-flex items-center gap-2">
          Secure Your Spot
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
