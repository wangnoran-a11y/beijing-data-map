import LoginGate from "@/components/LoginGate";
import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import SourceNav from "@/components/SourceNav";
import ResourceStatus from "@/components/ResourceStatus";
import HotResources from "@/components/HotResources";
import IndustryZone from "@/components/IndustryZone";
import ResourceCards from "@/components/ResourceCards";

export default function Home() {
  return (
    <LoginGate>
      <main className="min-h-screen bg-[#050816] text-white">
        <Header />
        <HeroSearch />
        <SourceNav />
        <IndustryZone />
        <ResourceStatus />
        <HotResources />
        <ResourceCards />
      </main>
    </LoginGate>
  );
}