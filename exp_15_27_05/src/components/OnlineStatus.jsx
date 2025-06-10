import React, { useState, useEffect } from 'react';

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true); 
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className={`alert ${isOnline ? 'alert-success' : 'alert-danger'}`} role="alert">
        <h4 className="alert-heading">
          {isOnline ? 'Welcome Back. You are online' : 'You are offline'}
        </h4>
      </div>
    </div>
  );
}
