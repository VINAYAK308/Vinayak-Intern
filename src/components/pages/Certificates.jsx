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
// import React from 'react';
// import { motion } from 'framer-motion';

// const Certificates = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-black text-white flex items-center justify-center"
//     >
//       <h2 className="text-3xl">Certificates Page</h2>
//     </motion.div>
//   );
// };

// export default Certificates;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaDownload } from 'react-icons/fa'; // Example icon library

// const certificates = [
  // {
  //   id: 1,
  //   course: 'Cybersecurity Essentials',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-06-15',
  //   progress: 100,
  //   downloadLink: '/certificates/cybersecurity-essentials.pdf',
  //   previewImage: '/certificates/cybersecurity-essentials-preview.png',
  // },
  // {
  //   id: 2,
  //   course: 'Ethical Hacking',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-05-20',
  //   progress: 80,
  //   downloadLink: '/certificates/ethical-hacking.pdf',
  //   previewImage: '/certificates/ethical-hacking-preview.png',
  // },
  // {
  //   id: 3,
  //   course: 'Network Security',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-04-30',
  //   progress: 90,
  //   downloadLink: '/certificates/network-security.pdf',
  //   previewImage: '/certificates/network-security-preview.png',
  // },
  // {
  //   id: 4,
  //   course: 'Cybersecurity Risk Management',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-07-05',
  //   progress: 100,
  //   downloadLink: '/certificates/cybersecurity-risk-management.pdf',
  //   previewImage: '/certificates/cybersecurity-risk-management-preview.png',
  // },
  // {
  //   id: 5,
  //   course: 'Penetration Testing',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-08-12',
  //   progress: 70,
  //   downloadLink: '/certificates/penetration-testing.pdf',
  //   previewImage: '/certificates/penetration-testing-preview.png',
  // },
  // {
  //   id: 6,
  //   course: 'Incident Response & Forensics',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-09-10',
  //   progress: 85,
  //   downloadLink: '/certificates/incident-response-forensics.pdf',
  //   previewImage: '/certificates/incident-response-forensics-preview.png',
  // },
  // {
  //   id: 7,
  //   course: 'Cloud Security Fundamentals',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-10-01',
  //   progress: 90,
  //   downloadLink: '/certificates/cloud-security-fundamentals.pdf',
  //   previewImage: '/certificates/cloud-security-fundamentals-preview.png',
  // },
  // {
  //   id: 8,
  //   course: 'Advanced Threat Detection',
  //   issuer: 'HackerCentral',
  //   issueDate: '2024-10-20',
  //   progress: 95,
  //   downloadLink: '/certificates/advanced-threat-detection.pdf',
  //   previewImage: '/certificates/advanced-threat-detection-preview.png',
  // },
//   // Add more certificates as needed
// ];

// const Certificates = () => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col items-center"
//     >
//       <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">Certificates</h2>

//       {/* Certificates List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {certificates.map((certificate) => (
//           <motion.div
//             key={certificate.id}
//             className="bg-opacity-20 backdrop-blur-lg shadow-lg hover:shadow-2xl border border-gray-600 rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:border-blue-500 hover:bg-opacity-30 cursor-pointer"
//             onClick={() => setSelectedCertificate(certificate)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-white">{certificate.course}</h3>
//             <p className="text-gray-400">Issued by: {certificate.issuer}</p>
//             <p className="text-gray-400 mb-4">Date: {certificate.issueDate}</p>
//             {certificate.progress < 100 && (
//               <div className="mt-2">
//                 <p className="text-gray-400 mb-1">Progress: {certificate.progress}%</p>
//                 <div className="w-full bg-gray-600 h-1.5 rounded">
//                   <motion.div
//                     className={`h-full rounded ${certificate.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'}`}
//                     style={{ width: `${certificate.progress}%` }}
//                     initial={{ width: 0 }}
//                     animate={{ width: `${certificate.progress}%` }}
//                     transition={{ duration: 1 }}
//                   ></motion.div>
//                 </div>
//               </div>
//             )}
//             <a
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent card click event
//                 setSelectedCertificate(certificate);
//               }}
//               className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-32 self-end shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
//             >
//               <FaDownload className="mr-2" />
//               Preview & Download
//             </a>
//           </motion.div>
//         ))}
//       </div>

