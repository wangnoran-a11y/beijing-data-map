import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import SourceNav from "@/components/SourceNav";
import ResourceStatus from "@/components/ResourceStatus";
import HotResources from "@/components/HotResources";
import IndustryZone from "@/components/IndustryZone";
import ResourceCards from "@/components/ResourceCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <HeroSearch />
      <SourceNav />
      <ResourceStatus />
      <HotResources />
      <IndustryZone />
      <ResourceCards />
    </main>
  );
}