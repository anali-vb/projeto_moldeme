(() => {
  'use strict';

  const UNIDADES_PERMITIDAS = ['m', 'cm', 'mm', 'pol'];

  class Medida {
    /**
    * @param {object} dados
    * @param {string} dados.nome
    * @param {number|string} dados.valor
    * @param {string} dados.unidade
    */
    
    constructor({nome, valor, unidade}) {
      const nomeTrim = String(nome ?? '').trim();
      const unidadeTrim = String(unidade ?? '').trim();
      const num = Number(String(valor ?? '').toString().replace(',', '.'));

      if (!nomeTrim) throw new Error('O nome da medida é obrigatório.');
      if (!Number.isFinite(num) || num < 0) {
        throw new Error('O valor deve ser numérico e maior/igual a zero.');
      }
      if (!UNIDADES_PERMITIDAS.includes(unidadeTrim)) {
        throw new Error(`Unidade informada inválida. Use: ${UNIDADES_PERMITIDAS.join(', ')}.`);
      }
      this.nome = nomeTrim;
      this.valor = num;
      this.unidade = unidadeTrim;
      this.id = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : String(Date.now()) + Math.random().toString(16).slice(2);
    }
  }

  window.Medida = Medida;
  window.UNIDADES_PERMITIDAS = UNIDADES_PERMITIDAS;

})();