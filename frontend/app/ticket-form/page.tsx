"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, QrCode, Mail, User } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QRCode from "react-qr-code"

export default function TicketFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uniqueId, setUniqueId] = useState("")
  const [qrData, setQrData] = useState("")
  const [countdown, setCountdown] = useState(100)

  // Generate a unique ID and QR data when component mounts
  useEffect(() => {
    const generateUniqueId = () => {
      const timestamp = Date.now().toString(36)
      const random = Math.random().toString(36).substring(2, 8)
      return `LF-${timestamp}-${random}`.toUpperCase()
    }

    const newUniqueId = generateUniqueId()
    setUniqueId(newUniqueId)
    // QR code data could be a URL, the unique ID, or any other data you want to encode
    setQrData(`https://lumenfest.vn/ticket/verify/${newUniqueId}`)
  }, [])

  // Countdown timer after submission
  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
    if (isSubmitted && countdown === 0) {
      // Auto-close the tab after countdown
      window.close()
    }
  }, [isSubmitted, countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all fields")
      return
    }

    setIsSubmitting(true)

    try {
      // In a real app, you would send this data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate sending email notification
      console.log("Sending email notification to:", formData.email)
      console.log("Unique ID:", uniqueId)
      
      // Here you would typically:
      // 1. Send form data + uniqueId to your backend
      // 2. Backend sends email with uniqueId
      // 3. Backend stores the ticket data
      
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error processing your ticket. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Function to download the QR code (in a real app, you would generate it properly)
  const downloadQRCode = () => {
    // This is a placeholder - in a real app, you would generate an actual QR code image
    alert("QR code would be downloaded. In a real app, implement QR code generation.")
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
        <Header />

        {/* SUCCESS MESSAGE */}
        <div className="max-w-2xl mx-auto py-20 px-4 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-green-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#114232] mb-4">
              Ticket Secured Successfully! 🎉
            </h1>
            
            <p className="text-[#5C715E] mb-6">
              An email has been sent to <strong>{formData.email}</strong> with your unique ticket ID.
            </p>
            
            <div className="bg-[#F8F6F2] rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-[#214445] mb-3">
                Your Unique Ticket ID:
              </h3>
              <div className="text-2xl font-mono font-bold text-[#1A5D1A] bg-white py-3 px-6 rounded-lg border border-dashed border-[#C89A5B]">
                {uniqueId}
              </div>
              <p className="text-sm text-[#5C715E] mt-3">
                Keep this ID safe! You'll need it to claim your event tags.
              </p>
            </div>

            {/* QR Code Display */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#214445] mb-4">
                Your Ticket QR Code
              </h3>
              <div className="bg-white p-6 rounded-2xl border inline-block">
                {/* QR Code Placeholder - Replace with actual QR code generation */}
                <div className="w-48 h-48 bg-gradient-to-br from-[#214445] to-[#1A5D1A] rounded-lg flex flex-col items-center justify-center text-white">
                  <QRCode
                    value={qrData}
                    size={140}
                    bgColor="#FFFFFF"
                    fgColor="#214445"
                    level="Q"
                    />
                  <p className="mt-4 text-xs px-2 text-center">Scan at event entry</p>
                </div>
                {/* <p className="text-xs text-[#5C715E] mt-3 max-w-xs">
                  {qrData}
                </p> */}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={downloadQRCode}
                className="w-full max-w-xs mx-auto rounded-full py-4 px-6 bg-[#214445] text-white font-medium hover:bg-[#193334] transition-colors flex items-center justify-center gap-3"
              >
                <QrCode size={20} />
                Download QR Code
              </button>
              
              <button
                onClick={() => window.print()}
                className="w-full max-w-xs mx-auto rounded-full py-4 px-6 border border-[#214445] text-[#214445] font-medium hover:bg-[#214445] hover:text-white transition-colors"
              >
                Print Ticket Confirmation
              </button>
            </div>

            <div className="mt-10 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-[#214445]">
                <strong>Next Steps:</strong> Bring your unique ID and a valid ID to the event venue to claim your tags. 
                This tab will close automatically in <span className="font-bold">{countdown}</span> seconds.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />

      {/* FORM SECTION */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#114232] mb-4">
            Secure Your Ticket
          </h1>
          <p className="text-[#5C715E] max-w-2xl mx-auto mb-4">
            Scan the QR code to pay 99,000 VND first. After payment, enter your details to receive your unique ticket ID via email.
          </p>
          <div className="inline-block bg-[#FFF7EC] border border-[#C89A5B] rounded-full px-6 py-2">
            <p className="text-[#114232] font-semibold">Step 1: Pay → Step 2: Fill Form → Step 3: Get Ticket</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border">
            <h2 className="text-2xl font-bold text-[#114232] mb-2">
              Personal Information
            </h2>
            <p className="text-[#5C715E] mb-8">
              We'll send your ticket confirmation to this email
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#114232] mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#214445] focus:ring-2 focus:ring-[#214445]/20 outline-none transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#114232] mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#214445] focus:ring-2 focus:ring-[#214445]/20 outline-none transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-5 text-lg font-semibold bg-[#C89A5B] text-white hover:bg-[#b4874d] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Check size={20} />
                      Confirm & Get Ticket
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#5C715E] text-center">
                By submitting, you agree to receive your ticket confirmation via email.
                Your data is secure and will not be shared with third parties.
              </p>
            </form>
          </div>

          {/* QR CODE & INFO */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-[#114232] mb-4 flex items-center gap-3">
                <QrCode size={24} />
                Scan to Pay
              </h3>
              
              <div className="bg-gradient-to-br from-[#214445] to-[#1A5D1A] p-6 rounded-2xl mb-6">
                <div className="bg-white p-4 rounded-xl">
                  {/* Payment QR Code */}
                  <img 
                    src="/QR.jpeg" 
                    alt="Payment QR Code" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-3 text-center text-sm text-[#214445] font-medium">Scan to pay 99,000 VND</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C89A5B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#114232]">Scan & Pay</h4>
                    <p className="text-sm text-[#5C715E]">Use the QR code to pay 99,000 VND</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C89A5B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#114232]">Enter Your Details</h4>
                    <p className="text-sm text-[#5C715E]">Fill in your name and email after payment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C89A5B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#114232]">Get Your Ticket</h4>
                    <p className="text-sm text-[#5C715E]">Receive your unique ticket ID via email instantly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENT DETAILS */}
            <div className="bg-[#FFF7EC] rounded-3xl p-6 border border-[#E7B884]">
              <h4 className="font-bold text-[#114232] mb-3">Event Details</h4>
              <ul className="space-y-2 text-sm text-[#5C715E]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B]" />
                  <span>Date: February 18, 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B]" />
                  <span>Venue: MORNING - Yen Hoa football grounds, Cau giay, Hanoi <br/>
                                 EVENING - Vox Club, Tay Ho, Hanoi
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B]" />
                  <span>Time: 9:00 AM - 2:30 AM</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B]" />
                  <span>Price: 99,000 VND</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}