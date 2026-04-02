import React, { Component } from 'react';
import './DownloadTag.css';
import DownBtn from './DownBtn.jsx';

const DowloadTag = () => {
  return (
    <div className="downloadTag">
      <div className="track">
        {[...Array(10)].map((_, i) => (
          <DownBtn key={i} />
        ))}

        {/* duplicate for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <DownBtn key={`dup-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default DowloadTag;