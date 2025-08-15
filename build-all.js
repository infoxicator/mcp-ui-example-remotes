// build-all.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projects = [
  'mf_react_host',
  'mf_solid',
  'mf_svelte',
  'mf_vue',
  'mf_react'
];

const outputDir = path.join(__dirname, 'all-dist');

// Clean output directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir);

// Build and copy each project

projects.forEach(project => {
  const projectPath = path.join(__dirname, project);
  console.log(`Installing dependencies for ${project}...`);
  try {
    execSync('npm ci || npm install', { cwd: projectPath, stdio: 'inherit' });
  } catch (e) {
    console.warn(`npm ci failed for ${project}, trying npm install...`);
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
  }

  console.log(`Building ${project}...`);
  execSync('npm run build', { cwd: projectPath, stdio: 'inherit' });

  const distPath = path.join(projectPath, 'dist');
  const targetPath = path.join(outputDir, project);

  if (fs.existsSync(distPath)) {
    fs.cpSync(distPath, targetPath, { recursive: true });
    console.log(`Copied ${distPath} to ${targetPath}`);
  } else {
    console.warn(`No dist folder found for ${project}`);
  }
});

console.log('All projects built and copied to all-dist/');
