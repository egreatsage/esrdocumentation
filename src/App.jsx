import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar,Sidebar} from './components';
import { Introduction,SPRSEvolution,ESRDevelopment,ESROperational,ESRInstArrangments,ESRSucesFactors,LessonsAndPractices,Conclusion } from './pages';
import './App.css';
import { useStateContext } from './components/ContextProvider';

const App = () => {
  const {activeMenu} = useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>   
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white shadow-lg ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg shadow-lg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg shadow-lg dark:bg-main-dark-bg navbar w-full mb-10  ">
              <Navbar />
            </div>
            <div>
            

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Introduction />)} />
               

                {/* pages  */}
                <Route path="/evolutionofsprse" element={<SPRSEvolution />} />
                <Route path="/esrdevelopment" element={<ESRDevelopment/>} />
                <Route path="/operationalofesr" element={<ESROperational />} />
                <Route path="/institutionalarrangment" element={<ESRInstArrangments />} />
                <Route path="/esrkeysucessfactors" element={<ESRSucesFactors />} />
                <Route path="/lessonslearntandpractices" element={<LessonsAndPractices />} />
                <Route path="/conclusion" element={<Conclusion />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;