import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SecondVideo = () => {
    const videoRef  = useRef(null);

    useGSAP(()=>{
            gsap.set(".lucia" , {
                opacity : 0,
                marginTop : "-100vh",
            });

            const tl = gsap.timeline({
                scrollTrigger : {
                    trigger : ".lucia",
                    start : "top top",
                    end : "bottom top",
                    scrub : 2,
                    pin : true,
                }
            })

            tl.to(".lucia" , {opacity : 1 , duration : 1 ,ease : 'power1.inOut'});
            videoRef.current.onloadedmetadata = () => {  
            tl.to(videoRef.current , {currentTime : videoRef.current.duration , ease : 'power1.inOut' , duration : 3},"<");
            }
    },[])

    return (
    <section className="lucia">
            <div className="h-dvh">
                <video src="/videos/output2.mp4" 
                ref={videoRef} 
                playsInline 
                muted 
                preload="auto" 
                className="size-full object-cover second-vd"
                style={{Objectposition : '30% 0%'}}
                ></video>

            </div>
    </section>
  )
}

export default SecondVideo