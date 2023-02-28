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
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-20 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
             <span className='text-md'>Enhanced Single Registry</span>
            </Link>
          </div>
          <div className="mt-10 ">
          <ul class="mt-8">
               <div className='my-5 mt-12 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/'>SUMMARY</Link></div>
               <div className='my-5  text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/introduction'>INTRODUCTION</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/evolutionofsprse'>Evolution Of Kenya Social Protection Right</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/esrdevelopment'>Development Of ESR</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/operationalofesr'>ESR Operational Processes</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/institutionalarrangment'>ESR Institutional Arrangements</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/esrkeysucessfactors'>ESR Key Success Factors</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/lessonslearntandpractices'>Lessons Learnt and Best Practices</Link></div>
               <div className='my-5 text-md hover:bg-gray-200 font-semibold transition-all-1 rounded-md px-2 py-1'><Link to='/conclusion'>Conclusion</Link></div>
        </ul>
      </div>
      </>
      )}
    </div>
  );
};

export default Sidebar;