import React from 'react';
import StartFirebase from '../Firebaseconfig';
import { ref,onValue} from 'firebase/database';
import Navbar from '../Navbar/Navbar';
import Control from '../Control/Control';
import { Crud } from '../Crud';
import { Link, NavLink } from 'react-router-dom';

const db =StartFirebase();
export class RealTimeData extends React.Component { 


    constructor() {
        super();
        this.state = {
            tableData: [] // Initialize allData as an empty array

        };
    }
    componentDidMount(){
        const dbRef = ref(db , 'Sensor');
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach((childSnapshot) => {
              let keyName = childSnapshot.key;
              let data = childSnapshot.val();
              console.log("Key:", keyName, "Data:", data); // Add this line
              records.push({ 'key': keyName, 'data': data });
              console.log(this.state.tableData);
            });
            console.log("Records:", records); // Add this line
            this.setState({ tableData: records });
          }, (error) => {
            console.error("Error fetching data:", error);
          });
          
       }
       
       render() {
        return (
            <>
<Navbar/>
<div className='container mt-4 pt-4 ' style={{ fontFamily: 'Arial, sans-serif' }}>
    <table className='table table-bordered table-striped ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <thead className='thead-light'>
            <tr>
                <th>#</th>
                <th>data</th>
                {/* <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th> */}
            </tr>
        </thead>
        <tbody>
            {this.state.tableData.map((row, index) => (
                <tr key={index}>

                    <td>{index + 1}</td>
                    <td>{row.key}</td>
                    <td>{row.data}</td>
                    {/* <td>{row.data}</td> */}
                    {/* <td>{row.data.dateofbirth}</td>
                    <td>{row.data.Phonenumber}</td> */}
                </tr>
            ))}
        </tbody>
    </table>



    {/* <input type="range" min='0' max='180' className='' /> */}
    <button className='btn bg-info' ><NavLink className="nav-link"  to='/Crud'>go to btn control</NavLink> </button>
</div>
{/* <Crud/> */}
{/* <Control/> */}
            </>
        );
    }
    
}