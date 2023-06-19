import React, { useState } from "react";
import Input from '../../shared/components/formElements/Input'
import { useHttpClient } from "../../shared/hooks/http-hook";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import LoadingSpinner from '../../shared/UI/LoadingSpinner'

import './ContactForm.css'
function ContactForm(props) {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            fname_lname: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            subject: {
                value: "",
                isValid: false,
            },
            message: {
                value: "",
                isValid: false,
            },
        },
        false
    );


    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/users/sendmail',
                "POST",
                JSON.stringify({
                    fname_lname: formState.inputs.fname_lname.value,
                    email: formState.inputs.email.value,
                    phone: formState.inputs.phone.value,
                    subject: formState.inputs.subject.value,
                    message: formState.inputs.message.value
                }),
                {
                    "Content-Type": "application/json",
                }

            );
           // console.log(responseData)
        } catch (err) {
        }

    };

    return (
        <div className="contact_form">
            <form onSubmit={authSubmitHandler} className="contact_form_wrapper">

                <Input
                    id="fname_lname"
                    element="input"
                    type="text"
                    placeholder="Firstname Lastname"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    required={'required'}

                />
                <Input
                    id="email"
                    element="input"
                    type="email"
                    placeholder="Email Address"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    required={'required'}
                />
                <Input
                    id="phone"
                    element="input"
                    type="text"
                    placeholder="Phone"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                />
                <Input
                    id="subject"
                    element="input"
                    type="text"
                    placeholder="Subject"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    required={'required'}
                />
                <Input
                    id="message"
                    element="textarea"
                    type="text"
                    rows='10'
                    placeholder="Message"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler}
                    required={'required'}
                />


                <button type="submit"
                    // disabled={!formState.isValid} 
                    className="contact_submit_button">
                    {isLoading ? <LoadingSpinner /> : 'Submit'}

                </button>
            </form>

        </div>
    );
}

export default ContactForm;