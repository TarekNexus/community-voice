"use client"
import React, { useState } from 'react';
import {CustomIcon1, CustomIcon2, CustomIcon3, CustomIcon4, CustomIcon5, CustomIcon6} from "@/components/ui/CustomIcon";
import { FaBriefcase, FaChartBar, FaGraduationCap, FaTools, FaRocket, FaBuilding } from 'react-icons/fa';
import { GiEnergyArrow, GiSmartphone, GiFactory } from 'react-icons/gi';

const allAchievements = [
  {
    category: "Growth",
    title: "500+ Clean Energy Jobs",
    description: "We’ve created hundreds of jobs in the clean energy sector, boosting local industries and preparing communities for a sustainable future.",
    icon: <CustomIcon1 />,
  },
  {
    category: "Growth",
    title: "Small Business Grants",
    description: "Delivered grants and resources that help small businesses thrive, grow, and create lasting employment opportunities.",
    icon: <CustomIcon2 />,
  },
  {
    category: "Growth",
    title: "6,000 Tradies Fast-Tracked",
    description: "Accelerating the training and placement of thousands of skilled tradespeople to build Australia’s future.",
    icon: <CustomIcon3 />,
  },
  {
    category: "Growth",
    title: "New Youth Apprenticeships",
    description: "Opening career pathways for young people, giving them real skills and opportunities for long-term success.",
    icon: <CustomIcon4 />,
  },
  {
    category: "Growth",
    title: "Infrastructure Projects Ahead",
    description: "Completed key infrastructure projects faster than planned, strengthening communities and stimulating economic growth.",
    icon: <CustomIcon5 />,
  },
  {
    category: "Growth",
    title: "Startup Incubators Funded",
    description: "Invested in innovation hubs to help entrepreneurs turn ideas into successful businesses and jobs.",
    icon: <CustomIcon6 />,
  },

  {
    category: "Economy",
    title: "Small Business Grants",
    description: "Delivered grants and resources that help small businesses thrive, grow, and create lasting employment opportunities.",
    icon: <FaChartBar className="text-4xl text-white" />,
  },
  {
    category: "Economy",
    title: "Startup Incubators Funded",
    description: "Invested in innovation hubs to help entrepreneurs turn ideas into successful businesses and jobs.",
    icon: <FaRocket className="text-4xl text-white" />,
  },
  {
    category: "Economy",
    title: "Local Business Partnerships",
    description: "Collaborating with local businesses to grow the economy.",
    icon: <FaBriefcase className="text-4xl text-white" />,
  },
  {
    category: "Economy",
    title: "Government Support for SMEs",
    description: "Ongoing government initiatives to support small and medium enterprises.",
    icon: <FaBriefcase className="text-4xl text-white" />,
  },
  {
    category: "Economy",
    title: "Tourism Investment Boost",
    description: "Investment in the tourism sector to create new jobs and opportunities.",
    icon: <FaChartBar className="text-4xl text-white" />,
  },
  {
    category: "Economy",
    title: "Retail Sector Revival",
    description: "Aiming to rejuvenate the retail sector with new initiatives.",
    icon: <GiFactory className="text-4xl text-white" />,
  },

  {
    category: "Industry",
    title: "6,000 Tradies Fast-Tracked",
    description: "Accelerating the training and placement of thousands of skilled tradespeople to build Australia’s future.",
    icon: <GiFactory className="text-4xl text-white" />,
  },
  {
    category: "Industry",
    title: "Manufacturing Expansion",
    description: "Expansion of manufacturing capabilities to meet the growing demand.",
    icon: <GiFactory className="text-4xl text-white" />,
  },
  {
    category: "Industry",
    title: "Construction Boom",
    description: "A boom in the construction industry creating more jobs and opportunities.",
    icon: <FaTools className="text-4xl text-white" />,
  },
  {
    category: "Industry",
    title: "Tech Industry Growth",
    description: "Fast-paced growth in the tech industry, providing new job roles and innovation.",
    icon: <FaRocket className="text-4xl text-white" />,
  },
  {
    category: "Industry",
    title: "Innovation Hubs",
    description: "Setting up innovation hubs to foster growth in the tech industry.",
    icon: <FaTools className="text-4xl text-white" />,
  },
  {
    category: "Industry",
    title: "Renewable Tech Development",
    description: "Investment in new technologies to make renewable energy more accessible.",
    icon: <GiEnergyArrow className="text-4xl text-white" />,
  },

  {
    category: "Community",
    title: "New Youth Apprenticeships",
    description: "Opening career pathways for young people, giving them real skills and opportunities for long-term success.",
    icon: <FaGraduationCap className="text-4xl text-white" />,
  },
  {
    category: "Community",
    title: "Affordable Housing Projects",
    description: "Providing affordable housing to communities to ensure everyone has a place to live.",
    icon: <FaBuilding className="text-4xl text-white" />,
  },
  {
    category: "Community",
    title: "Community Health Initiatives",
    description: "Focusing on improving healthcare systems in underserved communities.",
    icon: <FaChartBar className="text-4xl text-white" />,
  },
  {
    category: "Community",
    title: "Local Sports Funding",
    description: "Investing in local sports to promote healthy living and community building.",
    icon: <GiFactory className="text-4xl text-white" />,
  },
  {
    category: "Community",
    title: "Youth Mental Health Support",
    description: "Providing support and resources for youth mental health.",
    icon: <FaGraduationCap className="text-4xl text-white" />,
  },
  {
    category: "Community",
    title: "Community Education Programs",
    description: "Supporting educational programs to help communities grow and thrive.",
    icon: <GiSmartphone className="text-4xl text-white" />,
  },
];

const ActionPlanComponent = () => {
  const [activeTab, setActiveTab] = useState("Growth");

  const filteredAchievements = allAchievements.filter(
    (achievement) => achievement.category === activeTab
  );

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* Badge */}
      <span className="items-center px-4 py-2 mx-auto flex justify-center rounded-full bg-gray-100 text-emerald-700 text-xs sm:text-sm w-fit">
        Achievements
      </span>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center text-[#1F473E] mt-4">
        Turning Plans Into Action
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-[#1F473E] font-medium text-center mb-8">
        Here’s what we’ve already achieved and where we’re headed next.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {["Growth", "Economy", "Industry", "Community"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-[99px] text-sm transition ${
                activeTab === tab
                  ? "bg-[#1F473E] text-white"
                  : "text-[#1F473E] border border-[#1F473E]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredAchievements.map((item) => (
          <div
            key={item.title}
            className="bg-[#1F473E] p-5 rounded-[10px] flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-white/90">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionPlanComponent;
