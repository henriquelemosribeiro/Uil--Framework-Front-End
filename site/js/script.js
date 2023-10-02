const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselSlide = document.querySelector(".carousel-slide");

let currentIndex = 0;
let intervalId; // Variável para armazenar o ID do intervalo de tempo

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Adicione esta função para iniciar a automação do carrossel
function startCarouselAuto() {
    intervalId = setInterval(nextSlide, 3000); // Avança a cada 3 segundos (ajuste conforme desejado)
}

// Adicione esta função para parar a automação quando o mouse estiver sobre o carrossel
function stopCarouselAuto() {
    clearInterval(intervalId);
}

// Função para ir para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselSlide.children.length) % carouselSlide.children.length;
    updateCarousel();
}

// Função para ir para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlide.children.length;
    updateCarousel();
}

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${translateX}%)`;
}

// Inicializa o carrossel e inicia a automação
updateCarousel();
startCarouselAuto();

// Adicione eventos para parar a automação quando o mouse estiver sobre o carrossel
carouselSlide.addEventListener("mouseenter", stopCarouselAuto);
carouselSlide.addEventListener("mouseleave", startCarouselAuto);
