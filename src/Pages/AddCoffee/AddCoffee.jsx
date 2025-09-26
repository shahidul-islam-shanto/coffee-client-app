import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-nu10">
        <div className="container-2 bg-nu10">
          <div className="py-30 flex items-center justify-center">
            <form
              onSubmit={handleAddCoffee}
              className="bg-nu105 rounded-2xl px-10 py-10 w-full space-y-4"
            >
              <h1 className="text-xl font-bold text-center">
                Login your account
              </h1>

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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                  required
                  placeholder="Enter photo URL"
                  className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-nu80 text-nu20 py-2 rounded-xl hover:bg-nu104 duration-500 hover:text-nu20 font-bold"
              >
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
