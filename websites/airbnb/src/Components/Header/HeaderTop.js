import React from 'react'
import './Header.css'
function HeaderTop() {
    return (
        <div className='header-top'>
            <div className="search-area">
                <div className="search-icon">
                    <svg className='search-icon-svg' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                        <path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path>
                    </svg>
                </div>
                <div className="text-area">
                    <h3>Where to?</h3>
                    <div className="any-text">
                        <p>Anywhere</p>
                        <p>Any week</p>
                        <p>Add Guest</p>
                    </div>
                </div>
                <div className="filter">
                    <svg className='filter-svg' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                        <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop