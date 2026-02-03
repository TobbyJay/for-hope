'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

// Animated background component
function AnimatedBackground() {
  const lights = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Luxury light orbs */}
      {lights.map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: '300px',
            height: '300px',
            background: i % 2 === 0 
              ? 'oklch(0.68 0.22 60 / 0.4)'
              : 'oklch(0.78 0.1 70 / 0.3)',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
    </div>
  );
}

// Luxury crown icon
function LuxuryCrown() {
  return (
    <svg
      className="w-16 h-16 md:w-20 md:h-20 mb-8"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" opacity="0.7" />
        </linearGradient>
      </defs>
      {/* Crown base */}
      <path
        d="M10 70L20 40L35 50L50 25L65 50L80 40L90 70Z"
        fill="url(#crownGradient)"
        className="text-primary"
      />
      {/* Crown jewels */}
      <circle cx="35" cy="48" r="4" fill="currentColor" className="text-accent" />
      <circle cx="50" cy="23" r="5" fill="currentColor" className="text-accent" />
      <circle cx="65" cy="48" r="4" fill="currentColor" className="text-accent" />
      {/* Base line */}
      <path d="M10 70Q50 80 90 70" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Video Icon Component
function VideoIcon() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart shape */}
      <path
        d="M50 85C25 70 10 55 10 40C10 28 18 20 28 20C35 20 42 25 50 32C58 25 65 20 72 20C82 20 90 28 90 40C90 55 75 70 50 85Z"
        fill="currentColor"
      />
      {/* Play triangle inside heart */}
      <path d="M40 38L40 52L56 45Z" fill="white" />
    </svg>
  );
}

// Main Valentine's Page
export default function ValentinePage() {
  const [noAttempts, setNoAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setShowConfetti(true);
    setSuccess(true);
  };

  const handleNoHover = () => {
    if (noButtonRef.current) {
      const randomX = Math.random() * (window.innerWidth - 100);
      const randomY = Math.random() * (window.innerHeight - 50);

      noButtonRef.current.style.position = 'fixed';
      noButtonRef.current.style.left = `${randomX}px`;
      noButtonRef.current.style.top = `${randomY}px`;

      setNoAttempts((prev) => prev + 1);
    }
  };

  const getNoButtonText = () => {
    if (noAttempts >= 6) return '';
    if (noAttempts >= 3) return "Still No??";
    return 'No';
  };

  const getNoButtonScale = () => {
    if (noAttempts >= 6) return 'scale-0';
    if (noAttempts >= 3) return 'scale-75';
    return 'scale-100';
  };

  if (success) {
    return (
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
        <AnimatedBackground />
        {showConfetti && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <ConfettiExplosion
              particleCount={200}
              duration={3500}
              force={0.8}
              width={window.innerWidth}
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl px-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex justify-center text-primary mb-8"
          >
            <LuxuryCrown />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-4 tracking-tight">
            You said Yes!
          </h1>
          
          <p className="text-xl md:text-2xl text-primary mb-10 font-light">
            I love you so much, my Mumma and Lom Lom
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-14 shadow-2xl border border-border/40"
            style={{
              boxShadow: '0 8px 32px rgba(107, 114, 128, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 tracking-tight">
              Reasons Why I Love You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
              {[
                'Your beautiful smile',
                'Your kind heart',
                'Your infectious laugh',
                'Your unconditional love',
                'Your creativity',
                'Your vibrant spirit',
                'The way you inspire me',
                'You\'re my queen, Mumma',
              ].map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-lg text-foreground/80 font-light flex items-start gap-3"
                >
                  <span className="text-primary text-2xl mt-1">✨</span>
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Icon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex justify-center relative"
          >
            <div className="relative group flex items-center gap-8 md:gap-12">
              {/* Pointing Hand - Left */}
              <motion.div
                animate={{
                  x: [0, 8, 0],
                  rotate: [-5, 0, -5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-4xl md:text-5xl pointer-events-none"
              >
                👉
              </motion.div>

              <motion.button
                onClick={() => setShowVideoModal(true)}
                whileHover={{ scale: 1.15, boxShadow: '0 12px 24px rgba(107, 114, 128, 0.2)' }}
                whileTap={{ scale: 0.92 }}
                className="w-24 h-24 md:w-28 md:h-28 text-primary cursor-pointer transition-all relative"
                aria-label="Play video"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all" />
                <div className="relative z-10">
                  <VideoIcon />
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-xl text-foreground/70 mt-12 font-light"
          >
            Forever yours
          </motion.p>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideoModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-border/20"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowVideoModal(false)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/20"
                  aria-label="Close video"
                >
                  <span className="text-white text-2xl font-light">✕</span>
                </motion.button>

                {/* Video Container */}
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Valentine's Message"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <AnimatedBackground />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 max-w-xl border border-border/40 text-center"
        style={{
          boxShadow: '0 8px 32px rgba(107, 114, 128, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        }}
      >
        {/* Luxury Crown */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex justify-center text-primary"
        >
          <LuxuryCrown />
        </motion.div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">
          Hope Akintoye Bolanle
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/80 mb-2 font-light">
          Will you be my Valentine?
        </p>

        {/* Subtitle 2 */}
        <p className="text-base md:text-lg text-foreground/60 mb-8 font-light">
          A special moment for my Mumma and Lom Lom
        </p>

        {/* Playful hint for No attempts */}
        {noAttempts > 0 && noAttempts < 3 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-primary mb-6 font-semibold"
          >
            You're making this fun! 😉
          </motion.p>
        )}

        {noAttempts >= 3 && noAttempts < 6 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-primary mb-6 font-semibold"
          >
            Nice try, Mumma! You're stuck with me! 😉
          </motion.p>
        )}

        {noAttempts >= 6 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-primary mb-6 font-semibold"
          >
            The answer is written in the stars! 💫
          </motion.p>
        )}

        {/* Button Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          {/* Yes Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 12px 24px rgba(107, 114, 128, 0.2)' }}
            whileTap={{ scale: 0.96 }}
            onClick={handleYesClick}
            className="px-10 md:px-14 py-4 md:py-5 bg-primary text-primary-foreground font-semibold text-lg md:text-xl rounded-full shadow-lg hover:shadow-2xl transition-all border border-primary/20"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            >
              Yes, I do
            </motion.div>
          </motion.button>

          {/* No Button - Evasive */}
          <motion.button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className={`px-8 md:px-10 py-3 md:py-4 bg-muted text-foreground font-medium text-base md:text-lg rounded-full shadow-md hover:shadow-lg transition-all pointer-events-auto border border-border/40 ${getNoButtonScale()}`}
            style={{
              transitionDuration: '150ms',
            }}
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
