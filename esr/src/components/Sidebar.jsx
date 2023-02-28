import React from 'react';
import { Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa '
import { useStateContext } from './ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-20 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
             <span>Enhanced Single Registry</span>
            </Link>
          </div>
          <div className="mt-10 ">
          <ul class="mt-8">
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 mt-20 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/'>INTRODUCTION</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/evolutionofsprse'>Evolution Of Kenya Social Protection Right</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/esrdevelopment'>Development Of ESR</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/operationalofesr'>ESR Operational Processes</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/institutionalarrangment'>ESR Key Success Factors</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/lessonslearntandpractices'>Lessons Learnt and Best Practices</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/lessonslearntandpractices'>Lessons Learnt and Best Practices</Link></div>
               <div onClick={() => setActiveMenu(!activeMenu)}  className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/conclusion'>Conclusion</Link></div>
        </ul>
      </div>
      </>
      )}
    </div>
  );
};

export default Sidebar;