"use client"

import { useState } from "react"
import { Calendar, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface PollOption {
  id: number;
  name: string;
  votes: number;
  percentage: number;
}

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  totalVotes: number;
  hasVoted: boolean;
}

const polls: Poll[] = [
  {
    id: 1,
    question: "Best Performance of the Night?",
    options: [
      { id: 1, name: "DJ Saigon Soul", votes: 45, percentage: 25.6 },
      { id: 2, name: "Heritage Ensemble", votes: 32, percentage: 18.2 },
      { id: 3, name: "Aurora Collective", votes: 58, percentage: 33.0 },
    ],
    totalVotes: 176,
    hasVoted: false
  },
  {
    id: 2,
    question: "Which Food Stall Was Your Favorite?",
    options: [
      { id: 1, name: "Coastal Grill", votes: 28, percentage: 22.4 },
      { id: 2, name: "Spice Route Kitchen", votes: 45, percentage: 36.0 },
      { id: 3, name: "Heritage Bites", votes: 32, percentage: 25.6 },
      { id: 4, name: "Sweet Traditions", votes: 20, percentage: 16.0 },
    ],
    totalVotes: 125,
    hasVoted: false
  }
]

export default function PollsPage() {
  const [activePolls, setActivePolls] = useState<Poll[]>(polls)

  const handleVote = (pollId: number, optionId: number) => {
    setActivePolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId && !poll.hasVoted) {
          const updatedOptions = poll.options.map(option => {
            if (option.id === optionId) {
              const newVotes = option.votes + 1
              const totalVotes = poll.totalVotes + 1
              const newPercentage = (newVotes / totalVotes) * 100
              return { ...option, votes: newVotes, percentage: newPercentage }
            }
            return {
              ...option,
              percentage: (option.votes / (poll.totalVotes + 1)) * 100
            }
          })
          
          return {
            ...poll,
            options: updatedOptions,
            totalVotes: poll.totalVotes + 1,
            hasVoted: true
          }
        }
        return poll
      })
    )
  }

  return (
    <div className="bg-[#F2EBE3] min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Header */}
      <div className="bg-[#214445] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Polls</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Participate in our community polls to shape the event experience!
        </p>
      </div>

      {/* Polls Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {activePolls.map((poll) => (
            <div key={poll.id} className="bg-white rounded-2xl shadow-xl p-8 border border-[#214445]/10">
              
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-[#214445]">
                  {poll.question}
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#5C715E] bg-[#F8F4ED] px-3 py-2 rounded-lg">
                  <Users size={16} />
                  <span>{poll.totalVotes} votes</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {poll.options.map((option) => (
                  <div key={option.id} className="relative">
                    <button
                      onClick={() => handleVote(poll.id, option.id)}
                      disabled={poll.hasVoted}
                      className={`w-full text-left p-4 transition-all ${
                        poll.hasVoted 
                          ? 'bg-gray-50 border-gray-200 cursor-not-allowed' 
                          : 'bg-white border-[#214445]/20 hover:border-[#214445] hover:bg-[#F8F4ED] cursor-pointer'
                      } border-2 rounded-lg`} // Changed from rounded-xl to rounded-lg for less rounding
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-[#214445]">{option.name}</span>
                        {poll.hasVoted && (
                          <span className="text-sm font-bold text-[#214445]">
                            {option.percentage.toFixed(1)}%
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-[#5C715E]">
                        <span>{option.votes} votes</span>
                        {poll.hasVoted && (
                          <span>{option.percentage.toFixed(1)}%</span>
                        )}
                      </div>

                      {/* Progress Bar - Only show after voting */}
                      {poll.hasVoted && (
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#C89A5B] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${option.percentage}%` }}
                          />
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info
        <div className="text-center mt-12 text-[#5C715E]">
          <p className="text-lg mb-4">Your opinion matters! Help us make the next event even better.</p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>New polls daily during the event</span>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
}