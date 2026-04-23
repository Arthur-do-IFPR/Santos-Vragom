import Voo from './Voo.js';

const btn = document.getElementById("btnRegistrar");
const aviso = document.getElementById("avisoSistema");

btn.addEventListener("click", () => {
    const código = document.getElementById("inputCodigo").value;
    const origem = document.getElementById("inputOrigem").value;
    const destino = document.getElementById("inputDestino").value;
    const quantidade = document.getElementById("inputPassageiros").value;

    try {
        const novoVoo = new Voo(código, origem, destino, Number(quantidade));

        aviso.innerText = `Sucesso! Voo ${novoVoo.codigo} registrado para ${novoVoo.destino}.`;
        aviso.style.color = "green";
        
        console.log("Objeto criado:", novoVoo);

    } catch (erro) {
        aviso.innerText = `Erro: ${erro.message}`;
        aviso.style.color = "red";
    } finally {
        console.log("Processo de registro encerrado.");
    }
});