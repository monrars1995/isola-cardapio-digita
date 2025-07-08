const express = require('express');
const path = require('path');

const app = express();

// O caminho para a raiz do projeto, a partir do diretório 'api'
const projectRoot = path.resolve(__dirname, '..');

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(projectRoot));

// Lidar com todas as outras rotas servindo o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(projectRoot, 'index.html'));
});

// Exportar o app para a Vercel
module.exports = app;
