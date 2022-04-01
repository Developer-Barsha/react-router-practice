import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='flex gap-10 home'>
            <div className='m-5 my-auto p-5 text'>
                <h1 className='text-3xl my-3 text-violet-800'>Welcome to my Website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod fugiat ipsam qui officiis architecto hic fuga, quas aut sequi inventore minus impedit est sint ullam, ducimus dignissimos voluptatem repellat ipsa consequatur. Doloribus quis ad cupiditate delectus blanditiis explicabo pariatur autem, amet saepe nesciunt officiis consequatur, sunt nisi doloremque tempora.</p>
            </div>
            <div className='m-5 my-auto p-5'>
                <img src="https://static.vecteezy.com/system/resources/previews/002/404/821/original/girl-working-at-her-home-office-flat-illustration-vector.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;