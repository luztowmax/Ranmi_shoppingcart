import React, { useState } from 'react';
import './App.css';
import SearchComponents from './components/SearchComponents';
import ShowCourseComponents from './components/ShowCourseComponents';
import UserCartComponents from './components/UserCartComponents';

function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
        name: 'Ranmi T-shirt', 
        price: 499, 
        image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
        },
        { id: 2, 
        name: 'Ranmi Bag', 
        price: 699, 
        image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
        },
        { id: 3, 
        name: 'Ranmi Hoodie', 
        price: 799, 
        image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
        }
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (RanmiCourse) => {
        const alreadyCourses = cartCourses
                            .find(item => item.product.id === RanmiCourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === RanmiCourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: Ranmicourse, quantity: 1}]);
        }
    };

    const deleteCourseFromCartFunction = (RanmiCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== RanmiCourse.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses
            .reduce((total, item) => 
                        total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="App">
            <SearchComponents searchCourse={searchCourse} 
                            courseSearchUserFunction=
                                {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponents
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />

                <UserCartComponents
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}

export default App;