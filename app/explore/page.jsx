import Image from "next/image";
import Image1 from "@/public/assets/Cover (2).png";
import Sidebar from "@/app/components/sideBar";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ArtGrid from "@/app/components/artGrid";

export default function Explore() {
  return (
    <div>
      <main className="explore">
      <div className="explore__title">
        Explore
      </div>
      <div className="explore__tabs">
        <div>All</div>
        <div className="explore__tabs__active">Handrawn</div>
        <div>Digital art</div>
        <div>Sculptures</div>
      </div>
        <ArtGrid paginationType="none" />
      </main>

      <Footer />
    </div>
  );
}
