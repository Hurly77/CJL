import { useNProgress } from "@tanem/react-nprogress";

export const Container = ({ children, isFinished }) => {
  return (
    <div
      style={{ opacity: isFinished ? 0 : 1 }}
      className="flex justify-center mt-1 overflow-hidden max-w-screen"
    >
      {children}
    </div>
  );
};

export const Bar = ({ animationDuration, progress }) => {
  return (
    <div className="w-full rounded-full bg-base-200 max-w-7xl mt-0.5">
      <div
        className="transition-all progress bg-info max-w-7xl"
        max="100"
        time={animationDuration}
        style={{
          width: `${progress * 80}rem`,
          transition: `width ${animationDuration}ms`,
        }}
      />
    </div>
  );
};

export const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default Progress;
