import { useEffect, useState } from "react";
import AdminSidebar from "../../layout/AdminSidebar";


import { db  } from "../../firebase";
import {  where } from "firebase/firestore";
import {
  collection,
  getDocs,
  deleteDoc,
  getDoc,
  doc,
  query,
} from "firebase/firestore/lite";

const ManageUsers = () => {
  const [userData, setUserData] = useState([
    {
      name: "",
      email: " ",
    },
  ]);
  const [ isDeleted, setIsDeleted ] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersCollectionRef = collection(db, "users");
      const querySnapshot = await getDocs(usersCollectionRef);

      if (!querySnapshot.empty) {
        const usersArray = querySnapshot.docs.map((doc) => doc.data());
        setUserData(usersArray);
        // console.log(usersArray);
      } else {
        // console.log("No users found.");
      }
    } catch (error) {
      // console.error("Error fetching users:", error);
    }
  };
  const deletetheUser = async (email) => {
    try {
        const collectionReference = collection(db, "users");
        const querySnapshot = await getDocs(query(collectionReference, where("email", "==", email)));
        
        if (!querySnapshot.empty) {
            const documentSnapshot = querySnapshot.docs[0];
            const documentReference = doc(db, "users", documentSnapshot.id);
        
            await deleteDoc(documentReference);
            setIsDeleted(true);
            fetchUsers();
            // console.log("User deleted successfully");
        } else {
            // console.log("No such document!");
        }
    } catch (error) {
        // console.error("Error deleting user:", error);
    }
};





  
  
  
  
  

  return (
    <div className="flex">
      <div className="w-64 bg-gray-200">
        <AdminSidebar />
      </div>

      <div className="p-6">
        <table class="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Name
              </th>
              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Email
              </th>
              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Role
              </th>

              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Registered Date and time
              </th>



            
              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Delete{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.name}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.email}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.role}
                </td>

                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.registeredAt && user.registeredAt.toDate().toLocaleString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    }
                  )
                  }
                </td>
              
              
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button type="button"   onClick={() => deletetheUser(user.email)}>
                  
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
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
