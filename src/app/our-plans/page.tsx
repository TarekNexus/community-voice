import About from "@/components/our-plans/About/About";
import AchievementsSection from "@/components/our-plans/Achievements/AchievementsSection";
import FocusAreas from "@/components/our-plans/FocusAreas/FocusAreas";

import Hero from "@/components/our-plans/Hero/Hero";
import Join from "@/components/our-plans/Join/Join";

export default function OurPlans() {
    return (
        <div className="mb-10">

    <Hero></Hero>
    <About></About>
    <FocusAreas></FocusAreas>
    <AchievementsSection></AchievementsSection>
    <Join></Join>

        </div>
    );
}