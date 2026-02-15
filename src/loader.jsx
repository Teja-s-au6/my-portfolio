import React, { useState, useEffect } from 'react';

const customStyles = {
  body: {
    backgroundColor: '#111111',
    color: '#E8E6E1',
    fontFamily: "'Inter', sans-serif",
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    WebkitFontSmoothing: 'antialiased',
  },
  splashContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '400px',
  },
  logoAnimation: {
    position: 'relative',
    width: '80px',
    height: '80px',
  },
  orangeCircle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF4D00',
    borderRadius: '50%',
    animation: 'pulse 2s infinite ease-in-out',
  },
  circleRing: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    border: '1px solid #FF4D00',
    borderRadius: '50%',
    opacity: 0,
    animation: 'ripple 2s infinite ease-out',
  },
  nameLockup: {
    textAlign: 'center',
  },
  nameLockupH1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '48px',
    lineHeight: '0.9',
    color: '#FF4D00',
    marginBottom: '8px',
    letterSpacing: '-1px',
  },
  nameLockupSpan: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    opacity: 0.5,
    display: 'block',
  },
  loadingModule: {
    width: '240px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  progressTrack: {
    height: '2px',
    width: '100%',
    background: 'rgba(232, 230, 225, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#FF4D00',
    animation: 'loadProgress 3.5s cubic-bezier(0.65, 0, 0.35, 1) forwards',
  },
  statusRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '10px',
    fontFamily: 'monospace',
    opacity: 0.6,
  },
  barcodeStrip: {
    position: 'fixed',
    bottom: '40px',
    height: '24px',
    width: '200px',
    opacity: 0.3,
    backgroundImage: `repeating-linear-gradient(
      90deg,
      #E8E6E1 0px,
      #E8E6E1 1px,
      transparent 1px,
      transparent 3px,
      #E8E6E1 3px,
      #E8E6E1 4px,
      transparent 4px,
      transparent 7px
    )`,
  },
  dataStream: {
    position: 'fixed',
    top: '40px',
    right: '40px',
    fontFamily: 'monospace',
    fontSize: '10px',
    color: '#FF4D00',
    opacity: 0.4,
    textAlign: 'right',
  },
};

const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(0.95); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; }
        100% { transform: scale(0.95); opacity: 0.8; }
      }
      
      @keyframes ripple {
        0% { transform: scale(0.8); opacity: 0.8; }
        100% { transform: scale(1.8); opacity: 0; }
      }
      
      @keyframes loadProgress {
        0% { width: 0%; }
        20% { width: 15%; }
        45% { width: 42%; }
        70% { width: 88%; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(style);

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 5) + 1;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      setPercent(count);
    }, 120);

    return () => {
      clearInterval(interval);
      document.head.removeChild(link1);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (percent === 100 && onComplete) {
      // Add a small delay to let the animation finish visually
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [percent, onComplete]);

  return (
    <div style={customStyles.body}>
      <div style={customStyles.dataStream}>
        SYSTEM_INIT: SUCCESS<br />
        ASSETS_LOAD: PENDING<br />
        VER: 2026.0.1
      </div>

      <div style={customStyles.splashContainer}>
        <div style={customStyles.logoAnimation}>
          <div style={customStyles.circleRing}></div>
          <div style={customStyles.orangeCircle}></div>
        </div>

        <div style={customStyles.nameLockup}>
          <h1 style={customStyles.nameLockupH1}>
            Teja S
          </h1>
          <span style={customStyles.nameLockupSpan}>Senior Software Engineer</span>
        </div>

        <div style={customStyles.loadingModule}>
          <div style={customStyles.progressTrack}>
            <div style={customStyles.progressBar}></div>
          </div>
          <div style={customStyles.statusRow}>
            <span>INITIALIZING_PORTFOLIO</span>
            <span>{percent}%</span>
          </div>
        </div>
      </div>

      <div style={customStyles.barcodeStrip}></div>
    </div>
  );
};

export default Loader;