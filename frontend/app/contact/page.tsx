import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Navigation, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const faqs = [
    {
      question: "What are the event hours?",
      answer: "LūmenFest runs from 7:00 AM to 3:00 AM with three distinct zones throughout the day."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have ample parking facilities. Valet service is available for VIP ticket holders."
    },
    {
      question: "What should I bring?",
      items: [
        "Printed ticket, valid ID, and comfortable clothing",
        "Sunscreen recommended for morning events"
      ]
    }
  ]

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Header */}
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to our support team for help! 
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#214445] mb-8">Send Us a Message</h2>
            
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#214445] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-[#214445]/20 rounded-lg bg-white focus:outline-none focus:border-[#214445] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#214445] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-[#214445]/20 rounded-lg bg-white focus:outline-none focus:border-[#214445] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[#214445] mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-[#214445]/20 rounded-lg bg-white focus:outline-none focus:border-[#214445] transition-colors">
                  <option>General Inquiry</option>
                  <option>Ticket Support</option>
                  <option>Partnership</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#214445] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help..."
                  rows={6}
                  className="w-full px-4 py-3 border border-[#214445]/20 rounded-lg bg-white focus:outline-none focus:border-[#214445] transition-colors resize-none"
                />
              </div>

              <Button className="w-full bg-[#214445] hover:bg-[#1a3637] text-white py-6 text-lg rounded-lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-12">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#214445] mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C89A5B] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#214445]">Location</h4>
                    <p className="text-[#5C715E]">
                      123 Festival Plaza, District 1, Ho Chi Minh City
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C89A5B] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#214445]">Email</h4>
                    <p className="text-[#5C715E]">info@lumenfest.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C89A5B] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#214445]">Phone</h4>
                    <p className="text-[#5C715E]">+84 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div>
              <h3 className="text-2xl font-bold text-[#214445] mb-6">Find Us</h3>
              
              <div className="bg-white rounded-lg border border-[#214445]/10 p-6">
                {/* Location Details */}
                <div className="mb-4">
                  <h4 className="font-bold text-[#214445] mb-2">
                    Accra Cultural Center
                  </h4>
                  <p className="text-[#5C715E] text-sm mb-3">
                    Near Accra, Tema Community 22, New road
                  </p>
                  
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center text-[#5C715E]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1545.3852096068135!2d-0.33890937268410615!3d5.796552999273298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDcnNDcuNiJOIDDCsDIwJzE2LjgiVw!5e1!3m2!1sen!2sgh!4v1749337531881!5m2!1sen!2sgh" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="flex justify-between items-center">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[#214445] mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-[#214445]/10">
                <h3 className="font-bold text-[#214445] text-xl mb-4">{faq.question}</h3>
                
                {faq.answer && (
                  <p className="text-[#5C715E]">{faq.answer}</p>
                )}
                
                {faq.items && (
                  <ul className="text-[#5C715E] space-y-2">
                    {faq.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-[#C89A5B] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}