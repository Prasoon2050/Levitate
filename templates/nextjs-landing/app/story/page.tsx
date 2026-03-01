import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MissionStatement from '@/components/story/MissionStatement';
import FoundersStory from '@/components/story/FoundersStory';
import SourcingPhilosophy from '@/components/story/SourcingPhilosophy';
import CommunitySustainability from '@/components/story/CommunitySustainability';
import TeamIntroduction from '@/components/story/TeamIntroduction';

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <MissionStatement />
        <FoundersStory />
        <SourcingPhilosophy />
        <CommunitySustainability />
        <TeamIntroduction />
      </main>
      <Footer />
    </>
  );
}
