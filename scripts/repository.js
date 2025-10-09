(() => {
  'use strict';

  class MedidaRepository { // classe pra ser o repositório
    constructor() {
      /** @type {Medida[]} */ // vai guardar uma lista de Medida
      this._items = [];
    }

    list() {
      return [...this._items]; // cópia do array com as medidas -> proteger a integridade dos dados
    }

    add(medida) {
      if (!(medida instanceof window.Medida)) { // só aceita objetos que sejam de fato Medida
        throw new Error('Somente instâncias de Medida podem ser adicionadas.');
      }
      this._items.push(medida); // Depois adiciona no array interno
      return medida.id; //Retorna o id da medida recém-adicionada
    }

    removeById(id) {
      const idx = this._items.findIndex(m => m.id === id); // procura o índice da medida com aquele id
      if (idx >= 0) {
        this._items.splice(idx, 1);
        return true;
      }
      return false;
    }

    clear() {
      this._items.length = 0;
    }
  }

  window.MedidaRepository = MedidaRepository; // Deixa o repositório acessível globalmente, pra que o controller.js consiga instanciar ele

})();