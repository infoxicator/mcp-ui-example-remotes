import './App.css';

const App = () => {
  return (
      <div class="solid_card">
        <div class="solid_card-header">
          <div class="solid_main-logo-section">
            <img
              src="https://www.solidjs.com/img/logo/without-wordmark/logo.svg"
              alt="SolidJS Logo"
              class="solid_main-logo solid_solidjs-logo"
            />
          </div>
          <div class="solid_logo-section">
            <img
              src="https://module-federation.io/svg.svg"
              alt="Module Federation Logo"
              class="solid_logo-image solid_federation-logo"
            />
            <span class="solid_handshake-emoji" role="img" aria-label="handshake">🤝</span>
            <img
              src="https://mcpui.dev/logo-lg-black.png"
              alt="MCPUI Logo"
              class="solid_logo-image solid_mcpui-logo-img"
            />
          </div>
        </div>
        <div class="solid_card-body">
          <h1 class="solid_card-title">SolidJS MCP-Ui Module Federation</h1>
          <p class="solid_card-description">
            A powerful combination of Module Federation and MCP-UI
          </p>
        </div>
        <div class="solid_card-footer">
          <div class="solid_tech-stack">
            <span class="solid_tech-badge">SolidJS</span>
            <span class="solid_tech-badge">Module Federation</span>
            <span class="solid_tech-badge">MCP-UI</span>
          </div>
        </div>
      </div>
  );
};

export default App;
