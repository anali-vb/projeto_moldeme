(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => { 
    const repo = new window.MedidaRepository(); // Instancia o repositório que vai guardar todas as medidas em memória 

    const view = new window.MedidaView({
      tbody: document.getElementById('tabela-medidas'), // onde as medidas serão renderizadas
      statusElement: document.getElementById('status-tabela'), // mostra “Nenhuma medida adicionada ainda"
    });

    const controller = new window.MedidaController({ // conecta os inputs do usuário com os dados e atualiza a tela
      repo,
      view,
      form: document.getElementById('form-medida'),
      inputNome: document.getElementById('nome'),
      inputValor: document.getElementById('valor'),
      selectUnidade: document.getElementById('unidade'),
    });

    controller.init(); // Renderiza a lista inicial
  });

})();