document.addEventListener('DOMContentLoaded', function() {
    // === Funcionalidade do Botão WhatsApp ===
    const whatsappButton = document.getElementById('whatsappButton');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            const phoneNumber = '+5516994365007'; // Seu número de WhatsApp
            const message = encodeURIComponent('Olá, cheguei ao seu contato através do seu site. Gostaria de conversar sobre...');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // === Funcionalidade do Modal de Imagem ===
    const modal = document.getElementById('imageModal');
    const img = document.querySelector('.profile-pic');
    const modalImg = document.getElementById("img01");
    const closeButton = document.querySelector(".close-button");

    if (img && modal && modalImg && closeButton) {
        img.onclick = function(){
            modal.style.display = "flex"; // Use flex para centralizar
            modalImg.src = this.dataset.fullsize || this.src; // Use data-fullsize se disponível, senão o src original
        }

        closeButton.onclick = function() {
            modal.style.display = "none";
        }

        // Fechar ao clicar fora da imagem
        modal.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // === Funcionalidade de Navegação entre Seções ===
    const navLinks = document.querySelectorAll('nav ul li a'); // Seleciona todos os links da navegação
    const sections = document.querySelectorAll('.section'); // Seleciona todas as seções

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active'); // Remove a classe 'active' de todas as seções
        });
        document.getElementById(id).classList.add('active'); // Adiciona a classe 'active' à seção clicada
    }

    // Adiciona o evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link (ir para âncora)
            const targetId = this.getAttribute('href').substring(1); // Pega o ID da seção do atributo href (ex: 'about', 'skills')
            showSection(targetId);

            // Se o menu estiver aberto, feche-o após clicar em um link
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                // Remove a classe 'no-scroll' do body
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Mostra a seção 'Sobre Mim' por padrão ao carregar a página
    showSection('about');

    // === Funcionalidade do Menu Hambúrguer ===
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('mainNav'); // A navegação principal

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Alterna a classe 'active' na navegação
            hamburgerMenu.classList.toggle('active'); // Alterna a classe 'active' no hambúrguer para animação
            
            // Alterna a classe 'no-scroll' no body para bloquear/desbloquear o scroll
            document.body.classList.toggle('no-scroll');
        });
    }
});