"use client"

import { Variants, motion } from "framer-motion"

export const AnimatedGradient = () => (
  <div
    style={{ position: "absolute", width: "100%", zIndex: "-1", opacity: 0.7 }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        filter: "blur(60px)",
        willChange: "filter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Gradient />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(4, 11, 36, 0.2)",
        }}
      />
    </div>
  </div>
)

const Gradient = () => {
  const variants = ({ colors }: { colors: string[] }): Variants => {
    return {
      initial: {
        fill: colors[0],
        rotate: 0,
      },
      animate: {
        fill: [...colors, colors[0]],
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 10,
          repeatType: "loop",
          type: "tween",
          ease: "linear",
        },
      },
    }
  }
  return (
    <svg
      width={600}
      height={600}
      className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px]"
      viewBox="0 0 277 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.839 81.784c-8.883-18.713 9.108-41.86 27.531-54.493 17.532-12.022 42.965-6.231 65.186-9.086 15.439-1.983 29.93-4.083 45.494-5.132 20.389-1.375 42.2-10.496 60.067-1.985 18.082 8.614 23.032 28.53 30.393 45.076 7.931 17.826 24.116 37.754 14.027 54.764-10.445 17.608-41.866 14.228-61.284 24.905-15.551 8.551-22.701 26.612-40.451 31.034-18.482 4.603-41.374 3.71-55.983-7.013-14.556-10.684-3.35-34.123-16.42-46.13-18.1-16.628-58.568-10.889-68.56-31.94Z"
        initial="initial"
        animate="animate"
        variants={variants({ colors: ["#51FFFF", "#51FF96", "#5162FF"] })}
      />
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M269.421 57.21c13.934 16.828 6.125 44.926-4.795 66.325-9.774 19.15-36.462 25.709-50.82 42.647-14.402 16.99-10.896 47.173-32.157 55.243-21.332 8.098-35.97-18.757-57.458-21.226-22.627-2.6-50.544 18.011-68.653 6.734-17.528-10.915-13.87-37.061-13.213-57.713.577-18.119 9.09-35.264 16.732-52.84 7.892-18.152 9.752-42.233 28.688-51.619 19.579-9.704 39.098 7.727 60.124 7.601 17.231-.103 33.876-8.946 50.981-8.264 24.944.995 56.248-4.185 70.571 13.113Z"
        initial="initial"
        animate="animate"
        variants={variants({ colors: ["#9C8CFF", "#FFC400", "#FF4338"] })}
      />
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150.164 11.272c7.576-8.4 20.55-10.106 32.694-10.403 11.135-.272 21.898 5.177 33.048 8.795 12.362 4.011 28.736 2.406 35.953 13.595 7.464 11.57-6.213 23.879-3.476 36.754 2.954 13.89 26.971 28.112 19.493 38.58-8.148 11.404-31.034-7.9-44.684-3.32-10.663 3.578-9.323 21.739-20.105 25.058-11.49 3.536-28.92 3.276-37.284-7.393-9.25-11.799 4.256-26.835-.322-40.575-3.674-11.027-19.548-16.302-22.343-27.452-3.043-12.136-.503-25.29 7.026-33.64Z"
        initial="initial"
        animate="animate"
        variants={variants({ colors: ["#0061FD", "#7E51FF", "#5D5FEF"] })}
      />
    </svg>
  )
}
