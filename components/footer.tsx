import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold">Adam Samko</h2>
                <p className="mt-2">Frontend Engineer</p>
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#experience" className="hover:underline">Experience</a></li>
                    <li><a href="#education" className="hover:underline">Education</a></li>
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div className="text-right">
                <p>7/54-56 Meeks St, Kingsford, Sydney, 2032 NSW, Australia</p>
                <p>Phone: 0420394560</p>
                <p>Email: samko.adam0@gmail.com</p>
                <p><a href="https://www.linkedin.com" className="text-blue-400 hover:underline">LinkedIn</a></p>
            </div>
        </div>
        <div className="mt-8 text-center text-sm">
            &copy; 2024 Adam Samko. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer