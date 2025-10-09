(() => {
  'use strict'; // pra evitar erros silenciosos  

  const UNIDADES_PERMITIDAS = ['m', 'cm', 'mm', 'pol'];

  class Medida { // Explicando como o construtor da classe Medida deve ser chamado 
    /**
    * @param {object} dados
    * @param {string} dados.nome
    * @param {number|string} dados.valor
    * @param {string} dados.unidade
    */
    
    constructor({nome, valor, unidade}) {
      const nomeTrim = String(nome ?? '').trim(); // Para eliminar espaços extras 
      const unidadeTrim = String(unidade ?? '').trim(); // unidade se existir, senão use string vazia 
      const num = Number(String(valor ?? '').toString().replace(',', '.')); 

      if (!nomeTrim) throw new Error('O nome da medida é obrigatório.');
      if (!Number.isFinite(num) || num < 0) {
        throw new Error('O valor deve ser numérico e maior/igual a zero.');
      }
      if (!UNIDADES_PERMITIDAS.includes(unidadeTrim)) {
        throw new Error(`Unidade informada inválida. Use: ${UNIDADES_PERMITIDAS.join(', ')}.`);
      }
      this.nome = nomeTrim; // Atribuição às propriedades da instância
      this.valor = num;
      this.unidade = unidadeTrim;
      this.id = (window.crypto && crypto.randomUUID) // cada medida cadastrada tenha um id, garantindo unicidade e evita problemas ao manipular medidas na tabela
        ? crypto.randomUUID()
        : String(Date.now()) + Math.random().toString(16).slice(2);
    }
  }

  window.Medida = Medida;
  window.UNIDADES_PERMITIDAS = UNIDADES_PERMITIDAS; // Coloquei Medida e UNIDADES_PERMITIDAS no window pra que os outros módulos (repository, controller, view) conseguissem acessar essas definições

})();