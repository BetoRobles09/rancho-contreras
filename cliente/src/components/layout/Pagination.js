import React from 'react'

const Pagination = ({ totalPosts, postPerPages, paginate }) => {
  const number = Math.ceil(totalPosts / postPerPages)
  const pageNumbers = Array.from(Array(number).keys())

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className='page-item'>
            <button onClick={()=> paginate(page + 1)} className='page-link'>{page + 1}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
