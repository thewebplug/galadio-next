import Image from "next/image";
import Image1 from "@/public/assets/Cover (2).png";
import Sidebar from "@/app/components/sideBar";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ArtGrid from "@/app/components/artGrid";

export default function Search() {
  return (
    <div>
      <main className="explore">
      <div className="explore__subtitle-underlined">
      Results for  <span>“Double Exposure”</span>
      </div>
      <div className="explore__filters">
      <div><Image width={17.38} height={17.38} src= "/assets/search.svg" alt="" /> Abstract</div>
      <div><Image width={17.38} height={17.38} src= "/assets/search.svg" alt="" /> Abstract</div>
      <div><Image width={17.38} height={17.38} src= "/assets/search.svg" alt="" /> Abstract</div>
      <div><Image width={17.38} height={17.38} src= "/assets/search.svg" alt="" /> Abstract</div>
      </div>
        <ArtGrid paginationType="none" />
      </main>

      <Footer />
    </div>
  );
}
