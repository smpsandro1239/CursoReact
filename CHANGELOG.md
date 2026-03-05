# 📝 CHANGELOG - Premium React Evolution

Todas as alterações notáveis neste projeto serão documentadas neste ficheiro.

## [v2.0.0] - 2026-03-05
### 🚀 Adicionado
- **Novo Motor de Gamificação**: Sistema completo de XP, Níveis e Streaks gerido via Zustand.
- **HUD Persistente**: `GamificationBar` visível em todas as páginas para monitorização de progresso em tempo real.
- **40 Aulas de Elite**: Expansão do currículo (Aulas 31-40) com temas de vanguarda (RSC, Micro-Frontends, MSW, etc.).
- **Editor Interativo v2**: Laboratório de código com feedback imediato e recompensas de XP.
- **Certificação PDF**: Geração de certificado client-side com `html2pdf.js` incluindo métricas reais.
- **PWA Full**: Suporte completo para instalação e cache offline básico.
- **Playwright Testing**: Suite de testes E2E para garantir estabilidade no deploy.

### 🛠️ Alterado
- **Migração de Estado**: Transição de `localStorage` manual/Context para **Zustand** centralizado.
- **UI/UX Reimagined**: Tema Dark/Light refinado com `framer-motion` e acessibilidade melhorada.
- **Estrutura de Dados**: Implementação de esquemas com `Zod` para validação de aulas e progresso.

### 🛡️ Corrigido
- Bug de duplicação de lições no contador global.
- Conflito de importação no componente de Glossário.
- Erros de roteamento SPA na Vercel via `vercel.json` otimizado.

---
*Autor: Sandro Pereira (smpsandro1239)*
