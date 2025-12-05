import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";



const FinalVideo = () => {
  const VideoRef = useRef(null);
  useGSAP(()=>{
    gsap.set(".final-content", {
      opacity: 0,
    });

      gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "90% top",
        scrub: 2,
        pin: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : ".final",
        start : "top 80%",
        end : "90% top", 
        scrub : 2,
      }
    })

    tl.to(".final-content" , { opacity : 1 , ease : "power1.inOut" , duration : 2 , scale : 1});

    VideoRef.current.onloadedmetadata = () => {
      tl.to(VideoRef.current , {currentTime : VideoRef.current.duration , ease : 'power1.inOut' , duration : 3},"<");
    };
  })
  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          src="/videos/output3.mp4"
          playsInline
          muted
          ref={VideoRef}
          preload="auto"
          className="size-full object-cover"
        ></video>
      </div>

    </section>
  );
};

export default FinalVideo;