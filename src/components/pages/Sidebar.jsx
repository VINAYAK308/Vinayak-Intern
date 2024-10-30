// import React from 'react';

// const Sidebar = ({ activeComponent, setActiveComponent }) => {
//   const menuItems = [
//     { name: 'UserManagement', label: 'Manage Users' },
//     { name: 'CourseManagement', label: 'Manage Courses' },
//     { name: 'AdminManagement', label: 'Manage Admins' },
//     { name: 'Reporting', label: 'Reports' },
//     { name: 'Settings', label: 'Settings' }
//   ];

//   return (
//     <aside className="w-1/4 bg-gray-800 p-4">
//       <h2 className="text-white text-xl">Dashboard Menu</h2>
//       <ul className="mt-4">
//         {menuItems.map(item => (
//           <li
//             key={item.name}
//             onClick={() => setActiveComponent(item.name)}
//             className={`text-white py-2 hover:bg-gray-700 rounded cursor-pointer ${
//               activeComponent === item.name ? 'bg-gray-700' : ''
//             }`}
//           >
//             {item.label}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { motion } from 'framer-motion';

// const Sidebar = ({ activeComponent, setActiveComponent }) => {
//   const menuItems = [
//     { name: 'UserManagement', label: 'Manage Users' },
//     { name: 'CourseManagement', label: 'Manage Courses' },
//     { name: 'AdminManagement', label: 'Manage Admins' },
//     { name: 'Reporting', label: 'Reports' },
//     { name: 'Settings', label: 'Settings' }
//   ];

//   return (
//     <aside className="w-full md:w-1/4 bg-gray-800 p-6 shadow-md">
//       <h2 className="text-white text-2xl font-semibold">Dashboard Menu</h2>
//       <ul className="mt-4 space-y-2">
//         {menuItems.map(item => (
//           <motion.li
//             key={item.name}
//             onClick={() => setActiveComponent(item.name)}
//             className={`text-white py-3 px-4 rounded cursor-pointer transition duration-200 ease-in-out ${
//               activeComponent === item.name ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`}
//             role="button"
//             tabIndex={0}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 setActiveComponent(item.name);
//               }
//             }}
//             // Framer Motion Animation
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             {item.label}
//           </motion.li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCog, FaBook, FaUserShield, FaChartBar, FaCog } from 'react-icons/fa';

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const menuItems = [
    { name: 'UserManagement', label: 'Manage Users', icon: <FaUserCog /> },
    { name: 'CourseManagement', label: 'Manage Courses', icon: <FaBook /> },
    { name: 'AdminManagement', label: 'Manage Admins', icon: <FaUserShield /> },
    { name: 'Reporting', label: 'Reports', icon: <FaChartBar /> },
    { name: 'Settings', label: 'Settings', icon: <FaCog /> }
  ];

  return (
    <aside className="w-full md:w-1/4 bg-gray-800 p-6 shadow-md" aria-label="Sidebar Menu">
      <h2 className="text-white text-2xl font-semibold mb-6">Dashboard Menu</h2>
      <ul className="space-y-4">
        {menuItems.map(item => (
          <motion.li
            key={item.name}
            onClick={() => setActiveComponent(item.name)}
            className={`flex items-center gap-3 text-white py-3 px-4 rounded cursor-pointer transition duration-200 ease-in-out ${
              activeComponent === item.name ? 'bg-gray-700' : 'hover:bg-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            role="button"
            tabIndex={0}
            aria-label={item.label}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setActiveComponent(item.name);
              }
            }}
            // Framer Motion Animation
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-lg">{item.label}</span>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
