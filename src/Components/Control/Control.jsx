// import React, { useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database'; 
// import { auth } from "../Firebaseconfig/index";

// import 'firebase/database';


// if (!firebase.apps.length) {
//   firebase.initializeApp(auth);
// }

// const App = () => {
//   const [homeDoorState, setHomeDoorState] = useState(false);
//   const [lightsState, setLightsState] = useState(false);
//   const [roomDoorState, setRoomDoorState] = useState(false);
//   const [windowState, setWindowState] = useState(false);

//   const toggleState = (stateName) => {
//     const newState = !eval(stateName);
//     firebase.database().ref('/' + stateName).set(newState);
//     // Update local state immediately for responsive UI
//     switch (stateName) {
//       case 'hoom door':
//         setHomeDoorState(newState);
//         break;
//       case 'lights':
//         setLightsState(newState);
//         break;
//       case 'room door':
//         setRoomDoorState(newState);
//         break;
//       case 'window':
//         setWindowState(newState);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <>
//       <h1 className='text-center'>Smart Home Control</h1>
//       <div className='d-flex align-items-center justify-content-center'>
//         <button
//           className={`btn bg-${homeDoorState ? 'danger' : 'info'} text-white fw-bold p-2 m-4`}
//           onClick={() => toggleState('hoom door')}
//         >
//           {homeDoorState ? 'Close Home Door' : 'Open Home Door'}
//         </button>
//         <button
//           className={`btn bg-${lightsState ? 'danger' : 'info'} text-white fw-bold p-2 m-4`}
//           onClick={() => toggleState('lights')}
//         >
//           {lightsState ? 'Turn Off Lights' : 'Turn On Lights'}
//         </button>
//         <button
//           className={`btn bg-${roomDoorState ? 'danger' : 'info'} text-white fw-bold p-2 m-4`}
//           onClick={() => toggleState('room door')}
//         >
//           {roomDoorState ? 'Close Room Door' : 'Open Room Door'}
//         </button>
//         <button
//           className={`btn bg-${windowState ? 'danger' : 'info'} text-white fw-bold p-2 m-4`}
//           onClick={() => toggleState('window')}
//         >
//           {windowState ? 'Close Window' : 'Open Window'}
//         </button>
//       </div>
//     </>
//   );
// };

// export default App;
