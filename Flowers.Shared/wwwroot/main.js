onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.classList.remove('not-loaded');
        document.body.classList.add('loaded');
    }, 4000); // Ajustar el tiempo para asegurarse de que las flores terminen de cargarse
});
