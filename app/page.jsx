import Image from "next/image";
import Image1 from "@/public/assets/Cover (2).png";
import Sidebar from "./components/sideBar";
import Header from "./components/header";
import Footer from "./components/footer";
import ArtGrid from "./components/artGrid";

export default function Home() {
  return (
    <>
     <Header />

      <main className="home">
        <div className="home__hero">
          <h1 className="home__hero__title">
            Trade and Collab with colleagues and Clients on <span>Galadio</span>
          </h1>
          <h2 className="home__hero__subtitle">
            A collection of dynamic ARTWORKS ranging from hand-drawn art,
            digital art, Sculptures and photography. Totally driven by community
            and living on the Ethereum blockchain. On a mission to build the
            group of Galadians with unique identity.
          </h2>
          <Image src={Image1} className="home__hero__img" alt="" />
        </div>

        <ArtGrid paginationType="load" />
      </main>

      <Footer />
    </>
  );
}
