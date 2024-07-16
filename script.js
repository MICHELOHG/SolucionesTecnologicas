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
