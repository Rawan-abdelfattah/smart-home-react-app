import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebaseconfig/index";

// import { auth } from "../../../firebase";
import { toast } from "react-hot-toast";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";


export default function Login(props) {
   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')
  const [Isloading, setIsloading] = useState(false);
  const [MessageError, setMessageError] = useState("");

  let navigate = useNavigate();
   function signIn(values) {
    setIsloading(true);
    values.preventDefault();
    signInWithEmailAndPassword(auth , email, password)
    .then((userCredential)=>{
      toast.success("Correct Info ",{duration:1500  , className:'border-success border'});

      console.log(userCredential);
      navigate('/RealTimeData')
    })
    .catch((error)=>{
      console.log(error);
      toast.error(error.message);

      
    })   

    
  }

  return (
    <>
    <Navbar/>
      <div className="container">
        <form
          action=""
          className="w-75 mx-auto py-3  "
          onSubmit={signIn}
        >
          <h2>Login Now :</h2>
          {MessageError && (
            <div className="alert alert-danger">{MessageError}</div>
          )}

          <label htmlFor="email">Email :</label>

          <input 
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          {/* {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : (
            ""
          )} */}

          <label htmlFor="password">Password :</label>
          <input
          
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          {/* {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : (
            ""
          )} */}
 <button
              // disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="btn text-white bg-main mt-2 bg-info"
            >
              Login
            </button>
          {/* {Isloading ? (
            <button type="button" className="btn text-white bg-main mt-2">
              <i className="fas fa-spinner fa-spin "></i>
            </button>
          ) : (
           
          )} */}
        </form>
      </div>
      <Footer/>
    </>
  );
}
