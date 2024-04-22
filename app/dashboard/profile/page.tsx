export default function Profile() {
  return (
    <>
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-xl md:text-2xl">Personal Information</h3>
        </div>
        <div className="flex justify-between bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>First Name</p>
          <p className={` text[12px] truncate  `}>Middle Name</p>
          <p className={` text[12px] truncate  `}>Last Name</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>Mithlesh</p>
          <p className={` text[12px] truncate  `}>Kumar</p>
          <p className={` text[12px] truncate  `}>Patil</p>
        </div>
        <div className="flex justify-between  bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>Date of birth </p>
          <p className={` text[12px] truncate  `}>First Language</p>
          <p className={` text[12px] truncate  `}>Country of origin</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>27/09/2003</p>
          <p className={` text[12px] truncate  `}>English</p>
          <p className={` text[12px] truncate  `}>India</p>
        </div>
        <div className="flex justify-between  bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>Marital Status </p>
          <p className={` text[12px] truncate  `}>Gender</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>Single</p>
          <p className={` text[12px] truncate  `}>Male</p>
        </div>
      </div>
      <div className=" mt-6 rounded-xl bg-gray-50 p-2 shadow-sm ">
        <div className="flex p-4">
          <h3 className="ml-2 text-xl md:text-2xl">Address</h3>
        </div>
        <div className="flex justify-between bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>Address</p>
          <p className={` text[12px] truncate  `}>City/Town</p>
          <p className={` text[12px] truncate  `}>State</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>Gali no 1, Theke ke peeche  </p>
          <p className={` text[12px] truncate  `}>Ranchi</p>
          <p className={` text[12px] truncate  `}>Jharkhand</p>
        </div>
        <div className="flex justify-between  bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>Country</p>
          <p className={` text[12px] truncate  `}>Zip Code</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>India</p>
          <p className={` text[12px] truncate  `}>560098</p>
        </div>
        <div className="flex justify-between  bg-white  px-4 py-3 text-gray-500  ">
          <p className={` text[12px] truncate  `}>Email </p>
          <p className={` text[12px] truncate  `}>Phone</p>
        </div>
        <div className="flex justify-between px-4   py-2   ">
          <p className={` text[12px] truncate  `}>mtpatil@gmail.com</p>
          <p className={` text[12px] truncate  `}>+91 - 9876512345</p>
        </div>
      </div>
    </>
  );
}
