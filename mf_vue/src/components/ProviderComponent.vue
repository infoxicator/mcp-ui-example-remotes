<template>
    <div class="card">
      <div class="card-header">
        <div class="main-logo-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="Vue Logo"
            class="main-logo vue-logo"
          />
        </div>
        <div class="logo-section">
          <img
            src="https://module-federation.io/svg.svg"
            alt="Module Federation Logo"
            class="logo-image federation-logo"
          />
          <span class="handshake-emoji" role="img" aria-label="handshake">🤝</span>
          <img
            src="https://mcpui.dev/logo-lg-black.png"
            alt="MCPUI Logo"
            class="logo-image mcpui-logo-img"
          />
        </div>
      </div>
      <div class="card-body">
        <h1 class="card-title">Vue MCP-Ui Module Federation</h1>
        <p class="card-description">
          A powerful combination of Module Federation and MCP-UI 
        </p>
      </div>
      <div class="card-footer">
        <div class="tech-stack">
          <span class="tech-badge">Vue</span>
          <span class="tech-badge">Module Federation</span>
          <span class="tech-badge">MCP-UI</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460, #42b883);
  background-size: 400% 400%;
  animation: gradientFlow 6s ease infinite;
  padding: 20px;
}

.card {
  background: rgba(20, 20, 35, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(66, 184, 131, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 400px;
  width: 100%;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 70px rgba(66, 184, 131, 0.3);
  border-color: rgba(66, 184, 131, 0.6);
}

.card-header {
  padding: 25px;
  background: rgba(66, 184, 131, 0.1);
  border-bottom: 1px solid rgba(66, 184, 131, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.main-logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-logo {
  height: 120px;
  width: auto;
  transition: all 0.3s ease;
}

.main-logo:hover {
  transform: scale(1.1);
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.logo-image {
  height: 45px;
  width: auto;
  transition: all 0.3s ease;
}

.federation-logo {
  filter: brightness(0) invert(1);
}

.mcpui-logo-img {
  filter: brightness(0) invert(1);
}

.logo-section:hover .logo-image {
  transform: scale(1.1);
}

.handshake-emoji {
  font-size: 2.2rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  animation: handshakeWave 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes handshakeWave {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-15deg) scale(1.1);
  }
  75% {
    transform: rotate(15deg) scale(1.1);
  }
}

.card-body {
  padding: 30px 25px;
  text-align: center;
}

.card-title {
  font-size: 2rem;
  color: #42b883;
  margin: 0 0 15px 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.card-description {
  color: rgba(232, 232, 232, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.card-footer {
  padding: 25px;
  background: rgba(66, 184, 131, 0.1);
  border-top: 1px solid rgba(66, 184, 131, 0.2);
}

.tech-stack {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(66, 184, 131, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tech-badge:hover {
  background: rgba(66, 184, 131, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
  border-color: rgba(66, 184, 131, 0.5);
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Responsive design */
@media (max-width: 600px) {
  .card {
    margin: 10px;
    max-width: 350px;
  }
  
  .card-title {
    font-size: 1.8rem;
  }
  
  .main-logo {
    height: 100px;
  }
  
  .logo-section {
    gap: 12px;
  }
  
  .logo-image {
    height: 40px;
  }
  
  .handshake-emoji {
    font-size: 2rem;
  }
}
</style>
