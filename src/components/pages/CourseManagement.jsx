// src/components/CourseManagement.jsx
// import React from 'react';

// const CourseManagement = () => {
//   return (
//     <div className="text-white">
//       <h2 className="text-2xl mb-4">Course Management</h2>
//       <p>Manage courses, create new courses, edit existing courses, and assign users to courses.</p>
//       {/* Add your course management functionalities here */}
//     </div>
//   );
// };

// export default CourseManagement;
// import React, { useState } from 'react';

// const ModuleManagement = ({ module, onDeleteModule, onAddContent }) => {
//   return (
//     <li className="border-l border-gray-700 pl-4 ml-2 mb-3">
//       <div className="flex justify-between items-center">
//         <h4 className="text-lg font-semibold">{module.name}</h4>
//         <button onClick={onDeleteModule} className="text-red-500 hover:text-red-600">
//           Delete Module
//         </button>
//       </div>
//       <div className="flex space-x-2 mb-2">
//         <button onClick={() => onAddContent('Video')} className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500">
//           Add Video
//         </button>
//         <button onClick={() => onAddContent('PDF')} className="bg-purple-400 px-2 py-1 rounded hover:bg-purple-500">
//           Add PDF
//         </button>
//         <button onClick={() => onAddContent('Text')} className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
//           Add Text
//         </button>
//       </div>
//       <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300">
//         {module.content.map(content => (
//           <li key={content.id}>
//             {content.type} Content: <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-blue-300">{content.name}</a>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };

// const CourseManagement = () => {
//   const [courses, setCourses] = useState([]);
//   const [newCourseName, setNewCourseName] = useState('');

//   const addCourse = () => {
//     if (newCourseName.trim()) {
//       const newCourse = {
//         id: Date.now(),
//         name: newCourseName,
//         modules: []
//       };
//       setCourses(prevCourses => [...prevCourses, newCourse]);
//       setNewCourseName('');
//     } else {
//       alert('Course name cannot be empty');
//     }
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
//   };

//   const addModule = (courseId) => {
//     const updatedCourses = courses.map(course => {
//       if (course.id === courseId) {
//         return {
//           ...course,
//           modules: [
//             ...course.modules,
//             { id: Date.now(), name: `Module ${course.modules.length + 1}`, content: [] }
//           ]
//         };
//       }
//       return course;
//     });
//     setCourses(updatedCourses);
//   };

//   const deleteModule = (courseId, moduleId) => {
//     const updatedCourses = courses.map(course => {
//       if (course.id === courseId) {
//         return {
//           ...course,
//           modules: course.modules.filter(module => module.id !== moduleId)
//         };
//       }
//       return course;
//     });
//     setCourses(updatedCourses);
//   };

//   const addContent = (courseId, moduleId, type) => {
//     const contentInput = document.createElement('input');
//     contentInput.type = 'file';
//     contentInput.accept = type === 'Video' ? 'video/*' : type === 'PDF' ? 'application/pdf' : 'text/plain';

//     contentInput.onchange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const url = URL.createObjectURL(file);
//         const content = {
//           id: Date.now(),
//           type,
//           name: file.name,
//           url
//         };

//         // Update the courses state dynamically
//         const updatedCourses = courses.map(course => {
//           if (course.id === courseId) {
//             return {
//               ...course,
//               modules: course.modules.map(module => {
//                 if (module.id === moduleId) {
//                   return {
//                     ...module,
//                     content: [...module.content, content]
//                   };
//                 }
//                 return module;
//               })
//             };
//           }
//           return course;
//         });
//         setCourses(updatedCourses);
//       }
//     };

//     contentInput.click();
//   };

//   return (
//     <div className="text-white p-6 bg-gray-900 rounded-lg">
//       <h2 className="text-2xl mb-4 font-semibold">Course Management</h2>
//       <p className="mb-6">Manage courses, create new courses, edit existing courses, and assign users to courses.</p>

//       {/* Add Course Form */}
//       <div className="mb-4 flex">
//         <input
//           type="text"
//           placeholder="New Course Name"
//           value={newCourseName}
//           onChange={(e) => setNewCourseName(e.target.value)}
//           className="text-gray-900 px-3 py-2 rounded mr-2 flex-grow"
//         />
//         <button onClick={addCourse} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           Add Course
//         </button>
//       </div>

//       {/* List Courses */}
//       <ul className="space-y-4">
//         {courses.map(course => (
//           <li key={course.id} className="border border-gray-700 rounded p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-bold">{course.name}</h3>
//               <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:text-red-600">Delete Course</button>
//             </div>
//             <button
//               onClick={() => addModule(course.id)}
//               className="bg-green-500 text-white px-3 py-1 rounded mb-3 hover:bg-green-600"
//             >
//               Add Module
//             </button>

//             {/* List Modules */}
//             <ul className="pl-4 space-y-2">
//               {course.modules.map(module => (
//                 <ModuleManagement
//                   key={module.id}
//                   module={module}
//                   onDeleteModule={() => deleteModule(course.id, module.id)}
//                   onAddContent={(type) => addContent(course.id, module.id, type)}
//                 />
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseManagement;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModuleManagement = ({ module, onDeleteModule, onAddContent }) => {
  return (
    <motion.li
      className="border-l border-gray-700 pl-4 ml-2 mb-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{module.name}</h4>
        <button onClick={onDeleteModule} className="text-red-500 hover:text-red-600">
          Delete Module
        </button>
      </div>
      <div className="flex space-x-2 mb-2">
        <button onClick={() => onAddContent('Video')} className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500">
          Add Video
        </button>
        <button onClick={() => onAddContent('PDF')} className="bg-purple-400 px-2 py-1 rounded hover:bg-purple-500">
          Add PDF
        </button>
        <button onClick={() => onAddContent('Text')} className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
          Add Text
        </button>
      </div>
      <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300">
        {module.content.map(content => (
          <motion.li
            key={content.id}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <span>
              {content.type} Content: 
              <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-1">
                {content.name}
              </a>
            </span>
            <div className="flex space-x-2">
              <a href={content.url} target="_blank" rel="noopener noreferrer" download className="text-green-400 hover:text-green-500">
                Download
              </a>
              <a href={content.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
                View
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.li>
  );
};

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState('');

  const addCourse = () => {
    if (newCourseName.trim()) {
      const newCourse = {
        id: Date.now(),
        name: newCourseName,
        modules: []
      };
      setCourses(prevCourses => [...prevCourses, newCourse]);
      setNewCourseName('');
    } else {
      alert('Course name cannot be empty');
    }
  };

  const deleteCourse = (courseId) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  const addModule = (courseId) => {
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          modules: [
            ...course.modules,
            { id: Date.now(), name: `Module ${course.modules.length + 1}`, content: [] }
          ]
        };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const deleteModule = (courseId, moduleId) => {
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          modules: course.modules.filter(module => module.id !== moduleId)
        };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const addContent = (courseId, moduleId, type) => {
    const contentInput = document.createElement('input');
    contentInput.type = 'file';
    contentInput.accept = type === 'Video' ? 'video/*' : type === 'PDF' ? 'application/pdf' : 'text/plain';

    contentInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        const content = {
          id: Date.now(),
          type,
          name: file.name,
          url
        };

        // Update the courses state dynamically
        const updatedCourses = courses.map(course => {
          if (course.id === courseId) {
            return {
              ...course,
              modules: course.modules.map(module => {
                if (module.id === moduleId) {
                  return {
                    ...module,
                    content: [...module.content, content]
                  };
                }
                return module;
              })
            };
          }
          return course;
        });
        setCourses(updatedCourses);
      }
    };

    contentInput.click();
  };

  return (
    <motion.div
      className="text-white p-6 bg-gray-900 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-2xl mb-4 font-semibold">Course Management</h2>
      <p className="mb-6">Manage courses, create new courses, edit existing courses, and assign users to courses.</p>

      {/* Add Course Form */}
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="New Course Name"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          className="text-gray-900 px-3 py-2 rounded mr-2 flex-grow"
        />
        <button onClick={addCourse} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Course
        </button>
      </div>

      {/* List Courses */}
      <motion.ul className="space-y-4">
        {courses.map(course => (
          <motion.li
            key={course.id}
            className="border border-gray-700 rounded p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{course.name}</h3>
              <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:text-red-600">Delete Course</button>
            </div>
            <button
              onClick={() => addModule(course.id)}
              className="bg-green-500 text-white px-3 py-1 rounded mb-3 hover:bg-green-600"
            >
              Add Module
            </button>

            {/* List Modules */}
            <motion.ul className="pl-4 space-y-2">
              {course.modules.map(module => (
                <ModuleManagement
                  key={module.id}
                  module={module}
                  onDeleteModule={() => deleteModule(course.id, module.id)}
                  onAddContent={(type) => addContent(course.id, module.id, type)}
                />
              ))}
            </motion.ul>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default CourseManagement;
