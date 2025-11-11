import { Button } from "@/components/ui/button"
import { Check, Crown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TicketsPage() {
  const plans = [
    {
      title: "Single Pass",
      price: 15,
      tag: "For Single Entry",
      features: [
        "Free entry all day",
        "Access to all zones",
        "Complimentary welcome drink",
        "Priority seating",
      ],
      highlight: false,
      sales: 100,
    },
    {
      title: "Double Pass",
      price: 25,
      tag: "For Double Entry",
      features: [
        "Free entry all day",
        "Access to all zones",
        "Complimentary welcome drink",
        "Priority seating",
      ],
      highlight: true,
      sales : 500,
    },
    // {
    //   title: "Men Night Pass",
    //   price: 300,
    //   tag: "Men only",
    //   features: [
    //     "Entry after 8:30 PM",
    //     "Access to Night Party",
    //     "One complimentary drink",
    //     "Dance floor access",
    //   ],
    //   highlight: false,
    // },
    // {
    //   title: "VIP All‑Access",
    //   price: 600,
    //   tag: "Premium",
    //   features: [
    //     "All‑day access",
    //     "VIP lounge access",
    //     "Premium drinks",
    //     "Meet & greet with performers",
    //     "Exclusive merchandise",
    //   ],
    //   highlight: true,
    // },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto py-25 px-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-3xl p-8 shadow-sm bg-white border transition hover:shadow-md ${
              plan.highlight ? "border-[#E7B884] bg-[#FFF7EC]" : "border-gray-200"
            }`}
          >
          <div className="flex justify-end text-sm font-medium text-[#5C715E] mb-2">Sold Tickets: {plan.sales}</div>  
            {plan.highlight && (
              <div className="flex items-center gap-1 text-sm font-bold text-[#C89A5B] mb-2">
                <Crown size={16} /> POPULAR
              </div>
            )}

            <h2 className="text-xl font-semibold text-[#114232] mb-2">{plan.title}</h2>

            <div className="text-4xl font-extrabold text-[#1A5D1A] mb-1">
              {plan.price === 0 ? "FREE" : `$${plan.price}.00`}
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
      <div className="bg-[#F4CBA3] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214445] mb-3">Don't Miss a Beat</h2>
        <p className="text-[#214445]/70 max-w-xl mx-auto mb-8">
          Add LūmenFest to your calendar and get ready for an unforgettable experience
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-[#214445] text-white px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90">
            Add to Google Calendar
          </button>
          <button className="bg-white text-[#214445] border border-[#214445]/30 px-8 py-4 rounded-full font-medium shadow-md hover:opacity-90">
            Add to Apple Calendar
          </button>
        </div>
        <div>
          <p className="text-sm text-[#214445]/70 mt-4">800 People have added LūmenFest to their calendar</p>
        </div>
      </div>
        <Footer />
    </div>
  )
}
