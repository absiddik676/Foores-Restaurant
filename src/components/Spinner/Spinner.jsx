import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-b-0 border-r-0 border-l-0 h-12 w-12 animate-spin rounded-full border-red-500 shadow-lg">
        <svg className="w-10 h-10" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-1.75-4.04c.18-.24.42-.44.7-.6a6.5 6.5 0 1 0-4.94 0 2.5 2.5 0 1 0 4.94 0zM12 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm-2.5-3.54a2.5 2.5 0 1 0 3.5 0l-.75-.75a1.25 1.25 0 1 0-1.77-1.77l-.75.75z" fill="currentColor" />
        </svg>
      </div>
      <p className="ml-2 text-xl font-semibold text-red-500 animate-pulse">Please wait, loading...</p>
    </div>

  );
};

export default Spinner;