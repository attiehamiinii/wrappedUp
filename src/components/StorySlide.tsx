import { motion } from "framer-motion";
import { Slide } from "../data/wrappedData";
import { useCountUp } from "../hooks/useCountUp";

interface StorySlideProps {
  slide: Slide;
  index: number;
  onViewDetails?: () => void;
  showCTA?: boolean;
  onCTAClick?: () => void;
}

const themeGradients = {
  a: "from-purple-600 via-pink-600 to-red-600",
  b: "from-blue-600 via-cyan-600 to-teal-600",
  c: "from-green-600 via-emerald-600 to-lime-600",
  d: "from-orange-600 via-amber-600 to-yellow-600",
};

const themeGlows = {
  a: "bg-purple-500/30",
  b: "bg-blue-500/30",
  c: "bg-green-500/30",
  d: "bg-orange-500/30",
};

export default function StorySlide({
  slide,
  showCTA,
  onCTAClick,
}: StorySlideProps) {
  const isNumeric = typeof slide.statValue === "number";
  const countUpValue = useCountUp({
    end: isNumeric ? (slide.statValue as number) : 0,
    enabled: isNumeric,
  });

  const displayValue = isNumeric ? countUpValue : slide.statValue;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${
          themeGradients[slide.theme]
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated glow shapes */}
      <motion.div
        className={`absolute top-20 right-20 w-96 h-96 rounded-full ${
          themeGlows[slide.theme]
        } blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-20 left-20 w-80 h-80 rounded-full ${
          themeGlows[slide.theme]
        } blur-3xl`}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {slide.subtitle}
        </motion.p>

        {slide.statLabel && slide.statValue !== undefined && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
              <div className="text-white/80 text-lg mb-2">
                {slide.statLabel}
              </div>
              <div className="text-5xl md:text-7xl font-bold text-white">
                {typeof displayValue === "number"
                  ? displayValue.toLocaleString()
                  : displayValue}
              </div>
            </div>
          </motion.div>
        )}

        {/* Illustration area - specific animated SVGs per slide */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative w-64 h-64">
            {slide.id === "intro" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Intro - Flowing data streams */}
                <defs>
                  <linearGradient id="introGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
                <motion.g>
                  {[0, 1, 2].map((i) => (
                    <motion.path
                      key={i}
                      d={`M${20 + i * 20} 180 Q${40 + i * 20} ${160 - i * 10} ${60 + i * 20} 140 Q${80 + i * 20} ${120 - i * 10} ${100 + i * 20} 100 Q${120 + i * 20} ${80 - i * 10} ${140 + i * 20} 60 Q${160 + i * 20} ${40 - i * 10} ${180 + i * 20} 20`}
                      stroke="url(#introGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeOpacity="0.6"
                      animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.8,
                      }}
                    />
                  ))}
                </motion.g>
                <motion.circle
                  cx="100"
                  cy="100"
                  r="30"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="white"
                  fillOpacity="0.3"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "pride-individual" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pride Individual - Achievement mountain peak */}
                <defs>
                  <radialGradient id="mountainGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.3"/>
                  </radialGradient>
                </defs>
                <motion.path
                  d="M30 180 L60 140 L90 160 L120 120 L150 140 L170 100 L180 120 L180 180 Z"
                  fill="url(#mountainGradient)"
                  animate={{
                    d: [
                      "M30 180 L60 140 L90 160 L120 120 L150 140 L170 100 L180 120 L180 180 Z",
                      "M30 180 L60 150 L90 170 L120 130 L150 150 L170 110 L180 130 L180 180 Z",
                      "M30 180 L60 140 L90 160 L120 120 L150 140 L170 100 L180 120 L180 180 Z",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M170 100 L175 95 L180 100 L175 105 Z"
                  fill="white"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 45, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Climbing path */}
                <motion.path
                  d="M30 180 Q60 160 90 170 Q120 150 150 160 Q170 140 180 120"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeOpacity="0.7"
                  strokeDasharray="10 5"
                  animate={{
                    strokeDashoffset: [0, -15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.circle
                  cx="30"
                  cy="180"
                  r="4"
                  fill="white"
                  animate={{
                    cx: [30, 60, 90, 120, 150, 170, 180],
                    cy: [180, 160, 170, 150, 160, 140, 120],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "pride-team" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pride Team - Connected network */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Nodes */}
                <motion.g>
                  {[
                    { cx: 60, cy: 80 },
                    { cx: 140, cy: 80 },
                    { cx: 100, cy: 120 },
                    { cx: 80, cy: 160 },
                    { cx: 120, cy: 160 },
                  ].map((node, i) => (
                    <motion.circle
                      key={i}
                      cx={node.cx}
                      cy={node.cy}
                      r="8"
                      fill="white"
                      filter="url(#glow)"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </motion.g>
                {/* Connections */}
                <motion.g>
                  {[
                    { x1: 60, y1: 80, x2: 140, y2: 80 },
                    { x1: 60, y1: 80, x2: 100, y2: 120 },
                    { x1: 140, y1: 80, x2: 100, y2: 120 },
                    { x1: 100, y1: 120, x2: 80, y2: 160 },
                    { x1: 100, y1: 120, x2: 120, y2: 160 },
                  ].map((line, i) => (
                    <motion.line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="white"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      animate={{
                        strokeOpacity: [0.3, 0.8, 0.3],
                        strokeWidth: [2, 4, 2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.g>
                {/* Energy pulses */}
                <motion.g>
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx="100"
                      cy="100"
                      r="20"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      animate={{
                        r: [20, 60, 20],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 1.5,
                      }}
                    />
                  ))}
                </motion.g>
              </motion.svg>
            )}

            {slide.id === "pride-company" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pride Company - Building/tower growing */}
                <motion.rect
                  x="85"
                  y="140"
                  width="30"
                  height="20"
                  fill="white"
                  fillOpacity="0.3"
                  animate={{
                    height: [20, 40, 20],
                    y: [140, 120, 140],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.rect
                  x="80"
                  y="110"
                  width="40"
                  height="30"
                  fill="white"
                  fillOpacity="0.4"
                  animate={{
                    height: [30, 50, 30],
                    y: [110, 90, 110],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.rect
                  x="75"
                  y="80"
                  width="50"
                  height="30"
                  fill="white"
                  fillOpacity="0.5"
                  animate={{
                    height: [30, 50, 30],
                    y: [80, 60, 80],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.circle
                  cx="100"
                  cy="50"
                  r="15"
                  fill="white"
                  fillOpacity="0.7"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "disappointments-individual" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Disappointments Individual - Single path with obstacles */}
                <motion.path
                  d="M40 160 Q60 140 80 160 Q100 140 120 160 Q140 140 160 160"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeOpacity="0.5"
                  animate={{
                    d: [
                      "M40 160 Q60 140 80 160 Q100 140 120 160 Q140 140 160 160",
                      "M40 160 Q60 180 80 160 Q100 180 120 160 Q140 180 160 160",
                      "M40 160 Q60 140 80 160 Q100 140 120 160 Q140 140 160 160",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="white"
                  fillOpacity="0.6"
                  animate={{
                    cx: [60, 140, 60],
                    cy: [100, 120, 100],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "disappointments-team" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Disappointments Team - Intersecting paths */}
                <motion.path
                  d="M50 50 L150 150"
                  stroke="white"
                  strokeWidth="3"
                  strokeOpacity="0.4"
                  animate={{
                    strokeOpacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M50 150 L150 50"
                  stroke="white"
                  strokeWidth="3"
                  strokeOpacity="0.4"
                  animate={{
                    strokeOpacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="6"
                  fill="white"
                  fillOpacity="0.5"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="130"
                  cy="130"
                  r="6"
                  fill="white"
                  fillOpacity="0.5"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "disappointments-company" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Disappointments Company - Complex maze/network */}
                <motion.g>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                      key={i}
                      cx={60 + i * 20}
                      cy={80 + (i % 2) * 40}
                      r="4"
                      fill="white"
                      fillOpacity="0.4"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.g>
                <motion.path
                  d="M60 80 L80 80 L80 120 L100 120 L100 80 L120 80 L120 120 L140 120"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.3"
                  animate={{
                    strokeOpacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "excitement-individual" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Excitement Individual - Rocket launch */}
                <motion.path
                  d="M100 160 L95 140 L105 140 Z"
                  fill="white"
                  fillOpacity="0.7"
                  animate={{
                    y: [0, -40, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.rect
                  x="95"
                  y="120"
                  width="10"
                  height="40"
                  fill="white"
                  fillOpacity="0.6"
                  animate={{
                    y: [0, -40, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M90 160 L100 170 L110 160"
                  fill="white"
                  fillOpacity="0.5"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "excitement-team" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Excitement Team - Multiple arrows */}
                <motion.g>
                  <motion.path
                    d="M60 140 L60 100 L50 110 M60 100 L70 110"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeOpacity="0.7"
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M100 140 L100 100 L90 110 M100 100 L110 110"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeOpacity="0.7"
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  <motion.path
                    d="M140 140 L140 100 L130 110 M140 100 L150 110"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeOpacity="0.7"
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </motion.g>
              </motion.svg>
            )}

            {slide.id === "excitement-company" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Excitement Company - Expanding universe */}
                <defs>
                  <radialGradient id="universeGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
                  </radialGradient>
                </defs>
                {/* Central expansion */}
                <motion.g>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.circle
                      key={i}
                      cx="100"
                      cy="100"
                      r="20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeOpacity={0.6 - i * 0.1}
                      animate={{
                        r: [20 + i * 15, 80 + i * 15, 20 + i * 15],
                        strokeOpacity: [0.6 - i * 0.1, 0.2, 0.6 - i * 0.1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.g>
                {/* Orbiting elements */}
                <motion.g>
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    const radius = 40;
                    return (
                      <motion.circle
                        key={i}
                        cx={100 + Math.cos(angle) * radius}
                        cy={100 + Math.sin(angle) * radius}
                        r="4"
                        fill="white"
                        fillOpacity="0.7"
                        animate={{
                          cx: [100 + Math.cos(angle) * radius, 100 + Math.cos(angle + Math.PI * 2) * radius],
                          cy: [100 + Math.sin(angle) * radius, 100 + Math.sin(angle + Math.PI * 2) * radius],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.1,
                        }}
                      />
                    );
                  })}
                </motion.g>
                {/* Shooting stars */}
                <motion.g>
                  {[0, 1, 2].map((i) => (
                    <motion.path
                      key={i}
                      d={`M${30 + i * 40} ${40 + i * 30} L${50 + i * 40} ${30 + i * 30} L${70 + i * 40} ${50 + i * 30}`}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      strokeOpacity="0.6"
                      animate={{
                        strokeOpacity: [0, 0.8, 0],
                        pathLength: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.2,
                      }}
                    />
                  ))}
                </motion.g>
                {/* Core energy */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="white"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}

            {slide.id === "bonus" && (
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bonus - Magical celebration */}
                <defs>
                  <radialGradient id="magicGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
                  </radialGradient>
                </defs>
                {/* Central burst */}
                <motion.g
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const length = 50;
                    return (
                      <motion.line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={100 + Math.cos(angle) * length}
                        y2={100 + Math.sin(angle) * length}
                        stroke="white"
                        strokeWidth="2"
                        strokeOpacity="0.6"
                        animate={{
                          strokeOpacity: [0.3, 0.8, 0.3],
                          x2: [100 + Math.cos(angle) * length, 100 + Math.cos(angle) * (length + 20), 100 + Math.cos(angle) * length],
                          y2: [100 + Math.sin(angle) * length, 100 + Math.sin(angle) * (length + 20), 100 + Math.sin(angle) * length],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.1,
                        }}
                      />
                    );
                  })}
                </motion.g>
                {/* Floating particles */}
                <motion.g>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                    const angle = (i * 36) * Math.PI / 180;
                    const radius = 70;
                    return (
                      <motion.circle
                        key={i}
                        cx={100 + Math.cos(angle) * radius}
                        cy={100 + Math.sin(angle) * radius}
                        r="3"
                        fill="white"
                        fillOpacity="0.7"
                        animate={{
                          cx: [100 + Math.cos(angle) * radius, 100 + Math.cos(angle + Math.PI) * radius],
                          cy: [100 + Math.sin(angle) * radius, 100 + Math.sin(angle + Math.PI) * radius],
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                      />
                    );
                  })}
                </motion.g>
                {/* Sparkle effects */}
                <motion.g>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.g
                      key={i}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.3,
                      }}
                    >
                      <motion.circle
                        cx={60 + i * 20}
                        cy={60 + (i % 2) * 80}
                        r="2"
                        fill="white"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.g>
                  ))}
                </motion.g>
                {/* Core magic */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="12"
                  fill="url(#magicGradient)"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            )}
          </div>
        </motion.div>

        {slide.details && slide.details.length > 0 && (
          <motion.div
            className="mt-6 px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
          >
            
            <div className="space-y-3">
              {slide.details.map((detail, index) => (
                <motion.p
                  key={index}
                  className="text-white/90 text-lg leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.3 }}
                >
                  {detail}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

        {showCTA && onCTAClick && (
          <motion.button
            onClick={onCTAClick}
            className="mt-8 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Submit your Wrapped answers
          </motion.button>
        )}
      </div>

      {/* Spiral line at the top */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.svg
          className="w-96 h-48"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M400 200 Q420 180 440 200 Q460 220 440 240 Q420 260 400 240 Q380 220 400 200 Q420 180 440 200 Q480 160 520 200 Q560 240 520 280 Q480 320 440 280 Q400 240 440 200 Q480 160 520 200 Q580 140 620 200 Q660 260 620 320 Q580 380 520 320 Q460 260 520 200 Q580 140 620 200 Q700 120 740 200 Q780 280 740 360 Q700 440 620 360 Q540 280 620 200 Q700 120 740 200 Q820 120 860 200"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.3, 0.6, 1, 0.8, 0.4, 0],
              opacity: [0, 0.4, 0.6, 0.8, 0.4, 0.2, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 8,
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Spiral line on the left middle */}
      <motion.div
        className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.svg
          className="w-48 h-96"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M200 400 Q220 380 240 400 Q260 420 240 440 Q220 460 200 440 Q180 420 200 400 Q220 380 240 400 Q280 360 320 400 Q360 440 320 480 Q280 520 240 480 Q200 440 240 400 Q280 360 320 400 Q380 340 420 400 Q460 460 420 520 Q380 580 320 520 Q260 460 320 400 Q380 340 420 400 Q500 320 540 400 Q580 480 540 560 Q500 640 420 560 Q340 480 420 400 Q500 320 540 400 Q620 320 660 400"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.3, 0.6, 1, 0.8, 0.4, 0],
              opacity: [0, 0.35, 0.55, 0.75, 0.35, 0.15, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 10,
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
