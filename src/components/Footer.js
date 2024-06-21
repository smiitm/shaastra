const Footer = () => {
  return (
    <div className="w-full bg-blue-950 flex flex-col items-center">
      <div className="flex pt-20 space-x-3 justify-center">
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
      </div>
      <div className="pt-5">
        <p className="text-white text-sm font-bold border-b-2 border-gray-500 px-56 pb-6">PREMIER PARTNERS</p>
      </div>
      <div className="flex pt-10 space-x-3 justify-center">
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
      </div>
      <div className="pt-5">
        <p className="text-white text-sm font-bold border-b-2 border-gray-500 px-56 pb-6">GLOBAL PARTNERS</p>
      </div>
      <div className="flex pt-10 space-x-3 justify-center">
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
        <div className="px-24 py-8 bg-slate-400 border rounded-lg"></div>
      </div>
      <div className="pt-5">
        <p className="text-white text-sm font-bold pb-20">OFFICIAL SUPPORTERS</p>
      </div>
      <div className=' w-full bg-blue-950 flex  justify-center items-center text-white text-xs font-bold pb-16 border-b-2'>
        <ul className='flex ' >
          <li className='px-4'>TERMS OF SERVICE</li>
          <li className='px-4'>PRIVACY POLICY</li>
          <li className='px-4'>CAREERS</li>
          <li className='px-4'>RELATED SITES</li>
          <li className='px-4'>ABOUT</li>
        </ul>
      </div>
      <div className="bg-blue-950 text-center">
        <p className="text-3xl text-white font-bold py-4">ICC</p>
        <p className=" text-gray-300 pb-10 ">Copyright 2024 ICC. All rights reserved.</p>
      </div>
    </div>
    
  );
};
export default Footer;