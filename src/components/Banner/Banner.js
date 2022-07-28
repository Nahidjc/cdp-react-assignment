import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner my-3">
            <div className="container d-flex h-100">
                <div className="row ">
                    <div className="m-auto text-white col-md-7 gy-5 ">

                        <h1>consectetur adipiscing elit. Sed eu pharetra.</h1>
                        <p>consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue.</p>

                        <button className="btn button"
                        >CONTACT US</button>
                    </div>
                    <div class="m-auto col-md-4">


                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;