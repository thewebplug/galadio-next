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
