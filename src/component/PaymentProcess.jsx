import React from "react";
import "./PaymentProcess.css";

const steps = [
  {
    img: "/images/step1.png",
    text: "Teen marks task as completed",
  },
  {
    img: "/images/step2.png",
    text: "Parent reviews the task",
  },
  {
    img: "/images/step3.png",
    text: "Approval is submitted",
  },
  {
    img: "/images/step4.png",
    text: "Payment is processed",
  },
  {
    img: "/images/step5.png",
    text: "Teen receives payment",
  },
];

const PaymentProcess = () => {
  return (
    <div className="payment-section">
      <h2 className="payment-title">Payment Release Process</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            
            {/* Circle */}
            <div className="circle">
              <img src={step.img} alt="step" />
            </div>

            {/* SVG Connector */}
            {index !== steps.length - 1 && (
              <svg className="connector" viewBox="0 0 120 60">
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L6,3 L0,6" fill="#aaa" />
                  </marker>
                </defs>

                <path
                  d="M10 50 Q60 -10 110 50"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  markerEnd="url(#arrow)"
                />
              </svg>
            )}

            {/* Text */}
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentProcess;