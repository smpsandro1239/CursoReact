# 🚀 Guia de Deploy Vercel - Sandro Pereira

Este projeto está otimizado para deploy automático na Vercel.

## Configuração Recomendada

1. **Framework Preset**: `Other` (o root `package.json` trata do build).
2. **Build Command**: `npm run build` (executa a delegação para o sub-diretório).
3. **Output Directory**: `dist` (movido do sub-diretório para o root durante o build).
4. **Environment Variables**: Copia as chaves de `.env.example` se necessário.

## Vantagens da Configuração Atual
- **SPA Rewrites**: O ficheiro `vercel.json` garante que rotas como `/aula/1` ou `/analytics` funcionam sem erros 404.
- **Clean URLs**: URLs sem extensão `.html`.
- **Atomic Deploys**: Integração direta com o GitHub de Sandro Pereira.

---
*Gerado por: Sandro Pereira - Março 2026*
