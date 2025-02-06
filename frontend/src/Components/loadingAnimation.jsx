import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ setLoading }) => {
  const loadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false), // Hide the loading screen after animation
    });

    tl.from("#page1", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power2.out",
    })
      .to("#page1", {
        opacity: 0,
        scale: 1.5,
        duration: 0.8,
        ease: "power2.inOut",
      });

  }, [setLoading]);

  return (
    <div
      ref={loadingRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#1b1b1b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "24px",
        zIndex: 1000,
      }}
    >
      Loading...
    </div>
  );
};

export default LoadingScreen;
