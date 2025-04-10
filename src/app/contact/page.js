'use client';

import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { IoIosArrowDropleft } from "react-icons/io";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(false);

    const form = useRef();

    const handleSubmit = () => {
        let hasError = false;
        let newErrors = {
            name: "",
            email: "",
            message: "",
        };

        if (!name) {
            newErrors.name = "Please enter your name or company!";
            hasError = true;
        }

        if (!email) {
            newErrors.email = "Please enter your E-Mail Address!";
            hasError = true;
        }

        if (!message) {
            newErrors.message = "Please enter your message!";
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) {
            return;
        }

        // Daten, die gesendet werden sollen
        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        // E-Mail senden, wenn keine Fehler vorhanden sind
        emailjs
            .send('service_1t378n1', 'template_yfh862v', templateParams, 'pOtCxHynpV6FTv_zj') // Verwende den 'send' Aufruf
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

    }

    return (
        <div ref={form} className='w-full flex flex-col justify-center gap-5'>

            <p className="text-center font-bold text-[3rem] leading-none pb-12">Get In <span className="text-[#CBACF9]">Contact</span></p>

            <div className='flex flex-col mx-0 md:mx-[10rem] xl:mx-[25rem]'>
                <label className='text-lg'>Name or Company</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Enter your name or company'
                    className={`border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15 rounded-xl p-3 text-[#FFFFFF] placeholder:text-[#C1C2D3] ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className='flex flex-col mx-0 md:mx-[10rem] xl:mx-[25rem]'>
                <label className='text-lg'>E-Mail Address</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Enter your email address'
                    className={`border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15 rounded-xl p-3 text-[#FFFFFF] placeholder:text-[#C1C2D3] ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className='flex flex-col mx-0 md:mx-[10rem] xl:mx-[25rem]'>
                <label className='text-lg'>Message</label>
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='Enter your message'
                    className={`border bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[#6971A2]/15 rounded-xl p-3 text-[#FFFFFF] placeholder:text-[#C1C2D3] ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>

            <div className="flex justify-center mt-7">
                <button
                    href="/contact"
                    className="inline-block cursor-pointer"
                    onClick={handleSubmit}
                    disabled={success} // Button deaktivieren, wenn success true ist
                >
                    <div
                        className={`flex items-center justify-center space-x-1 py-4 px-10 rounded-xl border border-[#6971A2]/15 transition-all duration-500 ease-in-out transform ${success
                            ? 'bg-green-500 text-white border-green-500 scale-105 opacity-80' // Sanfte Fade- und Scale-Animation
                            : 'bg-gradient-to-r from-[#0C0E23] to-[#04071D] border-[#6971A2]'
                            }`}
                    >
                        <p className="text-[1.25rem] font-semibold transition-all duration-500 ease-in-out">
                            {success ? "Email Sent!" : "Send Now"}
                        </p>
                    </div>
                </button>
            </div>

            {success &&
                <div className="flex flex-col justify-center text-center text-lg text-white mt-5">
                    <p>I will reply to your message by e-mail as soon as possible.</p>
                    <p>Click <a href='/' className='text-[#CBACF9] hover:underline'>here</a> to get back</p>
                </div>

            }




        </div>
    );
}
