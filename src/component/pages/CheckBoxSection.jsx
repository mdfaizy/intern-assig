import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import image2 from '../../assets/image2.png';
  import image13 from '../../assets/image13.png';
  import image6 from '../../assets/image6.png';
  import image3 from '../../assets/image3.png';
  import image5 from '../../assets/image5.png';
  import image4 from '../../assets/image4.png';
 

const CheckBoxSection = () => {
  
  
  const cardData = [
    {
      title: "Check Box",
      desc:
        "Get UAE Lifetime Golden Visa, Recommend the best Golden Visa category: public investments, real estate investors, doctors, PHDs and so on.",
      image: image2,
    },
    {
      title: "Check Box",
      desc:
        "Hire talent legally with our complete visa processing support, from application typing to stamping and medicals.",
      image: image13,
    },
    {
      title: "Check Box",
      desc:
        "Bring your family to the UAE with dependent visa support for spouses, children, and relatives. We manage all documentation and approvals.",
      image: image6,
    },
    {
      title: "Check Box",
      desc:
        "We assist individuals and families with long-term residency options, including renewals and government processing.",
      image: image4,
    },
    {
      title: "Check Box",
      desc:
        "Fast and hassle-free processing of Emirates ID applications, biometrics, and medical typing, all managed under one roof.",
      image: image3,
    },
    {
      title: "Check Box",
      desc:
        "Secure long-term residency as a business owner or shareholder. We take care of medical tests, Emirates ID, and approvals, ensuring a smooth process.",
      image: image5,
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-[1600px] mx-auto flex flex-wrap gap-8 justify-center px-6">
        {cardData.map((item, index) => (
          <div
            key={index} className="w-[390px] min-h-[230px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between">

            <h2 className="text-lg font-semibold px-2 mt-2 text-[#487C9A]">{item.title}</h2>
            <hr className="-mb-4 border-[#197B7D] px-8 w-full mx-auto" />

            <p className="text-sm text-gray-700 mb-4 px-2 leading-relaxed">{item.desc}</p>

            <div className="flex justify-between items-end">
           
              <button className="px-4 py-2 mb-1 ml-1 border border-[#FFC310] rounded-lg bg-white text-black font-medium flex items-center gap-2 hover:bg-yellow-50 transition">
                Get Golden Visa
                <LuArrowUpRight className="text-lg text-[#FFC310]" />
              </button>

              <img
                src={item.image}
                alt="Icon"
                className="w-14 h-14 object-contain mt-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheckBoxSection;
