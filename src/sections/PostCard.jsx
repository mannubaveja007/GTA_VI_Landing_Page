import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"



const PostCard = () => {
    const videoref = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '.post-card',
                start : 'top center',
                end : 'bottom center',
                scrub : true,
            }
        })
        

        videoref.current.onloadedmetadata = () => {
            tl.to(videoref.current , {currentTime : videoref.current.duration , ease : 'power1.inOut' , duration : 2},"<");
            }
    })

    return (
    <section className="post-card">
        <div className="animated-gradient-bg"></div>

        <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700">
            <img src="/images/overlay.webp" alt="" className="" />
            <video ref={videoref}

                muted
                autoPlay
                playsInline
                preload="auto"
                src="/videos/postcard-vd.mp4"
            ></video>
        <button className="group-hover:bg-yellow transition duration-700">
            Explore Leonida Keys
        </button>
        </div>
    </section>
)
}

export default PostCard