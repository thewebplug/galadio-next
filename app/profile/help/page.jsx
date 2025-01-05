import Image from "next/image";
import Location from "@/public/assets/location.svg";
import Image4 from "@/public/assets/profile-user.png";
import Bg from "@/public/assets/profile-bg.png";
import Back from "@/public/assets/back-dark.svg";
import ArtGridCard from "@/app/components/artGridCard";
import Link from "next/link";

export default function ProfileHelp() {
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
                <div className="profile__header__inner__title">
                How can we help you?
                    </div>
                    
                </div>
            </div>

            <div className="profile__help-banner">
                Send us a message
            </div>
            <div className="profile__help-title">
            If you are a registered user of Galadio, please include the email address you used when you registered if possible to help us locate your account as soon as possible.
            </div>

       
            <form className="profile__form">
                <label htmlFor="">Full Name</label>
                <input type="text" />
                
                <label htmlFor="">Email</label>
                <input type="email" />
                
                <label htmlFor="">
                    <div>Label</div>
                    <div>0/100</div>
                </label>
                <textarea name="" id="" placeholder="Placeholder text"></textarea>

                <button>Send</button>
            </form>
            
        </main>
    )
}