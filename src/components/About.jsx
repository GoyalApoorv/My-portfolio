import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-0 sm:mt-20">

                Hello, I'm Apoorv Goyal, a passionate individual in the field of software development and design. Eager to launch my career by applying my skills to practical projects, I currently specialize in web application development. I find joy in utilizing technologies like React, Tailwind, Node.js, and PostgreSQL to craft engaging and user-friendly solutions.

                Having been part of the 100x Engineers cohort, I've explored advanced concepts and refined my skills, gaining a deeper understanding of software engineering. This experience has enriched my journey without overshadowing my commitment to practical application and continuous learning.
                </p>

                <br />

                {/* <p className="text-xl">
                    I am a recent graduate from IPS Academy, Indore, with a strong passion for software development and design. Eager to embark on my professional journey, I am enthusiastic about applying my skills to real-world projects. My current focus lies in web application development, utilizing technologies such as React, Tailwind, Express JS, and Node JS to create innovative solutions.
                </p> */}
            </div>
        </div>
    );
};

export default About;