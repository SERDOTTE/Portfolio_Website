// Typewriter Animation
    const typewriterElement = document.querySelector('.typewriter span');
    if (typewriterElement) {
      const text = typewriterElement.textContent;
      const typingSpeed = 80; // Velocidade de digitação em ms por caractere
      const pauseEnd = 2000; // Pausa no final em ms
      
      // Limpar o texto inicial
      typewriterElement.textContent = '';
      let displayText = '';
      let charIndex = 0;
      
      function typeWriter() {
        // Adiciona caractere por caractere
        if (charIndex < text.length) {
          displayText += text.charAt(charIndex);
          typewriterElement.textContent = displayText;
          typewriterElement.classList.remove('hide-cursor');
          charIndex++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          // Quando terminar, remove o cursor piscante
          typewriterElement.classList.add('hide-cursor');
          // Aguarda e reinicia
          setTimeout(() => {
            charIndex = 0;
            displayText = '';
            typewriterElement.textContent = '';
            typeWriter();
          }, pauseEnd);
        }
      }
      
      // Iniciar a animação
      typeWriter();
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Fechar menu mobile
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        
        // Obter o ID da seção alvo
        const targetId = link.getAttribute('href').substring(1); // Remove o #
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          // Fazer scroll suave para a seção
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Active link on scroll (optional - can be removed if not wanted)
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      });
    });