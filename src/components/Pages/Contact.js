import React from 'react';
import {Link} from 'react-router-dom'
import Field from '../Common/Field';
import { validateYupSchema, withFormik } from 'formik';
import * as Yup from 'yup';

const fields={
    sections: [
        [
            {name: 'name', placeholder: 'Your Name *', type: 'text', elementName: 'input'},
            {name: 'email', placeholder: 'Your Email *', type: 'email', elementName: 'input'},
            {name: 'phone', placeholder: 'Your Phone *', type: 'tel', elementName: 'input'}
        ],
        [
            {name: 'message', placeholder: 'Your Message *', type: 'text', elementName: 'textarea'}
        ]
    ]
}

class Contact extends React.Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                           {fields.sections.map((section,index) => {
                                return (
                                    <div className="col-md-6" key={index}>
                                        {section.map((field,i) => {
                                            return(
                                                <Field {...field} key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]}
                                                />
                                            )
                                        })
                                        }
                                    </div>
                                )
                           })}
                        </div>
                    
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link>
                            </div>
                        </div>
                    
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object({
        name: Yup.string().min(4,"name too short").required("name required"),
        email: Yup.string().email("input valid email").required("email required"),
        phone: Yup.string().min(10,"input compöete number").max(12,"too long").required("phone number required"),
        message: Yup.string().min(20,"provide more informaton please").required("Message required!")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert("Form Submitted!")
    }
})(Contact);