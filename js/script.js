// Contador de mensagens caipiras
const contador = document.getElementById('contador');
if (contador) {
  contador.innerHTML = `
    <span id="tempo-contador"></span>
    <div class="loader">
      <span>&lt;</span>
      <span id="frase-loader"></span>
      <span>/&gt;</span>
    </div>
  `;

  const tempoContador = document.getElementById('tempo-contador');
  const fraseLoader = document.getElementById('frase-loader');
  const dataEvento = new Date("2025-06-28T18:00:00").getTime();
  const mensagens = [
    "Vish, tá quase, cumpadi!",
    "A pamonha tá no fogo!",
    "Segura o código, cabra!",
    "Chama na quadrilha digital!",
    "Oxente, prepara o chapéu que falta pouco!",
    "Num vai bugar não! O arraiá tá quase aí!",
    "Já separou a paçoca digital?",
    "Falta pouco pra festança!"
  ];

  let mensagemAtual = mensagens[Math.floor(Math.random() * mensagens.length)];
  fraseLoader.textContent = mensagemAtual;

  // Atualização da contagem regressiva
  setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    tempoContador.textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s`;
  }, 1000);

  // O timer de mudar a mensagem caipira que agora é animada
  setInterval(() => {
    mensagemAtual = mensagens[Math.floor(Math.random() * mensagens.length)];
    fraseLoader.textContent = mensagemAtual;
  }, 15000);
}

const form = document.getElementById('form-voluntario');
const prendaInput = document.getElementById('prenda');
const emoji = document.getElementById('emoji-feedback');
const mensagemFinal = document.getElementById('mensagem-final');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const animacao = document.getElementById('animacao').value.trim();
    const prenda = prendaInput.value.trim();

    const disponibilidades = Array.from(form.querySelectorAll('input[type="checkbox"]'));
    const algumaDisponibilidade = disponibilidades.some(cb => cb.checked);
    
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome || !emailValido || !animacao || animacao < 1 || animacao > 5 || !prenda || !algumaDisponibilidade) {
      alert("Preencha todos os campos corretamente!\n- Nome\n- Email válido\n- Nível de animação (1 a 5)\n- Prenda tecnológica\n- Marque pelo menos uma disponibilidade");
      return;
    }

    mensagemFinal.innerHTML = `Anarriê, ${nome}! Sua ajuda será arretada!`;
    form.reset();
  });

  prendaInput.addEventListener('input', () => {
    if (['sanfona', 'fogueira'].includes(prendaInput.value.toLowerCase())) {
      emoji.innerText = prendaInput.value.toLowerCase() === 'sanfona' ? '🪗' : '🔥';
      setTimeout(() => emoji.innerText = '', 3000);
    }
  });
}
