import Image from "next/image";
import Image1 from "@/public/assets/Cover (2).png";
import Sidebar from "@/app/components/sideBar";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ArtGrid from "@/app/components/artGrid";

export default function Favourites() {
  return (
    <div>
      <main className="explore">
      <div className="explore__title-underlined">
      My Favourites
      </div>
        <ArtGrid paginationType="page" />
      </main>

      <Footer />
    </div>
  );
}
