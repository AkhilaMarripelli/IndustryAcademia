import React from 'react';

const AdminDashboard = () => {
  const handleButtonClick = () => {
    // URL of the Excel file located in the public directory
    const fileUrl = '/jpmcxl.xlsx';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute for the link
    link.setAttribute('download', 'jpmcxl.xlsx');

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up by removing the link from the body
    document.body.removeChild(link);
  };

  return (
    <div className="container d-flex flex-column align-items-center vh-100">
      <h1 className="text-center mx-auto justify-content-center border-2 p-2 border-cyan-300 mt-4 bg-cyan-100 rounded-lg">Jaldhaara Foundation</h1>
      <button className="btn btn-outline-primary text-lg mt-3" onClick={handleButtonClick}>DONORS</button>
      <div className="mt-auto mb-4">
        <button className="btn btn-outline-primary text-lg" onClick={handleButtonClick}>Download</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
