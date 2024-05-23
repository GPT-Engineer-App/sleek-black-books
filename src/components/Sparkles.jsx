import { Box, keyframes } from "@chakra-ui/react";

const sparkle = keyframes`
  0% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
  100% { opacity: 0; transform: scale(0.5) rotate(360deg); }
`;

const Sparkles = () => {
  return (
    <Box position="absolute" top="0" left="0" width="100%" height="100%" pointerEvents="none" overflow="hidden">
      {[...Array(20)].map((_, index) => (
        <Box
          key={index}
          position="absolute"
          width="10px"
          height="10px"
          bg="yellow.400"
          borderRadius="full"
          animation={`${sparkle} 2s infinite`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </Box>
  );
};

export default Sparkles;
