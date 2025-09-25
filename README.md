# Cadastro de Medidas (projeto_moldeme)

App web simples (HTML/CSS/JS puro) para cadastrar, listar e remover medidas.

## Como executar

### 1) Online (GitHub Pages)
- Acesse o **link do site** que aparece na página do repositório (seção **About → Website**).
- O padrão do link é: `https://anali-vb.github.io/projeto_moldeme/`.

### 2) Local (sem dependências)
- No GitHub, clique em **Code → Download ZIP** e extraia, ou use `git clone`.
- Abra o arquivo **`index.html`** no navegador **ou**:
- (Recomendado) **VS Code** → abra a pasta do projeto → **Open with Live Server**.

> Requisitos: apenas um navegador moderno (Chrome/Edge/Firefox/Safari). Não há dependências nem build.

## O que o app faz
- Formulário com validação (nome, valor ≥ 0, unidade).
- Tabela com as medidas e ação de **Remover** (no mobile mostra **×**).
- Responsivo e com foco acessível.

## Observações
- Os dados são mantidos **em memória** (não persistem após recarregar).
- Projeto desenvolvido no **VS Code**.
- Inclui também um arquivo `tests.html` com testes automatizados (QUnit) para validar regras do modelo `Medida` e do `MedidaRepository`. Para executá-los, basta abrir o arquivo `tests.html` em um navegador moderno.

---

Feito com carinho. Bons testes e boa experiência! ✨