#!/bin/bash

echo "🚀 Preparando arquivos para deploy..."

# Verificar se os arquivos necessários existem
if [ ! -f "index.html" ]; then
    echo "❌ Erro: arquivo index.html não encontrado"
    exit 1
fi

if [ ! -f "package.json" ]; then
    echo "❌ Erro: arquivo package.json não encontrado"
    exit 1
fi

echo "✅ Arquivos verificados com sucesso!"
echo ""
echo "📋 Arquivos prontos para deploy:"
echo "- index.html"
echo "- style.css"
echo "- script.js"
echo "- package.json"
echo "- vercel.json"
echo ""
echo "🔗 Próximos passos para deploy:"
echo "1. Baixe todos os arquivos do projeto"
echo "2. Crie um repositório no GitHub"
echo "3. Faça upload dos arquivos para o repositório"
echo "4. Conecte o repositório com a Vercel"
echo "5. O deploy será automático!"
echo ""
echo "💡 Dica: Use 'git init', 'git add .', 'git commit' e 'git push' no seu ambiente local"
echo "📱 O scroll horizontal no mobile funcionará perfeitamente após o deploy"