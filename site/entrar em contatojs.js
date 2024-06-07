document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').classList.remove('hidden');
    this.reset();
});
function goToPage() {
    window.location.href = "./tela principal.html";
}