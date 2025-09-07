"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I make sure I’m registered to vote?",
    answer:
      "You can check your voter registration status at vote.gov.",
  },
  {
    question: "Where can I find my local polling place?",
    answer:
      "Polling place information is available on your state’s election office website.",
  },
  {
    question: "Can I vote early or by mail?",
    answer:
      "Yes, most states allow mail-in voting. Check your local election office for details.",
  },
  {
    question: "How do I become a member of the community?",
    answer:
      "You can sign up through our website to join and get involved in upcoming events.",
  },
  {
    question: "Are donations tax-deductible?",
    answer: "Yes, donations are tax-deductible to the extent allowed by law.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl max-h-[950px] md:h-[740px] lg:h-[720px] mx-auto my-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-white px-4 py-1 rounded-full border text-sm sm:text-base text-gray-600 shadow-sm mb-4">
          FAQs
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold text-[#1F473E] mt-4">
          Your Questions Answered!
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#1F473E] mt-2">
          Quick answers to common questions about voting, membership, <br /> and
          getting involved.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-[24px] bg-white transition-all ${
              openIndex === index
                ? "shadow-md"
                : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center gap-3 px-6 py-5 text-left font-medium text-gray-900"
            >
              <ChevronDown 
                className={`w-5 h-5 text-green-700 stroke-3 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
              <span className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#000000]">
                {faq.question}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-11 pb-5 text-gray-600 text-sm sm:text-base md:text-base lg:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
