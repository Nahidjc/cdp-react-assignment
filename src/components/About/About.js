import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className='container'>
            <h4 className="title">About Us</h4>
            <section className='d-flex justify-content-center'>
                <p className="about-me">
                    consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue.
                </p>

            </section>
            <section className="d-flex justify-content-center">
                <hr style={{
                    width: "154px",
                    backgroundColor: '#FF8A00',
                    height: '4px',
                    background: '#FF8A00',
                    borderRadius: '10px'

                }} />
            </section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue. Nullam a laoreet leo. Duis ultricies pulvinar lacus, dictum aliquam tellus consequat eget. Cras convallis accumsan lacus in ultricies. Aliquam accumsan ut tellus id vulputate. Curabitur suscipit lacus justo, vel auctor leo accumsan ut. Nunc pretium tincidunt justo sit amet iaculis. Vestibulum id interdum nisi, non semper ligula. Maecenas eu nibh non dui viverra gravida id quis velit.</p>

            <section>
                <button className='btn button'>READ MORE</button>
            </section>
        </div>
    );
};

export default About;