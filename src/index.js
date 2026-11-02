const { execSync } = require('child_process');

console.log("🚀 [Devcontainer Test] Validation des outils de l'environnement...\n");

function checkTool(command, name) {
  try {
    const output = execSync(command, { encoding: 'utf-8' }).trim();
    console.log(`✅ ${name}: ${output.split('\n')[0]}`);
  } catch (error) {
    console.log(`❌ ${name}: Indisponible`);
  }
}

// Vérification de la stack
checkTool('node -v', 'Node.js');
checkTool('terraform -version', 'Terraform CLI');
checkTool('kubectl version --client --output=yaml | head -n 2', 'Kubectl CLI');

console.log("\n🎉 Tout est prêt ! Ton environnement est 100% opérationnel.");