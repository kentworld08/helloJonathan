export const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 70,
  },
  exit: {
    opacity: 0,
    y: 70,
  },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 1 },
};

export const scale = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 1 },
};

export const left = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.5 },
  viewport: { once: false, amount: 1 },
};
export const right = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.5 },
  viewport: { once: false, amount: 1 },
};
