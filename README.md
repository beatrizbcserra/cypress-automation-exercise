# 🧪 Automação de Testes - Automation Exercise

Projeto de automação de testes E2E utilizando Cypress para o site [Automation Exercise](https://automationexercise.com/).

## 🎯 Objetivo

Automatizar o processo de cadastro de múltiplos usuários, validando a funcionalidade de registro do sistema.

## 🚀 Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Data-Driven Testing** - Testes com massa de dados (fixtures)

## ✨ Funcionalidades Implementadas

✅ Cadastro automatizado de múltiplos usuários  
✅ Geração de e-mails únicos para evitar duplicatas  
✅ Validação de navegação entre páginas  
✅ Limpeza de cache entre testes  
✅ Tratamento de timeouts e esperas inteligentes  

## 📂 Estrutura de Testes

- **Mass Data Testing**: Utiliza arquivo JSON com 5 usuários diferentes
- **Validações**: Verifica URL e elementos visíveis na página
- **Isolamento**: Cada teste é independente e limpa o estado anterior

## 🛠️ Como Executar

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn

### Instalação
```bash
npm install cypress --save-dev
```

### Executar testes
```bash
# Modo interativo
npx cypress open

# Modo headless
npx cypress run
```

## 📊 Resultados

✅ 5/5 testes passando  
⏱️ Tempo médio de execução: ~3 minutos  
🎯 Taxa de sucesso: 100%

## 🧩 Desafios Superados

Durante o desenvolvimento, enfrentei e resolvi:
1. **Problema de e-mails duplicados** - Implementei geração dinâmica com timestamp
2. **Timeouts intermitentes** - Ajustei estratégia de espera para elementos específicos
3. **Gerenciamento de cache** - Configurei limpeza adequada entre testes

## 👨‍💻 Autor

[Seu Nome]  
[LinkedIn](seu-link) | [GitHub](seu-link)

## 📝 Licença

Este projeto está sob a licença MIT.
```

### 3. **Crie um .gitignore:**
```
node_modules/
cypress/videos/
cypress/screenshots/
.DS_Store
cypress.config.js.bak
```

---

## 📸 Para o LinkedIn:

### Post sugerido:
```
🚀 Novo Projeto no Portfólio! 🧪

Acabei de concluir um projeto de automação de testes E2E utilizando Cypress!

🎯 O que foi feito:
✅ Automação completa do fluxo de cadastro de usuários
✅ Implementação de Data-Driven Testing com 5 usuários diferentes
✅ Geração dinâmica de e-mails únicos para evitar duplicatas
✅ Tratamento robusto de timeouts e sincronização

💡 Principais aprendizados:
- Estratégias de espera inteligentes no Cypress
- Gerenciamento de estado entre testes
- Debugging de problemas intermitentes
- Boas práticas em automação de testes

🔗 Código disponível no GitHub: [seu-link]

#Cypress #AutomationTesting #QA #JavaScript #Testing #E2E
