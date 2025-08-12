/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const rippleEffect = (
  titleRef: React.RefObject<HTMLHeadingElement>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  useGSAP(
    () => {
      if (!titleRef.current) return;

      const createRipple = (event: MouseEvent) => {
        const title = titleRef.current;
        if (!title) return;

        const ripple = document.createElement("div");
        ripple.className = "ripple";
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.border = "2px solid white";
        ripple.style.pointerEvents = "none";

        const rect = title.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        title.appendChild(ripple);

        gsap.fromTo(
          ripple,
          { width: 0, height: 0, opacity: 1 },
          {
            width: 100,
            height: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => ripple.remove(),
          }
        );
      };

      titleRef.current.addEventListener("mousemove", createRipple);

      return () => {
        if (titleRef.current) {
          titleRef.current.removeEventListener("mousemove", createRipple);
        }
      };
    },
    { scope: containerRef }
  );
};