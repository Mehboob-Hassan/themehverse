import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-image">
                    <img
                        src="/images/businessMan.webp"
                        alt="Our Journey"
                        className="about-img"
                    />
                </div>
                <div className="about-text">
                    <h1 className="about-heading">Igniting Digital Brilliance</h1>
                    <p className="about-paragraph">
                        At <strong>MEHVERSE</strong>, we craft cutting-edge solutions in website development,
                        digital marketing, and SEO to help your business shine brighter.
                    </p>
                    <p className="about-paragraph">
                        With a passion for innovation and results, we deliver personalized strategies
                        designed to transform your digital presence and drive growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;


