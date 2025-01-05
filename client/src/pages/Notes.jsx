import React from 'react';
import { Link } from 'react-router-dom';
import checklogo from '../images/checklogo.png';
import htmlImage from '../images/html.webp';
import cssImage from '../images/css.webp';
import jsImage from '../images/js.webp';
import pythonImage from '../images/python.png';
import cImage from '../images/c.webp';
import dsaImage from '../images/dsa.webp';
import cppImage from '../images/cpp.webp';
import javaImage from '../images/java.png';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const notesData = [
    { imgSrc: htmlImage, title: 'HTML Notes', fileName: 'html.pdf' },
    { imgSrc: cssImage, title: 'CSS Notes', fileName: 'css.pdf' },
    { imgSrc: jsImage, title: 'JavaScript Notes', fileName: 'javascript.pdf' },
    { imgSrc: pythonImage, title: 'Python Notes', fileName: 'python.pdf' },
    { imgSrc: cImage, title: 'C Language Notes', fileName: 'c.pdf' },
    { imgSrc: dsaImage, title: 'DSA Notes', fileName: 'dsa.pdf' },
    { imgSrc: cppImage, title: 'C++ Notes', fileName: 'cpp.pdf' },
    { imgSrc: javaImage, title: 'Java Notes', fileName: 'java.pdf' }
];

const Notes = () => {
    return (
        <>
        <Navbar/>
        <div id="interface">
            <div className="notes-container">
                <div className="notes-heading">
                    <h1>Download Notes</h1>
                </div>
                <div className="notes-boxes">
                    {notesData.map((note, index) => (
                        <div className="notes-box" key={index}>
                            <div className="notes-data">
                                <img src={note.imgSrc} alt={`${note.title} image`} />
                                <h4>{note.title}</h4>
                                <a href={`/static/files/${note.fileName}`} download={note.fileName}>Download Pdf</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
      </>
    );
};

export default Notes;
