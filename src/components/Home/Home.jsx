'use client'
// import React from 'react';
// import { useRef, useState } from "react";

// import Navbar from '../Navbar/Navbar.jsx';
// import Footer from '../Footer/Footer.jsx';
// import Plx from 'react-plx';
// import './Home.css';

// const Home = () => {
//   const [dragActive, setDragActive] = useState(false);
//   const inputRef = useRef(null);
//   const [files, setFiles] = useState([]);

//   function handleChange(e) {
//     e.preventDefault();
//     console.log("File has been added");
//     if (e.target.files && e.target.files[0]) {
//       console.log(e.target.files);
//       for (let i = 0; i < e.target.files.length; i++) {
//         setFiles((prevState) => [...prevState, e.target.files[i]]);
//       }
//     }
//   }

//   function handleSubmitFile(e) {
//     if (files.length === 0) {
//       // no file has been submitted
//     } else {
//       // write submit logic here
//     }
//   }

//   function handleDrop(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       for (let i = 0; i < e.dataTransfer.files.length; i++) {
//         setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
//       }
//     }
//   }

//   function handleDragLeave(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function handleDragEnter(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function removeFile(fileName, idx) {
//     const newArr = [...files];
//     newArr.splice(idx, 1);
//     setFiles([]);
//     setFiles(newArr);
//   }

//   function openFileExplorer() {
//     inputRef.current.value = "";
//     inputRef.current.click();
//   }
//   const parallaxData = [
//     {
//       start: 0,
//       end: 500, // Adjust this value based on when you want the effect to stop
//       properties: [
//         {
//           startValue: 1,
//           endValue: 0,
//           property: 'opacity',
//         },
//         {
//           startValue: 0,
//           endValue: 50,
//           property: 'translateY',
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <Plx parallaxData={parallaxData} className='parallaxContainer'>
//         <div className='notecraft'>NoteCraft</div>
//       </Plx>
//       <div className='fullimgWrapper'>
//         <img src="images/full.jpg" className='fullimg' alt="Background" />
//       </div>



//       <div className="flex items-center justify-center h-screen">
//         <div className='content-dragdrop'>
//         Files in, notes out! 🎼 
//         <p>Unleash the hidden tunes by dropping your files with NoteCraft</p>
//         </div>
//       <form
//         className={`${
//           dragActive ? "bg-blue-400" : "bg-blue-100"
//         }  p-4 w-1/3 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
//         onDragEnter={handleDragEnter}
//         onSubmit={(e) => e.preventDefault()}
//         onDrop={handleDrop}
//         onDragLeave={handleDragLeave}
//         onDragOver={handleDragOver}
//       >
//         {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
//         <input
//           placeholder="fileInput"
//           className="hidden"
//           ref={inputRef}
//           type="file"
//           multiple={true}
//           onChange={handleChange}
//           accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
//         />

//         <p>
//           Drag & Drop files or{" "}
//           <span
//             className="font-bold text-blue-600 cursor-pointer"
//             onClick={openFileExplorer}
//           >
//             <u>Select files</u>
//           </span>{" "}
//           to upload
//         </p>

//         <div className="flex flex-col items-center p-3">
//           {files.map((file, idx) => (
//             <div key={idx} className="flex flex-row space-x-5">
//               <span>{file.name}</span>
//               <span
//                 className="text-red-500 cursor-pointer"
//                 onClick={() => removeFile(file.name, idx)}
//               >
//                 remove
//               </span>
//             </div>
//           ))}
//         </div>

      
//       </form>
//     </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React, { useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Home.css';

const Home = () => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  // function handleChange(e) {
  //   e.preventDefault();
  //   console.log("File has been added");
  //   if (e.target.files && e.target.files[0]) {
  //     console.log(e.target.files);
  //     for (let i = 0; i < e.target.files.length; i++) {
  //       setFiles((prevState) => [...prevState, e.target.files[i]]);
  //     }
  //   }
  // }

  // function handleDrop(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     for (let i = 0; i < e.dataTransfer.files.length; i++) {
  //       setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
  //     }
  //   }
  // }

  // function handleDragLeave(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(false);
  // }

  // function handleDragOver(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(true);
  // }

  // function handleDragEnter(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragActive(true);
  // }

  // function removeFile(fileName, idx) {
  //   const newArr = [...files];
  //   newArr.splice(idx, 1);
  //   setFiles([]);
  //   setFiles(newArr);
  // }

  // function openFileExplorer() {
  //   inputRef.current.value = "";
  //   inputRef.current.click();
  // }

  return (
    <div>
      <Navbar />
      <div className='fullimgWrapper'>
      <div className='notecraft'>NoteCraft</div>
        <img src="images/full.jpg" className='fullimg' alt="Background" />
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className='content-dragdrop'>
          Files in, notes out! 🎼 
          <p>Unleash the hidden tunes by dropping your files with NoteCraft</p>
        </div>
        <form
          className={`${
            dragActive ? "bg-blue-400" : "bg-blue-100"
          }  p-4 w-1/3 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
          // onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          // onDrop={handleDrop}
          // onDragLeave={handleDragLeave}
          // onDragOver={handleDragOver}
        >
          {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
          <input
            placeholder="fileInput"
            className="hidden"
            // ref={inputRef}
            type="file"
            // multiple={true}
            // onChange={handleChange}
            accept="audio/*"
          />

          <p>
            Drag & Drop files or{" "}
            <span
              className="font-bold text-blue-600 cursor-pointer"
              // onClick={openFileExplorer}
            >
              <u>Select files</u>
            </span>{" "}
            to upload
          </p>

          <div className="flex flex-col items-center p-3">
            {files.map((file, idx) => (
              <div key={idx} className="flex flex-row space-x-5">
                <span>{file.name}</span>
                <span
                  className="text-red-500 cursor-pointer"
                  // onClick={() => removeFile(file.name, idx)}
                >
                  remove
                </span>
              </div>
            ))}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
