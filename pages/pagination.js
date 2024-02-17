import React, { useState } from 'react';

const YourComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentRecords.map((record) => (
        <div key={record.id}>
          {/* Display your record here */}
          <p>{record.name}</p>
        </div>
      ))}
      {/* Pagination */}
      <ul>
        {data.map((_, index) => (
          <li key={index}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
