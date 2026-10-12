
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import techVideo from "../../assets/Open-optimized.mp4";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    className: "hero-scene-one",
    number: "01",
    eyebrow: "THE FUTURE OF COMPUTING",
    title: (
      <>
        Beyond
        <br />
        <span>Ordinary.</span>
        <br />
        Into <i>Next.</i>
      </>
    ),
    description:
      "Discover powerful computers, next-generation technology, and premium hardware designed to push your limits.",
    button: "Explore Collection",
    side: "left",
  },
  {
    className: "hero-scene-two",
    number: "02",
    eyebrow: "UNLEASH THE POWER",
    title: (
      <>
        Power
        <br />
        <span>Unleashed.</span>
      </>
    ),
    description:
      "Experience powerful graphics, lightning-fast processors, and gaming machines built for extraordinary performance.",
    button: "Discover Performance",
    side: "right",
  },
  {
    className: "hero-scene-three",
    number: "03",
    eyebrow: "PRECISION ENGINEERED",
    title: (
      <>
        Built for
        <br />
        <i>Performance.</i>
      </>
    ),
    description:
      "Explore premium components, advanced cooling, and cutting-edge hardware for your ultimate PC setup.",
    button: "Explore Hardware",
    side: "left",
  },
  {
    className: "hero-scene-four",
    number: "04",
    eyebrow: "CREATE YOUR UNIVERSE",
    title: (
      <>
        Your Setup.
        <br />
        <span>Your Rules.</span>
      </>
    ),
    description:
      "Find everything you need to build your ideal gaming, creative, or professional workspace.",
    button: "Shop All Products",
    side: "right",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;

    if (!hero || !video) return;

    let ctx: gsap.Context | undefined;
    let initialized = false;

    const initialize = () => {
      if (
        initialized ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0 ||
        video.readyState < 1
      ) {
        return;
      }

      initialized = true;
      video.pause();

      try {
        video.currentTime = 0;
      } catch {
        // Video metadata is loaded; the browser may still be preparing frames.
      }

      ctx = gsap.context(() => {
        const sceneElements =
          gsap.utils.toArray<HTMLElement>(".hero-copy");

        if (sceneElements.length !== scenes.length) return;

        // Keep every scene vertically centered.
        gsap.set(sceneElements, {
          autoAlpha: 0,
          x: 0,
          y: 0,
          yPercent: -50,
        });

        // Show the first scene initially.
        gsap.set(sceneElements[0], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          yPercent: -50,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${window.innerHeight * 4}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Scrub the video according to scroll progress.
        timeline.to(
          video,
          {
            currentTime: video.duration,
            duration: 10,
            ease: "none",
          },
          0
        );

        const transitions = [
          { from: 0, to: 1, at: 2 },
          { from: 1, to: 2, at: 4.5 },
          { from: 2, to: 3, at: 7 },
        ];

        transitions.forEach(({ from, to, at }) => {
          const outgoing = sceneElements[from];
          const incoming = sceneElements[to];

          const exitX =
            scenes[from].side === "left" ? -45 : 45;

          const enterX =
            scenes[to].side === "left" ? -55 : 55;

          // Fade out the current scene.
          timeline.to(
            outgoing,
            {
              autoAlpha: 0,
              x: exitX,
              y: -15,
              yPercent: -50,
              duration: 0.6,
              ease: "power2.inOut",
            },
            at
          );

          // Fade in the next scene without losing vertical centering.
          timeline.fromTo(
            incoming,
            {
              autoAlpha: 0,
              x: enterX,
              y: 25,
              yPercent: -50,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              yPercent: -50,
              duration: 0.75,
              ease: "power3.out",
            },
            at + 0.1
          );
        });

        gsap.from(".hero-navbar-inner", {
          autoAlpha: 0,
          y: -15,
          duration: 0.7,
          ease: "power2.out",
        });

        ScrollTrigger.refresh();
      }, hero);
    };

    video.addEventListener("loadedmetadata", initialize);
    video.addEventListener("durationchange", initialize);

    if (video.readyState >= 1) {
      initialize();
    }

    return () => {
      video.removeEventListener("loadedmetadata", initialize);
      video.removeEventListener("durationchange", initialize);

      ctx?.revert();
      video.pause();
    };
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
      ref={heroRef}
    >
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        preload="auto"
        poster="/images/computer-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src={techVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="hero-content">
        {scenes.map((scene) => (
          <div
            key={scene.number}
            className={`hero-copy ${scene.className} hero-${scene.side}`}
          >
            <p className="hero-eyebrow">
              <span />
              {scene.number} / {scene.eyebrow}
            </p>

            <h1 className="hero-title">{scene.title}</h1>

            <p className="hero-description">
              {scene.description}
            </p>

            <a href="#categories" className="hero-button">
              {scene.button}
              <ArrowUpRight size={18} />
            </a>

            <p className="hero-scene-index">
              NEXORA / 2026 <span>—</span> {scene.number} / 04
            </p>
          </div>
        ))}
      </div>

      <div className="hero-footer">
        <span>COMPUTERS / COMPONENTS / GAMING GEAR</span>

        <a href="#categories">
          Explore Products <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="hero-scroll">
        <span />
        SCROLL TO EXPLORE
        <span />
      </div>
    </section>
  );
}
