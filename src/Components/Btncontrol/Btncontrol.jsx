// import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import 'firebase/app';
// import 'firebase/database';
// import './Btncontrol.css'; // Import your CSS file

// const App = () => {
//   const [ledStatus, setLedStatus] = useState({
//     Led1Status: '0',
//     Led2Status: '0',
//     Led3Status: '0',
//     Led4Status: '0',
//   });

//   useEffect(() => {
//     const firebaseConfig = {
//       apiKey: "your-api-key",
//       authDomain: "your-auth-domain",
//       databaseURL: "your-database-url",
//       projectId: "your-project-id",
//       storageBucket: "your-storage-bucket",
//       messagingSenderId: "your-messaging-sender-id",
//       appId: "your-app-id",
//     };
    
//     firebase.initializeApp(firebaseConfig);

//     const database = firebase.database();

//     const handleValueChange = (snapshot) => {
//       const newLedStatus = snapshot.val();
//       setLedStatus(newLedStatus);
//     };

//     database.ref().on('value', handleValueChange);

//     return () => {
//       database.ref().off('value', handleValueChange);
//     };
//   }, []);

//   const handleToggle = (ledKey) => {
//     const firebaseRef = firebase.database().ref().child(ledKey);
//     const currentStatus = ledStatus[ledKey];
//     const newStatus = currentStatus === '1' ? '0' : '1';
//     firebaseRef.set(newStatus);
//   };

//   return (
//     <div className="wrapper">
//       {/* First LED */}
//       <div className="progress">
//         <a className="icon1">
//           <i className="fas fa-4x fa-bath"></i>
//         </a>
//         <div
//           className={`toggle-btn ${ledStatus.Led1Status === '1' ? 'active' : ''}`}
//           onClick={() => handleToggle('Led1Status')}
//         >
//           <div className="inner-circle"></div>
//         </div>
//       </div>
  
//       {/* Second LED */}
//       <div className="progress">
//         <a className="icon1">
//           <i className="fas fa-4x fa-utensils"></i>
//         </a>
//         <div
//           className={`toggle-btn ${ledStatus.Led2Status === '1' ? 'active' : ''}`}
//           onClick={() => handleToggle('Led2Status')}
//         >
//           <div className="inner-circle"></div>
//         </div>
//       </div>
  
//       {/* Third LED */}
//       <div className="progress">
//         <a className="icon1">
//           <i className="fas fa-4x fa-tv"></i>
//         </a>
//         <div
//           className={`toggle-btn ${ledStatus.Led3Status === '1' ? 'active' : ''}`}
//           onClick={() => handleToggle('Led3Status')}
//         >
//           <div className="inner-circle"></div>
//         </div>
//       </div>
  
//       {/* Fourth LED */}
//       <div className="progress">
//         <a className="icon1">
//           <i className="fas fa-4x fa-bed"></i>
//         </a>
//         <div
//           className={`toggle-btn ${ledStatus.Led4Status === '1' ? 'active' : ''}`}
//           onClick={() => handleToggle('Led4Status')}
//         >
//           <div className="inner-circle"></div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default App;
