import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading='CONTACT.' text="Like what you see? Let's get to work." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
