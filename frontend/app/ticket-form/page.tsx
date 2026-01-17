"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, QrCode, Mail, User, Upload, Camera } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QRCode from "react-qr-code"

export default function TicketFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    screenshot: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uniqueId, setUniqueId] = useState("")
  const [qrData, setQrData] = useState("")
  const [countdown, setCountdown] = useState(100)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Generate a unique ID and QR data when component mounts
  useEffect(() => {
    const generateUniqueId = () => {
      const timestamp = Date.now().toString(36)
      const random = Math.random().toString(36).substring(2, 8)
      return `LF-${timestamp}-${random}`.toUpperCase()
    }

    const newUniqueId = generateUniqueId()
    setUniqueId(newUniqueId)
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
      window.close()
    }
  }, [isSubmitted, countdown])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setUploadError(null)
    
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp']
      if (!validTypes.includes(file.type)) {
        setUploadError("Please upload an image file (JPEG, PNG, GIF, WebP)")
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("File size must be less than 5MB")
        return
      }
      
      setFormData(prev => ({ ...prev, screenshot: file }))
      
      // Create preview URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all fields")
      return
    }
    
    if (!formData.screenshot) {
      alert("Please upload a screenshot of your payment confirmation")
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("uniqueId", uniqueId)
      submitData.append("screenshot", formData.screenshot)

      // In a real app, you would send this to your backend API
      // Example:
      // const response = await fetch('/api/submit-ticket', {
      //   method: 'POST',
      //   body: submitData
      // });
      
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate sending email notification
      console.log("Sending email to:", formData.email)
      console.log("Unique ID:", uniqueId)
      console.log("Screenshot uploaded:", formData.screenshot.name)
      
      // Simulate email content (in real app, this would be on the backend)
      const emailContent = {
        to: formData.email,
        subject: "Your LumenFest Ticket Confirmation",
        body: `Hi ${formData.name},\n\nThank you for purchasing a ticket to LumenFest!\n\nYour Unique Ticket ID: ${uniqueId}\n\nPlease bring this ID along with a valid ID to the event venue to claim your tags.\n\nEvent Details:\nDate: February 18, 2026\nVenue: MORNING - Yen Hoa football grounds, Cau giay, Hanoi\nEVENING - Vox Club, Tay Ho, Hanoi\nTime: 9:00 AM - 2:30 AM\n\nSee you there!\n\nThe LumenFest Team`
      }
      
      console.log("Email content:", emailContent)
      
      setIsSubmitted(true)
      
      // Clean up preview URL
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
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

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeScreenshot = () => {
    setFormData(prev => ({ ...prev, screenshot: null }))
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
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
              <strong>We will email you shortly at <span className="text-[#214445]">{formData.email}</span> with your unique ticket ID.</strong>
            </p>
            
            <div className="bg-[#F8F6F2] rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-[#214445] mb-3">
                Important Information:
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-2 flex-shrink-0"></div>
                  <p className="text-[#5C715E]">Check your inbox (and spam folder) for an email from LumenFest</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-2 flex-shrink-0"></div>
                  <p className="text-[#5C715E">Your email will contain your <strong>Unique Ticket ID</strong></p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-2 flex-shrink-0"></div>
                  <p className="text-[#5C715E">Bring this ID and a valid ID to claim your event tags</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-[#214445]">
                <strong>Processing:</strong> Your payment screenshot has been received and is being verified. 
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
            Scan the QR code to pay 99,000 VND first. After payment, take a screenshot and upload it with your details to receive your ticket ID via email.
          </p>
          <div className="inline-block bg-[#FFF7EC] border border-[#C89A5B] rounded-full px-6 py-2">
            <p className="text-[#114232] font-semibold">Step 1: Pay → Step 2: Upload Screenshot → Step 3: Fill Form → Step 4: Get Ticket</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* FORM */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border">
            <h2 className="text-2xl font-bold text-[#114232] mb-2">
              Submit Payment & Details
            </h2>
            <p className="text-[#5C715E] mb-8">
              Upload your payment screenshot and enter your details
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Screenshot Upload */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-[#114232]">
                  <Camera size={16} className="inline mr-2" />
                  Payment Screenshot
                </label>
                
                <div 
                  onClick={triggerFileInput}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-gray-50 ${
                    uploadError ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  } ${previewUrl ? 'border-green-300 bg-green-50' : ''}`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  
                  {previewUrl ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <img 
                          src={previewUrl} 
                          alt="Payment screenshot preview" 
                          className="w-full h-48 object-contain rounded-lg mx-auto"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeScreenshot()
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-green-600 text-sm font-medium">
                        ✓ Screenshot uploaded successfully
                      </p>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium text-[#214445]">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, GIF up to 5MB
                      </p>
                      <p className="text-xs text-gray-400 mt-3">
                        Upload screenshot of payment confirmation
                      </p>
                    </>
                  )}
                </div>
                
                {uploadError && (
                  <p className="text-red-500 text-sm">{uploadError}</p>
                )}
              </div>

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
                <p className="text-xs text-[#5C715E] mt-2">
                  We will send your unique ticket ID to this email
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.screenshot}
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
                      Submit & Get Ticket
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
                    <h4 className="font-semibold text-[#114232]">Take Screenshot</h4>
                    <p className="text-sm text-[#5C715E]">Take a screenshot of payment confirmation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C89A5B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#114232]">Upload & Submit</h4>
                    <p className="text-sm text-[#5C715E]">Upload screenshot and enter your details</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C89A5B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#114232]">Get Ticket ID</h4>
                    <p className="text-sm text-[#5C715E]">Receive your unique ticket ID via email</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SCREENSHOT TIPS */}
            <div className="bg-[#FFF7EC] rounded-3xl p-6 border border-[#E7B884]">
              <h4 className="font-bold text-[#114232] mb-3 flex items-center gap-2">
                <Camera size={18} />
                Screenshot Tips
              </h4>
              <ul className="space-y-2 text-sm text-[#5C715E]">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-1.5 flex-shrink-0" />
                  <span>Make sure the transaction ID is visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-1.5 flex-shrink-0" />
                  <span>Include amount (99,000 VND) in screenshot</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-1.5 flex-shrink-0" />
                  <span>Ensure timestamp is visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C89A5B] mt-1.5 flex-shrink-0" />
                  <span>Upload immediately after payment</span>
                </li>
              </ul>
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