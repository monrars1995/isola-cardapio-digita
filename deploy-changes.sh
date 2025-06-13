#!/bin/bash

echo "🚀 Aplicando alterações no repositório Git..."

# Verificar se estamos em um repositório Git
if [ ! -d ".git" ]; then
    echo "❌ Erro: Este diretório não é um repositório Git"
    echo "Execute: git init && git remote add origin <sua-url-do-repo>"
    exit 1
fi

# Adicionar todos os arquivos modificados
echo "📁 Adicionando arquivos modificados..."
git add .

# Fazer commit com mensagem descritiva
echo "💾 Fazendo commit das alterações..."
git commit -m "🔧 Correções do cardápio digital

✅ Alterações implementadas:
- ❌ Removido botão 'Sobre o Restaurante'
- 🗂️ Removidas categorias 'Contorni' e 'Menu Bambini'
- 🍷 'Bevande' alterado para 'Bebidas'
- 🥂 'Vinhos Rosés' alterado para 'Vinhos Roses'
- 🍾 'Espumantes' alterado para 'Prosecco Brut'
- 🍷 Nome do vinho corrigido: 'Faces Brut Lidio Carraro'
- 📱 Scroll horizontal perfeito no navbar mobile
- 🚀 Configuração Vercel adicionada (vercel.json)
- 📦 package.json atualizado para deploy

🎯 Melhorias de UX:
- Navegação mobile otimizada
- Scroll suave nas categorias
- Deploy automático configurado"

# Push para o repositório
echo "🌐 Enviando para o repositório remoto..."
git push origin main

echo "✅ Alterações enviadas com sucesso!"
echo ""
echo "🔗 Próximos passos:"
echo "1. Acesse seu repositório no GitHub"
echo "2. Conecte com a Vercel (se ainda não conectou)"
echo "3. O deploy será automático!"
echo ""
echo "📱 Teste o scroll horizontal no mobile após o deploy"