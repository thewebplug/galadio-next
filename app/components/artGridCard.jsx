import Image4 from "@/public/assets/image (2).png";
import Image5 from "@/public/assets/Ellipse 2.png";
import Image from "next/image";
import Link from "next/link";

export default function ArtGridCard() {
    return (
      <Link href="/art/1" className="grid__inner__card">
      <svg
        className="grid__inner__card__tag"
        width="88"
        height="16"
        viewBox="0 0 88 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="88"
          height="16"
          rx="8"
          fill="url(#paint0_linear_227_5554)"
        />
        <path
          d="M13.049 7.27344H11.4936C11.4652 7.07221 11.4072 6.89347 11.3196 6.73722C11.232 6.5786 11.1196 6.44366 10.9822 6.33239C10.8449 6.22112 10.6863 6.13589 10.5064 6.0767C10.3288 6.01752 10.1359 5.98793 9.92756 5.98793C9.55114 5.98793 9.22325 6.08144 8.94389 6.26847C8.66454 6.45312 8.44792 6.72301 8.29403 7.07812C8.14015 7.43087 8.06321 7.85937 8.06321 8.36364C8.06321 8.8821 8.14015 9.31771 8.29403 9.67045C8.45028 10.0232 8.66809 10.2895 8.94744 10.4695C9.2268 10.6494 9.54995 10.7393 9.9169 10.7393C10.1229 10.7393 10.3134 10.7121 10.4886 10.6577C10.6662 10.6032 10.8236 10.5239 10.9609 10.4197C11.0982 10.3132 11.2119 10.1842 11.3018 10.0327C11.3942 9.88116 11.4581 9.70833 11.4936 9.5142L13.049 9.52131C13.0088 9.85511 12.9081 10.1771 12.7472 10.4872C12.5885 10.795 12.3743 11.0708 12.1044 11.3146C11.8369 11.5561 11.5173 11.7479 11.1456 11.8899C10.7763 12.0296 10.3584 12.0994 9.89205 12.0994C9.24337 12.0994 8.66335 11.9527 8.15199 11.6591C7.64299 11.3655 7.24053 10.9406 6.9446 10.3842C6.65104 9.82789 6.50426 9.15436 6.50426 8.36364C6.50426 7.57055 6.65341 6.89583 6.9517 6.33949C7.25 5.78314 7.65483 5.35937 8.16619 5.06818C8.67756 4.77462 9.25284 4.62784 9.89205 4.62784C10.3134 4.62784 10.7041 4.68703 11.0639 4.8054C11.4261 4.92377 11.7469 5.09659 12.0263 5.32386C12.3056 5.54877 12.5329 5.82457 12.7081 6.15128C12.8857 6.47798 12.9993 6.85204 13.049 7.27344ZM20.9349 8.36364C20.9349 9.15672 20.7845 9.83144 20.4839 10.3878C20.1856 10.9441 19.7784 11.3691 19.2623 11.6626C18.7486 11.9538 18.1709 12.0994 17.5293 12.0994C16.883 12.0994 16.303 11.9527 15.7893 11.6591C15.2755 11.3655 14.8695 10.9406 14.5712 10.3842C14.2729 9.82789 14.1238 9.15436 14.1238 8.36364C14.1238 7.57055 14.2729 6.89583 14.5712 6.33949C14.8695 5.78314 15.2755 5.35937 15.7893 5.06818C16.303 4.77462 16.883 4.62784 17.5293 4.62784C18.1709 4.62784 18.7486 4.77462 19.2623 5.06818C19.7784 5.35937 20.1856 5.78314 20.4839 6.33949C20.7845 6.89583 20.9349 7.57055 20.9349 8.36364ZM19.3759 8.36364C19.3759 7.84991 19.299 7.41667 19.1451 7.06392C18.9936 6.71117 18.7793 6.44366 18.5023 6.26136C18.2254 6.07907 17.901 5.98793 17.5293 5.98793C17.1576 5.98793 16.8333 6.07907 16.5563 6.26136C16.2793 6.44366 16.0639 6.71117 15.91 7.06392C15.7585 7.41667 15.6827 7.84991 15.6827 8.36364C15.6827 8.87737 15.7585 9.31061 15.91 9.66335C16.0639 10.0161 16.2793 10.2836 16.5563 10.4659C16.8333 10.6482 17.1576 10.7393 17.5293 10.7393C17.901 10.7393 18.2254 10.6482 18.5023 10.4659C18.7793 10.2836 18.9936 10.0161 19.1451 9.66335C19.299 9.31061 19.3759 8.87737 19.3759 8.36364ZM22.1739 4.72727H24.0702L26.073 9.61364H26.1583L28.1611 4.72727H30.0574V12H28.5659V7.26634H28.5056L26.6235 11.9645H25.6078L23.7257 7.24858H23.6654V12H22.1739V4.72727ZM32.9619 4.72727V12H31.4243V4.72727H32.9619ZM40.4101 4.72727V12H39.082L35.9179 7.42259H35.8647V12H34.327V4.72727H35.6765L38.8157 9.30114H38.8796V4.72727H40.4101ZM46.603 7.07812C46.5533 6.9053 46.4834 6.7526 46.3935 6.62003C46.3035 6.48509 46.1934 6.37145 46.0632 6.27912C45.9354 6.18442 45.7886 6.11222 45.6229 6.0625C45.4595 6.01278 45.2784 5.98793 45.0795 5.98793C44.7079 5.98793 44.3812 6.08026 44.0994 6.26491C43.8201 6.44957 43.6023 6.71828 43.446 7.07102C43.2898 7.4214 43.2116 7.84991 43.2116 8.35653C43.2116 8.86316 43.2886 9.29403 43.4425 9.64915C43.5964 10.0043 43.8142 10.2753 44.0959 10.4624C44.3776 10.647 44.7102 10.7393 45.0938 10.7393C45.4418 10.7393 45.7389 10.6778 45.9851 10.5547C46.2337 10.4292 46.4231 10.2528 46.5533 10.0256C46.6858 9.7983 46.7521 9.52959 46.7521 9.21946L47.0646 9.26562H45.1896V8.10795H48.233V9.02415C48.233 9.66335 48.098 10.2126 47.8281 10.6719C47.5582 11.1288 47.1866 11.4815 46.7131 11.7301C46.2396 11.9763 45.6974 12.0994 45.0866 12.0994C44.4048 12.0994 43.8059 11.9491 43.2898 11.6484C42.7737 11.3454 42.3712 10.9157 42.0824 10.3594C41.7959 9.80066 41.6527 9.13778 41.6527 8.37074C41.6527 7.78125 41.7379 7.25568 41.9084 6.79403C42.0812 6.33002 42.3227 5.93703 42.6328 5.61506C42.9429 5.29309 43.304 5.04806 43.7159 4.87997C44.1278 4.71188 44.5741 4.62784 45.0547 4.62784C45.4666 4.62784 45.8501 4.68821 46.2053 4.80895C46.5604 4.92732 46.8752 5.09541 47.1499 5.31321C47.4268 5.53101 47.6529 5.79025 47.8281 6.09091C48.0033 6.3892 48.1158 6.71828 48.1655 7.07812H46.603ZM55.8477 6.81889C55.8193 6.53243 55.6974 6.3099 55.482 6.15128C55.2665 5.99266 54.9741 5.91335 54.6048 5.91335C54.3539 5.91335 54.142 5.94886 53.9692 6.01989C53.7964 6.08854 53.6638 6.18442 53.5714 6.30753C53.4815 6.43063 53.4365 6.57031 53.4365 6.72656C53.4318 6.85677 53.459 6.97041 53.5182 7.06747C53.5797 7.16454 53.6638 7.24858 53.7703 7.3196C53.8768 7.38826 54 7.44863 54.1396 7.50071C54.2793 7.55043 54.4285 7.59304 54.5871 7.62855L55.2405 7.7848C55.5577 7.85582 55.8489 7.95052 56.1141 8.06889C56.3792 8.18726 56.6089 8.33286 56.803 8.50568C56.9971 8.6785 57.1474 8.8821 57.254 9.11648C57.3629 9.35085 57.4185 9.61955 57.4209 9.92259C57.4185 10.3677 57.3049 10.7536 57.08 11.0803C56.8574 11.4046 56.5355 11.6567 56.1141 11.8366C55.695 12.0142 55.1896 12.103 54.5977 12.103C54.0106 12.103 53.4992 12.013 53.0636 11.8331C52.6304 11.6532 52.2919 11.3868 52.048 11.0341C51.8065 10.679 51.6799 10.2398 51.668 9.71662H53.156C53.1725 9.96046 53.2424 10.1641 53.3655 10.3274C53.491 10.4884 53.6579 10.6103 53.8662 10.6932C54.0769 10.7737 54.3148 10.8139 54.58 10.8139C54.8404 10.8139 55.0665 10.776 55.2582 10.7003C55.4524 10.6245 55.6027 10.5192 55.7092 10.3842C55.8158 10.2493 55.869 10.0942 55.869 9.91903C55.869 9.75568 55.8205 9.61837 55.7234 9.5071C55.6287 9.39583 55.4891 9.30114 55.3044 9.22301C55.1221 9.14489 54.8984 9.07386 54.6332 9.00994L53.8413 8.81108C53.2282 8.66193 52.744 8.42874 52.3889 8.11151C52.0338 7.79427 51.8574 7.36695 51.8598 6.82955C51.8574 6.3892 51.9746 6.0045 52.2114 5.67543C52.4505 5.34635 52.7784 5.08949 53.195 4.90483C53.6117 4.72017 54.0852 4.62784 54.6155 4.62784C55.1553 4.62784 55.6264 4.72017 56.0288 4.90483C56.4337 5.08949 56.7485 5.34635 56.9734 5.67543C57.1983 6.0045 57.3143 6.38565 57.3214 6.81889H55.8477ZM65.2384 8.36364C65.2384 9.15672 65.0881 9.83144 64.7874 10.3878C64.4891 10.9441 64.0819 11.3691 63.5658 11.6626C63.0521 11.9538 62.4744 12.0994 61.8328 12.0994C61.1865 12.0994 60.6065 11.9527 60.0928 11.6591C59.5791 11.3655 59.173 10.9406 58.8748 10.3842C58.5765 9.82789 58.4273 9.15436 58.4273 8.36364C58.4273 7.57055 58.5765 6.89583 58.8748 6.33949C59.173 5.78314 59.5791 5.35937 60.0928 5.06818C60.6065 4.77462 61.1865 4.62784 61.8328 4.62784C62.4744 4.62784 63.0521 4.77462 63.5658 5.06818C64.0819 5.35937 64.4891 5.78314 64.7874 6.33949C65.0881 6.89583 65.2384 7.57055 65.2384 8.36364ZM63.6794 8.36364C63.6794 7.84991 63.6025 7.41667 63.4486 7.06392C63.2971 6.71117 63.0828 6.44366 62.8059 6.26136C62.5289 6.07907 62.2045 5.98793 61.8328 5.98793C61.4612 5.98793 61.1368 6.07907 60.8598 6.26136C60.5828 6.44366 60.3674 6.71117 60.2135 7.06392C60.062 7.41667 59.9863 7.84991 59.9863 8.36364C59.9863 8.87737 60.062 9.31061 60.2135 9.66335C60.3674 10.0161 60.5828 10.2836 60.8598 10.4659C61.1368 10.6482 61.4612 10.7393 61.8328 10.7393C62.2045 10.7393 62.5289 10.6482 62.8059 10.4659C63.0828 10.2836 63.2971 10.0161 63.4486 9.66335C63.6025 9.31061 63.6794 8.87737 63.6794 8.36364ZM73.1607 8.36364C73.1607 9.15672 73.0103 9.83144 72.7097 10.3878C72.4114 10.9441 72.0042 11.3691 71.4881 11.6626C70.9743 11.9538 70.3967 12.0994 69.7551 12.0994C69.1088 12.0994 68.5288 11.9527 68.0151 11.6591C67.5013 11.3655 67.0953 10.9406 66.797 10.3842C66.4987 9.82789 66.3496 9.15436 66.3496 8.36364C66.3496 7.57055 66.4987 6.89583 66.797 6.33949C67.0953 5.78314 67.5013 5.35937 68.0151 5.06818C68.5288 4.77462 69.1088 4.62784 69.7551 4.62784C70.3967 4.62784 70.9743 4.77462 71.4881 5.06818C72.0042 5.35937 72.4114 5.78314 72.7097 6.33949C73.0103 6.89583 73.1607 7.57055 73.1607 8.36364ZM71.6017 8.36364C71.6017 7.84991 71.5248 7.41667 71.3709 7.06392C71.2194 6.71117 71.0051 6.44366 70.7281 6.26136C70.4511 6.07907 70.1268 5.98793 69.7551 5.98793C69.3834 5.98793 69.0591 6.07907 68.7821 6.26136C68.5051 6.44366 68.2897 6.71117 68.1358 7.06392C67.9843 7.41667 67.9085 7.84991 67.9085 8.36364C67.9085 8.87737 67.9843 9.31061 68.1358 9.66335C68.2897 10.0161 68.5051 10.2836 68.7821 10.4659C69.0591 10.6482 69.3834 10.7393 69.7551 10.7393C70.1268 10.7393 70.4511 10.6482 70.7281 10.4659C71.0051 10.2836 71.2194 10.0161 71.3709 9.66335C71.5248 9.31061 71.6017 8.87737 71.6017 8.36364ZM80.4828 4.72727V12H79.1547L75.9906 7.42259H75.9373V12H74.3997V4.72727H75.7491L78.8883 9.30114H78.9522V4.72727H80.4828Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_227_5554"
            x1="2.34636e-08"
            y1="12.6316"
            x2="98.8386"
            y2="16.6262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4AB1F1" />
            <stop offset="0.328125" stopColor="#566CEC" />
            <stop offset="0.65625" stopColor="#D749AF" />
            <stop offset="1" stopColor="#FF7C51" />
          </linearGradient>
        </defs>
      </svg>

      <Image src={Image4} width={258}m height={258} alt="" />
      <div className="grid__inner__card__title">
        Single (1/1)
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M3.735 7.378C3.6 6.604 3.051 5.632 2.007 4.849C1.494 4.462 0.972 4.21 0.459 4.102V3.724C1.476 3.481 2.475 2.797 3.114 1.87C3.438 1.402 3.645 0.943 3.735 0.466H4.113C4.266 1.375 4.968 2.383 5.922 3.058C6.39 3.391 6.876 3.616 7.371 3.724V4.102C6.372 4.309 5.211 5.2 4.635 6.109C4.347 6.568 4.176 6.991 4.113 7.378H3.735Z"
            fill="#4A576F"
            fillOpacity="0.7"
          />
        </svg>
        HandDrawn
      </div>
      <div className="grid__inner__card__subtitle">
        Double Exposure Art
      </div>

      <div className="grid__inner__card__price">
        <div>
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4304 8.53693V9.53125H0.288352V8.53693H10.4304ZM10.4304 10.6847V11.679H0.288352V10.6847H10.4304ZM9.47088 4.81818V15H8.05398L2.87855 7.53267H2.78906V15H1.24787V4.81818H2.67472L7.85014 12.2955H7.9446V4.81818H9.47088Z"
              fill="#4A576F"
            />
          </svg>
          33, 000
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z"
            fill="#4A576F"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      <div className="grid__inner__card__user">
        <Image src={Image5} alt="" />
        By Solomon Sharp
      </div>
    </Link>
    )
}