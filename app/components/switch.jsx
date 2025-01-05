"use client"

import { useState } from "react";

export default function Switch() {
    const [rememberActive, setRememberActive] = useState(false);
    return (
        <div
              className={
                rememberActive
                  ? "login__card1__form__remeber__switch login__card1__form__remeber__switch-active"
                  : "login__card1__form__remeber__switch"
              }
              onClick={() => setRememberActive(!rememberActive)}
            >
              <div className="login__card1__form__remeber__switch__ball"></div>
            </div>
    )
}