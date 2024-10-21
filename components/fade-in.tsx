"use client";

import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    />
  );
}

function Item({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  as = "div",
  ...props
}: { as?: string } & HTMLMotionProps<"div">) {
  return <motion.div variants={item} {...props} />;
}

const MotionLink = motion(Link);
function ItemLink(props: HTMLMotionProps<"a">) {
  return <MotionLink variants={item} {...props} />;
}

export { Container, Item, ItemLink };
