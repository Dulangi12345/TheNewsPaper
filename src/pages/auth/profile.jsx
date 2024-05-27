import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { updateEmail as firebaseUpdateEmail, updatePassword, deleteUser } from "@firebase/auth";
import Footer from "../../layout/footer";
 
const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [registeredAt, setRegisteredAt] = useState("");
  const [diffInDays, setDiffInDays] = useState(0);
  const currentDate = new Date().getTime();
 



  const handlePayment = async (e) => {
    e.preventDefault();
    window.location.href = "https://test-php-beta.vercel.app/api/payment.php";
  };

  const updateEmailAndPassword = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        // Store the current email before updating
        const currentEmail = user.email;

        if (newEmail) {
          await firebaseUpdateEmail(user, newEmail);

          // Update email in Firestore
          const q = query(collection(db, "users"), where("email", "==", currentEmail));
          const querySnapshot = await getDocs(q);
          
          querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, { email: newEmail });
          });

          const newUserProfile = { ...userProfile, email: newEmail };
          setUserProfile(newUserProfile);
        }

        if (newPassword) {
          await updatePassword(user, newPassword);
        }

        alert("Email and/or password updated successfully.");
      } catch (error) {
        console.log("Error updating email and/or password: ", error);
      }
    }
  };

  const deleteAccount = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        const currentEmail = user.email;

        // Delete user document from Firestore
        const q = query(collection(db, "users"), where("email", "==", currentEmail));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Delete user account from Firebase Authentication
        await deleteUser(user);

        alert("Account deleted successfully.");
      } catch (error) {
        console.log("Error deleting account: ", error);
      }
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const email = user.email;
      const q = query(collection(db, "users"), where("email", "==", email));

      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserProfile(doc.data());
            setRegisteredAt(new Date(userProfile.registeredAt).getTime())
            setDiffInDays(currentDate - registeredAt) / (1000 * 60 * 60 * 24);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, []);
  

  return (
    <div>
      <div className="sm:px-6 p-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Profile</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details and information.</p>
      </div>
      <div>
      {diffInDays > 7 ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Warning!</strong>
          <span className="block sm:inline">Your account will be deleted .</span>
        </div>
      ) : (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">Your account is active.</span>
        </div>
      )}
    </div>
      
      <div className="m-6 ">
      <button
        className="bg-none hover:bg-cyan-700 text-black border-2 border-black hover:border-none hover:text-white font-bold py-2 px-4 rounded-full mx-2"
        onClick={handlePayment}
      >
       Pay Now
      </button>
      <button
        className="bg-none border-2 border-black hover:border-none hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded-full  mx-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-row gap-2 items-center">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  <p> Edit</p>

        </div>
   
       
      </button>
      <button
        className="bg-red-500  hover:border-none  text-black  font-bold py-2 px-4 rounded-full  mx-2"
        onClick={deleteAccount}
      >
       Delete 
      </button>
      </div>
      {userProfile && (
        <div className="bg-white p-10 shadow-sm rounded-sm">
        
          <div className="text-gray-700">
            <div className="grid md:grid-cols-1 text-sm">
              <div className="grid grid-cols-3 p-3">
                <div className="px-4 py-2 font-semibold">First Name</div>
              
                <div className="px-4 py-2">{userProfile.name}</div>
                {/* <button onClick={() => setOpen(!open)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </button> */}
              </div>
          
              {open && (
                <form onSubmit={updateEmailAndPassword} className="space-y-4">
                  <div>
                    <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700">
                      Enter new Email
                    </label>
                    <input
                      type="email"
                      id="newEmail"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                      Enter new Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </form>
              )}

              <div className="grid grid-cols-2 p-3">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">{userProfile.email}</div>
              </div>

              <div className="grid grid-cols-2 p-3">
                <div className="px-4 py-2 font-semibold">Registered on</div>
                <div className="px-4 py-2">
                  {userProfile.registeredAt &&
                    userProfile.registeredAt.toDate().toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                </div>
              </div>

              {/* <button
                onClick={deleteAccount}
                className=" w-24 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Account
              </button> */}

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
