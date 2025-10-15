// import React from "react";
// import Rectangle5 from "../../assets/Rectangle5.png"
// import Rectangle6 from "../../assets/Rectangle6.png"
// const WhyChooseUs = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         <div className="justify-center flex ">

//           <div>
//             <div className="w-60 h-72 rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src={Rectangle5}
//               alt="Team"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         <div className="absolute top-32 left-40 w-60 h-72 rounded-2xl overflow-hidden shadow-lg">
//             <img
// src={Rectangle6}
// alt="Building"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           </div>

//           <div>
//             <div>
//               <h1>25</h1>
//               <p>Year of exprince</p>
//             </div>
//             <div className="absolute top-32 left-40 w-60 h-72 rounded-2xl overflow-hidden shadow-lg">
//             <img
// src={Rectangle6}
// alt="Building"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           </div>
//           </div>







//         {/* RIGHT SECTION */}
//         <div>
//           <p className="text-blue-600 uppercase font-semibold text-sm tracking-widest mb-2">
//             Why Choose Us
//           </p>

//           <h2 className="text-4xl font-extrabold leading-snug mb-4 text-gray-900">
//             We Make Your Golden Visa <br /> Journey Easy, Quick, And Reliable
//           </h2>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             At XYZ Business Setup Services, we make your Visa journey easy,
//             quick, and reliable with dedicated experts and proven processes.
//           </p>

//           {/* Experience + Cards */}
//           <div className="flex flex-wrap items-start gap-6 mb-8">
//             {/* Experience Box */}
//             <div className="bg-yellow-400 text-black font-bold text-center rounded-xl p-6 w-36 shadow-md">
//               <h1 className="text-4xl font-extrabold">25</h1>
//               <p className="text-sm uppercase mt-2">Years of experience</p>
//             </div>

//             {/* Two Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
//               {/* Card 1 */}
//               <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
//                 <div className="text-yellow-500 text-3xl mb-3">📘</div>
//                 <h3 className="font-bold text-lg mb-2 text-gray-900">
//                   Passport Plus
//                 </h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>✔ Deep Expertise in Immigration</li>
//                   <li>✔ Customizable Visa Solutions</li>
//                 </ul>
//               </div>

//               {/* Card 2 */}
//               <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
//                 <div className="text-yellow-500 text-3xl mb-3">🌍</div>
//                 <h3 className="font-bold text-lg mb-2 text-gray-900">
//                   Global Standard
//                 </h3>
//                 <ul className="text-gray-600 text-sm space-y-1">
//                   <li>✔ Dedicated Support Team</li>
//                   <li>✔ Strong Government Relations</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Read More Button */}
//           <div className="flex items-center gap-6">
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md transition">
//               Read More →
//             </button>

//             <div>
//               <p className="text-gray-500 text-sm">Need Urgent Legal Help?</p>
//               <p className="font-bold text-gray-900">
//                 Call +97 <br />
//                 1503578847
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



import Rectangle8 from "../../assets/Rectangle8.png";
import Rectangle9 from "../../assets/Rectangle9.png";
import Group from '../../assets/Group.png'
import Frame from '../../assets/Frame.png'
import Group1 from '../../assets/Group1.png'
import Group2 from '../../assets/Group2.png'
import { BsCheck2 } from "react-icons/bs";
const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Image stack + Experience */}
        <div className="flex justify-center items-center gap-4">
          {/* Bottom image */}
          <div>
            <div className=" rounded-2xl ">
              <img
                src={Rectangle8}
                alt="Team"
                className="w-[250px] h-[337px] object-cover"
              />
            </div>
            <div className="mt-4 w-[192px] h-[192px] rounded-full overflow-hidden shadow-xl border-2 border-yellow-500">
              <img
                src={Group}
                alt="Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="bg-yellow-400 flex justify-between  text-white mb-4 font-bold text-center rounded-xl p-6 w-[264px]">
              <h1 className="text-4xl font-extrabold">25</h1>
              <p className="text-sm uppercase mt-2 w-[200px]">Years of experience</p>
            </div>
            <div className="top-12 left-32  rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={Rectangle9}
                alt="Building"
                className="w-[264px]  h-[464px] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={Frame} alt="Icon" className="w-8 h-8 bg-[#3790AE]" />
            <p className=" uppercase font-semibold text-sm  text-[#3790AE] tracking-widest">
              Why Choose Us
            </p>
          </div>


          <h2 className="text-3xl font-extrabold leading-snug mb-4 text-gray-900">
            We Make Your Golden Visa <br /> Journey Easy, Quick, And Reliable
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            At XYZ Business Setup Services, we make your Visa journey easy,
            quick, and reliable with dedicated experts and proven processes.
          </p>

          <div className="flex flex-wrap items-start gap-6 mb-8">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              
              <div className="border border-gray-200 rounded-2xl p-5transition">
                <div className="flex  gap-2 mb-3 text-3xl justify-items-start"><img src={Group1} alt="" className="h-10" />

                  <h3 className="font-bold text-lg mb-2 text-[#3790AE]">
                    Passport Plus
                  </h3>
                </div>

                <ul className="text-gray-600 text-sm space-y-1">
                  <li className="flex"><BsCheck2 className="mr-2 text-amber-400" /> Deep Expertise in Immigration</li>
                  <li className="flex"><BsCheck2 className="mr-2  text-amber-400" /> Customizable Visa Solutions</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5  transition">
                <div className="flex  gap-2 mb-3 text-3xl">
                  <img src={Group2} alt="Global Icon" className="w-8 h-8" />
                  <h3 className="font-bold text-lg text-[#3790AE]">
                    Global Standard
                  </h3>
                </div>

                <ul className="text-gray-600 text-sm space-y-1">
                  <li className="flex"><BsCheck2 className="mr-2  text-amber-400" /> Dedicated Support Team</li>
                  <li className="flex"><BsCheck2 className="mr-2  text-amber-400" /> Strong Government Relations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-black border-yellow-400 border-1  px-6 py-2 rounded-full font-semibold flex items-center gap-2">
              Read More →
            </button>

            <div>
              <p className="text-gray-500 text-sm">Need Urgent Legal <br /> Help?</p>
              <p className="font-bold text-black">
                Call +97 <br />
                1503578847
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
