"use client"
import Image from "next/image";
import Pin from "@/public/assets/pin.svg";
import Read from "@/public/assets/read.svg";
import Search from "@/public/assets/search.svg";
import Image4 from "@/public/assets/image (6).png";
import Video from "@/public/assets/video.svg";
import Info from "@/public/assets/info.svg";
import Attach from "@/public/assets/attach.svg";
import Online from "@/public/assets/online.svg";
import { useState } from "react";

export default function Messages() {

  const [chat, setChat] = useState(false)
  return (
    <main className="messages">
      {!chat && <div className="messages__list">
        <div className="messages__list__title">Messages</div>
        <div className="messages__list__search">
          <Image src={Search} width={10} height={10} alt=""  />
          <input type="text" className="" placeholder="Search" />
        </div>

        <div className="messages__list__sort">
          <div>Sort by</div>
          <select name="" id="">
            <option value="">Newest</option>
          </select>
        </div>

        <div className="messages__list__card"
        onClick={() => setChat(true)}
        >
          <div className="messages__list__card__group">
            <div className="messages__list__card__group__image">
              <Image
                src={"/assets/Ellipse 1 (3).png"}
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
                alt="" 
              />
              
              <Image
              className="messages__list__card__group__image__online"
                src={Online}
                width={8}
                height={8}
                style={{ borderRadius: "50%" }}
                alt="" 
              />
            </div>

            <div className="messages__list__card__group__user">
              <div className="messages__list__card__group__user__name">
                <Image src={Pin} width={12} height={12} alt=""  />
                John Doe
              </div>
              <div className="messages__list__card__group__user__message">
                How are you doing?
              </div>
            </div>
          </div>

          <div className="messages__list__card__info">
            <div className="messages__list__card__info__time">16:45</div>
            <Image src={Read} alt=""  />
          </div>
        </div>
        <div className="messages__list__card messages__list__card-read"
         onClick={() => setChat(true)}
        >
          <div className="messages__list__card__group">
            <div className="messages__list__card__group__image">
              <Image
                src={"/assets/Ellipse 1 (5).png"}
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
                alt="" 
              />
            </div>

            <div className="messages__list__card__group__user">
              <div className="messages__list__card__group__user__name">
                Travis Barker
              </div>
              <div className="messages__list__card__group__user__typing">
                ... is typing
              </div>
            </div>
          </div>

          <div className="messages__list__card__info">
            <div className="messages__list__card__info__time">16:45</div>
            <Image src={Read} alt=""  />
          </div>
        </div>

        <div className="messages__list__card"
         onClick={() => setChat(true)}
        >
          <div className="messages__list__card__group">
            <div className="messages__list__card__group__image">
              <Image
                src={"/assets/Ellipse 1 (4).png"}
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
                alt="" 
              />
            </div>

            <div className="messages__list__card__group__user">
              <div className="messages__list__card__group__user__name">
                <Image src={Pin} width={12} height={12} alt=""  />
                Robert Parker
              </div>
              <div className="messages__list__card__group__user__message">
                How are you doing?
              </div>
            </div>
          </div>

          <div className="messages__list__card__info">
            <div className="messages__list__card__info__time">16:45</div>
            <Image src={Read} alt=""  />
          </div>
        </div>

        <div className="messages__list__card"
         onClick={() => setChat(true)}
        >
          <div className="messages__list__card__group">
            <div className="messages__list__card__group__image">
              <Image
                src={"/assets/Ellipse 1 (6).png"}
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
                alt=""
              />
            </div>

            <div className="messages__list__card__group__user">
              <div className="messages__list__card__group__user__name">
                <Image src={Pin} width={12} height={12} alt=""  />
                George Orwell
              </div>
              <div className="messages__list__card__group__user__message">
                How are you doing?
              </div>
            </div>
          </div>

          <div className="messages__list__card__info">
            <div className="messages__list__card__info__time">16:45</div>
            <Image src={Read} alt=""  />
          </div>
        </div>

        <div className="messages__list__card"
         onClick={() => setChat(true)}
        >
          <div className="messages__list__card__group">
            <div className="messages__list__card__group__image">
              <Image
                src={"/assets/Ellipse 1 (7).png"}
                width={36}
                height={36}
                style={{ borderRadius: "50%" }}
                alt="" 
              />
            </div>

            <div className="messages__list__card__group__user">
              <div className="messages__list__card__group__user__name">
                <Image src={Pin} width={12} height={12} alt=""  />
                Franz Kafka
              </div>
              <div className="messages__list__card__group__user__message">
                How are you doing?
              </div>
            </div>
          </div>

          <div className="messages__list__card__info">
            <div className="messages__list__card__info__time">16:45</div>
            <Image src={Read} width={12} height={12} alt=""  />
          </div>
        </div>
      </div>}
      <div className="messages__chat">
        <div className="messages__chat__header">
          <div className="messages__chat__header__user">
            <Image src={"/assets/Ellipse 1 (5).png"} width={42} height={42} style={{borderRadius: "50%"}} alt=""  />
            <div>
              <div>
                Travis <br /> Barker
              </div>

              <div className="messages__chat__header__user__status">Online</div>
            </div>
          </div>

          <div className="messages__chat__header__actions">
            <Image src={Video} width={42} height={42} alt="" />
            <Image src={Info} width={42} height={42} alt="" />
          </div>
        </div>

        <div className="messages__chat__inner">
          <Image
          className="messages__chat__inner__image"
            src={Image4}
            width={240}
            height={240}
            style={{ borderRadius: "16px" }}
            alt="" 
          />

          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>

          <div className="messages__chat__inner__time-lapse">
            <div className="messages__chat__inner__time-lapse__line"></div>
            <div>Today</div>
          </div>

          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>
          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>

        </div>

        <div className="messages__chat__footer">
          <Image src={Attach} width={42} height={42} alt="" />

          <input type="text" placeholder="Type your message here.." />
          <button>Send message</button>
        </div>
      </div>
     {chat &&  <div className="messages__chat messages__chat-mobile">
        <div className="messages__chat__header">
          <div className="messages__chat__header__user">
            <Image src={"/assets/Ellipse 1 (5).png"} width={42} height={42} style={{borderRadius: "50%"}} alt=""  />
            <div>
              <div>
                Travis <br /> Barker
              </div>

              <div className="messages__chat__header__user__status">Online</div>
            </div>
          </div>

          <div className="messages__chat__header__actions">
            <Image src={Video} width={42} height={42} alt="" />
            <Image src={Info} width={42} height={42} alt="" />
          </div>
        </div>

        <div className="messages__chat__inner">
          <Image
          className="messages__chat__inner__image"
            src={Image4}
            width={240}
            height={240}
            style={{ borderRadius: "16px" }}
            alt="" 
          />

          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>

          <div className="messages__chat__inner__time-lapse">
            <div className="messages__chat__inner__time-lapse__line"></div>
            <div>Today</div>
          </div>

          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>
          <div className=" messages__chat__inner__message messages__chat__inner__message-sender">
            <Image
              src={Image4}
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt="" 
            />

            <div>
              <div>https://dribbble.com/shots/17742253-ui-kit-designjam</div>
              <div className="messages__chat__inner__message__time">15:42</div>
            </div>
          </div>

        
          <div className=" messages__chat__inner__message messages__chat__inner__message-receiver">
           
            <div>
              <div>Thank you for work, see you!</div>
              <div className="messages__chat__inner__message__time"><Image src={Read} width={12} height={12} alt="" /> 15:42</div>
            </div>
          </div>

        </div>

        <div className="messages__chat__footer">
          <Image src={Attach} width={42} height={42} alt="" />

          <input type="text" placeholder="Type your message here.." />
          <button>Send</button>
        </div>
      </div>}
    </main>
  );
}
