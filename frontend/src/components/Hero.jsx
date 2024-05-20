import React from 'react'
import heroimg from "../assets/hero-img.png"
import aboutimg from "../assets/about-img.png"
const Hero = () => {
    return (
        <div>
            {/* bootstrap */}
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-12">
                        <div class="mt-5">
                            <h1>HEADING 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis,
                                laborum excepturi eius dicta eos reiciendis omnis iusto nulla? Iste nostrum minus,
                                mollitia necessitatibus est rerum! Assumenda iure consequuntur non.
                            </p>
                            <button className='hero-btn'>Learn More</button>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="">
                            <img src={heroimg} alt='hero' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' mt-5 afters-tag'>
                <h1 className='text-center'>What is AfterSchool?</h1>
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-12">
                        <div class="mt-5">
                            <h1>HEADING 2</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis,
                                laborum excepturi eius dicta eos reiciendis omnis iusto nulla? Iste nostrum minus,
                                mollitia necessitatibus est rerum! Assumenda iure consequuntur non.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="">
                            <img src={aboutimg} alt='hero' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero