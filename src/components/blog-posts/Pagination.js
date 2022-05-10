import React from 'react';
import GatsbyLink from 'gatsby-link';

const Pagination = ({ numPages, currentPage }) => {

  let pageArray = [];
  for (let i = 1; i <= numPages; i++) {
    pageArray[i] = i;
  }

  return (
    <div>
      <ul>
        {currentPage !== 1 && (
          <li>
            <GatsbyLink to={current === 2 ? 'blog' : `blog/${currentPage - 1}`}>
              Previous
            </GatsbyLink>
          </li>
        )}
        {pageArray.map((pageNum) => (
          <li key={`pageNum_${pageNum}`}>
            <GatsbyLink to={pageNum === 1 ? 'blog' : `blog/${pageNum}`}>
              {pageNum}
            </GatsbyLink>
          </li>
        ))}
        {currentPage !== numPages && (
          <li>
            <GatsbyLink to={`/blog/${currentPage + 1}`}>
              Next
            </GatsbyLink>
          </li>
        )}
      </ul>
    </div>
  )

}

export default Pagination;

