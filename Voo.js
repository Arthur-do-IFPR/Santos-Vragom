class Voo {
    constructor(codigo, origem, destino, passageiros) {
        if (!codigo || codigo.trim() === "") {
            throw new Error("Segurança: Todo voo precisa de um código identificador.");
        }

        if (origem.toLowerCase() === destino.toLowerCase()) {
            throw new Error(`Operação Negada: O voo ${codigo} não pode decolar e pousar no mesmo local (${origem}).`);
        }

        if (passageiros < 0) {
            throw new Error("Erro de Logística: A capacidade de passageiros não pode ser negativa.");
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.passageiros = passageiros;
    }
}

export default Voo;