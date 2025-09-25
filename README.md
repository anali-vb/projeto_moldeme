# Cadastro de Medidas (projeto_moldeme)

App web simples (HTML/CSS/JS puro) para cadastrar, listar e remover medidas.

## Como executar

### 1) Online (GitHub Pages)
- [https://anali-vb.github.io/projeto_moldeme/](https://anali-vb.github.io/projeto_moldeme/)

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
- O projeto inclui também testes automatizados com **QUnit**, no arquivo `tests.html`, que validam as regras do modelo `Medida` e do `MedidaRepository`.  

### Como executar os testes
- Abrir o arquivo `tests.html` localmente em um navegador moderno, ou  
- [https://anali-vb.github.io/projeto_moldeme/tests.html](https://anali-vb.github.io/projeto_moldeme/tests.html)  

---

Feito com carinho. Bons testes e boa experiência! ✨