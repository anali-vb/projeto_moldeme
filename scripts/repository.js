(() => {
  'use strict';

  class MedidaRepository {
    constructor() {
      /** @type {Medida[]} */
      this._items = [];
    }

    list() {
      return [...this._items];
    }

    add(medida) {
      if (!(medida instanceof window.Medida)) {
        throw new Error('Somente instâncias de Medida podem ser adicionadas.');
      }
      this._items.push(medida);
      return medida.id;
    }

    removeById(id) {
      const idx = this._items.findIndex(m => m.id === id);
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

  window.MedidaRepository = MedidaRepository;

})();