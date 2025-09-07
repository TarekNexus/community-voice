import DownloadableResources from "@/components/how-to-vote/DownloadableResources/DownloadableResources";
import FAQSection from "@/components/how-to-vote/FAQSection/FAQSection";
import Hero from "@/components/how-to-vote/Hero/Hero";
import Steps from "@/components/how-to-vote/Steps/Steps";

export default function Howtovote() {
    return (
        <div>
            <Hero></Hero>
            <Steps></Steps>
            <DownloadableResources></DownloadableResources>
            <FAQSection></FAQSection>
        </div>
    );
}