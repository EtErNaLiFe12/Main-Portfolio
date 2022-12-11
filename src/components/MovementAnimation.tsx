import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function MovementAnimation() {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <motion.div
          className="box"
          animate={{
            x: [0, 40, 80, 130, 80, 40, 0],
            y: [0, 150, 70, 200, 70, 150, 0],
            scale: [1, 2, 1, 1, 1],
            rotate: [0, 180, 180, 180, 90],
            borderRadius: ['10%', '50%', '70%', '50%', '10%'],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            times: [3, 2, 4, 2, 0.5, 0.5],
            repeat: Infinity,
            // repeatDelay: 1,
          }}
        />
      </Box>
      <Box sx={{ position: 'absolute', right: 20, top: 500 }}>
        <motion.div
          className="box"
          animate={{
            x: [0, -40, -80, -130, -80, -40, 0],
            y: [0, -100, -50, -200, -50, -100, 0],
            scale: [1, 1.2, 1, 1, 1],
            rotate: [0, 180, 180, 180, 90],
            borderRadius: ['10%', '50%', '70%', '50%', '10%'],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            times: [0, 1, 1, 1, 0.5, 0.5],
            repeat: Infinity,
            // repeatDelay: 1,
          }}
        />
      </Box>
      <Box sx={{ position: 'absolute', right: 400, top: 300 }}>
        <motion.div
          className="box"
          animate={{
            x: [0, -120, -40, -130, -200, 80, 0],
            y: [0, -40, -50, -120, -100, -50, 0],
            scale: [1, 1.2, 1, 1, 1],
            rotate: [0, 90, 180, 180, 90],
            borderRadius: ['10%', '10%', '70%', '10%', '50%'],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            times: [0, 1, 1, 1, 0.5, 0.5],
            repeat: Infinity,
            // repeatDelay: 1,
          }}
        />
      </Box>
      <Box sx={{ position: 'absolute', left: 350, bottom: 300 }}>
        <motion.div
          className="box"
          animate={{
            x: [0, 80, 130, 200, 70, 30, 0],
            y: [0, 50, 100, -60, 10, 50, 0],
            scale: [1, 1.2, 1, 1.2, 1],
            rotate: [0, 180, 90, 180, 90],
            borderRadius: ['10%', '30%', '70%', '50%', '10%'],
          }}
          transition={{
            duration: 5,
            ease: 'easeIn',
            times: [0, 1, 1, 1, 0.5, 0.5],
            repeat: Infinity,
            // repeatDelay: 1,
          }}
        />
      </Box>
    </>
  );
}
