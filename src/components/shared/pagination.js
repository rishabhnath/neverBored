import React, { useState, useEffect } from 'react';

const Pagination = ({ callback, totalCount, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(25);

    useEffect(() => {
        callback(limit, (currentPage - 1) * limit);
    }, [currentPage]);

    return (
        <>
            {/* <select className="form-control w-25" value={limit} onChange={ (event) => limitChangeHandler(event.target.value)}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select> */}
            {children}
            <div className="row pagination-section mt-lg-n2 pt-lg-2 mx-lg-1">
                <div className="col-xl-3 col-lg-3">
                    <p className="font-14px">Showing {limit} of {totalCount} records</p>
                </div>
                <div className="col-xl-9 col-lg-9">
                    <nav className="float-right">
                        <ul className="pagination">
                            <li className={ currentPage === 1 ? "page-item mr-2 d-none" : "page-item mr-2" }>
                                <span className="page-link arrow text-center" onClick={() => setCurrentPage(currentPage - 1)}><i className="fas fa-chevron-left"></i></span>
                            </li>

                            <li className={ currentPage === 1 ? "page-item mr-2 active" : "page-item mr-2" }>
                                <span className="page-link" onClick={() => setCurrentPage(1)}>1</span>
                            </li>
                            <li className={ currentPage === 2 ? "page-item mr-2 active" : "page-item mr-2" }>
                                <span className="page-link" onClick={() => setCurrentPage(2) }>2</span>
                            </li>
                            <li className={ currentPage === 3 ? "page-item mr-2 active" : "page-item mr-2" }>
                                <span className="page-link" onClick={() => setCurrentPage(3) }>3</span>
                            </li>
                            <li className={ currentPage === 4 ? "page-item mr-2 active" : "page-item mr-2" }>
                                <span className="page-link" onClick={() => setCurrentPage(4) }>4</span>
                            </li>
                            <li className={ currentPage === 5 ? "page-item mr-2 active" : "page-item mr-2" }>
                                <span className="page-link" onClick={() => setCurrentPage(5)}>5</span>
                            </li>

                            <li className={ currentPage === 5 ? "page-item mr-2 d-none" : "page-item mr-2" }>
                                <span className="page-link arrow" onClick={() => setCurrentPage(currentPage + 1) }><i className="fas fa-chevron-right"></i></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;