//       {/* Certificate Preview Modal */}
//       <AnimatePresence>
//         {selectedCertificate && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.8, rotateY: -180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, rotateY: 180 }}
//               transition={{ duration: 0.6 }}
//               className="bg-opacity-30 backdrop-blur-lg rounded-lg p-6 max-w-md w-full text-center shadow-2xl border border-gray-600"
//             >
//               <h3 className="text-3xl font-semibold mb-4 text-blue-400">
//                 {selectedCertificate.course}
//               </h3>
//               <p className="text-gray-400 mb-4">Issued by: {selectedCertificate.issuer}</p>
//               <p className="text-gray-400 mb-4">Date: {selectedCertificate.issueDate}</p>
//               {/* <img 
//                 src={selectedCertificate.previewImage} 
//                 alt={`${selectedCertificate.course} Preview`} 
//                 className="w-full h-auto mb-4 rounded-lg"
//               /> */}
//               <a
//                 href={selectedCertificate.downloadLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className= "text-white px-4 py-2 rounded-lg mb-4 inline-block shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Download Certificate
//               </a>
//               <button
//                 onClick={() => setSelectedCertificate(null)}
//                 className="text-gray-400 hover:text-white mt-2"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Certificates;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaDownload } from 'react-icons/fa';

// const certificates = [
//   {
//     id: 1,
//     course: 'Cybersecurity Essentials',
//     issuer: 'HackerCentral',
//     issueDate: '2024-06-15',
//     progress: 100,
//     downloadLink: '/certificates/cybersecurity-essentials.pdf',
//     previewImage: '/certificates/cybersecurity-essentials-preview.png',
//   },
//   {
//     id: 2,
//     course: 'Ethical Hacking',
//     issuer: 'HackerCentral',
//     issueDate: '2024-05-20',
//     progress: 80,
//     downloadLink: '/certificates/ethical-hacking.pdf',
//     previewImage: '/certificates/ethical-hacking-preview.png',
//   },
//   {
//     id: 3,
//     course: 'Network Security',
//     issuer: 'HackerCentral',
//     issueDate: '2024-04-30',
//     progress: 90,
//     downloadLink: '/certificates/network-security.pdf',
//     previewImage: '/certificates/network-security-preview.png',
//   },
//   {
//     id: 4,
//     course: 'Cybersecurity Risk Management',
//     issuer: 'HackerCentral',
//     issueDate: '2024-07-05',
//     progress: 100,
//     downloadLink: '/certificates/cybersecurity-risk-management.pdf',
//     previewImage: '/certificates/cybersecurity-risk-management-preview.png',
//   },
//   {
//     id: 5,
//     course: 'Penetration Testing',
//     issuer: 'HackerCentral',
//     issueDate: '2024-08-12',
//     progress: 70,
//     downloadLink: '/certificates/penetration-testing.pdf',
//     previewImage: '/certificates/penetration-testing-preview.png',
//   },
//   {
//     id: 6,
//     course: 'Incident Response & Forensics',
//     issuer: 'HackerCentral',
//     issueDate: '2024-09-10',
//     progress: 85,
//     downloadLink: '/certificates/incident-response-forensics.pdf',
//     previewImage: '/certificates/incident-response-forensics-preview.png',
//   },
//   {
//     id: 7,
//     course: 'Cloud Security Fundamentals',
//     issuer: 'HackerCentral',
//     issueDate: '2024-10-01',
//     progress: 90,
//     downloadLink: '/certificates/cloud-security-fundamentals.pdf',
//     previewImage: '/certificates/cloud-security-fundamentals-preview.png',
//   },
//   {
//     id: 8,
//     course: 'Advanced Threat Detection',
//     issuer: 'HackerCentral',
//     issueDate: '2024-10-20',
//     progress: 95,
//     downloadLink: '/certificates/advanced-threat-detection.pdf',
//     previewImage: '/certificates/advanced-threat-detection-preview.png',
//   },
//   {
//     id: 9,
//     course: 'Identity and Access Management',
//     issuer: 'CyberDefenders',
//     issueDate: '2024-08-25',
//     progress: 100,
//     downloadLink: '/certificates/identity-access-management.pdf',
//     previewImage: '/certificates/identity-access-management-preview.png',
//   },
//   {
//     id: 10,
//     course: 'Application Security',
//     issuer: 'CyberGuard',
//     issueDate: '2024-07-10',
//     progress: 95,
//     downloadLink: '/certificates/application-security.pdf',
//     previewImage: '/certificates/application-security-preview.png',
//   },
//   {
//     id: 11,
//     course: 'Cyber Law and Ethics',
//     issuer: 'SecureWorld',
//     issueDate: '2024-06-28',
//     progress: 60,
//     downloadLink: '/certificates/cyber-law-ethics.pdf',
//     previewImage: '/certificates/cyber-law-ethics-preview.png',
//   },
//   {
//     id: 12,
//     course: 'Blockchain Security',
//     issuer: 'CryptoShield',
//     issueDate: '2024-09-15',
//     progress: 85,
//     downloadLink: '/certificates/blockchain-security.pdf',
//     previewImage: '/certificates/blockchain-security-preview.png',
//   },
//   {
//     id: 13,
//     course: 'IoT Security',
//     issuer: 'TechSafe',
//     issueDate: '2024-03-18',
//     progress: 78,
//     downloadLink: '/certificates/iot-security.pdf',
//     previewImage: '/certificates/iot-security-preview.png',
//   },
//   {
//     id: 14,
//     course: 'Mobile Security Essentials',
//     issuer: 'HackerCentral',
//     issueDate: '2024-09-25',
//     progress: 82,
//     downloadLink: '/certificates/mobile-security-essentials.pdf',
//     previewImage: '/certificates/mobile-security-essentials-preview.png',
//   },
//   {
//     id: 15,
//     course: 'Security Operations Center (SOC) Analyst',
//     issuer: 'CyberWatch',
//     issueDate: '2024-08-01',
//     progress: 100,
//     downloadLink: '/certificates/soc-analyst.pdf',
//     previewImage: '/certificates/soc-analyst-preview.png',
//   },
// ];

