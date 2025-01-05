import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Checked from "@/public/assets/checked.svg";
import UnChecked from "@/public/assets/unchecked.svg";


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
  
          <form className="register__card1__form">
            <input
              type="text"
              className="register__card1__form__input"
              placeholder="Enter First Name"
            />
            <input
              type="text"
              className="register__card1__form__input"
              placeholder="Enter Surname"
            />
            <input
              type="text"
              className="register__card1__form__input"
              placeholder="Email"
            />
            <input
              type="text"
              className="register__card1__form__input"
              placeholder="Password"
            />
            <input
              type="text"
              className="register__card1__form__input"
              placeholder="Confirm Password"
            />
  
            <h2 className="register__card1__form__userType">
              How would you like to use this platform?
            </h2>
  
            <div className="register__card1__form__userType-group">
              <div>
                 <Image
                          src={Checked}
                          width={21}
                          height={21}
                          alt=""
                          />
                 
                Artist
              </div>
              <div>
              <Image
                          src={UnChecked}
                          width={21}
                          height={21}
                          alt=""
                          />
                User
              </div>
            </div>
  
            <button className="register__card1__form__button">Sign up</button>
  
            <h3 className="register__card1__form__login">
            Already have an account? <span >Login</span>
            </h3>
  
            <div className="register__card1__form__continue">
            <svg width="140" height="4" viewBox="0 0 140 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.666667 2C0.666667 2.73638 1.26362 3.33333 2 3.33333C2.73638 3.33333 3.33333 2.73638 3.33333 2C3.33333 1.26362 2.73638 0.666667 2 0.666667C1.26362 0.666667 0.666667 1.26362 0.666667 2ZM2 2.25L140 2.25001L140 1.75001L2 1.75L2 2.25Z" fill="#4A576F" fillOpacity="0.7"/>
  </svg>
  
  
              <h3>or</h3>
              <svg width="146" height="4" viewBox="0 0 146 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M142.667 2.00001C142.667 2.73639 143.264 3.33335 144 3.33335C144.736 3.33335 145.333 2.73639 145.333 2.00001C145.333 1.26363 144.736 0.666679 144 0.666679C143.264 0.666679 142.667 1.26363 142.667 2.00001ZM-2.18557e-08 2.25L144 2.25001L144 1.75001L2.18557e-08 1.75L-2.18557e-08 2.25Z" fill="#4A576F" fillOpacity="0.7"/>
  </svg>
  
            </div>
  
            <div className="register__card1__form__option">
              <button><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.6885 10.704C19.6885 9.94859 19.6259 9.39734 19.4906 8.82568H10.6885V12.2352H15.8551C15.751 13.0826 15.1884 14.3586 13.9384 15.216L13.9209 15.3302L16.704 17.4431L16.8968 17.4619C18.6676 15.8592 19.6885 13.5011 19.6885 10.704Z" fill="#4285F4"/>
  <path d="M10.688 19.6874C13.2192 19.6874 15.3441 18.8707 16.8963 17.4619L13.9379 15.216C13.1463 15.7571 12.0838 16.1348 10.688 16.1348C8.20886 16.1348 6.1047 14.5321 5.35463 12.3169L5.24469 12.326L2.35083 14.5208L2.31299 14.6239C3.85464 17.6252 7.02131 19.6874 10.688 19.6874Z" fill="#34A853"/>
  <path d="M5.35461 12.3172C5.1567 11.7455 5.04216 11.133 5.04216 10.5001C5.04216 9.86714 5.1567 9.25467 5.34419 8.68301L5.33895 8.56121L2.40883 6.33118L2.31296 6.37587C1.67757 7.62132 1.31299 9.01986 1.31299 10.5001C1.31299 11.9803 1.67757 13.3788 2.31296 14.6242L5.35461 12.3172Z" fill="#FBBC05"/>
  <path d="M10.688 4.86498C12.4484 4.86498 13.6359 5.61018 14.313 6.23293L16.9588 3.70125C15.3339 2.22105 13.2193 1.3125 10.688 1.3125C7.02131 1.3125 3.85464 3.37457 2.31299 6.37579L5.34423 8.68291C6.10472 6.46771 8.20886 4.86498 10.688 4.86498Z" fill="#EB4335"/>
  </svg>
  Google
  </button>
              <button>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.0009 0C12.0474 0 12.094 0 12.1431 0C12.2573 1.41044 11.719 2.46432 11.0647 3.22751C10.4227 3.98542 9.54357 4.7205 8.12171 4.60897C8.02686 3.21872 8.56609 2.24301 9.2195 1.48158C9.82548 0.771967 10.9364 0.140517 12.0009 0Z" fill="black"/>
  <path d="M16.3053 14.6805C16.3053 14.6945 16.3053 14.7068 16.3053 14.72C15.9057 15.9302 15.3357 16.9674 14.6401 17.9299C14.0052 18.8038 13.2271 19.9797 11.8377 19.9797C10.6372 19.9797 9.83972 19.2078 8.60932 19.1867C7.30778 19.1656 6.59202 19.8322 5.40201 19.9999C5.26588 19.9999 5.12976 19.9999 4.99627 19.9999C4.12243 19.8735 3.4172 19.1814 2.90344 18.5579C1.38849 16.7153 0.217802 14.3353 0 11.2896C0 10.991 0 10.6933 0 10.3947C0.0922144 8.21493 1.15136 6.44266 2.55917 5.58374C3.30216 5.12706 4.32354 4.73801 5.46085 4.9119C5.94827 4.98742 6.44623 5.15429 6.88271 5.3194C7.29636 5.47836 7.81364 5.76027 8.30369 5.74534C8.63566 5.73568 8.96588 5.56267 9.30049 5.44059C10.2806 5.08667 11.2414 4.68092 12.5078 4.8715C14.0298 5.10159 15.11 5.77783 15.7775 6.82118C14.49 7.64057 13.4721 8.87536 13.646 10.984C13.8006 12.8994 14.9142 14.0201 16.3053 14.6805Z" fill="black"/>
  </svg>
  
  Apple
  </button>
  <button>
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.31929 10.1194H7.48929V18.6935C7.48929 18.8628 7.6322 19 7.80858 19H11.4879C11.6643 19 11.8072 18.8628 11.8072 18.6935V10.1598H14.3018C14.464 10.1598 14.6004 10.043 14.619 9.88834L14.9978 6.73176C15.0082 6.64491 14.9796 6.55794 14.919 6.49279C14.8584 6.42758 14.7717 6.39025 14.6807 6.39025H11.8073V4.41155C11.8073 3.81508 12.1419 3.51261 12.802 3.51261C12.896 3.51261 14.6807 3.51261 14.6807 3.51261C14.8571 3.51261 15 3.37538 15 3.20616V0.308719C15 0.139435 14.8571 0.00226774 14.6807 0.00226774H12.0915C12.0733 0.00140968 12.0327 0 11.973 0C11.5237 0 9.96216 0.0846419 8.72866 1.17377C7.36195 2.3807 7.55193 3.8258 7.59734 4.07636V6.39019H5.31929C5.14292 6.39019 5 6.52736 5 6.69664V9.81289C5 9.98217 5.14292 10.1194 5.31929 10.1194Z" fill="#1976D2"/>
  </svg>
  Facebook
  </button>
            </div>
          </form>
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
  