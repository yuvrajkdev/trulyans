// src/components/Plans/Plans.js

import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {/* Ensure plan.icon is a valid JSX element */}
            {React.isValidElement(plan.icon) ? plan.icon : null}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{typeof feature === 'string' || typeof feature === 'number' ? feature : JSON.stringify(feature)}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits --</span>
            </div>
            <button className="btn jn-btn" >Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
