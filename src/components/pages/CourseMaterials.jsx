// import React from 'react';

// const CourseMaterials = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Course Materials</h2>
//       <p>Here, students can access PDFs, Videos, and other materials related to their courses.</p>
//     </div>
//   );
// };

// export default CourseMaterials;
import React from 'react';
import { motion } from 'framer-motion';

const CourseMaterials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <h2 className="text-3xl">Course Materials Page</h2>
    </motion.div>
  );
};

export default CourseMaterials;