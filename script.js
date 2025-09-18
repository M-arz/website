
document.addEventListener("DOMContentLoaded", () => {
  const usuarioInfo = document.getElementById("usuarioInfo");
  let usuario = localStorage.getItem("usuario");

  if (!usuario) {
    usuario = prompt("Por favor, regístrate con tu nombre:");
    if (usuario) {
      localStorage.setItem("usuario", usuario);
    }
  }

  if (usuarioInfo && usuario) {
    usuarioInfo.textContent = `Bienvenido, ${usuario}`;
  }

 
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }


  const ejercicios = document.querySelectorAll("input.ejercicio");

  ejercicios.forEach((ejercicio) => {
    ejercicio.addEventListener("input", () => {
      actualizarProgreso();
    });
  });

  actualizarProgreso(); 
});


function actualizarProgreso() {
  const materias = ["matematicas", "ingles", "historia", "biologia"];
  materias.forEach((materia) => {
    const inputs = document.querySelectorAll(
      `input.ejercicio[data-materia="${materia}"]`
    );
    if (inputs.length > 0) {
      const completados = Array.from(inputs).filter(
        (inp) => inp.value.trim() !== ""
      ).length;
      const porcentaje = Math.round((completados / inputs.length) * 100);

      const barra = document.querySelector(
        `.barra-progreso[data-materia="${materia}"] .progreso`
      );
      if (barra) {
        barra.style.width = `${porcentaje}%`;
      }
    }
  });
}
