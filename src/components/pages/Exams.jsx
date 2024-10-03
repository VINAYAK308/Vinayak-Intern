// import React from 'react';

// const Exams = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Exams</h2>
//       <p>Your upcoming exams and their schedules will be listed here.</p>
//     </div>
//   );
// };

// export default Exams;


import React from 'react';
import { motion } from 'framer-motion';

const Exams = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <h2 className="text-3xl">Exams Page</h2>
    </motion.div>
  );
};

export default Exams;