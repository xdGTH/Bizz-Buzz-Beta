import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Our Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policies.jpg"
            alt="policies"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
      <p> Our Policies are:</p>
          <p>1.You must submit official business documents for the business to be registered at Bizz-Buzz.</p>
          <p>2.You must allow us to keep a track of your orders for your financial report.</p>
          <p>3.You must submit your citizenship before buying something from Bizz-Buzz. </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;