// const Certificates = () => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col items-center"
//     >
//       <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">Certificates</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {certificates.map((certificate) => (
//           <motion.div
//             key={certificate.id}
//             className="bg-opacity-20 backdrop-blur-lg shadow-lg hover:shadow-2xl border border-gray-600 rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:border-blue-500 hover:bg-opacity-30 cursor-pointer"
//             onClick={() => setSelectedCertificate(certificate)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <h3 className="text-xl font-semibold mb-2 text-white">{certificate.course}</h3>
//             <p className="text-gray-400">Issued by: {certificate.issuer}</p>
//             <p className="text-gray-400 mb-4">Date: {certificate.issueDate}</p>
//             {certificate.progress < 100 ? (
//               <p className="text-yellow-500 mb-4">Completion Progress: {certificate.progress}% - Certificate not available</p>
//             ) : (
//               <a
//                 href={certificate.downloadLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-32 self-end shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
//               >
//                 <FaDownload className="mr-2" />
//                 Download
//               </a>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selectedCertificate && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.8, rotateY: -180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, rotateY: 180 }}
//               transition={{ duration: 0.6 }}
//               className="bg-opacity-30 backdrop-blur-lg rounded-lg p-6 max-w-md w-full text-center shadow-2xl border border-gray-600"
//             >
//               <h3 className="text-3xl font-semibold mb-4 text-blue-400">
//                 {selectedCertificate.course}
//               </h3>
//               <p className="text-gray-400 mb-4">Issued by: {selectedCertificate.issuer}</p>
//               <p className="text-gray-400 mb-4">Date: {selectedCertificate.issueDate}</p>
//               {selectedCertificate.progress < 100 ? (
//                 <p className="text-yellow-500">Certificate not available. Complete the course to download.</p>
//               ) : (
//                 <a
//                   href={selectedCertificate.downloadLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white px-4 py-2 rounded-lg mb-4 inline-block shadow-lg transition-transform transform hover:scale-105"
//                 >
//                   Download Certificate
//                 </a>
//               )}
//               <button
//                 onClick={() => setSelectedCertificate(null)}
//                 className="text-gray-400 hover:text-white mt-2"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Certificates;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    course: 'Cybersecurity Essentials',
    issuer: 'HackerCentral',
    issueDate: '2024-06-15',
    progress: 100,
    downloadLink: '/certificates/cybersecurity-essentials.pdf',
    previewImage: '/certificates/cybersecurity-essentials-preview.png',
  },
  {
    id: 2,
    course: 'Ethical Hacking',
    issuer: 'HackerCentral',
    issueDate: '2024-05-20',
    progress: 80,
    downloadLink: '/certificates/ethical-hacking.pdf',
    previewImage: '/certificates/ethical-hacking-preview.png',
  },
  {
    id: 3,
    course: 'Network Security',
    issuer: 'HackerCentral',
    issueDate: '2024-04-30',
    progress: 90,
    downloadLink: '/certificates/network-security.pdf',
    previewImage: '/certificates/network-security-preview.png',
  },
  {
    id: 4,
    course: 'Cybersecurity Risk Management',
    issuer: 'HackerCentral',
    issueDate: '2024-07-05',
    progress: 100,
    downloadLink: '/certificates/cybersecurity-risk-management.pdf',
    previewImage: '/certificates/cybersecurity-risk-management-preview.png',
  },
  {
    id: 5,
    course: 'Penetration Testing',
    issuer: 'HackerCentral',
    issueDate: '2024-08-12',
    progress: 70,
    downloadLink: '/certificates/penetration-testing.pdf',
    previewImage: '/certificates/penetration-testing-preview.png',
  },
  {
    id: 6,
    course: 'Incident Response & Forensics',
    issuer: 'HackerCentral',
    issueDate: '2024-09-10',
    progress: 85,
    downloadLink: '/certificates/incident-response-forensics.pdf',
    previewImage: '/certificates/incident-response-forensics-preview.png',
  },
  {
    id: 7,
    course: 'Cloud Security Fundamentals',
    issuer: 'HackerCentral',
    issueDate: '2024-10-01',
    progress: 90,
    downloadLink: '/certificates/cloud-security-fundamentals.pdf',
    previewImage: '/certificates/cloud-security-fundamentals-preview.png',
  },
  {
    id: 8,
    course: 'Advanced Threat Detection',
    issuer: 'HackerCentral',
    issueDate: '2024-10-20',
    progress: 95,
    downloadLink: '/certificates/advanced-threat-detection.pdf',
    previewImage: '/certificates/advanced-threat-detection-preview.png',
  },
  
  // ... your certificates data as provided
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCompleted, setSortCompleted] = useState(null);

  const filteredCertificates = certificates
    .filter((certificate) =>
      certificate.course.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortCompleted === null) return 0;
      if (sortCompleted) return b.progress - a.progress;
      return a.progress - b.progress;
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">Certificates</h2>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search certificates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Sorting Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortCompleted(true)}
          className={`px-4 py-2 rounded-lg ${sortCompleted === true ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
        >
          Completed
        </button>
        <button
          onClick={() => setSortCompleted(false)}
          className={`px-4 py-2 rounded-lg ${sortCompleted === false ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
        >
          Incomplete
        </button>
        <button
          onClick={() => setSortCompleted(null)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredCertificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-opacity-20 backdrop-blur-lg shadow-lg hover:shadow-2xl border border-gray-600 rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:border-blue-500 hover:bg-opacity-30 cursor-pointer"
            onClick={() => setSelectedCertificate(certificate)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{certificate.course}</h3>
            <p className="text-gray-400">Issued by: {certificate.issuer}</p>
            <p className="text-gray-400 mb-4">Date: {certificate.issueDate}</p>
            {certificate.progress < 100 ? (
              <p className="text-yellow-500 mb-4">Completion Progress: {certificate.progress}% - Certificate not available</p>
            ) : (
              <a
                href={certificate.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-32 self-end shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
              >
                <FaDownload className="mr-2" />
                Download
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="bg-opacity-30 backdrop-blur-lg rounded-lg p-6 max-w-md w-full text-center shadow-2xl border border-gray-600"
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-400">
                {selectedCertificate.course}
              </h3>
              <p className="text-gray-400 mb-4">Issued by: {selectedCertificate.issuer}</p>
              <p className="text-gray-400 mb-4">Date: {selectedCertificate.issueDate}</p>
              {selectedCertificate.progress < 100 ? (
                <p className="text-yellow-500">Certificate not available. Complete the course to download.</p>
              ) : (
                <a
                  href={selectedCertificate.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 rounded-lg mb-4 inline-block shadow-lg transition-transform transform hover:scale-105"
                >
                  Download Certificate
                </a>
              )}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white mt-2"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certificates;
