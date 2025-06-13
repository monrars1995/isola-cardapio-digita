# 📋 Instruções para Deploy

## 🎯 Como aplicar as alterações no seu repositório

### 1. **Executar o script de deploy**
```bash
# Dar permissão de execução
chmod +x deploy-changes.sh

# Executar o script
./deploy-changes.sh
```

### 2. **Ou fazer manualmente:**
```bash
# Adicionar arquivos
git add .

# Commit
git commit -m "🔧 Correções do cardápio digital - scroll mobile e categorias"

# Push
git push origin main
```

## 🚀 Configuração Vercel

### ✅ **Arquivos já configurados:**
- `vercel.json` - Configuração de deploy
- `package.json` - Scripts atualizados

### 🔗 **Deploy automático:**
1. Conecte seu repositório GitHub com a Vercel
2. A Vercel detectará automaticamente o `vercel.json`
3. Deploy será feito automaticamente a cada push

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