import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (id) => {
    console.log("delete user", id);

    fetch(`http://localhost:5000/showUsers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Delete!",
            text: "User Deleted Successfully",
            icon: "success Delete",
            confirmButtonText: "Ok",
          });
          const remaining = users.filter((item) => item._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <div className="py-40 bg-nu10">
        <div className="container-2">
          <h1 className="mb-12 text-center"> Users: {loadUsers.length}</h1>
          <div className="overflow-x-auto">
            <table className="table ">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-nu20 font-bold text-[24px]">Email</th>
                  <th className="text-nu20 font-bold text-[24px]">
                    Created At
                  </th>
                  <th className="text-nu20 font-bold text-[24px]">
                    Last Login
                  </th>

                  <th className="text-nu20 font-bold text-[24px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item._id}>
                    <th>1</th>
                    <td>{item.email}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-4 py-2 bg-nu90 text-nu10 rounded-xl cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
