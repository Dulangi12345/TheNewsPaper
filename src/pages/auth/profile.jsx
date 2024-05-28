import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  updateEmail as firebaseUpdateEmail,
  updatePassword,
  deleteUser,
} from "@firebase/auth";
import Footer from "../../layout/footer";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [registeredAt, setRegisteredAt] = useState("");
  const [diffInDays, setDiffInDays] = useState(0);
  const [day30DaysFromNow , setday30DaysFromNow] = useState(0);
  const [ timeleft , settimeleft] = useState(0);
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
          const q = query(
            collection(db, "users"),
            where("email", "==", currentEmail)
          );
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
        const q = query(
          collection(db, "users"),
          where("email", "==", currentEmail)
        );
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
            setRegisteredAt(new Date(doc.data.registeredAt).getTime());
            setDiffInDays(currentDate - registeredAt) / (1000 * 60 * 60 * 24);
            setday30DaysFromNow(new Date(doc.data.day30DaysFromNow).getTime());
            settimeleft(day30DaysFromNow - currentDate)  / (1000 * 60 * 60 * 24) ;

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
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Your Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details and information.
        </p>
      </div>
      <div>
        {diffInDays > 7 && timeleft < 30 && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Warning! </strong>
            <span className="block sm:inline">
               Your account will be deleted if you fail to pay the subscription.
            </span>
          </div>
        )
        }
      </div>

      <div className="m-6 ">
        <button
          className="bg-none hover:bg-black text-black border-2 border-black hover:border-none hover:text-white font-bold py-2 px-4 rounded-full mx-2"
          onClick={handlePayment}
        >
          Pay Now
        </button>
        <button
          className="bg-none border-2 border-black hover:border-none hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full  mx-2"
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
          className="bg-red-400 text-white hover:border-none hover:border-2 hover:border-black hover:text-black font-bold py-2 px-4 rounded-full mx-2"
          onClick={deleteAccount}
        >
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
            <p>Delete</p>
          </div>
        </button>
      </div>
      {open && (
        <div class="w-full bg-gray-100 bg-opacity-50  p-10 top-0 bottom-0  absolute  flex items-center justify-center right-0 m-auto left-0 ">
          <form
            onSubmit={updateEmailAndPassword}
            className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4  "
          >
            <div class="mb-4">
              <label
                htmlFor="newEmail"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter new Email
              </label>
              <input
                type="email"
                id="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter new Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
              <button
                type="submit"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {userProfile && (
        <div className="bg-white overflow-hidden ">
          <div className="px-4 py-5 sm:p-0">
        <div className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg font-medium text-gray-500 font-[Roboto]">First Name</div>

                <div className="mt-1 text-lg font-[Roboto] text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.name}</div>
              </div>

              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="font-medium text-gray-500 text-lg font-[Roboto]">Email</div>
                <div className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2 text-lg font-[Roboto]">{userProfile.email}</div>
              </div>

              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="font-medium text-gray-500 text-lg font-[Roboto]">Registered on</div>
                <div className="mt-text-gray-900 sm:mt-0 sm:col-span-2 text-lg font-[Roboto]">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
