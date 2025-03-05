import Logo from "@/public/assets/logo.svg";
import Image from "next/image";

import SignupForm from "../components/signupForm";


export default function Register() {
    return (
      <main className="register">
        <div className="register__card1">
          <div className="register__card1__logo">
              <Image
          src={Logo}
          width={36}
          height={36}
          alt=""
          />
            Galadio
          </div>
  
          <h1 className="register__card1__title">Let’s sign you up!</h1>
  
          <SignupForm />
        </div>
        <div className="register__card2">
        <div className="register__card2__carousel">
        <h2 className="register__card2__carousel__title">
        Experiencing the World of Art with <span>Galadio</span>
          </h2>
        <h3 className="register__card2__carousel__subtitle">
        Encouraging New and Emerging Arttist
          </h3>
  
          <div className="register__card2__carousel__nav-group">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="19.5" fill="black" fillOpacity="0.19" stroke="#FFF5F5"/>
  <path d="M22.5 14L16.5 20L22.5 26" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="19.5" transform="rotate(-180 20 20)" fill="black" fillOpacity="0.19" stroke="#FFF5F5"/>
  <path d="M17.5 26L23.5 20L17.5 14" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
  
          </div>
  
  </div>
        </div>
      </main>
    );
  }
  