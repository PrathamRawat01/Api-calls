import React from 'react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex flex-col md:flex-row justify-center gap-2 mt-6 text-center p-7">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-full md:w-32 hover:scale-x-110 transition-300 px-4 py-2 mx-2 rounded text-black ${currentPage === 1 ? 'text-center text-button border-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300 cursor-not-allowed' : 'text-text-plain bg-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300'}`}
            >
                ← Previous
            </button>


            {/* Sir by this code we can use pages button also for eg: if user want to go from 1st to 5th page he/she can directly click on them (it shows number of pages that are avilable on API) */}


            {/* {pageNumbers.map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition-300 flex lg:flex-row items-center justify-center mt-2 rounded-full text-black ${page === currentPage ? 'text-center text-button border-button border-2 rounded-full hover:scale-110 transition duration-300 cursor-not-allowed' : 'text-text-plain bg-button border-button border-2 rounded-full hover:scale-110 transition duration-300'}`}
                >
                    {page}
                </button>
            ))} */}


            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-full md:w-32 hover:scale-x-110 transition-300 px-4 py-2 mx-2 rounded text-black ${currentPage === totalPages ? 'text-center text-button border-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300 cursor-not-allowed' : 'text-text-plain bg-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300'}`}
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;
