// build-all.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


const projects = [
  { name: 'mf_react_host', path: 'mf_react_host', build: 'npm run build' },
  { name: 'mf_solid', path: 'mf_solid', build: 'npm run build' },
  { name: 'mf_svelte', path: 'mf_svelte', build: 'npm run build' },
  { name: 'mf_vue', path: 'mf_vue', build: 'npm run build' },
  { name: 'mf_react', path: 'mf_react', build: 'npm run build' },
  { name: 'angular_mfe1', path: 'angular/nx-rspack-mf-demo', build: 'npx nx build mfe1' }
];

const outputDir = path.join(__dirname, 'all-dist');

// Clean output directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir);

// Build and copy each project


projects.forEach(project => {
  const projectPath = path.join(__dirname, project.path);
  console.log(`Installing dependencies for ${project.name}...`);
  try {
    execSync('npm ci || npm install', { cwd: projectPath, stdio: 'inherit' });
  } catch (e) {
    console.warn(`npm ci failed for ${project.name}, trying npm install...`);
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
  }

  console.log(`Building ${project.name}...`);
  execSync(project.build, { cwd: projectPath, stdio: 'inherit' });

  // Angular build output for mfe1 is typically in dist/apps/mfe1
  let distPath;
  if (project.name === 'angular_mfe1') {
    distPath = path.join(projectPath, 'mfe1', 'dist');
  } else {
    distPath = path.join(projectPath, 'dist');
  }
  const targetPath = path.join(outputDir, project.name);

  if (fs.existsSync(distPath)) {
    fs.cpSync(distPath, targetPath, { recursive: true });
    console.log(`Copied ${distPath} to ${targetPath}`);
  } else {
    console.warn(`No dist folder found for ${project.name}`);
  }
});

console.log('All projects built and copied to all-dist/');
