# 🎵 Plataforma de Contratação de Artistas

Aplicação web moderna para contratação de artistas para eventos particulares. Desenvolvida com React, Vite e React Router, com design inspirado no Spotify.

## 📋 Funcionalidades

- **Busca de Artistas**: Interface intuitiva para buscar artistas e bandas brasileiras
- **Artistas em Tendência**: Visualização de artistas populares quando não há busca ativa
- **Sistema de Contratação**: Formulário completo com validação de campos obrigatórios
- **Gerenciamento de Contratações**: Visualize e gerencie todas as suas contratações
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface Moderna**: Design inspirado no Spotify com animações suaves
- **Persistência Local**: Dados salvos no LocalStorage do navegador

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (vem junto com o Node.js)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/rhiancastro05-tech/artist-booking-enterscience.git
cd artist-booking
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 🏗️ Estrutura do Projeto
```
artist-booking/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── SearchBar.jsx
│   │   ├── ArtistCard.jsx
│   │   ├── ArtistGrid.jsx
│   │   └── BookingForm.jsx
│   ├── pages/               # Componentes de página
│   │   ├── HomePage.jsx
│   │   ├── BookingPage.jsx
│   │   ├── SuccessPage.jsx
│   │   └── BookingsListPage.jsx
│   ├── services/            # Serviços de API
│   │   └── spotifyService.js
│   ├── utils/               # Funções utilitárias
│   │   └── storage.js
│   ├── styles/              # Arquivos CSS
│   │   ├── SearchBar.css
│   │   ├── ArtistCard.css
│   │   ├── ArtistGrid.css
│   │   ├── BookingForm.css
│   │   ├── HomePage.css
│   │   ├── BookingPage.css
│   │   ├── SuccessPage.css
│   │   └── BookingsListPage.css
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globais
│   └── main.jsx             # Ponto de entrada
├── public/                  # Arquivos estáticos
│   └── artists/             # Imagens dos artistas
├── index.html              # Template HTML
├── package.json            # Dependências do projeto
├── vite.config.js          # Configuração do Vite
└── README.md               # Este arquivo
```

## 💻 Tecnologias Utilizadas

- **React 18**: Biblioteca para construção de interfaces
- **Vite**: Build tool e servidor de desenvolvimento
- **React Router DOM**: Roteamento client-side
- **Lucide React**: Biblioteca de ícones
- **LocalStorage**: Persistência de dados local

## 🎨 Funcionalidades Implementadas

### Requisitos Obrigatórios
- ✅ Busca de artistas funcional
- ✅ Exibição em grade/listagem
- ✅ Formulário de contratação com validação
- ✅ Campos obrigatórios: Nome, Artista Selecionado, Data do Evento, Endereço
- ✅ Campo opcional: Cachê
- ✅ Tela de sucesso após submissão
- ✅ Visualização de contratações anteriores
- ✅ Persistência com LocalStorage

### Funcionalidades Extras
- ✅ Artistas em tendência na página inicial
- ✅ Animações e transições CSS
- ✅ Loading states com spinner
- ✅ Empty states com mensagens úteis
- ✅ Design responsivo mobile-first
- ✅ Feedback visual para interações do usuário
- ✅ Efeitos de hover em cards e botões
- ✅ Mensagens de erro com animação
- ✅ Design inspirado no Spotify (fundo escuro, verde #1db954)
- ✅ Interface em português brasileiro
- ✅ Formatação de moeda em Real (R$)
- ✅ Formatação de datas em português
- ✅ Catálogo com 20+ artistas brasileiros

## 📱 Páginas

### 1. Página Inicial (Home)
- Barra de busca estilo Spotify
- Artistas em tendência (exibição padrão)
- Grade de cards de artistas com hover effects
- Navegação para "Minhas Contratações"

### 2. Página de Contratação (Booking)
- Preview do artista selecionado
- Formulário completo de contratação
- Validação de campos obrigatórios
- Opções de cancelar e confirmar

### 3. Página de Sucesso (Success)
- Mensagem de confirmação
- Opções de navegação
- Botões para voltar à home ou ver contratações

### 4. Página de Contratações (Bookings List)
- Listagem de todas as contratações
- Informações detalhadas de cada contratação
- Opção de limpar todas as contratações
- Estado vazio com call-to-action

## 🎯 Como Usar

1. **Buscar Artistas**: Use a barra de busca para encontrar artistas por nome ou gênero
2. **Selecionar Artista**: Clique em qualquer card de artista para prosseguir
3. **Preencher Formulário**: Complete os campos obrigatórios marcados com *
4. **Confirmar**: Clique em "Confirmar Contratação" para salvar
5. **Visualizar**: Acesse "Minhas Contratações" no header para ver todas as contratações

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção

## 📝 Observações Técnicas

### Qualidade do Código
- **Código Semântico**: Uso adequado de tags HTML5 semânticas
- **Componentização**: Componentes modulares e reutilizáveis
- **Código Limpo**: Organizado e bem estruturado
- **Comentários em Inglês**: Documentação clara em todos os componentes
- **Boas Práticas**: Seguindo padrões do React e JavaScript moderno

### Dados dos Artistas
- A aplicação utiliza dados mock de artistas brasileiros famosos
- As imagens são URLs de placeholder (podem ser substituídas por imagens reais)
- A busca filtra por nome do artista ou gênero musical
- Catálogo inclui: Anitta, Gilberto Gil, Caetano Veloso, Ludmilla, Ivete Sangalo, entre outros

### Persistência
- Todos os dados são salvos no LocalStorage do navegador
- Os dados persistem entre sessões
- Não há necessidade de backend ou banco de dados

## 🎨 Design

O design foi inspirado no Spotify, utilizando:
- **Cores**: Fundo escuro (#121212), verde Spotify (#1db954)
- **Tipografia**: Fontes modernas e legíveis
- **Componentes**: Botões pill-shaped, cards com hover, animações suaves
- **Responsividade**: Layout adaptativo para todos os tamanhos de tela

## 🤝 Desenvolvido Para

Teste técnico para vaga de estágio de desenvolvedor na **EnterScience**

## 📧 Contato

Para dúvidas sobre este projeto, entre em contato através de: **vagas@enterscience.com.br**

---

**Desenvolvido por Rhian Castro**
