# 📋 Instruções para Deploy

## 🎯 Como fazer o deploy do cardápio digital

### ⚠️ **Importante: WebContainer Limitations**
Este ambiente não possui Git instalado. Siga as instruções abaixo para fazer o deploy:

### 1. **Baixar os arquivos do projeto**
- Baixe todos os arquivos do projeto atual
- Certifique-se de ter: `index.html`, `style.css`, `script.js`, `package.json`, `vercel.json`

### 2. **Criar repositório GitHub (no seu computador local)**
```bash
# Criar pasta do projeto
mkdir cardapio-digital
cd cardapio-digital

# Inicializar Git
git init

# Adicionar arquivos baixados
# (copie todos os arquivos para esta pasta)

# Adicionar ao Git
git add .

# Commit inicial
git commit -m "🔧 Cardápio digital - versão corrigida

✅ Alterações implementadas:
- ❌ Removido botão 'Sobre o Restaurante'
- 🗂️ Removidas categorias 'Contorni' e 'Menu Bambini'
- 🍷 'Bevande' alterado para 'Bebidas'
- 🥂 'Vinhos Rosés' alterado para 'Vinhos Roses'
- 🍾 'Espumantes' alterado para 'Prosecco Brut'
- 🍷 Nome do vinho corrigido: 'Faces Brut Lidio Carraro'
- 📱 Scroll horizontal perfeito no navbar mobile
- 🚀 Configuração Vercel adicionada (vercel.json)
- 📦 package.json atualizado para deploy"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 3. **Deploy na Vercel**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório criado
4. A Vercel detectará automaticamente o `vercel.json`
5. Deploy será feito automaticamente

## 🚀 Configuração Vercel

### ✅ **Arquivos já configurados:**
- `vercel.json` - Configuração de deploy
- `package.json` - Scripts atualizados

### 🔗 **Deploy automático:**
- Deploy automático a cada push no GitHub
- Configuração SPA para roteamento correto
- Servindo arquivos estáticos otimizados

## 📱 **Melhorias implementadas:**

### ✅ **Scroll horizontal perfeito no mobile:**
- Navegação suave entre categorias
- Touch-friendly para smartphones
- Sem corte de conteúdo

### ✅ **Correções de conteúdo:**
- Botão "Sobre" removido
- Categorias desnecessárias removidas
- Nomes corrigidos conforme solicitado

### ✅ **Deploy otimizado:**
- Configuração Vercel completa
- Servindo arquivos estáticos corretamente
- Roteamento SPA configurado

## 🎉 **Resultado esperado:**
- ✅ Deploy sem erros na Vercel
- ✅ Scroll horizontal funcionando no mobile
- ✅ Todas as correções aplicadas
- ✅ Performance otimizada

## 🔧 **Alternativa: Deploy direto na Vercel**
Se preferir, você pode fazer upload direto dos arquivos na Vercel:
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Escolha "Browse all templates"
4. Selecione "Static Site"
5. Faça upload dos arquivos do projeto
6. Deploy será feito automaticamente