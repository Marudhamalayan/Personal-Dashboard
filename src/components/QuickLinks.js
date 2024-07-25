import React, { useState } from 'react';
import useStore from '../store';
import { PlusIcon, XIcon } from '@heroicons/react/solid'; 


const QuickLinksDropdown = () => {
  const [newLink, setNewLink] = useState(''); // State for new link input
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const quickLinks = useStore((state) => state.quickLinks);
  const addLink = useStore((state) => state.addLink);
  const removeLink = useStore((state) => state.removeLink);

  const handleAddLink = () => {
    if (newLink.trim()) { // Check if new link is not empty
      addLink(newLink.trim()); // Add new link to store
      setNewLink(''); // Reset input field
      setIsModalOpen(false); // Close modal
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
        className="flex items-center p-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        Quick Links
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg">
          <ul className="p-2">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex justify-between items-center p-1 border-b border-gray-300 dark:border-gray-700">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{link}</a>
                <XIcon
                  onClick={() => removeLink(link)}
                  className="ml-2 w-5 h-5 text-red-500 cursor-pointer"
                />
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on button click
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Add Link
          </button>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Add a New Link</h2>
            <input
              type="text"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)} // Update input field
              placeholder="Enter link URL"
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleAddLink}
                className="p-2 bg-blue-500 text-white rounded"
              >
                <PlusIcon className="w-5 h-5 inline" />
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)} // Close modal on button click
                className="p-2 bg-red-500 text-white rounded"
              >
                <XIcon className="w-5 h-5 inline" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLinksDropdown;
