import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Typed from 'typed.js';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';

const Home = () => {
    const typedElement = useRef(null);
    const [issuedDate, setIssuedDate] = useState(null);

    useEffect(() => {
        const sentense = {
            strings: [
                'Join the <span>Green</span> Revolution',
                'Empower Your <span>Eco</span> Journey',
                '<span>Green</span> Choices, Brighter Future'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
            smartBackspace: true,
        };

        const typed = new Typed(typedElement.current, sentense);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <Header />

            <section className='hero-section'>
                <img src="assets/images/hero-img1.svg" className='hero-img animate__animated animate__fadeIn' alt="" />

                <img src="assets/images/clouds-img.svg" className='hero-dec-img' alt="" />
                <img src="assets/images/leafe.svg" className='hero-dec-img2' alt="" />
                {/* <img src="assets/images/cloud-img2.svg" className='hero-dec-img cloud-img2' alt="" /> */}
                {/* <img src="assets/images/cloud-img3.svg" className='hero-dec-img cloud-img3' alt="" />
                <img src="assets/images/cloud-img4.svg" className='hero-dec-img cloud-img4' alt="" />
                <img src="assets/images/cloud-img5.svg" className='hero-dec-img cloud-img5' alt="" />
                <img src="assets/images/cloud-img6.svg" className='hero-dec-img cloud-img6' alt="" />
                <img src="assets/images/cloud-img7.svg" className='hero-dec-img cloud-img7' alt="" />
                <img src="assets/images/cloud-img8.svg" className='hero-dec-img cloud-img8' alt="" />
                <img src="assets/images/cloud-img9.svg" className='hero-dec-img cloud-img9' alt="" /> */}

                <div className="container-md">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <h2 className='hero-title animate__animated animate__fadeInUp' ref={typedElement}></h2>
                            <h3 className='hero-sub-title animate__animated animate__fadeInUp'>Be a Part of the Change - Every Action Counts</h3>
                            <p className='hero-para animate__animated animate__fadeIn animate__slow'>Welcome to Go Green, a community dedicated to making our world a better, greener place. By joining us, you can contribute to meaningful environmental projects, connect with like-minded individuals, and take actionable steps towards sustainability. Sign up today to create an account, log in, and fill out a simple form to start making a difference. Together, we can turn the tide and create a healthier planet for future generations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding overflow-hidden why-section'>
                <div className="container-md">
                    <div className="row">
                        <div className="col-12 col-md-12 my-auto overflow-hidden">
                            <h4 className="section-heading text-white center-heading" data-aos="fade-down">Why Go Green?</h4>
                            <p className='section-para text-light-gray text-center' data-aos="fade-up">
                                Choosing to go green isn't just about following a trend; it's about making a commitment to the future of our planet. Here are compelling reasons why adopting eco-friendly practices and supporting sustainability initiatives are crucial:
                            </p>
                            <div className="why-section-imag-area" data-aos="fade-up">
                                <img src="assets/images/why-go-green-img.svg" className='why-section-image' alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-12 my-auto">
                            <div className="why-content-section w-100">
                                <div className="row why-content-container-area">
                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/environment.png" alt="Environmental Preservation" />
                                                </div>
                                                <h6 className='why-content-title'>Environmental Preservation</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                By reducing our carbon footprint, conserving natural resources, and protecting biodiversity, we safeguard the planet for future generations.
                                            </p>
                                        </article>
                                    </div>

                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/health.png" alt="Health Benefits" />
                                                </div>
                                                <h6 className='why-content-title'>Health Benefits</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                Embracing green living often means cleaner air, water, and environments, leading to improved public health and well-being.
                                            </p>
                                        </article>
                                    </div>

                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/cost.png" alt="Cost Savings" />
                                                </div>
                                                <h6 className='why-content-title'>Cost Savings</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                Energy-efficient technologies and sustainable practices can lower utility bills and operational costs for businesses and households alike.
                                            </p>
                                        </article>
                                    </div>

                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/global.png" alt="Global Impact" />
                                                </div>
                                                <h6 className='why-content-title'>Global Impact</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                Small changes on an individual level add up to significant global impacts, contributing to mitigating climate change and promoting a more resilient ecosystem.
                                            </p>
                                        </article>
                                    </div>

                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container mb-md-0">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/community.png" alt="Community Engagement" />
                                                </div>
                                                <h6 className='why-content-title'>Community Engagement</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                Going green fosters community involvement and collaboration, creating stronger, more sustainable communities.
                                            </p>
                                        </article>
                                    </div>

                                    <div className="col-12 col-md-6" data-aos="fade-up">
                                        <article className="why-content-container mb-0">
                                            <div className="why-content-header">
                                                <div className='why-content-icon-area'>
                                                    <img data-aos="zoom-in" src="assets/images/icons/ethical.png" alt="Ethical Responsibility" />
                                                </div>
                                                <h6 className='why-content-title'>Ethical Responsibility</h6>
                                            </div>
                                            <p className='why-content-para'>
                                                As stewards of the Earth, we have a moral obligation to protect and preserve its natural beauty and resources.
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding overflow-hidden home-about-section' id='about-us'>
                <div className="container-md">
                    <div className="row">
                        <div className="col-12 col-md-6 my-auto">
                            <h4 className="section-heading" data-aos="fade-down">About Go Green</h4>
                            <p className='section-para' data-aos="fade-up">
                                At Go Green, we believe in the power of collective action to create a sustainable future. Founded with the mission to inspire and empower individuals to make environmentally conscious choices, our organization is committed to driving positive change. We focus on a variety of initiatives, from reducing waste and conserving energy to promoting green technologies and protecting natural habitats. Our community is diverse, inclusive, and united by a common goal: to make the world a greener place for future generations.
                            </p>
                            <p className='section-para' data-aos="fade-up">
                                Our journey began with a simple idea: small actions, when multiplied by millions, can transform the world. Today, Go Green is a thriving network of passionate individuals and organizations dedicated to environmental stewardship. We provide resources, support, and opportunities for members to get involved in meaningful projects. Whether you’re a seasoned environmentalist or just starting your green journey, Go Green offers a platform where your contributions matter and your voice can be heard.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 my-auto section-image-area">
                            <img src="assets/images/leafs/leaf (11).svg" className='leaf-dec-img leaf-1' alt="" />
                            <img src="assets/images/leafs/leaf (16).svg" className='leaf-dec-img leaf-2' alt="" />
                            <img src="assets/images/world.svg" className='about-img' data-aos="zoom-out" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding overflow-hidden vision-section' >
                <div className="container-md">
                    <div className="row vis-mis-area">
                        <div className="col-12 col-md-6" data-aos="fade-up-right">
                            <article className='vis-mis-card'>
                                <img src="assets/images/icons/vision.png" data-aos="zoom-in" alt="Vision" />
                                <h3 className='vis-mis-title'>Vision</h3>
                                <h6 className='vis-mis-sub-title'>A Greener, Sustainable World for All</h6>
                                <p className='vis-mis-para'>
                                    Our vision is a future where sustainable living is the norm, where communities coexist harmoniously with nature, and where the Earth’s natural beauty and resources are preserved for generations to come. We see a world where every individual and organization plays a vital role in nurturing the environment, leading to a healthier and more vibrant planet.
                                </p>
                            </article>
                        </div>

                        <div className="col-12 col-md-6" data-aos="fade-up-left">
                            <article className='vis-mis-card'>
                                <img src="assets/images/icons/mission.png" data-aos="zoom-in" alt="Mission" />
                                <h3 className='vis-mis-title'>Mission</h3>
                                <h6 className='vis-mis-sub-title'>Empowering Sustainable Change</h6>
                                <p className='vis-mis-para'>
                                    Our mission is to inspire and empower individuals and communities to embrace sustainable practices and make eco-friendly choices. We aim to educate and provide the necessary resources to promote environmental stewardship, support impactful green projects, and advocate for policies that foster sustainability. Through collective action and community engagement, we strive to create a lasting positive impact on our environment.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <img src="assets/images/leafs/leaf (12).svg" className='section-leaf-dec-img leaf-1' alt="" />
                <img src="assets/images/leafs/leaf (2).svg" className='section-leaf-dec-img leaf-2' alt="" />
            </section>

            <section className='section-padding overflow-hidden' id='contribute'>
                <div className="container-md">
                    <h4 className="section-heading center-heading" data-aos="fade-down">Make Your Contribution</h4>
                    <p className='section-para text-center' data-aos="fade-up">
                        Your contribution plays a vital role in our mission to create a greener planet. By providing details about your efforts, you help us track the impact of our community initiatives and inspire others to join the cause. Please fill out the form below to share your progress and support the Go Green movement.
                    </p>

                    <div className="contribute-form-area">
                        <div className="contribute-form-sub-area">
                            <h6 className='contribute-form--title'>Beneficiary Details</h6>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-md-0">
                                        <label htmlFor="name" className='con-form-label is-required'>Name</label>
                                        <InputText id="name" className='con-form-input'
                                            placeholder='Enter your name...' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-lg-0">
                                        <label htmlFor="school_name" className='con-form-label is-required'>School Name</label>
                                        <InputText id="school_name" className='con-form-input'
                                            placeholder='Enter your school name...' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group">
                                        <label htmlFor="grade" className='con-form-label is-required'>Grade</label>
                                        <InputText id="grade" className='con-form-input'
                                            placeholder='Enter your grade...' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contribute-form-sub-area">
                            <h6 className='contribute-form--title'>Plant Details</h6>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-md-0">
                                        <label htmlFor="plant_name" className='con-form-label is-required'>Plant Name</label>
                                        <InputText id="plant_name" className='con-form-input'
                                            placeholder='Enter the plant name...' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-lg-0">
                                        <label htmlFor="issued_date" className='con-form-label is-required'>Issued Date</label>
                                        <Calendar id="issued_date" value={issuedDate} className='con-form-date-input' onChange={(e) => setIssuedDate(e.value)} dateFormat="dd/mm/yy"
                                            placeholder='DD/MM/YYYY' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="contribute-form-sub-area">
                            <h6 className='contribute-form--title'>Progress & Maintenance</h6>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-md-0">
                                        <label htmlFor="plant_name" className='con-form-label is-required'>Plant Name</label>
                                        <InputText id="plant_name" className='con-form-input'
                                            placeholder='Enter the plant name...' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="con-form-group mb-4 mb-lg-0">
                                        <label htmlFor="issued_date" className='con-form-label is-required'>Issued Date</label>
                                        <Calendar id="issued_date" value={issuedDate} className='con-form-date-input' onChange={(e) => setIssuedDate(e.value)} dateFormat="dd/mm/yy"
                                            placeholder='DD/MM/YYYY' />
                                        <small className='con-form-message'>This field is required</small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home;