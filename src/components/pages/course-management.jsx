import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
  const [courseName, setCourseName] = useState('');
  const [modules, setModules] = useState([
    {
      name: '',
      chapters: [
        {
          name: '',
          pdf: null,
          video: null,
          pdfUploaded: false,
          videoUploaded: false,
          playgroundURL: '',
          quiz: [],
        },
      ],
    },
  ]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCourseNameChange = (e) => setCourseName(e.target.value);

  const handleModuleChange = (index, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[index][field] = value;
      return updatedModules;
    });
  };

  const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
      return updatedModules;
    });
  };

  const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
    if (file) {
      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
        updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
        return updatedModules;
      });
    }
  };

  const addModule = () => {
    setModules((prevModules) => [
      ...prevModules,
      {
        name: '',
        chapters: [
          {
            name: '',
            pdf: null,
            video: null,
            pdfUploaded: false,
            videoUploaded: false,
            playgroundURL: '',
            quiz: [],
          },
        ],
      },
    ]);
  };

  const addChapter = (moduleIndex) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters.push({
        name: '',
        pdf: null,
        video: null,
        pdfUploaded: false,
        videoUploaded: false,
        playgroundURL: '',
        quiz: [],
      });
      return updatedModules;
    });
  };

  // Function to process the XLS file and extract quiz data
  // const handleQuizXLSUpload = (moduleIndex, chapterIndex, file) => {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const data = new Uint8Array(e.target.result);
  //     const workbook = XLSX.read(data, { type: 'array' });

  //     // Assuming the first sheet contains the quiz
  //     const sheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[sheetName];

  //     // Convert sheet to JSON format
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  //     const quizQuestions = jsonData.slice(1).map((row) => ({
  //       question: row[0],
  //       options: [row[1], row[2], row[3], row[4]],
  //       correctOption: parseInt(row[5]),
  //     }));

  //     // Update state with extracted quiz data
  //     setModules((prevModules) => {
  //       const updatedModules = [...prevModules];
  //       updatedModules[moduleIndex].chapters[chapterIndex].quiz = quizQuestions;
  //       return updatedModules;
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // };
  const handleQuizXLSUpload = (moduleIndex, chapterIndex, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
  
      // Assuming the first sheet contains the quiz
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      // Convert sheet to JSON format
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      const quizQuestions = jsonData.slice(1).map((row) => ({
        question: row[0],                 // Quiz question
        options: [row[1], row[2], row[3], row[4]], // Four options
        correctOption: row[5],            // Correct option (should be A, B, C, D)
      }));
  
      // Update state with extracted quiz data
      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex].quiz = quizQuestions;
        return updatedModules;
      });
    };
    reader.readAsArrayBuffer(file);
  };
  

  const handleCreateCourse = (e) => {
    e.preventDefault();
    setLoading(true);
    setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
    resetForm();
    setLoading(false);
  };

  const resetForm = () => {
    setCourseName('');
    setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, playgroundURL: '', quiz: [] }] }]);
  };

  const viewFile = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
      <form onSubmit={handleCreateCourse} className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={handleCourseNameChange}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
          />
        </div>
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-6">
            <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
            <input
              type="text"
              value={module.name}
              onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
            />
            {module.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mt-6">
                <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
                <input
                  type="text"
                  value={chapter.name}
                  onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
                />

                <label className="block mt-4 text-md font-medium">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                {chapter.pdfUploaded && (
                  <button
                    type="button"
                    onClick={() => viewFile(chapter.pdf)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    View PDF
                  </button>
                )}

                <label className="block mt-4 text-md font-medium">Upload Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                 

                {chapter.videoUploaded && (
                  <div className="mt-2">
                    <video
                      controls
                      className="w-full max-w-md"
                      src={URL.createObjectURL(chapter.video)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <label className="block mt-4 text-md font-medium">Access Playground URL</label>
                <input
                  type="url"
                  value={chapter.playgroundURL}
                  onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'playgroundURL', e.target.value)}
                  placeholder="Enter playground URL"
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
                />


                <label className="block mt-4 text-md font-medium">Upload Quiz (XLS)</label>
                <input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={(e) => handleQuizXLSUpload(moduleIndex, chapterIndex, e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />

                <div className="mt-6">
                  {chapter.quiz.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-400">
                      {chapter.quiz.map((quiz, quizIndex) => (
                        <li key={quizIndex}>
                          {quiz.question} (Correct Option: {quiz.options[quiz.correctOption]})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400">No quiz questions uploaded yet.</p>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addChapter(moduleIndex)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Chapter
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addModule}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Module
        </button>
        <br></br>
        <button
          type="submit"
          className={`mt-6 ${loading ? 'bg-gray-500' : 'bg-green-500'} text-white px-4 py-2 rounded lg: ml-[620px]`}
          disabled={loading}
        >
          {loading ? 'Creating Course...' : 'Create Course'}
        </button>
      </form>

      <div className="mt-12">
        <h1 className="text-2xl font-bold text-blue-200">Existing Courses</h1>
        <ul className="mt-4">
          {courses.map((course, index) => (
            <li key={index} className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">{course.name}</h3>
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex}>
                  <h4 className="text-md font-semibold mt-4 text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
                  {module.chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="mt-2">
                      <h5 className="font-medium text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
                      {/* <p className="text-sm text-gray-400">
                        PDF: {chapter.pdf ? 'Uploaded' : 'Not uploaded'} | Video: {chapter.video ? 'Uploaded' : 'Not uploaded'}
                      </p> */}
                      {chapter.pdfUploaded && (
                        <div className='flex flex-wrap gap-4'>
                          <p>PDF Uploaded:</p>
                          <button
                            type="button"
                            onClick={() => viewFile(chapter.pdf)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                          >
                            View PDF
                          </button>
                          <button
                        type="button"
                        onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete PDF
                      </button>
                        </div>
                      )}
                      {chapter.videoUploaded && (
                        <div>
                          <p>Video Uploaded:</p>
                          <video
                            controls
                            className="w-full max-w-md mt-2"
                            src={URL.createObjectURL(chapter.video)}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded lg:ml-[150px]"
                      >
                        Delete Video
                      </button>
                      <br></br>
                      {/* <p>Playground URL: {chapter.playgroundURL || 'N/A'}</p> */}
                      {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
                      {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
                      <br></br>
                      <br></br>
                      <p>

  <a 
    href={chapter.playgroundURL} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded "
  >
    Access Playground
  </a>
</p>
<br></br>

                      {/* <h6 className="text-sm mt-2 text-blue-100">Quiz Questions:</h6>
                      {chapter.quiz.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-400">
                          {chapter.quiz.map((quiz, quizIndex) => (
                            <li key={quizIndex}>
                              {quiz.question} (Correct Option: {quiz.options[quiz.correctOption]})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">No quiz questions added.</p>
                      )} */}
                     <div className="mt-6 text-white">
                     {chapter.quiz.length > 0 ? (
    <ul className=" list-inside text-white-400 ">
      {chapter.quiz.map((quiz, quizIndex) => (
        <li key={quizIndex}>
          <p className="font-semibold text-lg">
            Q{quizIndex + 1}: {quiz.question}
          </p>
          <ul className="pl-6 mt-2">
            {quiz.options.map((option, optionIndex) => (
              <li key={optionIndex} className="flex items-center">
                <span className="mr-2">
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </span>
              </li>
            ))}
          </ul>
          {/* <p className="mt-2 text-green-400">
            Correct Option: {String.fromCharCode(65 + quiz.correctOption)}. {quiz.options[quiz.correctOption]}
          </p> */}
          <p className="mt-2 text-green-400">
          Correct Answer: {quiz.correctOption} 
                          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">No quiz questions uploaded yet.</p>
  )}
</div>


                    </div>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
