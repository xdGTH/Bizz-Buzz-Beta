import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title= {"About us - Bizzbuzz"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          As a small business owner, it can be challenging to stand out in a crowded online marketplace and keep track of finances. That's where Bizz-Buzz comes in - we're not just another e-commerce platform, but also your growth partner dedicated to helping small businesses thrive.With Bizz-Buzz, you'll have access to a suite of tools designed to showcase your business to a wider audience and make managing finances a breeze. With Bizz-Buzz, connect commerce and tech to reach your full potential. We're excited to partner with you on your journey to success.

 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;