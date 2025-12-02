import ComingSoon from './ComingSoon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import  { useMaskSettings} from '../constants';
const Hero = () => {
  const  {initialMaskPos, initialMaskSize, maskPos, maskSize} = useMaskSettings();

  useGSAP(()=>{
    gsap.set('.mask-wrapper',{
      maskPosition : initialMaskPos,
      maskSize : initialMaskSize,
    })

    gsap.set('.mask-logo' , {
      marginTop : '-100vh',
      opacity : 0,
    })

    gsap.set('.entrance-message' , {
       marginTop : '0vh',
    })

    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : '.hero-section', // target element
        start : 'top top', // when the top of the trigger hits the top of the viewport
        scrub :  2.5, // lag effect sync the animation to scroll position
        end : '+=200%', // end after scrolling 200% of the viewport height
        pin : true, // pin the section during the animation
        // pin is useful for creating scroll based scenes and based text
      }
    });

    tl
      .to('.fade-out' , { opacity : 0 , ease : 'power1.inOut' })
      .to('.scale-out' , { scale : 1 , ease : 'power1.inOut'})
      .to('.mask-wrapper' , {maskSize : maskSize , ease : 'power1.inOut' } , "<")
      .to('.mask-wrapper' , { opacity : 0 })
      .to(".overlay-logo" , { opacity : 1 , onComplete : ()=>{gsap.to('.overlay-logo',{opacity :0})}} , "<")
      .to('.entrance-message' , { ease : 'power1.inOut' , duration : 1 , maskImage : 'radial-gradient(circle at 50% 0vh , black  50% , transparent 100%)' } , "<")

  })
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero-bg.webp" alt="background" className="scale-out"/>
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out"/>
        <img src="/images/watch-trailer.png" alt="" className="trailer-logo fade-out"/>
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>
      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" alt="" className="overlay-logo" />

      </div>
      <ComingSoon></ComingSoon>
    </section>
  )
}

export default Hero