QUnit.module("Classe Medida", () => {
    QUnit.test("cria medida válida", assert => {
        const m = new Medida({nome: "Cintura", valor: 80, unidade: "cm"});
        assert.equal(m.nome, "Cintura");
        assert.equal(m.valor, 80);
        assert.equal(m.unidade, "cm");
    });

    QUnit.test("erro quando nome vazio", assert => {
        assert.throws(() => new Medida({nome: "", valor: 50, unidade: "cm"}),
        /obrigatório/, "nome vazio deve lançar erro");
    });

    QUnit.test("erro quando valor negativo", assert => {
        assert.throws(() => new Medida({nome: "Quadril", valor: -10, unidade: "cm"}),
        /maior\/igual a zero/, "valor negativo deve falhar");
    });

    QUnit.test("erro quando unidade inválida", assert => {
        assert.throws(() => new Medida({nome: "Braço", valor: 25, unidade: "kg"}),
        /inválida/, "unidade inválida deve falhar");
    });
});

QUnit.module("MedidaRepository", () => {
    QUnit.test("adiciona e lista medida", assert => {
        const repo = new MedidaRepository();
        const m = new Medida({nome: "Torso", valor: 95, unidade: "cm"});
        repo.add(m);

        const lista = repo.list();
        assert.equal(lista.length, 1);
        assert.equal(lista[0].nome, "Torso");
    });

    QUnit.test("remove medida pelo id", assert => {
        const repo = new MedidaRepository();
        const m = new Medida({nome: "Braço", valor: 30, unidade: "cm"});
        const id = repo.add(m);

        const ok = repo.removeById(id);
        assert.true(ok, "removeu com sucesso");
        assert.equal(repo.list().length, 0, "lista ficou vazia");
    });
});