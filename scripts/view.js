(() => {
  'use strict';

  class MedidaView {
    /**
    * @param {object} elements
    * @param {HTMLElement} elements.tbody       
    * @param {HTMLElement} [elements.statusElement] 
    */

    constructor({tbody, statusElement}) {
      if (!tbody) throw new Error('MedidaView: tbody é obrigatório.');
      this.tbody = tbody;
      this.statusElement = statusElement || null;
    }

    render(lista) {
      this.tbody.innerHTML = '';

      if (!lista || lista.length === 0) {
        if (this.statusElement) this.statusElement.textContent = 'Nenhuma medida adicionada ainda.';
        return;
      }

      for (const m of lista) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${this._esc(m.nome)}</td>
          <td>${this._formatNumber(m.valor)}</td>
          <td>${this._esc(m.unidade)}</td>
          <td>
            <button type="button" class="btn-remover" data-id="${m.id}" aria-label="Remover">
              <span class="full">Remover</span>
              <span class="short" aria-hidden="true">×</span>
            </button>
          </td>
        `;
        this.tbody.appendChild(tr);
      }

      if (this.statusElement) {
        this.statusElement.textContent = `${lista.length} medida(s) cadastrada(s).`;
      }
    }

    bindRemove(onRemove) {
      this.tbody.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-remover');
        if (!btn) return;
        const id = btn.dataset.id;
        if (id) onRemove(id);
      });
    }

    _esc(str) {
      return String(str).replace(/[&<>"']/g, s => (
        {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]
      ));
    }

    _formatNumber(n) {
      const num = Number(n);
      return Number.isFinite(num) ? num.toString() : '-';
    }
  }

  window.MedidaView = MedidaView;

})();