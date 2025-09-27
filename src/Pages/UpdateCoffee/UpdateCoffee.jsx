import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, url } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.number.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.cate.value;
    const details = form.details.value;
    const url = form.url.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      url,
    };
    console.log(newCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-nu10">
        <div className="container-2 bg-nu10">
          <div className="py-30 flex items-center justify-center">
            <form
              onSubmit={handleUpdateCoffee}
              className="bg-nu105 rounded-2xl px-10 py-10 w-full space-y-4"
            >
              <h2 className="font-bold text-center">Update Coffee</h2>

              {/* Email */}
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Coffee Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter coffee name"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="number"
                      defaultValue={quantity}
                      placeholder="Enter coffee chef"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Supplier Name
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter coffee supplier"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Taste
                    </label>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter coffee taste"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Category
                    </label>
                    <input
                      type="text"
                      name="cate"
                      defaultValue={category}
                      placeholder="Enter coffee category"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                      Details
                    </label>
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Enter coffee details"
                      className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="url"
                  defaultValue={url}
                  placeholder="Enter photo URL"
                  className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-nu80 text-nu20 py-2 rounded-xl hover:bg-nu104 duration-500 hover:text-nu20 font-bold"
              >
                Update Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
