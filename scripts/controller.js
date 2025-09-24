(() => {
  'use strict';

  class MedidaController {
    /**
    * @param {object} dependencies
    * @param {MedidaRepository} dependencies.repo
    * @param {MedidaView} dependencies.view
    * @param {HTMLFormElement} dependencies.form
    * @param {HTMLInputElement} dependencies.inputNome
    * @param {HTMLInputElement} dependencies.inputValor
    * @param {HTMLSelectElement} dependencies.selectUnidade
    */

    constructor({repo, view, form, inputNome, inputValor, selectUnidade}) {
      if (!repo || !view || !form || !inputNome || !inputValor || !selectUnidade) {
        throw new Error('MedidaController: dependências obrigatórias ausentes.');
      }
      this.repo = repo;
      this.view = view;
      this.form = form;
      this.inputNome = inputNome;
      this.inputValor = inputValor;
      this.selectUnidade = selectUnidade;
    }

    init() {
      this.refresh();
      this.form.addEventListener('submit', (e) => this.onSubmit(e));
      this.view.bindRemove((id) => {
        this.repo.removeById(id);
        this.refresh();
      });
    }

    refresh() {
      this.view.render(this.repo.list());
    }

    onSubmit(e) {
      e.preventDefault();

      try {
        const medida = new window.Medida({
          nome: this.inputNome.value,
          valor: this.inputValor.value,
          unidade: this.selectUnidade.value,
        });
        this.repo.add(medida);
        this.form.reset();
        this.inputNome.focus();
        this.refresh();
      } catch (err) {
        alert(err?.message || 'Erro ao adicionar medida.');
      }
    }
  }

  window.MedidaController = MedidaController;

})();