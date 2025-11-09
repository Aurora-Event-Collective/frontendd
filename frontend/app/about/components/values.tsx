import { Users, Globe, Heart, Award } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building bridges between local and international communities through shared experiences",
    },
    {
      icon: Globe,
      title: "Cultural Fusion",
      description: "Celebrating Vietnamese traditions while embracing global creativity and innovation",
    },
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "Creating meaningful moments that bring people together in celebration",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class experiences with attention to every detail",
    },
  ]

  return (
    <section className="w-full bg-[#F5D5C0] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2C4F50] text-center mb-16">Our Values</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-[#F5D5C0] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-10 h-10 text-[#2C4F50]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C4F50] mb-3 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
