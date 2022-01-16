import animationData from "../assets/lottie/animationData.json";
import sad from "../assets/lottie/sad.json";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const defaultOptionsSad = {
  loop: true,
  autoplay: true,
  animationData: sad,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
