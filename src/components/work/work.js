 
import "./work.css"
 
import Header from "../header/Header"
import {tsParticles} from "tsparticles";
import React, {  useEffect, useRef } from 'react';
import Icon from "../icon/icon"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
function Work(){
  
 
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 1,
          sync: true
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "random",
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          color: "#ffffff",
          opacity: 0.1
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  });
 
 
    useEffect(() => {

    
 


        let logo = document.getElementById("header_logo") ;
        let item = document.getElementById("header_item1") ;
         if(window.location.href === "http://localhost:3000/work"){
            logo.style.color = "white";
            item.style.color = "white";
         }
    
       });

    return (
     
        <div className="over_f">
        
        <Header/>
       
       
        <Icon />
        <div id="tsparticles"></div>

                  {/* <h1 className="Workh11">Work</h1> */}
{/* 
                  <div className="WorkBlock">
        
                  <div id="wok1" className="WorkBlock_b1"></div>
                  <div id="wok1"  className="WorkBlock_b1"></div>
                  <div id="wok2"  className="WorkBlock_b1"></div>
                  <div id="wok2"  className="WorkBlock_b1"></div>
                 
               
                </div> */}

return (
    <>
    <div className="okk">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      
     
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img2.akspic.ru/originals/7/6/4/4/5/154467-kiberpank_2077-cd_projekt-purpur-kapyushon-svet-720x1280.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tCoXWkGxBn1-0K5grxMLg_6XUKNK3TA5bw&usqp=CAU" alt="ok" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/474x/71/6f/ec/716fec56e6e9ef6fcbe86cadded23a9f.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/1200x/d2/62/ac/d262aceb1169573acde1bfd7b540b13b.jpg"  alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.ananasposter.ru/image/cache/catalog/poster/games/81/18458-1000x830.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cs10.pikabu.ru/post_img/big/2019/06/16/6/15606723681223538.jpg"  alt="ok"/>
        </SwiperSlide>
       
      </Swiper>


      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
     
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.ananasposter.ru/image/cache/catalog/poster/games/83/10696-1000x830.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnb.artstation.com/p/assets/images/images/010/017/711/large/anastasia-degtyarenko-ciri-s.jpg?1522113132" alt="ok" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf296ba5-0d5a-4ac6-b534-9ad3df9de58f/dcn6b8o-55563e33-7039-406c-8ce3-875eaa0d04a8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjk2YmE1LTBkNWEtNGFjNi1iNTM0LTlhZDNkZjlkZTU4ZlwvZGNuNmI4by01NTU2M2UzMy03MDM5LTQwNmMtOGNlMy04NzVlYWEwZDA0YTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UJKzcWk7-jzN0VAoLyAP76UJRP1bzkO9oT9sVJvIGDM" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.zerochan.net/Cirilla.Fiona.Elen.Riannon.full.2795978.jpg"  alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/728074b7-4521-490d-953b-fdfdf9f94f73/d8v3f3c-fdcaa61c-cd0a-4850-a892-fb973535e2ea.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyODA3NGI3LTQ1MjEtNDkwZC05NTNiLWZkZmRmOWY5NGY3M1wvZDh2M2YzYy1mZGNhYTYxYy1jZDBhLTQ4NTAtYTg5Mi1mYjk3MzUzNWUyZWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t1_3AMeNOBmrd-FGkTTOm2_F3oWbc9yykMQIoOxViDY" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4VRx_srUzhFF2Sjb6QD5wvSjFrpNIXE2cKPM3JvHInwI47fNsKkx_argIqN8_xwMsVQ&usqp=CAU"  alt="ok"/>
        </SwiperSlide>
      </Swiper>


      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      
        
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.shazoo.ru/350118_ymsWUuHsgU_d9whuxoxkaatljx.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shazoo.ru/347992_kOASzaFVuY_04.jpg" alt="ok" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shazoo.ru/350119_rdETmDDc9T_d9b25bgx4aaionn.jpg" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdna.artstation.com/p/assets/images/images/027/683/044/4k/soufiane-idrassi-cyberpunk-pxxrint-copy.jpg?1592248357"  alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0j4jmYlsKe-K2eGy9TtovqhbLOlqvWzoDfg&usqp=CAU" alt="ok"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s5o.ru/storage/simple/cyber/edt/bb/e3/4b/17/cyberea6c6bb3be6.jpg"  alt="ok"/>
        </SwiperSlide>
      </Swiper>


 




      </div>
    </>
  );
        
     <div className="work-block">

     </div>
  
        </div>
      );
}
export default  Work;