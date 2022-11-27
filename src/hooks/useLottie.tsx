import defaultLoading from 'assets/lottie/loading.json';
import cycleRider from 'assets/lottie/cycle-rider.json';
import scrollToTop from 'assets/lottie/top.json';

export default function useLottie() {
  const handleLottieFile = (type: string) => {
    switch (type) {
      case 'default':
        return defaultLoading;
      case 'cycleRider':
        return cycleRider;
      case 'scrollTop':
        return scrollToTop;
      default:
        return defaultLoading;
    }
  };

  const configLottieFile = (type: string) => {
    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: handleLottieFile(type),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return lottieOptions;
  };

  return { configLottieFile };
}
