import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
} from "firebase/firestore/lite";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("");
  const [classOrCourse, setClassOrCourse] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [invoice, setInvoiceNumber] = useState("");
  const [indexNo, setIndexNo] = useState("");
  const [apiKey, setApiKey] = useState("KCBAE725KPTCGANOKA902101207");
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  axios.defaults.withCredentials = true;


  const handlePayment = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const data = {
        email: email,
        studentName: name,
        amount: amount,
        classOrCourse: classOrCourse,
        description: description,
        phoneNo: phoneNo,
        invoice: invoice,
        apiKey: apiKey,
        indexNumber: indexNo,
      };

      try {
        await axios.post("https://vercel.com/thecatalyst/the-news-paper-github-io/api", data).then((response) => {
          
          console.log(response);
          handleRegister(e);
        });
      } catch (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user) {
        await updateProfile(user, {
          displayName: name,
        });

        // Save user details to Firestore, including the role
        const userRef = collection(db, "users");
        await addDoc(userRef, {
          uid: user.uid,
          name: name,
          email: email,
          role: "user",
        });

        // Send email verification
        //await sendEmailVerification(user);
      }
      setSuccessMessage(
        "Account created successfully. You can now login to your account."
      );
      setLoginLoading(false);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/missing-email":
          setError("Please enter an email address");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/missing-password":
          setError("Please enter a password");
          break;
        case "auth/weak-password":
          setError("Password must be at least 6 characters");
          break;
        default:
          setError(error.message);
      }
      setLoginLoading(false);
    }
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                    flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Create an account
            </h1>

            <form
              className="mt-6 "
              onSubmit={handlePayment}
              id="form-container"
              style={{
                height: "500px",
                overflow: "scroll",
              }}
            >
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              <div>
                <label className="block text-gray-700" for="studentName">
                  Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  id="studentName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700" for="email">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              {/* payment details */}

              <div className="mt-4">
                <label className="block text-gray-700" for="description">
                  University or Institute
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter name of university or institute "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="amount">
                  Payment amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter payment amount  "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="phoneNo">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="indexNo">
                  {" "}
                  Enter Index number
                </label>
                <input
                  type="text"
                  name="indexNo"
                  id="indexNo"
                  value={indexNo}
                  onChange={(e) => setIndexNo(e.target.value)}
                  placeholder="Enter Index Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="classOrCourse">
                  class or Course
                </label>
                <input
                  type="text"
                  name="classOrCourse"
                  id="classOrCourse"
                  value={classOrCourse}
                  onChange={(e) => setClassOrCourse(e.target.value)}
                  placeholder="Enter class Or Course"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700" for="invoice">
                  Invoice Number
                </label>
                <input
                  type="text"
                  name="invoice"
                  id="invoice"
                  value={invoice}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="Enter invoice number"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="hidden"
                  name="apiKey"
                  id="apiKey"
                  value={apiKey}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              {/* <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div> */}

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <div className="flex items-center justify-center">
                    <span className="mr-2 text-white">Registering...</span>
                    <div className="animate-spin h-4 w-3.5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
