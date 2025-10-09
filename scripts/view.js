(() => {
  'use strict';

  class MedidaView {
    /**
    * @param {object} elements // objeto com referências do DOM
    * @param {HTMLElement} elements.tbody // medidas vão aparecer      
    * @param {HTMLElement} [elements.statusElement] // mostra mensagens de status (opcional)
    */

    constructor({tbody, statusElement}) {
      if (!tbody) throw new Error('MedidaView: tbody é obrigatório.');
      this.tbody = tbody;
      this.statusElement = statusElement || null;
    }

    render(lista) {
      this.tbody.innerHTML = ''; // Esvaziar

      if (!lista || lista.length === 0) {
        if (this.statusElement) this.statusElement.textContent = 'Nenhuma medida adicionada ainda.';
        return;
      }

      for (const m of lista) { // Percorre cada objeto Medida da lista
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

      if (this.statusElement) { // Atualiza status
        this.statusElement.textContent = `${lista.length} medida(s) cadastrada(s).`;
      }
    }

    bindRemove(onRemove) {
      this.tbody.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-remover');
        if (!btn) return; // clique não foi num botão
        const id = btn.dataset.id; // qual medida específica o usuário quer remover
        if (id) onRemove(id);
      });
    }

    _esc(str) { //serve de utilitário: escapa caracteres especiais -> para garantir segurança contra injeção de código malicioso
      return String(str).replace(/[&<>"']/g, s => (
        {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]
      ));
    }

    _formatNumber(n) {
      const num = Number(n);
      return Number.isFinite(num) ? num.toString() : '-';
    }
  }

  window.MedidaView = MedidaView; // Expõe a View globalmente no window, pra que o main.js consiga instanciá-la e conectar com o Controller

})();