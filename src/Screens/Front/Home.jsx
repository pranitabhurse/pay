import React from "react";
import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Offcanvas from 'react-bootstrap/Offcanvas';
import code from '../../assets/images/code.jpg';
import contact from '../../assets/images/contact-gif.gif';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import services from '../../assets/images/services-img.png';
import transferimg from '../../assets/images/transfer.png';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";


const Home = () => {
    const [faq1, setOpen1] = useState(true);
    const [faq2, setOpen2] = useState(false);
    const [faq3, setOpen3] = useState(false);
    const [faq4, setOpen4] = useState(false);
    const [faq5, setOpen5] = useState(false);
    const [faq6, setOpen6] = useState(false);

    const clickfaq1 = () => {
        setOpen1(!faq1);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }

    const clickfaq2 = () => {
        setOpen2(!faq2);
        setOpen1(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq3 = () => {
        setOpen3(!faq3);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq4 = () => {
        setOpen4(!faq4);
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq5 = () => {
        setOpen5(!faq5);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen3(false);
        setOpen6(false);
    }
    const clickfaq6 = () => {
        setOpen6(!faq6);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen5(false);
        setOpen3(false);
    }


    function gettronweb(){
        console.log('print')
        console.log(window.tronWeb.defaultAddress.base58);
        
        if(window.tronWeb && window.tronWeb.defaultAddress.base58){
            document.write("Yes, catch it:",window.tronWeb.defaultAddress.base58)
            console.log(window.tronWeb.defaultAddress.base58);
        }
    }
    // useEffect(()=>{
    
    //   gettronweb();
      
    // },[])

 

    return (

        <section className="wrapper">
            <div className="top-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="link-info">
                                <p><span class="material-symbols-outlined">home</span> <span className="top-name">Full Address</span> &nbsp; &nbsp; <span class="material-symbols-outlined"> call</span><span className="top-name"> +91 987654321 </span></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-social">
                                <ListGroup horizontal>
                                    <ListGroup.Item><i class="fab fa-facebook"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-google"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-twitter"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-instagram"></i></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-slider">
                {/* <img  src={banner}/> */}
                <div className="top-bar">
                    {['xl'].map((expand) => (
                        <Navbar key={expand} expand={expand}>
                            <Container>
                                <Navbar.Brand href="#">PAYUGURU</Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            PAYUGURU
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="flex-grow-1 pe-3 navbar-options"></Nav>
                                        <Nav className="navbar-options">
                                            <Nav.Link href="/">Home</Nav.Link>
                                            <Nav.Link href="#action2">About</Nav.Link>
                                            <Nav.Link href="#action2">Features</Nav.Link>
                                            <Nav.Link href="#action2">Services</Nav.Link>
                                            <Nav.Link href="#action2">Pricing</Nav.Link>
                                            <Nav.Link href="#action2">API</Nav.Link>
                                            <Nav.Link href="#action2">Contact Us</Nav.Link>
                                            <Button variant="outline-success">Register</Button>
                                            <Button variant="outline-success">Login</Button>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}
                </div>
                

            </div>
            <div className="slider-banner">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={banner2} />
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <Button variant="outline-success" className="api">API Docs</Button>
                            <Button variant="outline-success" className="example-1" data-wow-duration=".75s" data-wow-delay="2s">Contact Our Team</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner1} />
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <Button variant="outline-success" className="api">API Docs</Button>
                            <Button variant="outline-success" className="example-1" data-wow-duration=".75s" data-wow-delay="2s">Contact Our Team</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner3} />
                        <Carousel.Caption>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <Button variant="outline-success" className="api">API Docs</Button>
                            <Button variant="outline-success" className="example-1" data-wow-duration=".75s" data-wow-delay="2s" onClick={gettronweb}>Contact Our Team</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>

                </div> */}
            <div className="about-us">
                <div className="container">
                    <div className="about-heading text-center">
                        <h3>About Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className="about1 flip-card">
                                        <div className="flip-card-inner">
                                            <div className="about-card flip-card-front">
                                                <span class="material-symbols-outlined">real_estate_agent</span>
                                                <h4>Services</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus adipisci quae qui ipsam delectus aperiam perferendis ex,</p>
                                            </div>
                                            <div className="about-card flip-card-back">
                                                <span class="material-symbols-outlined">real_estate_agent</span>
                                                <h4>Services</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="about-card flip-card-front">
                                                <span class="material-symbols-outlined">currency_rupee</span>
                                                <h4>Worry-Free Transaction</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus adipisci quae qui ipsam delectus aperiam perferendis </p>
                                            </div>
                                            <div className="about-card flip-card-back">
                                                <span class="material-symbols-outlined">currency_rupee</span>
                                                <h4>Worry-Free Transaction</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus adipisci quae qui ipsam delectus aperiam perferendis</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flip-card mt-4">
                                        <div className="flip-card-inner">
                                            <div className="about-card flip-card-front">
                                                <span class="material-symbols-outlined">home</span>
                                                <h4>Instant Selltlement</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus adipisci quae qui ipsam delectus aperiam perferendis </p>
                                            </div>
                                            <div className="about-card flip-card-back">
                                                <span class="material-symbols-outlined">home</span>
                                                <h4>Instant Selltlement</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel corrupti nostrum aut omnis minima quasi minus adipisci quae qui ipsam delectus aperiam perferendis ex, rerum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, a eos ipsam nostrum ab voluptatum! </h1>
                                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus quasi magnam reprehenderit nihil, a ipsa commodi aspernatur perferendis suscipit illo numquam in voluptas qui, tempore aut necessitatibus est fugiat.</p>
                                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus quasi magnam reprehenderit nihil, a ipsa commodi aspernatur perferendis suscipit illo numquam in voluptas qui, tempore aut necessitatibus est fugiat.</p>
                                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus quasi magnam reprehenderit nihil, a ipsa commodi aspernatur perferendis suscipit illo numquam in voluptas qui, tempore aut necessitatibus est fugiat.</p>
                                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus quasi magnam reprehenderit nihil, a ipsa commodi aspernatur perferendis suscipit illo numquam in voluptas qui, tempore aut necessitatibus est fugiat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="services">
                <div className="container">
                    <div className="services-body">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="services-images">
                                    <img src={services} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="services-heading">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand"><h3>Payment Solutions Designed for</h3></AnimationOnScroll>
                                </div>
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    <div className="services-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>eCommerce Platforms</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>SaaS Platforms</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>Service Providers</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>Exporters and Importers</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="transfer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="transfer-content">
                                <h3>Transfer and Deposite your amount anytime, anywhere in the India</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint, eligendi temporibus dolorum, nam eius atque recusandae, minima aspernatur dolores veritatis enim ducimus ab facilis iste? Atque nisi asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus voluptatem, fuga magnam saepe cumque quam eaque assumenda quidem, ea nisi sapiente voluptate labore. Aperiam deleniti repudiandae inventore quasi voluptatibus.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="transfer-img">
                                <img src={transferimg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="process-steps">
                <div className="process-heading">
                    <h3>Why We Are Different?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, at? Officiis esse voluptatem maxime</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="process-steps-content">
                                <h3>lorem</h3>
                                <p>Create a free account on the PayUGuru website.</p>
                                <h3>Account verification & confirmation</h3>
                                <p>Receive instant online account authentication.</p>
                                <h3>Upload Documents</h3>
                                <p>Complete paperless KYC with minimal documentation.</p>
                                <h3>Go Live</h3>
                                <p>Start accepting payments with one of the best Indian payment gateways.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
    
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="api">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="api-doc">
                                <h3>API & Plugins</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <div className="api-doc-link">
                                    <p><a href="#">Learn More </a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="api-code">
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">  <img src={code} /> </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="container">
                    <div className="faq-heading">
                        <h3>FAQ</h3>
                    </div>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                        <div className="faq-section-block">
                        <Button onClick={clickfaq1} aria-controls="example-collapse-text" aria-expanded={faq1} className="faq-button">
                            Why should I choose PayUGuru ?
                        </Button>
                        <Collapse in={faq1}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolor, neque nobis qui nam totam harum earum obcaecati quas ut ipsam sapiente. Id, eaque! Incidunt voluptatum voluptatibus ab fuga voluptates.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquam nesciunt delectus quae corrupti facere id. Doloremque ab delectus repellat blanditiis, necessitatibus earum unde quaerat laboriosam eligendi iure, illum numquam.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-section-block">
                        <Button onClick={clickfaq2} aria-controls="example-collapse-text" aria-expanded={faq2} className="faq-button">
                            How to get started on PayUGurus?
                        </Button>
                        <Collapse in={faq2}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-section-block">
                        <Button onClick={clickfaq3} aria-controls="example-collapse-text" aria-expanded={faq3} className="faq-button">
                            How long would it take to activate my account?
                        </Button>
                        <Collapse in={faq3}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                            </div>
                        </Collapse>
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <div className="faq-section-block">
                        <Button onClick={clickfaq4} aria-controls="example-collapse-text" aria-expanded={faq4} className="faq-button">
                            How is PayUGuru Gateway different from other payment gateways in India?
                        </Button>
                        <Collapse in={faq4}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-section-block">
                        <Button onClick={clickfaq5} aria-controls="example-collapse-text" aria-expanded={faq5} className="faq-button">
                            Can I start accepting international payments using PayUGurus?
                        </Button>
                        <Collapse in={faq5}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                            </div>
                        </Collapse>
                    </div>
                    <div className="faq-section-block">
                        <Button onClick={clickfaq6} aria-controls="example-collapse-text" aria-expanded={faq6} className="faq-button">
                            What is Payouts?
                        </Button>
                        <Collapse in={faq6}>
                            <div id="example-collapse-text" className="faq-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                            </div>
                        </Collapse>
                    </div>
                    </AnimationOnScroll>
                </div>
            </section>
            <section className="contact-us">
                <div className="contact-heading">
                    <h3>Contact Us</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-image">
                                <img src={contact} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-blocks">
                                        <p>Email Address</p>
                                        <h4>support@payuguru.com</h4>
                                        <div className="contact-icon">
                                            <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">mail</span></AnimationOnScroll>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-blocks">
                                        <p>Mobile Number</p>
                                        <h4>+91 9876543210</h4>
                                        <div className="contact-icon">
                                            <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">call</span> </AnimationOnScroll>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Message</Form.Label>
                                        <textarea className="form-control"></textarea>
                                    </Form.Group>
                                    <div className="contact-button">
                                        <Button variant="primary" type="submit">Submit</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="footer-content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia molestias asperiores, earum consequuntur at itaque eum rem ex quidem aut, voluptatibus dolorum modi assumenda explicabo. Quisquam vitae error minima dolores.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-links">
                                <h4>Quick Links</h4>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Home</Link></span> </ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">About</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Services</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Features</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Contact us</Link></span></ListGroup.Item>

                                </ListGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-social">
                                <h4>Social Links</h4>
                                <ListGroup horizontal>
                                    <ListGroup.Item><i class="fab fa-facebook"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-google"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-twitter"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-instagram"></i></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>copyright &copy; <a href="#">PAYUGURU</a></p>
                </div>
            </section>
        </section>

    )
}


export default Home

