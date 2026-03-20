# 📡 CS Wi-Fi — Caruaru Shopping

Aplicativo de monitoramento e medição de velocidade das antenas Wi-Fi do Caruaru Shopping.

## 🚀 Deploy no Vercel

### Opção 1 — Via GitHub (recomendado)

1. Faça upload desta pasta para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `cswifi`
5. Clique em **"Deploy"** — sem nenhuma configuração extra
6. Em ~30 segundos o app estará disponível em `https://seu-projeto.vercel.app`

### Opção 2 — Via Vercel CLI

```bash
npm i -g vercel
cd cswifi
vercel --prod
```

---

## 📱 Instalar no celular como app

### Android (Chrome)
1. Abra o link do Vercel no Chrome
2. Toque no menu **⋮** → **"Adicionar à tela inicial"**
3. Ou aguarde o banner de instalação aparecer automaticamente

### iPhone (Safari)
1. Abra o link no Safari
2. Toque no botão **Compartilhar** (□↑)
3. Toque em **"Adicionar à Tela de Início"**

---

## ⚙️ Configuração inicial

1. Acesse o app no Vercel
2. Na tela de login, cole a **URL do Google Apps Script** no campo indicado
3. Clique em **"Salvar URL"** e depois **"Testar"**
4. Faça login com `admin` / `wifi2024cs`

### Usuários padrão
| Usuário | Senha | Perfil |
|---|---|---|
| admin | wifi2024cs | admin |
| tecnico1 | tec123 | tecnico |
| tecnico2 | tec456 | tecnico |
| tecnico3 | tec789 | tecnico |

> ⚠️ Altere as senhas editando diretamente a aba **"Usuarios"** na planilha do Google Sheets.

---

## 🗂️ Estrutura de arquivos

```
cswifi/
├── index.html          ← App principal
├── manifest.json       ← Configuração PWA
├── sw.js               ← Service Worker (cache offline)
├── favicon.png         ← Ícone do navegador
├── vercel.json         ← Configuração do Vercel
├── .gitignore
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    └── apple-touch-icon.png
```

---

## 🧪 Teste de velocidade

O app detecta automaticamente o contexto:

| Contexto | Servidores usados | Upload |
|---|---|---|
| Vercel / `https://` | 11 servidores Caruaru/PE | ✅ Real |
| `file://` (local) | Cloudflare CDN | Estimado |

**Servidores em Caruaru/PE:**
Smart Fibra · INFORNETFIBRA · Interligados Weblink · BDNet.Com · FoxNET FIBRA · GRSoluções TELECOM · Tefnet Tecnologia · BOM JESUS NET · J.A Provedor · Nação Online · GPLUS Telecom

---

Desenvolvido para o Caruaru Shopping · 2026
