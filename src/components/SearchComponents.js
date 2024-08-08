import React from 'react';

function SearchComponents({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Ranmi Shopping Cart</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Ranmi Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}

export default SearchComponents;