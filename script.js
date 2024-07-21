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



document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor2');
    const contenedor5Image = document.getElementById('contenedor2-titulo2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
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
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        const contenedor5 = document.getElementById('contenedor5');
        if (isElementInViewport(contenedor5)) {
            contenedor5.classList.add('visible');
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
        const contenedor3 = document.getElementById('contenedor3');
        
        // Para contenedor2
        if (isElementInViewport(contenedor2) && !animationStarted) {
            animationStarted = true;
            const texto = "PORTAFOLIO DE PROYECTOS";
            const contenedorTitulo = document.getElementById('contenedor2-titulo1');
            maquinaEscribir(texto, contenedorTitulo);
            window.removeEventListener('scroll', checkVisibility);
        }

        // Para contenedor3
        if (isElementInViewport(contenedor3)) {
            const elementos = document.querySelectorAll('.contenedor3-p1');
            elementos.forEach(el => {
                el.classList.add('visible');
            });
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
        } else if (!isElementInViewport(contenedor3) && animationStarted) {
            animationStarted = false;
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidad en la carga inicial
});









document.addEventListener("DOMContentLoaded", function() {
    const texts2 = [
        'Tu negocio tiene sus particularidades.',
        'Diseñemos una pagina web  tu medida.'
    ];
    
    function typeWriter(elementId, texts, delay = 1, pause = 500) {
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

    typeWriter('titulo2', texts2, 35, 1000); // ajusta la velocidad (100 ms) y la pausa (2000 ms)
});




document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor5');
    const contenedor5Image = document.getElementById('contenedor5-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });


  
document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor5');
    const contenedor5Image = document.getElementById('contenedor5-titulo2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  



  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor5');
    const contenedor5Image = document.getElementById('contenedor5-titulo3');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  

  

  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor4');
    const contenedor5Image = document.getElementById('contenedor5-informacion');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor4');
    const contenedor5Image = document.getElementById('contenedor4-t1');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor4');
    const contenedor5Image = document.getElementById('contenedor4-t3');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor4');
    const contenedor5Image = document.getElementById('contenedor4-t2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  


  document.addEventListener('DOMContentLoaded', function() {
    const contenedor5 = document.getElementById('contenedor31');
    const contenedor5Image = document.getElementById('contenedor-t32');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contenedor5Image.classList.add('visible');
        } else {
          contenedor5Image.classList.remove('visible');
        }
      });
    }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor5);
  });

  
  

  document.addEventListener('DOMContentLoaded', function() {
    const contenedor2 = document.getElementById('contenedor31');
    const contenedor2Titulo2 = document.getElementById('contenedor-t33');
    const texto = contenedor2Titulo2.textContent; // Obtener el texto original
    contenedor2Titulo2.textContent = ''; // Limpiar el contenido para el efecto de máquina de escribir

    function maquinaEscribir(texto, elemento) {
        let index = 0;
        const intervalo = 50; // Tiempo en milisegundos entre cada letra

        function escribir() {
            elemento.textContent += texto[index];
            index++;
            if (index < texto.length) {
                setTimeout(escribir, intervalo);
            }
        }

        escribir();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contenedor2Titulo2.textContent = ''; // Limpiar el contenido para reiniciar la animación
                maquinaEscribir(texto, contenedor2Titulo2);
            }
        });
    }, { threshold: 0.5 }); // 0.5 significa que la mitad del elemento debe estar visible

    observer.observe(contenedor2);
});

  
  

document.addEventListener('DOMContentLoaded', function() {
  const contenedor5 = document.getElementById('contenedor5');
  const contenedor5Image = document.getElementById('contenedor5-informacion');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contenedor5Image.classList.add('visible');
      } else {
        contenedor5Image.classList.remove('visible');
      }
    });
  }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

  observer.observe(contenedor5);
});

document.addEventListener('DOMContentLoaded', function() {
  const contenedor5 = document.getElementById('cuerpo');
  const contenedor5Image = document.getElementById('titulo1');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contenedor5Image.classList.add('visible');
      } else {
        contenedor5Image.classList.remove('visible');
      }
    });
  }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

  observer.observe(contenedor5);
});


document.addEventListener('DOMContentLoaded', function() {
  const contenedor5 = document.getElementById('cuerpo');
  const contenedor5Image = document.getElementById('subtitulo12');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contenedor5Image.classList.add('visible');
      } else {
        contenedor5Image.classList.remove('visible');
      }
    });
  }, { threshold:0.1 }); // 0.5 significa que la mitad del elemento debe estar visible

  observer.observe(contenedor5);
});