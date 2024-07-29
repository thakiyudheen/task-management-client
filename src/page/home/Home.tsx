// import React, { lazy, Suspense } from 'react';
// const Sidebar = lazy(() => import('../../component/navigations/Sidebar'));
// const Dashboard = lazy(() => import('../../component/home/Dashbord'));
// const BottomNav = lazy(() => import('../../component/navigations/bottomNav'));

// const LoadingFallback = () => <div className="text-center p-4">Loading...</div>;

// type Props = {}

// const Home = (props: Props) => {
//   return (
//     <div className="flex min-h-screen w-full font-Poppins md:p-4 bg-gray-100">
//       <Suspense fallback={<LoadingFallback />}>
//         <Sidebar />
//       </Suspense>
      
//       <Suspense fallback={<LoadingFallback />}>
//         <Dashboard />
//       </Suspense>
      
//       <Suspense fallback={<LoadingFallback />}>
//         <BottomNav />
//       </Suspense>
//     </div>
//   )
// }

// export default Home;
import React from 'react';
import Sidebar from '../../component/navigations/Sidebar';
import Dashboard from '../../component/home/Dashbord';
import BottomNav from '../../component/navigations/bottomNav';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full font-Poppins md:p-4 bg-gray-100">
      <Sidebar />
      <Dashboard />
      <BottomNav />
    </div>
  )
}

export default Home;
