// ====================================================
// ESPERA O HTML CARREGAR ANTES DE EXECUTAR QUALQUER SCRIPT
// ====================================================
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. SCRIPT DO MENU MOBILE (AGORA SEGURO E SEM DUPLICAÇÃO) ---
    const mobileMenu = document.getElementById('mobile-menu');
    
    // "Código defensivo": Só executa se o elemento #mobile-menu existir na página
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function () {
            var nav = document.querySelector('nav');
            nav.classList.toggle('active'); // Alterna a classe "active" no nav
        });
    }

    // --- 2. ANIMAÇÃO DOS CONTADORES (impact-stats) ---
    const statsSection = document.querySelector('.impact-stats');
    
    // Só executa se a seção .impact-stats existir
    if (statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter-number');
                    counters.forEach(counter => {
                        // (Função animateCounter não estava no seu script, assumindo que está em outro local ou que este é o código completo)
                        // Se 'animateCounter' for uma função sua, ela precisa estar definida
                        // Por agora, vamos focar na otimização da estrutura.
                        // animateCounter(counter); 
                        
                        // Exemplo simples de animação, caso 'animateCounter' não exista:
                        const target = +counter.getAttribute('data-target'); // Assumindo que você tem um atributo ex: data-target="1000"
                        counter.innerText = '0';
                        const updateCounter = () => {
                            const current = +counter.innerText;
                            if(current < target) {
                                counter.innerText = `${Math.ceil(current + target / 200)}`; // Animação simples
                                setTimeout(updateCounter, 10);
                            } else {
                                counter.innerText = target; // Garante o valor final
                            }
                        };
                        updateCounter();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 
        });
        observer.observe(statsSection);
    }

    // --- 3. ANIMAÇÃO DE DIGITAÇÃO (typing-effect) ---
    // Verifica se o elemento com o id 'typing-effect' existe
    if (document.getElementById('typing-effect')) {
        const options = {
            strings: [
                'Cansada de lutar as mesmas batalhas todos os dias com o seu filho adolescente?'
            ],
            typeSpeed: 40,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        };
        // Assumindo que a biblioteca Typed.js foi carregada no HTML
        const typed = new Typed('#typing-effect', options);
    }

    // --- 4. CONFIGURAÇÃO DAS PARTÍCULAS (particles-js) ---
    if (document.getElementById('particles-js')) {
        // Assumindo que a biblioteca particlesJS foi carregada no HTML
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

    // --- 5. ANIMAÇÃO DE SCROLL (diagnostico-step) ---
    const steps = document.querySelectorAll('.diagnostico-step');

    if (steps.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // Descomente se quiser que a animação rode só uma vez
                }
            });
        }, {
            root: null, 
            threshold: 0.2 
        });

        steps.forEach(step => {
            observer.observe(step);
        });
    }
});