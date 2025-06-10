import React, { useState } from 'react';
import './EmailForm.css';
import Navbar from '../Components/Navbar';
import axios from 'axios';
const formConfig = [
    {
        id: 1,
        type: "text",
        name: "firstName",
        placeholder: "First Name",
        icon: "bi bi-person"
    },
    {
        id: 2,
        type: "text",
        name: "lastName",
        placeholder: "Last Name",
        icon: "bi bi-person"
    },
    {
        id: 3,
        type: "email",
        name: "userEmail",
        placeholder: "Email",
        icon: "bi bi-envelope"
    },
    {
        id: 4,
        type: "textarea",
        name: "message",
        placeholder: "Your Message",
        icon: "bi bi-chat-left-text"
    },
];

function InputField({ type, name, placeholder, value, onChange, icon }) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text">
                <i className={icon}></i>
            </span>
            {type === "textarea" ? (
                <textarea
                    className="form-control"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                    rows="5"
                />
            ) : (
                <input
                    className="form-control"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
            )}
        </div>
    );
}

const EmailForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        message: '',
        userEmail: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('contact');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:5000/sendmail', {
                email: "nucleus1092@gmail.com",
                subject: 'New Contact Form Submission',
                text: `
                  <div style="
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                  ">
                    <!-- Header -->
                    <div style="
                      background: linear-gradient(135deg, #4361ee, #3a0ca3);
                      color: white;
                      padding: 25px;
                      text-align: center;
                    ">
                      <h1 style="margin: 0; font-size: 22px;">New Contact Form Submission</h1>
                    </div>
                    
                    <!-- Content -->
                    <div style="padding: 25px;">
                      <div style="
                        background: #f8f9fa;
                        border-radius: 6px;
                        padding: 20px;
                        margin-bottom: 20px;
                        border-left: 4px solid #4361ee;
                      ">
                        <p style="margin-top: 0; color: #555;">
                          You've received a new message through your website's contact form from ${formData.userEmail}:
                        </p>
                      </div>
                      
                      <!-- Details Table -->
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #eee;">
                          <td style="padding: 12px 0; width: 120px; font-weight: 600; color: #555;">First Name:</td>
                          <td style="padding: 12px 0;">${formData.firstName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                          <td style="padding: 12px 0; font-weight: 600; color: #555;">Last Name:</td>
                          <td style="padding: 12px 0;">${formData.lastName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; font-weight: 600; color: #555; vertical-align: top;">Message:</td>
                          <td style="padding: 12px 0; white-space: pre-line;">${formData.message}</td>
                        </tr>
                      </table>
                      
                      <!-- Footer -->
                      <div style="
                        margin-top: 30px;
                        padding-top: 20px;
                        border-top: 1px solid #eee;
                        color: #777;
                        font-size: 14px;
                        text-align: center;
                      ">
                        <p style="margin: 0;">
                          This message was sent from your website contact form. 
                          <br>Please respond directly to the sender's email address above.
                        </p>
                      </div>
                    </div>
                  </div>
                `
            });

            // Reset the form
            setFormData({
                firstName: '',
                lastName: '',
                message: ''
            });

            // Show success message
            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 1000);

        } catch (error) {
            console.error('Error:', error);
            alert(`Failed to send message: ${error.response?.data?.message || error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section bg-primary text-white py-5">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
                            <p className="lead mb-4">We're here to help and answer any questions you might have.</p>
                            <div className="d-flex gap-3">
                                <button
                                    className="btn btn-light btn-lg px-4"
                                    onClick={() => setActiveTab('contact')}
                                >
                                    Contact Us
                                </button>
                                <button
                                    className="btn btn-outline-light btn-lg px-4"
                                    onClick={() => setActiveTab('faq')}
                                >
                                    FAQ
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Contact us"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        {/* Contact Info Card */}
                        <div className="card shadow-sm h-100">
                            <div className="card-body p-4">
                                <h3 className="h4 mb-4">Contact Information</h3>

                                <div className="d-flex mb-4">
                                    <div className="me-3 text-primary">
                                        <i className="bi bi-geo-alt fs-3"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Our Location</h4>
                                        <p className="text-muted mb-0">123 Business Ave, Suite 456<br />San Francisco, CA 94107</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="me-3 text-primary">
                                        <i className="bi bi-telephone fs-3"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Phone Number</h4>
                                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                                        <p className="text-muted mb-0">Mon-Fri, 9am-5pm PST</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="me-3 text-primary">
                                        <i className="bi bi-envelope fs-3"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Email Address</h4>
                                        <p className="text-muted mb-0">info@company.com</p>
                                        <p className="text-muted mb-0">support@company.com</p>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <h4 className="h6 mb-3">Follow Us</h4>
                                <div className="d-flex gap-3">
                                    <a href="#" className="text-primary"><i className="bi bi-facebook fs-4"></i></a>
                                    <a href="#" className="text-primary"><i className="bi bi-twitter fs-4"></i></a>
                                    <a href="#" className="text-primary"><i className="bi bi-linkedin fs-4"></i></a>
                                    <a href="#" className="text-primary"><i className="bi bi-instagram fs-4"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        {/* Tab Content */}
                        <div className="card shadow-sm">
                            {activeTab === 'contact' ? (
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="h3 mb-4">Send us a message</h2>
                                    {submitSuccess && (
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <strong>Success!</strong> Your message has been sent.
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => setSubmitSuccess(false)}
                                            ></button>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold text-muted">
                                                    First Name
                                                </label>
                                                <InputField
                                                    type={formConfig[0].type}
                                                    name={formConfig[0].name}
                                                    placeholder={formConfig[0].placeholder}
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    icon={formConfig[0].icon}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold text-muted">
                                                    Last Name
                                                </label>
                                                <InputField
                                                    type={formConfig[1].type}
                                                    name={formConfig[1].name}
                                                    placeholder={formConfig[1].placeholder}
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    icon={formConfig[1].icon}
                                                />
                                            </div>
                                        </div>

                                        <label className="form-label fw-bold text-muted">
                                            Email Address
                                        </label>
                                        <InputField
                                            type={formConfig[2].type}
                                            name={formConfig[2].name}
                                            placeholder={formConfig[2].placeholder}
                                            value={formData.userEmail}
                                            onChange={handleChange}
                                            icon={formConfig[2].icon}
                                        />


                                        <label className="form-label fw-bold text-muted">
                                            Your Message
                                        </label>
                                        <InputField
                                            type={formConfig[3].type}
                                            name={formConfig[3].name}
                                            placeholder={formConfig[3].placeholder}
                                            value={formData.message}
                                            onChange={handleChange}
                                            icon={formConfig[3].icon}
                                        />

                                        <div className="d-grid mt-4">
                                            <button
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-send me-2"></i>
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="h3 mb-4">Frequently Asked Questions</h2>

                                    <div className="accordion" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                >
                                                    How can I contact customer support?
                                                </button>
                                            </h3>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    You can contact our customer support team by filling out the contact form on this page,
                                                    emailing us at support@company.com, or calling us at +1 (555) 123-4567 during our
                                                    business hours (Mon-Fri, 9am-5pm PST).
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                >
                                                    What is your typical response time?
                                                </button>
                                            </h3>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    We strive to respond to all inquiries within 24 hours during business days.
                                                    For urgent matters, please call our support line for immediate assistance.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h3 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                >
                                                    Do you have physical offices I can visit?
                                                </button>
                                            </h3>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    Yes, our headquarters is located at 123 Business Ave, Suite 456, San Francisco, CA 94107.
                                                    We welcome visitors by appointment Monday through Friday from 9am to 5pm.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Find Us on the Map</h2>
                    <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538401704001!2d-122.4199066846826!3d37.77492997975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            title="Company Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Our Support Team</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card border-0 text-center h-100">
                                <div className="card-body p-4">
                                    <div className="mx-auto mb-4 rounded-circle overflow-hidden" style={{ width: '150px', height: '150px' }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/women/43.jpg"
                                            alt="Team member"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h3 className="h5 mb-1">Sarah Johnson</h3>
                                    <p className="text-muted mb-2">Customer Support Manager</p>
                                    <p className="mb-3">Sarah leads our support team and ensures you get the best service possible.</p>
                                    <a href="#" className="btn btn-sm btn-outline-primary">
                                        <i className="bi bi-envelope me-1"></i> Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 text-center h-100">
                                <div className="card-body p-4">
                                    <div className="mx-auto mb-4 rounded-circle overflow-hidden" style={{ width: '150px', height: '150px' }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Team member"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h3 className="h5 mb-1">Michael Chen</h3>
                                    <p className="text-muted mb-2">Technical Support Specialist</p>
                                    <p className="mb-3">Michael handles all technical inquiries and troubleshooting.</p>
                                    <a href="#" className="btn btn-sm btn-outline-primary">
                                        <i className="bi bi-envelope me-1"></i> Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 text-center h-100">
                                <div className="card-body p-4">
                                    <div className="mx-auto mb-4 rounded-circle overflow-hidden" style={{ width: '150px', height: '150px' }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            alt="Team member"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h3 className="h5 mb-1">Emily Rodriguez</h3>
                                    <p className="text-muted mb-2">Account Manager</p>
                                    <p className="mb-3">Emily helps with account-related questions and billing.</p>
                                    <a href="#" className="btn btn-sm btn-outline-primary">
                                        <i className="bi bi-envelope me-1"></i> Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmailForm;