import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../motion";

const Contact = () => {
  const formRef = useRef();
  const [form, SetForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, SetLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    SetForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoading(true);
    emailjs
      .send(
        "service_jp8p54c",
        "template_ynqy26k",
        {
          from_name: form.name,
          to_name: "Tanishka",
          from_email: form.email,
          message: form.message,
          to_email: "tan27peace@gmail.com",
        },
        "LgKCt_cKtlk9pIss9"
      )
      .then(
        () => {
          SetLoading(false);
          alert("Thank you");
          SetForm({ name: "", email: "", message: "" });
        },
        (error) => {
          SetLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:bg-site bg-no-repeat bg-cover overflow-hidden pt-8"
      style={{ height: "700px" }}
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            <h3 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in touch
            </h3>
            <h2 className="mb-6 mt-4 text-[36px] lg:text-[50px] font-semibold uppercase leading-none">
              Contact me
            </h2>

            <p className="mb-5 max-w-lg mx-auto lg:mx-0">
              Have an idea, a question, or a really bad joke? I am all ears!
              Reach out to me through filling out the contact form below.
            </p>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1"
          >
            <label className="flex flex-col">
              {/* <span className="text-white font-medium mb-4">Your Name</span> */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your name?"
                className="bg-transparent border-b py-3 placeholder:text-white outline-none w-full focus:border-accent transition-all"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your email?"
                className="bg-transparent border-b py-3 placeholder:text-white outline-none w-full focus:border-accent transition-all font-medium"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="type your message"
                className="bg-transparent border-b py-3 placeholder:text-white outline-none w-full  focus:border-accent transition-all font-medium"
              />
            </label>
            <button
              type="submit"
              className="btn btn-lg my-6"
              disabled={
                form.message === "" && form.email === "" && form.name === ""
              }
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
