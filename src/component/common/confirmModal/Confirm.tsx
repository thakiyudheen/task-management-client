// import React from 'react';

// interface DeleteConfirmationProps {
//   onCancel: any;
//   onConfirm:any ;
//   message : string
// //   adfafd
// }

// const Confirmation: React.FC<DeleteConfirmationProps> = ({ onCancel, onConfirm,message }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-80">
//         <h2 className="text-xl font-semibold mb-2 text-center text-black">Are you sure?</h2>
//         <p className="text-black mb-6 text-center">
//           {message}
//         </p>
//         <div className="flex justify-center">
//           <div>
//           <button
//             onClick={onCancel}
//             className="px-4 py-1 mr-2 border border-purple-700 rounded-md text-purple-700 hover:bg-purple-700 transition-all duration-300 hover:text-white"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="px-6 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700"
//           >
//             yes
//           </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Confirmation;
import React from 'react';
import { motion } from 'framer-motion';

interface DeleteConfirmationProps {
  onCancel: () => void;
  onConfirm: () => void;
  message: string;
}

const Confirmation: React.FC<DeleteConfirmationProps> = ({ onCancel, onConfirm, message }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-80"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-2 text-center text-black">Are you sure?</h2>
        <p className="text-black mb-6 text-center">
          {message}
        </p>
        <div className="flex justify-center">
          <div>
            <button
              onClick={onCancel}
              className="px-4 py-1 mr-2 border border-purple-700 rounded-md text-purple-700 hover:bg-purple-700 transition-all duration-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Yes
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Confirmation;
