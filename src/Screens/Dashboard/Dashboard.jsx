import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import gift from '../../assets/images/gift.png';
import laptop from '../../assets/images/mode-laoptop.png';
import coin from '../../assets/images/rupee-internation.png';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="top-bar">
                {['xl'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-3" fixed="top">
                        <Container>
                            <Navbar.Brand href="#">Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-right flex-grow-1 pe-3 navbar-options"></Nav>
                                    <Nav>
                                        <Form className="d-flex">
                                            <Button>updates</Button>
                                            <Form.Select>
                                                <option className="live">Live Mode</option>
                                                <option className="test">Test Mode</option>
                                            </Form.Select>
                                            <NavDropdown title={<span class="material-symbols-outlined">notifications_active</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                <NavDropdown.Item href="#action3">Notification 1</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">Notification 2</NavDropdown.Item>
                                                <NavDropdown.Item href="#action5">Notification 3</NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title={<span class="material-symbols-outlined">account_circle</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                <NavDropdown.Item href="#action3">View Profile</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    Edit Profile
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action5">
                                                    Logout
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Form>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
            <section className="dashboard-sidebar">
                <div className="dashboard-logo">
                </div>
                <a href="#" className="active">
                    <span class="material-symbols-outlined">home</span>
                    <span className="side-menu-options">Home</span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">component_exchange</span>
                    <span className="side-menu-options">Transactions</span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">data_check</span>
                    <span className="side-menu-options">Settlements</span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">lab_profile</span>
                    <span className="side-menu-options">Reports</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">manage_accounts</span>
                    <span className="side-menu-options">Account &amp; Settings</span>
                </a>
                <div className="side-menu-line" />
                <p>PAYMENT PRODUCTS</p>
                <a href="#">
                <span class="material-symbols-outlined">link</span>
                    <span className="side-menu-options">Payment Links</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">layers</span>
                    <span className="side-menu-options">Payment Pages</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">inventory</span>
                    <span className="side-menu-options">Invoices</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">radio_button_checked</span>
                    <span className="side-menu-options">Payment Button</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">qr_code_scanner</span>
                    <span className="side-menu-options">QR Codes</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">subscriptions</span>
                    <span className="side-menu-options">Subscriptions</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">category</span>
                    <span className="side-menu-options">Smart Collect</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">alt_route</span>
                    <span className="side-menu-options">Route</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">hotel_class</span>
                    <span className="side-menu-options">Checkout Rewards</span>
                </a>
                <div className="side-menu-line" />
                <p>BANKING PRODUCTS</p>
                <a href="#">
                <span class="material-symbols-outlined">account_balance</span>
                    <span className="side-menu-options">X Banking</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">credit_card</span>
                    <span className="side-menu-options">Line of Credit</span>
                </a>
                <div className="side-menu-line" />
                <a href="#">
                <span class="material-symbols-outlined">support_agent</span>
                    <span className="side-menu-options">Customers</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">redeem</span>
                    <span className="side-menu-options">Offers</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">webhook</span>
                    <span className="side-menu-options">Developers</span>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">grid_view</span>
                    <span className="side-menu-options">App Store</span>
                </a>
            </section>
            <section className="main-pannel">
                <div className="body-content">
                    <div className="offer-block">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="offer-heading">
                                    <h4><img src={gift} /> You Have Been Selected!</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="offer-detail">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam praesentium ullam minima pariatur consequatur nulla animi quis officiis debitis facilis, labore sapiente quidem assumenda, adipisci ipsam? Est, fugiat atque.</p>
                                    <button className="btn claim-offer">Claim This Offer</button><button className="cross-offer"><span class="material-symbols-outlined">close</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="update-detail mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="offer-heading">
                                    <h4><img src={gift} /> You Have Been Selected!</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="offer-detail">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam praesentium ullam minima pariatur consequatur nulla animi quis officiis debitis facilis, labore sapiente quidem assumenda, adipisci ipsam? Est, fugiat atque.</p>
                                    <button className="cross-offer"><span class="material-symbols-outlined">close</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modes-detail mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mode1">
                                    <i className="fas fa-dot-circle pending" style={{ display: 'none' }} /><i className="fas fa-check-circle check" />
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga minima amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mode1">
                                    <i className="fas fa-dot-circle pending" style={{ display: 'none' }} /><i className="fas fa-check-circle check" />
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga minima amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mode1">
                                    <i className="fas fa-dot-circle pending" /><i className="fas fa-check-circle check" style={{ display: 'none' }} />
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga minima amet consectetur adipisicing elit.</p>
                                    <button className="btn">Take me to live Mode</button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mode1">
                                    <img src={laptop} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="international-payments mt-4">
                        <h3>Looking to accept international payments from your customers ? <span className="cross"><i className="fas fa-times" /></span></h3>
                        <div className="inter-inner-block">
                            <div className="row">
                                <div className="col-1">
                                    <div className="rupee-coin">
                                        <img src={coin} />
                                    </div>
                                </div>
                                <div className="col-11">
                                    <div className="rupee-detail">
                                        <h4><a href="#">Enable International Payments Today</a></h4>
                                        <p>Accept card payments from international customers with a nominal fee or link your PayPal account today with 0% additional charge from Razorpay.</p>
                                        <h4 className="view-methods"><a href="#">View International Methods &gt;&gt;</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="settlement mt-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="settlement-filter">
                                    <form>
                                        <div className="input-group">
                                            <select className="form-control">
                                                <option>past 6 days</option>
                                                <option>past 30 days</option>
                                                <option>past 90 days</option>
                                                <option>Custom Range</option>
                                            </select>
                                            <input type="date" className="form-control" placeholder="From Date" />
                                            <span className="to">To</span>
                                            <input type="date" className="form-control" placeholder="To Date" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="current-balance">
                                    <p className="cur-bal">Current Balance : 0.00<span>|</span> <a href="#">View Settlements</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="settlement-blocks">
                                    <p>Payment Volume</p>
                                    <h3><i className="fas fa-rupee-sign" /> 0</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="settlement-blocks">
                                    <p>Number Of Payments</p>
                                    <h3><i className="fas fa-rupee-sign" /> 0</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="settlement-blocks">
                                    <p>Number of Refunds</p>
                                    <h3><i className="fas fa-rupee-sign" /> 0</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="footer">
                    <p>© copyright </p>
                </section>
            </section>
        </div>
    )
}
export default Dashboard