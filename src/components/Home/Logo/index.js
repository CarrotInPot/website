import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/images/V1.png';
import './index.scss';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="MyComponent">
      {loaded && <img src={Logo} alt="Logo" className="fade-in" />}
    </div>
  );
};

export default Index;