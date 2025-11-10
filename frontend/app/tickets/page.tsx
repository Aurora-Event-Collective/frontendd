import { Button } from "@/components/ui/button"
import { Check, Crown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TicketsPage() {
  const plans = [
    {
      title: "Women All‑Access Pass",
      price: 0,
      tag: "Women only",
      features: [
        "Free entry all day",
        "Access to all zones",
        "Complimentary welcome drink",
        "Priority seating",
      ],
      highlight: false,
    },
    {
      title: "Men Day Pass",
      price: 0,
      tag: "Men only",
      features: [
        "Free entry until 8:30 PM",
        "Morning & Evening zones",
        "General admission",
      ],
      highlight: false,
    },
    {
      title: "Men Night Pass",
      price: 300,
      tag: "Men only",
      features: [
        "Entry after 8:30 PM",
        "Access to Night Party",
        "One complimentary drink",
        "Dance floor access",
      ],
      highlight: false,
    },
    {
      title: "VIP All‑Access",
      price: 600,
      tag: "Premium",
      features: [
        "All‑day access",
        "VIP lounge access",
        "Premium drinks",
        "Meet & greet with performers",
        "Exclusive merchandise",
      ],
      highlight: true,
    },
  ]

  return (
    
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
        <Header />
        <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Choose Your Ticket</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Secure your spot for the ultimate experience 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-25 px-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-3xl p-8 shadow-sm bg-white border transition hover:shadow-md ${
              plan.highlight ? "border-[#E7B884] bg-[#FFF7EC]" : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="flex items-center gap-1 text-sm font-bold text-[#C89A5B] mb-2">
                <Crown size={16} /> PREMIUM
              </div>
            )}

            <h2 className="text-xl font-semibold text-[#114232] mb-2">{plan.title}</h2>

            <div className="text-4xl font-extrabold text-[#1A5D1A] mb-1">
              {plan.price === 0 ? "FREE" : `GH₵${plan.price}.00`}
            </div>
            <p className="text-sm text-[#5C715E] mb-6">({plan.tag})</p>

            <ul className="space-y-3 text-sm text-[#114232] mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={16} className="text-[#2D8659]" /> {f}
                </li>
              ))}
            </ul>

            <Button className={`w-full rounded-full py-5 text-base font-medium ${plan.highlight ? "bg-[#C89A5B] text-white hover:bg-[#b4874d]" : "bg-[#0D2818] text-white hover:bg-[#0a1f13]"}`}>
              Select Ticket
            </Button>
          </div>
        ))}
      </div>
        <Footer />
    </div>
  )
}
