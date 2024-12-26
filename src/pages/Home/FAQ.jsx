import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: "What subjects do you teach?",
            answer:
                "We offer tutoring in various subjects, including English, Mathematics, Science, and more. Choose a tutor based on your requirements.",
        },
        {
            question: "Do you provide online classes?",
            answer:
                "Yes, we offer online classes. Sessions are conducted via video conferencing platforms.",
        },
        {
            question: "How can I find the right tutor for me?",
            answer:
                "You can use the search option on our website to find tutors based on your specific needs.",
        },
        {
            question: "What are the tutor fees?",
            answer:
                "Tutor fees depend on their experience and the subject being taught. Detailed information is available in each tutor's profile.",
        },
        {
            question: "How can I schedule my classes?",
            answer:
                "You can discuss and set up a schedule with your tutor according to your convenience.",
        },
        {
            question: "Do you provide group classes?",
            answer:
                "Yes, we offer both individual and group classes. Check out our group class page for more details.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept payments via credit cards, debit cards, PayPal, and other online payment options.",
        },
        {
            question: "Can I change my tutor if needed?",
            answer:
                "Yes, if you feel the need to change your tutor, you can contact our support team for assistance.",
        },
    ];

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4">
                <Fade direction="top" duration={1000}>
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-slate-50 mb-6">
                        Frequently Asked Questions
                    </h2>
                </Fade>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Fade key={index} direction="top" duration={1000}>
                            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md p-4 shadow-sm">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-50">
                                        {faq.question}
                                    </h3>
                                    <span>
                                        {open === index ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M18 12H6"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6v12m6-6H6"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                {open === index && (
                                    <p className="mt-3 text-gray-600 dark:text-slate-50">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
