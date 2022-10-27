import React from 'react';
import { toast } from 'react-toastify';

const CheckOut = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const number = form.number.value;
        toast.success('SuccessFully Got Your Premium access', { autoClose: 1000 })
        form.reset()
        console.log(email, name, number);
     

    }

    return (
        <div className="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
            <div className="col-span-9 lg:col-span-8 xl:col-span-9 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12">

                <h3 className="font-semibold text-gray-800 text-4xl mt-2">Checkout</h3>

                <div className="mt-7 lg:mt-20">
                    <p className="font-normal text-sm text-gray-600 mb-3">Your details</p>
                    <h3 className="text-2xl text-gray-800 font-medium">Enter your details</h3>

                    <form onSubmit={handleSubmit} className="mt-8" autoComplete="off">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <input aria-label="emailAddress" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="email" name="email" id="email" placeholder="Email address" />

                            <input aria-label="yourName" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="name" id="YourName" placeholder="Your name" />

                            <input aria-label="phoneNumber" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="number" id="phoneNumber" placeholder="Phone Number" />
                        </div>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white p-4 text-lg my-3 mt-10 w-full md:w-auto"><input style={{cursor: 'pointer'}} type="submit" value="Proceed to shipping" /></button>
                    </form>
                </div>

 
            </div>



        </div>
    );
};

export default CheckOut;