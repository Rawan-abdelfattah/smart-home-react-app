import React from 'react';
import StartFirebase from '../Firebaseconfig';
import { ref, remove, set, update ,get ,child} from 'firebase/database';
import { toast } from "react-hot-toast";

export class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            db: null,
            username: '',
            fullname: '',
            phonenumber: '',
            dob: '',
            lights: false,
            homeDoor: false,
            window: false,
            allData: [] // Initialize allData as an empty array

        };
        this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }

    interface(event) {
        const id = event.target.id;

        if (id === 'addBtn') {
            this.addData();
        } else if (id === 'updateBtn') {
            this.updateData();
        } else if (id === 'deleteBtn') {
            this.deleteData();
        } else if (id === 'selectBtn') {
            this.getData();
        }
        else if (id === 'getAllData') {
            this.getAllData();
        }
        
    }

    getAllInputs() {
        return {
            username: this.state.username,
            fullname: this.state.fullname,
            phone: Number(this.state.phonenumber),
            dob: this.state.dob,
        };
    }

    addData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Customer/' + data.username), {
            Username:data.username,
            Fullname: data.fullname,
            Phonenumber: data.phone,
            dateofbirth: data.dob
        })
            .then(() => {
                alert('Data added successfully.');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    updateData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Customer/' + data.username), {
            Fullname: data.fullname,
            Phonenumber: data.phone,
            dateofbirth: data.dob
        })
            .then(() => {alert('Data updated successfully.');})
            .catch((error) => {alert(error.message);});
    }

    deleteData() {
        const db = this.state.db;
        const username = this.getAllInputs().username;

        remove(ref(db, 'Customer/' +username))
            .then(() => { alert('Data deleted successfully.');})
            .catch((error) => {alert(error.message); });
    }

    getData() {
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;
    
        console.log("Getting data for username:", username);
    
        get(child(dbref, 'Customer/' + username))
        .then((snapshot) => {
            console.log("Retrieved snapshot:", snapshot);
    
            if (snapshot.exists()) {
                const data = snapshot.val();
    
                this.setState({
                    fullname: data.Fullname,
                    phonenumber: data.Phonenumber,
                    dob: data.dateofbirth
                });
            } else {
                alert('No data found');
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert('Error fetching data');
        });
    }

    getAllData() {
        const dbref = ref(this.state.db);
    
        get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const dataObject = snapshot.val();
    
                // Now 'dataObject' contains all the data under the specified path
                // You can process or display this data as needed
                console.log("All data:", dataObject);
            } else {
                alert('No data found');
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert('Error fetching data');
        });
    }
    toggleDevice(devicePath) {
        const db = this.state.db;
    
        // Fetch the current value from Firebase
        const deviceRef = ref(db, 'control/' + devicePath);
        get(deviceRef)
            .then((snapshot) => {
                const currentValue = snapshot.val()?.value || false;
    
                // Toggle the value and update Firebase
                set(deviceRef, {
                    value: !currentValue
                })
                .then(() => {
                    // alert('Device status updated successfully.');
                    toast.success("Device status updated successfully. ",{duration:1500  , className:'border-success border'});

                })
                .catch((error) => {
                    alert(error.message);
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    render() {
        return (
            <>


<button
    className='btn bg-info text-white col-12 col-lg-2 m-2 shadow'
    onClick={() => this.toggleDevice('lights')}>
    {this.state.lights ? 'Lights On' : 'Lights Off'}
</button>
<button
    className='btn bg-info text-white col-12 col-lg-2 m-2 shadow'
    onClick={() => this.toggleDevice('home door')}>
    {this.state.homeDoor ? 'Home Door Open' : 'Home Door Closed'}
</button>
<button
    className='btn bg-info text-white col-12 col-lg-2 m-2 shadow'
    onClick={() => this.toggleDevice('window')}>
    {this.state.window ? 'Window Open' : 'Window Closed'}
</button>
{/* <p>light: {this.state.lights ? 'open ' : 'close'}</p>
<p>home Door  : {}</p>
<p>window  Door  : {}</p> */}
            </>
        );
    }

    
}
