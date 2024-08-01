import React from 'react';

interface DeleteConfirmationProps {
  onCancel: () => void;
  onConfirm: () => void;
  message : string
//   adfafd
}

const Confirmation: React.FC<DeleteConfirmationProps> = ({ onCancel, onConfirm,message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-semibold mb-2">Are you sure?</h2>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;