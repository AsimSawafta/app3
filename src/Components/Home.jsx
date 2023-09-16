
import React, { Component } from 'react';
import Course from './Course';

export default class Home extends Component {
    state = {
        name: 'asim sawafta',
        age: 20,
        src: "assets/download.png",
        courses: [
            {
                id: 1,
                title: 'js',
                description: 'this is js',
                sale: false,
                price: 1000
            },
            {
                id: 2,
                title: 'react',
                description: 'this is react',
                sale: false,
                price: 3000
            },
            {
                id: 3,
                title: 'html',
                description: 'this is html',
                sale: true,
                price: 500
            }
        ]
    }

    deleteCourse = (id) => {
        let myCourse = [...this.state.courses];
        myCourse = this.state.courses.filter((ele) => {
            return ele.id !== id;
        });
        this.setState({ courses: myCourse });
    }

    render() {
        const courses = this.state.courses;
        return (
            <>
                <div className='container'>
                    <div className="row">
                        {
                            courses.map((ele) => {
                                return <Course courseInfo={ele} delete={this.deleteCourse} />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
