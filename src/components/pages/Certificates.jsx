// import React from 'react';

// const Certificates = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Certificates</h2>
//       <p>Your certificates for completed courses will appear here for download.</p>
//     </div>
//   );
// };

// export default Certificates;
import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <h2 className="text-3xl">Certificates Page</h2>
    </motion.div>
  );
};

export default Certificates;