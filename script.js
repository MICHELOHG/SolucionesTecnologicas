document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.getElementById("cuerpo");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 15 + 15}s`; // Duración entre 2 y 5 segundos

        starContainer.appendChild(star);

        // Elimina la estrella una vez que termina su animación
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // Crea una estrella cada 300ms
    setInterval(createStar, 300);
});



// Función para simular el efecto de máquina de escribir
function maquinaEscribir(texto, elemento) {
    let index = 0;
    const intervalo = 100; // Tiempo en milisegundos entre cada letra
  
    function escribir() {
      elemento.textContent += texto[index];
      index++;
      if (index < texto.length) {
        setTimeout(escribir, intervalo);
      }
    }
  
    escribir();
  }
  




document.addEventListener("DOMContentLoaded", function() {
    let animationStarted = false;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function maquinaEscribir(texto, contenedor) {
        let i = 0;
        function typeWriter() {
            if (i < texto.length) {
                contenedor.innerHTML += texto.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Velocidad de escritura en milisegundos
            }
        }
        typeWriter();
    }

    function checkVisibility() {
        const contenedor2 = document.getElementById('contenedor2');
        if (isElementInViewport(contenedor2) && !animationStarted) {
            animationStarted = true;
            const texto = "PORTAFOLIO DE PROYECTOS";
            const contenedorTitulo = document.getElementById('contenedor2-titulo1');
            maquinaEscribir(texto, contenedorTitulo);
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidad en la carga inicial
});








document.addEventListener("DOMContentLoaded", function() {
    let animationStarted = false;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function animatePercentage(elementId) {
        var percentage = document.getElementById(elementId);
        var start = 50;
        var end = 100;
        var duration = 3000; // Duración de la animación en milisegundos
        var increment = (end - start) / (duration / 100); // Incremento por cada 100ms

        var current = start;
        var interval = setInterval(function() {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(interval);
            }
            percentage.textContent = Math.round(current) + '%';
        }, 100);
    }

    function checkVisibility() {
        const contenedor3 = document.getElementById('contenedor3');
        if (isElementInViewport(contenedor3) && !animationStarted) {
            animationStarted = true;
            animatePercentage('percentage');
            animatePercentage('percentage2');
            animatePercentage('percentage3');
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidad en la carga inicial
});
















document.addEventListener("DOMContentLoaded", function() {
    const texts2 = [
        'Todos los servicios de la tecnología para alcanzar tus objetivos.',
        'Dime en qué puedo ayudarte'
    ];
    
    function typeWriter(elementId, texts, delay = 100, pause = 2000) {
        const element = document.getElementById(elementId);
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            
            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    element.textContent += currentText.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, delay);
                } else {
                    setTimeout(() => {
                        isDeleting = true;
                        setTimeout(type, delay); // Start deleting after pause
                    }, pause);
                }
            } else {
                if (charIndex > 0) {
                    element.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, delay);
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(type, delay); // Start typing the next text after pause
                }
            }
        }
        type();
    }

    typeWriter('titulo2', texts2, 50, 1000); // ajusta la velocidad (100 ms) y la pausa (2000 ms)
});




