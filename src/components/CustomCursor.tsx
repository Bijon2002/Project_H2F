import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Mouse move event
    const moveCursor = (e: MouseEvent) => {
      if (cursor && follower) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });

        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    };

    // Mouse enter event to scale up the follower
    const scaleUp = () => {
      if (follower) {
        gsap.to(follower, {
          scale: 1.5,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };

    // Mouse leave event to scale down the follower
    const scaleDown = () => {
      if (follower) {
        gsap.to(follower, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', scaleUp);
    window.addEventListener('mouseleave', scaleDown);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', scaleUp);
      el.addEventListener('mouseleave', scaleDown);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', scaleUp);
      window.removeEventListener('mouseleave', scaleDown);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', scaleUp);
        el.removeEventListener('mouseleave', scaleDown);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-4 h-4 bg-h2f-gold-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 bg-h2f-gold-500 rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;