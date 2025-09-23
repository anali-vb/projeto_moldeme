(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const repo = new window.MedidaRepository();

    const view = new window.MedidaView({
      tbody: document.getElementById('tabela-medidas'),
      statusElement: document.getElementById('status-tabela'),
    });

    const controller = new window.MedidaController({
      repo,
      view,
      form: document.getElementById('form-medida'),
      inputNome: document.getElementById('nome'),
      inputValor: document.getElementById('valor'),
      selectUnidade: document.getElementById('unidade'),
    });

    controller.init();
  });

})();