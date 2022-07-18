import React from "react";
import _ from "lodash";

const Pagination = ({itemsCount, pageSize}) => {
    const pageCount = Math.ceil(itemsCount/pageSize);
    if(pageCount === 1) return null;
    const pages =_.range(1, pageCount+1)
    console.log(pages)

    return <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li className="page-item" key={"page" + page}>
                            <a className="page-link">{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
    
}
 
export default Pagination;