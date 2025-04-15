import React, { useState } from 'react';
import './EmailForm.css'; // We'll still use some custom CSS
import Navbar from '../Components/Navbar';

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
        name: "email", 
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

// Custom Dynamic Input Component
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
        email: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

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
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form Data:', formData);
            
            // Clear the form fields
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
            
            setSubmitSuccess(true);
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-light">
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="card shadow-sm border-0">
                            <div className="card-header bg-primary text-white">
                                <h2 className="h4 mb-0">Contact Us</h2>
                                <p className="mb-0">We'd love to hear from you</p>
                            </div>
                            <div className="card-body p-4 p-md-5">
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
                                        value={formData.email}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;