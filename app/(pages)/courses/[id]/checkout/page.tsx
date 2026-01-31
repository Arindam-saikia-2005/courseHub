"use client"

export default function Page({ courseId } : {courseId : string}) {

   async function buyCourse() {
    
     const orderRes = await fetch("/api/payment/create-order",{
      method:"POST",
      body:JSON.stringify({courseId})
     })
     const order = await orderRes.json()

     const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: "INR",
      name: "Course Platform",
      description: "Course Purchase",
      order_id: order.id,
      handler: async function (response: any) {
        await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...response,
            courseId,
          }),
        });

        alert("Payment successful!");
        window.location.reload();
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();

   }


  return (
    <div className="bg-[#f9fafb] min-h-screen w-full p-5 md:p-10">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-wrap justify-center gap-6 w-full">

          {/* Course Card */}
          <div className="bg-white rounded-2xl flex flex-col border border-gray-200 p-5 gap-4 shadow-sm w-full md:w-[48%]">
            <img
              className="w-full h-55 md:h-[305px] rounded-2xl object-cover"
              src="/course-image.jpg"
              alt="course-image"
            />

            <h3 className="text-2xl font-bold tracking-tight text-[#001959]">
              100xSchool Combined Bootcamp
            </h3>

            <p className="text-gray-600">Web dev (Every Friday)</p>
            <p className="text-gray-600">Devops (Every Friday)</p>
            <p className="text-gray-600">...</p>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full md:w-[48%] space-y-5">
            <h3 className="text-xl font-bold text-[#001959]">
              Purchase Details
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Payment Currency</p>
                <p className="text-[#001959] font-medium">INR</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-600">Price (Including GST)</p>
                <p className="text-[#001959] font-medium">₹5,999</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-600">Net Discount</p>
                <p className="text-[#001959] font-medium">₹0</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#001959] font-semibold">Total</p>
                <p className="text-[#001959] text-2xl font-bold">₹5,999</p>
              </div>
            </div>

            <button onClick={buyCourse} className="bg-[#001959] hover:bg-[#001540] transition px-4 py-3 w-full text-white rounded-2xl font-semibold">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
