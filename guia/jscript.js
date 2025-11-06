// =======================================================
// LÓGICA DO CRONÓMETRO DE CONTAGEM DECRESCENTE
// =======================================================

// IMPORTANTE: Defina a sua data final aqui!
// Formato: "Mês Dia, Ano HH:MM:SS" (ex: "Jan 5, 2026 15:37:25")
const targetDate = new Date("Oct 30, 2025 23:59:59").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculos de tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostra os resultados nos elementos HTML
    if (document.getElementById('days')) {
        document.getElementById("days").innerText = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Se a contagem terminar, mostra uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        if (document.getElementById('countdown-timer')) {
            document.getElementById('countdown-timer').innerHTML = "<p>Oferta Encerrada!</p>";
        }
    }
}, 1000);

// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

  // ====================================================
  // PARTE 1: FUNCIONALIDADE DE EXPANDIR O TEXTO
  // ====================================================
  
  // Seleciona todos os botões de expandir que existem na página
  const botoesExpandir = document.querySelectorAll('.btn-expandir');

  // Para cada botão encontrado, adiciona a funcionalidade de clique
  botoesExpandir.forEach(botao => {
    botao.addEventListener('click', function() {
      // Encontra o parente ".cartao-depoimento" mais próximo do botão clicado
      const cartao = this.closest('.cartao-depoimento');
      
      // Dentro desse cartão, encontra o conteúdo completo
      const conteudoCompleto = cartao.querySelector('.conteudo-completo');
      
      // Adiciona ou remove a classe "expandido", que faz a mágica no CSS
      conteudoCompleto.classList.toggle('expandido');

      // Altera o texto do botão para ser mais intuitivo
      if (conteudoCompleto.classList.contains('expandido')) {
        this.textContent = 'Fechar';
      } else {
        this.textContent = 'Ler a história completa';
      }
    });
  });

  // ====================================================
  // PARTE 2: FUNCIONALIDADE DO CARROSSEL
  // ====================================================

  const slides = document.querySelectorAll('.slide');
  const btnAnterior = document.querySelector('.prev-btn');
  const btnProximo = document.querySelector('.next-btn');

  let slideAtual = 0; // Começamos no primeiro slide (índice 0)

  // Função para mostrar o slide correto e esconder os outros
  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('ativo');
      if (i === index) {
        slide.classList.add('ativo');
      }
    });
  }

  // Evento de clique para o botão "Próximo"
  btnProximo.addEventListener('click', function() {
    slideAtual++;
    if (slideAtual >= slides.length) {
      slideAtual = 0; // Volta para o primeiro se chegar no fim
    }
    mostrarSlide(slideAtual);
  });

  // Evento de clique para o botão "Anterior"
  btnAnterior.addEventListener('click', function() {
    slideAtual--;
    if (slideAtual < 0) {
      slideAtual = slides.length - 1; // Vai para o último se estiver no primeiro
    }
    mostrarSlide(slideAtual);
  });

  // Mostra o primeiro slide assim que a página carrega
  mostrarSlide(slideAtual);

});

// ====================================================
// FUNCIONALIDADE DO ACORDEÃO
// ====================================================
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Pega o item pai do header clicado
    const clickedItem = header.parentElement;

    // Fecha todos os outros itens abertos
    accordionHeaders.forEach(otherHeader => {
      const otherItem = otherHeader.parentElement;
      if (otherItem !== clickedItem && otherItem.classList.contains('ativo')) {
        otherItem.classList.remove('ativo');
        otherHeader.classList.remove('ativo');
        otherHeader.nextElementSibling.style.maxHeight = null;
      }
    });

    // Abre ou fecha o item clicado
    clickedItem.classList.toggle('ativo');
    header.classList.toggle('ativo');
    const accordionBody = header.nextElementSibling;
    if (header.classList.contains('ativo')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = null;
    }
  });
});

// ====================================================
// FUNCIONALIDADE DO ACORDEÃO DA SEÇÃO 'BATALHA'
// ====================================================
const accordionHeadersV2 = document.querySelectorAll('.accordion-header-v2');

accordionHeadersV2.forEach(header => {
  header.addEventListener('click', () => {
    const clickedItem = header.parentElement;

    // Fecha todos os outros itens (opcional, mas recomendado)
    accordionHeadersV2.forEach(otherHeader => {
      const otherItem = otherHeader.parentElement;
      if (otherItem !== clickedItem && otherItem.classList.contains('ativo')) {
        otherItem.classList.remove('ativo');
        otherHeader.classList.remove('ativo');
        otherHeader.nextElementSibling.style.maxHeight = null;
      }
    });

    // Abre/Fecha o item clicado
    clickedItem.classList.toggle('ativo');
    header.classList.toggle('ativo');
    const accordionBody = header.nextElementSibling;
    if (header.classList.contains('ativo')) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else {
      accordionBody.style.maxHeight = null;
    }
  });
});

// ====================================================
// ANIMAÇÃO DE ENTRADA DO HERO
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300); // Pequeno delay para começar a animação
  }
});

// ====================================================
// FUNCIONALIDADE DO CARROSSEL DE DEPOIMENTOS
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-depoimento');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    
    // Criar os pontos
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.setAttribute('data-slide', i);
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('ativo'));
      dots.forEach(dot => dot.classList.remove('ativo'));
      
      slides[index].classList.add('ativo');
      dots[index].classList.add('ativo');
      currentSlide = index;
    }

    // Event listeners para os botões
    document.querySelector('.nav-btn-depoimento.prev').addEventListener('click', () => {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
      showSlide(currentSlide);
    });

    document.querySelector('.nav-btn-depoimento.next').addEventListener('click', () => {
      currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
      showSlide(currentSlide);
    });

    // Event listeners para os pontos
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        showSlide(parseInt(e.target.getAttribute('data-slide')));
      });
    });
    
    // Mostrar o primeiro slide
    showSlide(0);
  }
});


// ====================================================
// CONFIGURAÇÃO DAS PARTÍCULAS DO HERO
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffd700" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 0.8, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
      "retina_detect": true
    });
  }
});