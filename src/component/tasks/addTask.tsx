// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// interface AddTaskModalProps {
//   isOpen: boolean;
//   onClose: any;
//   onAdd: any ;
// }

// interface FormValues {
//   task: string;
//   date: string;
// }

// const validationSchema = Yup.object().shape({
//   task: Yup.string()
//     .required('Task is required')
//     .min(3, 'Task must be at least 3 characters')
//     .max(100, 'Task must not exceed 100 characters'),
//   date: Yup.date()
//     .required('Date is required')
//     .min(new Date(), 'Date cannot be in the past'),
// });

// const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAdd }) => {
//   if (!isOpen) return null;

//   const initialValues: FormValues = {
//     task: '',
//     date: '',
//   };

//   const handleSubmit = (values: FormValues, { resetForm }: any) => {
//     console.log('the datas',values)
//     onAdd(values);
//     resetForm();
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg p-8 w-full max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Add Task</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             &times;
//           </button>
//         </div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched }) => (
//             <Form>
//               <div className="mb-4">
//                 <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
//                   Task
//                 </label>
//                 <Field
//                   type="text"
//                   id="task"
//                   name="task"
//                   className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     errors.task && touched.task ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                 />
//                 <ErrorMessage name="task" component="small" className="text-red-500  mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
//                   Date
//                 </label>
//                 <Field
//                   type="date"
//                   id="date"
//                   name="date"
//                   className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     errors.date && touched.date ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                 />
//                 <ErrorMessage name="date" component="small" className="text-red-500  mt-1" />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-tr to-purple-600 from-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Add
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default AddTaskModal;
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (values: FormValues) => void;
}

interface FormValues {
  task: string;
  date: string;
  completionStatus:boolean;
}

const validationSchema = Yup.object().shape({
  task: Yup.string()
    .required('Task is required')
    .min(3, 'Task must be at least 3 characters')
    .max(100, 'Task must not exceed 100 characters'),
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
});

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAdd }) => {
  const initialValues: FormValues = {
    task: '',
    date: '',
    completionStatus:false
  };

  const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    onAdd(values);
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 w-full max-w-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Task</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
                      Task
                    </label>
                    <Field
                      type="text"
                      id="task"
                      name="task"
                      className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.task && touched.task ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <ErrorMessage name="task" component="small" className="text-red-500 mt-1" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      className={`w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.date && touched.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <ErrorMessage name="date" component="small" className="text-red-500 mt-1" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-tr to-purple-600 from-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Add
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddTaskModal;
