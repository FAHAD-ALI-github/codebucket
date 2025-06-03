import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroBackground, curve, smallSphere, stars } from "../assets";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    dob: '',
    password: '',
    company: '',
    university: '',
    interests: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted', formData);
  };

  return (
    <Section crosses className="overflow-hidden">
      <div className="container relative z-2 mx-auto px-4 pt-20 pb-32">
        <div className="relative mx-auto max-w-[50rem]">
          <div className="relative z-1 -mt-[5.75rem] rounded-[2.5rem] bg-n-8/80 backdrop-blur border border-n-1/10 p-8 md:p-12">
            
            <h2 className="h2 text-center mb-4">Sign Up for CodeBucket</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={curve} className="w-[12rem] mx-auto mb-8" alt="Curve" />
            </motion.div>
            <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(formData).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <label htmlFor={key} className="block text-sm font-medium text-n-1/75">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : key === 'password' ? 'password' : key === 'dob' ? 'date' : 'text'}
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="mt-1 block w-3/4 rounded-md border-n-1/10 bg-n-7 text-n-1 shadow-sm focus:border-primary-1 focus:ring-primary-1 transition-colors p-3"
                    required={['name', 'email', 'username', 'dob', 'password'].includes(key)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="md:col-span-2"
              >
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </motion.div>
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 text-center text-n-3"
            >
              Already have an account?{' '}
              <Link to="/login" className="text-primary-1 hover:text-primary-2 transition-colors">
                Log in
              </Link>
            </motion.p>
          </div>

          <Gradient />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-1/3 -translate-x-1/2 w-1/4 h-1/4 bg-gradient-to-b from-primary-1/40 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-1/3 translate-x-1/2 w-1/4 h-1/4 bg-gradient-to-t from-primary-1/40 to-transparent blur-3xl" />
        </motion.div>
      </div>

      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>

      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        src={smallSphere}
        className="absolute top-1/4 -left-[5%] w-[10%] md:w-[5%]"
        alt="Small Sphere"
      />

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        src={stars}
        className="absolute bottom-1/4 -right-[5%] w-[10%] md:w-[5%]"
        alt="Stars"
      />

      <BackgroundCircles />

      <BottomLine />
    </Section>
  );
};

export default SignUp;
