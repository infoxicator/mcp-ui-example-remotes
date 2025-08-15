import React from 'react';
import './ProviderComponent.css';

const Provider: React.FC = () => {
  return (
      <div className="card">
        <div className="card-header">
            <div className="logo-section-top">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="logo-image react-logo"
                style={{ width: '120px', height: '120px' }}
              />
         </div>
          <div className="logo-section">
            <img
              src="https://module-federation.io/svg.svg"
              alt="Module Federation Logo"
              className="logo-image federation-logo"
            />
            <span className="handshake-emoji" role="img" aria-label="handshake">🤝</span>
            <img
              src="https://mcpui.dev/logo-lg-black.png"
              alt="MCPUI Logo"
              className="logo-image mcpui-logo-img"
            />
          </div>
        </div>
        <div className="card-body">
          <h1 className="card-title">React MCP-Ui Module Federation</h1>
          <p className="card-description">
            A powerful combination of Module Federation and MCP-UI
          </p>
        </div>
        <div className="card-footer">
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Module Federation</span>
            <span className="tech-badge">MCP-UI</span>
          </div>
        </div>
      </div>
  );
};

export default Provider;
