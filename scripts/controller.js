(() => {
  'use strict';

  class MedidaController { // controlar a aplicação -> explicar os parâmetros que o construtor vai receber
    /**
    * @param {object} dependencies
    * @param {MedidaRepository} dependencies.repo // onde ficam os dados das medidas
    * @param {MedidaView} dependencies.view // renderizar a tabela e mostrar as interações na tela
    * @param {HTMLFormElement} dependencies.form
    * @param {HTMLInputElement} dependencies.inputNome
    * @param {HTMLInputElement} dependencies.inputValor
    * @param {HTMLSelectElement} dependencies.selectUnidade
    */

    constructor({repo, view, form, inputNome, inputValor, selectUnidade}) {
      if (!repo || !view || !form || !inputNome || !inputValor || !selectUnidade) {
        throw new Error('MedidaController: dependências obrigatórias ausentes.');
      }
      this.repo = repo; // Atribuição às propriedades da instância
      this.view = view;
      this.form = form;
      this.inputNome = inputNome;
      this.inputValor = inputValor;
      this.selectUnidade = selectUnidade;
    }

    init() {
      this.refresh(); // tabela esteja sincronizada com o repositório
      this.form.addEventListener('submit', (e) => this.onSubmit(e));
      this.view.bindRemove((id) => { // função recebe o id da medida clicada
        this.repo.removeById(id); // remove a medida do repositório
        this.refresh(); // Atualiza
      });
    }

    refresh() {
      this.view.render(this.repo.list()); // pega todos os itens cadastrados no repositório e manda essa lista para a View
    }

    onSubmit(e) {
      e.preventDefault(); // cancela o recarregar a página

      try {
        const medida = new window.Medida({ // instancia a classe Medida
          nome: this.inputNome.value,
          valor: this.inputValor.value,
          unidade: this.selectUnidade.value,
        });
        this.repo.add(medida);
        this.form.reset();
        this.inputNome.focus(); // deixa o cursor no campo de nome para facilitar o próximo cadastro
        this.refresh();
      } catch (err) {
        alert(err?.message || 'Erro ao adicionar medida.');
      }
    }
  }

  window.MedidaController = MedidaController; // Expõe a classe no objeto global window, para que outros scripts (como o main.js) possam instanciar e usar o Controller

})();