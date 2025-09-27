import React from "react";
import { FaEye } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffeeCard, coffeeUpdateCard, setCoffeeUpdateCard }) => {
  const { _id, name, quantity, supplier, taste, category, details, url } =
    coffeeCard;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffeeUpdateCard.filter(
                (item) => item._id !== _id
              );
              setCoffeeUpdateCard(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="px-6 py-6 mb-4 bg-nu106 rounded-2xl w-full h-full">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3">
            <div className="">
              <img className="m-auto" src={url} alt="" />
            </div>
          </div>
          <div className="col-span-7">
            <p className="flex items-center gap-2 mb-2 font-semibold text-nu20">
              Name: <span className="text-nu50">{name}</span>
            </p>
            <p className="flex items-center gap-2 mb-2 font-semibold text-nu20">
              Quantity:
              <span className="text-nu50">{quantity}</span>
            </p>
            <p className="flex items-center gap-2 mb-2 font-semibold text-nu20">
              Supplier:
              <span className="text-nu50">{supplier}</span>
            </p>
            <p className="flex items-center gap-2 mb-2 font-semibold text-nu20">
              Taste: <span className="text-nu50"> {taste}</span>
            </p>
            <p className="flex items-center gap-2 mb-2 font-semibold text-nu20">
              Category:
              <span className="text-nu50">{category}</span>
            </p>
            <p className="flex mb-2 font-semibold text-nu20">
              Details:
              <span className="text-nu50">{details}</span>
            </p>
          </div>
          <div className="col-span-2">
            <div className="">
              <button>
                <span className="text-nu10 bg-nu80 rounded-lg inline-block px-3 py-3 cursor-pointer">
                  <FaEye className="text-[24px]" />
                </span>
              </button>

              <Link to={`/updateCoffee/${_id}`}>
                <span className="text-nu10 bg-nu40 rounded-lg inline-block px-3 py-3 cursor-pointer">
                  <LuPencilLine className="text-[24px]" />
                </span>
              </Link>

              <button onClick={() => handleDelete(_id)}>
                <span className="text-nu10 bg-nu90 rounded-lg inline-block px-3 py-3 cursor-pointer">
                  <MdDelete className="text-[24px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
