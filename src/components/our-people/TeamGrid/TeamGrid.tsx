"use client";

import React, { useState } from "react";
import { Search, Facebook, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import man1 from "../../../../public/image/man1.png";
import man2 from "../../../../public/image/man2.png";
import man3 from "../../../../public/image/man3.png";

interface Profile {
  id: number;
  name: string;
  role: string;
  imageUrl: StaticImageData;
  description: string;
  social: {
    facebook?: string;
    instagram?: string;
  };
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Md. Abdul Jabbar",
    role: "Community Organizer",
    imageUrl: man1,
    description:
      "Jabbar leads local workshops for teens, helping them build confidence and leadership skills. He's passionate about education and creating safe spaces for young voices.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Volunteer Coordinator",
    imageUrl: man3,
    description:
      "Sarah coordinates our volunteer programs and ensures every community member feels valued and included. Her organizational skills keep our initiatives running smoothly.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "David Chen",
    role: "Fundraising Lead",
    imageUrl: man2,
    description:
      "David manages fundraising efforts and builds partnerships with local businesses. His dedication has helped us expand our reach and impact in the community.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Md. Abdul Jabbar",
    role: "Community Organizer",
    imageUrl: man1,
    description:
      "Jabbar leads local workshops for teens, helping them build confidence and leadership skills. He's passionate about education and creating safe spaces for young voices.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 5,
    name: "Sarah Mitchell",
    role: "Volunteer Coordinator",
    imageUrl: man3,
    description:
      "Sarah coordinates our volunteer programs and ensures every community member feels valued and included. Her organizational skills keep our initiatives running smoothly.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 6,
    name: "David Chen",
    role: "Fundraising Lead",
    imageUrl: man2,
    description:
      "David manages fundraising efforts and builds partnerships with local businesses. His dedication has helped us expand our reach and impact in the community.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 7,
    name: "Md. Abdul Jabbar",
    role: "Community Organizer",
    imageUrl: man1,
    description:
      "Jabbar leads local workshops for teens, helping them build confidence and leadership skills. He's passionate about education and creating safe spaces for young voices.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 8,
    name: "Sarah Mitchell",
    role: "Volunteer Coordinator",
    imageUrl: man3,
    description:
      "Sarah coordinates our volunteer programs and ensures every community member feels valued and included. Her organizational skills keep our initiatives running smoothly.",
    social: { facebook: "#", instagram: "#" },
  },
  {
    id: 9,
    name: "David Chen",
    role: "Fundraising Lead",
    imageUrl: man2,
    description:
      "David manages fundraising efforts and builds partnerships with local businesses. His dedication has helped us expand our reach and impact in the community.",
    social: { facebook: "#", instagram: "#" },
  },
];

const roles = ["Role", "Community Organizer", "Volunteer Coordinator", "Fundraising Lead"];

const TeamGrid: React.FC = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("Role");
  const [activeProfileId, setActiveProfileId] = useState<number | null>(null);
  const [hoveredProfileId, setHoveredProfileId] = useState<number | null>(null);

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.role.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "Role" || profile.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        <p className="text-[#1F473E] text-xl text-justify leading-6">
          Every movement is built by people, not just ideas. Our strength comes
          from the leaders who guide us, the volunteers who give their time, and
          the communities that stand together for change. This page is about
          them—the faces, voices, and stories that make our vision real.
        </p>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative w-full h-[32px] md:w-[265px] flex">
            <Input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[35px] w-full pl-3 pr-10 rounded-[10px] border border-black text-sm focus:outline-none focus:border-[#1F473E]"
            />
            <Search className="w-4 h-4 text-[#1F473E] absolute right-3 top-2 pointer-events-none" />
          </div>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="h-[32px] w-full md:w-[265px] rounded-[10px] border border-black text-sm focus:outline-none focus:border-[#1F473E]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => {
          const isOpen = activeProfileId === profile.id;
          const isHover = hoveredProfileId === profile.id;
          const showExpanded = isOpen || (!isOpen && isHover);

          return (
            <div
              key={profile.id}
              className="relative h-[400px] rounded-2xl bg-[#1F473E] overflow-hidden shadow-lg bg-team-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setActiveProfileId(isOpen ? null : profile.id)}
              onMouseEnter={() => setHoveredProfileId(profile.id)}
              onMouseLeave={() => setHoveredProfileId(null)}
            >
              <Image
                src={profile.imageUrl}
                alt={profile.name}
                className="object-cover w-full h-full transition-transform duration-300"
              />

              {/* Collapsed View */}
              {!showExpanded && (
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/10 backdrop-blur-md text-center py-4 px-3 transition-all duration-300">
                  <h3 className="text-[25px] font-semibold text-white">{profile.name}</h3>
                  <p className="text-sm text-white font-bold">{profile.role}</p>
                </div>
              )}

              {/* Expanded View */}
              {showExpanded && (
                <div className="absolute inset-3 rounded-2xl bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between text-center transition-all duration-300">
                  <div>
                    <h3 className="text-[25px] font-bold text-white">{profile.name}</h3>
                    <p className="text-sm text-white font-bold mb-3">{profile.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/80 leading-relaxed mb-4 line-clamp-4">
                      {profile.description}
                    </p>
                    <div className="flex justify-center gap-4">
                      {profile.social.facebook && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full bg-white/20 hover:bg-white/30 text-white"
                          asChild
                        >
                          <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {profile.social.instagram && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full bg-white/20 hover:bg-white/30 text-white"
                          asChild
                        >
                          <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredProfiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No team members found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default TeamGrid;
