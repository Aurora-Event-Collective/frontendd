export default function Founders() {
  const founders = [
    { name: "Gideon Mensah", role: "Creative Director", image: "/Gideon.jpg" },
    { name: "Gladys Budu", role: "Operations Lead", image: "/gladys.jpg" },
    { name: "Sofia Martinez", role: "Community Manager", image: "/morning.jpg" },
  ]

  return (
    <section className="w-full bg-[#2C4F50] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Meet the Organizers</h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Think of a group of foreign english teachers in Vietnam who have to be aimless in their apartment for 15 days  each year during Tet holiday. 
          That is US. 
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Avatar Circle */}
              <div className="w-60 h-60 rounded-full border-4 border-[#F5D5C0] mb-6 overflow-hidden">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C4F50] mb-2">{founder.name}</h3>
              <p className="text-[#F5D5C0] text-lg font-medium">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
