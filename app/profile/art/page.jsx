import Image from "next/image";
import Location from "@/public/assets/location.svg";
import Image4 from "@/public/assets/profile-user.png";
import Bg from "@/public/assets/profile-bg.png";
import Back from "@/public/assets/back-dark.svg";
import ArtGridCard from "@/app/components/artGridCard";
import Link from "next/link";

export default function Profile() {
    return (
        <main className="profile">
            <div className="profile__header">
            <Image
                src={Bg}
                objectFit="cover"
                layout="fill"
                alt=""

                />

                <div className="profile__header__inner">
                    <Link href="/profile" prefetch={true}>
                    <Image src={Back} width={40} height={40} alt="" />
                    </Link>
                </div>
            </div>

            <div className="profile__user">
                <Image
                src={Image4}
                width={181}
                height={181}
                alt=""

                />

                <div className="profile__user__name">
                    <div>Solomon Xian</div>
                    <div>@solomon X</div>
                </div>
                <div className="profile__user__role">
                Digital Artist/Visual designer
                </div>
                <button>
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.7 1.7002H14.3C15.0975 1.7002 15.75 2.3527 15.75 3.1502V11.8502C15.75 12.6477 15.0975 13.3002 14.3 13.3002H2.7C1.9025 13.3002 1.25 12.6477 1.25 11.8502V3.1502C1.25 2.3527 1.9025 1.7002 2.7 1.7002Z" stroke="#374957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 3.15039L8.5 8.22539L1.25 3.15039" stroke="#374957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    Edit
                </button>

                <div className="profile__user__location">
                    <Image src={Location} width={16} height={16} alt="" />
                    Lagos, Nigeria</div>
            </div>

            <div className="profile__art">
            <div className="profile__art__title">
            My Art
                </div>
                
            <div className="profile__art__grid">
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                <ArtGridCard />
                        </div>
            </div>
            
        </main>
    )
}