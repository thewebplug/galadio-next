import Image from "next/image";
import Image4 from "@/public/assets/image (6).png";
import Back from "@/public/assets/back-light.svg";
import UnFavourite from "@/public/assets/unfavourite.svg";
import Share from "@/public/assets/share.svg";
import Hash from "@/public/assets/hash.svg";
import Plus from "@/public/assets/plus.svg";
import File from "@/public/assets/file.svg";
import Link from "next/link";
import ArtGrid from "@/app/components/artGrid";


export default function Art() {
  return (
    <main className="art">
        <Link href="/art" prefetch={true} className="art__back">
            <Image src={Back} width={40} height={40} alt="" />
            Back
        </Link>
<div className="art__grid">
    <Image className="art__grid__image" src={Image4} width={679} height={535} alt="" />
    <div className="art__grid__user">
    <div className="art__grid__user__title">

    <Image src={Image4} width={73} height={73} style={{borderRadius: "50%"}} alt="" />

    <div>
        <Link href="#">@GaladioStudios</Link>
        <button> <Image src={Plus} width={24} height={24} alt="" />
 Follow</button>
    </div>

        </div>
    <div className="art__grid__user__grid">
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
        <Image src={Image4} width={63} height={63} style={{borderRadius: "12px"}} alt="" />
    </div>

    </div>
</div>

<div className="art__title-group">
    <div>Double Exposure Art</div>
    <div className="art__title-group__actions">
        <Image src={UnFavourite} width={37} height={35} alt="" />
        <Image src={Share} width={35.5} height={37} alt="" />
    </div>
</div>

<div className="art__details">
    <div><Image src={Hash} width={20} height={20} alt="" />Single (1/1)</div>
    <div><Image src={File} width={20} height={20} alt="" />HandDrawn</div>
</div>

<div className="art__price">
    <button>Send message <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.52851 3.52851C5.78886 3.26816 6.21097 3.26816 6.47132 3.52851L10.4713 7.52851C10.7317 7.78886 10.7317 8.21097 10.4713 8.47132L6.47132 12.4713C6.21097 12.7317 5.78886 12.7317 5.52851 12.4713C5.26816 12.211 5.26816 11.7889 5.52851 11.5285L9.05711 7.99992L5.52851 4.47132C5.26816 4.21097 5.26816 3.78886 5.52851 3.52851Z" fill="#4D3EFF" fillOpacity="0.9"/>
</svg>
</button>

<div>₦ <span>33,000</span></div>
</div>


<ArtGrid explore={true} length={4} />
    </main>
  );
}
