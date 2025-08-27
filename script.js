// Lista de convidados com imagem do ingresso
const convidados = [
  { nome: "maria", ingressosImg: "ingressos/maria.png" },
  { nome: "beneval", ingressosImg: "ingressos/beneval.png" },
  { nome: "cleiton", ingressosImg: "ingressos/cleiton.png" },
  { nome: "walisson", ingressosImg: "ingressos/walisson.png" }
];

function confirmarPresenca() {
  const nomeInput = document.getElementById("nome").value.trim().toLowerCase();
  const convidado = convidados.find(c => c.nome === nomeInput);

  const mensagemDiv = document.getElementById("mensagem");
  const qrContainer = document.getElementById("qrContainer");
  const ingressoImg = document.getElementById("ingressoImg");

  mensagemDiv.innerHTML = "";
  qrContainer.style.display = "none";

  if (convidado) {
    mensagemDiv.innerHTML = `<p style="color:green; font-weight:bold;">Presença confirmada para ${convidado.nome}!</p>`;
    
    // Mostra QR Code
    qrContainer.style.display = "block";
    
    // Define imagem
    ingressoImg.src = convidado.ingressosImg;

  } else {
    mensagemDiv.innerHTML = `<p style="color:red; font-weight:bold;">Nome não encontrado!</p>`;
  }
}