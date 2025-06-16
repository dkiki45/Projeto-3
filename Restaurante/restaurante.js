document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const backButton = document.querySelector('.back-button');
    const restaurantCategorySection = document.querySelector('.restaurant-category-section');
    const categoryCardContainer = document.querySelector('.category-card-container'); // O container dos cards
    const restaurantsListSection = document.querySelector('.restaurants-list-section'); // Usar classe agora
    const todosRestaurantesDom = document.getElementById('todosRestaurantes');
    const restaurantes = [
        {
            nome: "Verd & Co",
            imagem: "verdco.webp",
            frase: "Comida leve e funcional, ideal para o dia a dia fitness.",
            endereco: null, 
            telefone: "(41) 99204-8304",
            horario: "10:30‑22:00h",
            apenasDelivery: true,
            vegano: false,
            googleMaps: null 
        },
        {
            nome: "Quitana",
            imagem: "quitana.jpeg",
            frase: "Sabores do mundo em pratos orgânicos e sustentáveis.",
            endereco: "Av. do Batel, 1440",
            telefone: "(41) 3078-6044",
            horario: "Seg‑Sex 11:30‑14:30; Sáb‑Dom e feriados 11:30‑15:30",
            apenasDelivery: false,
            vegano: false,
            googleMaps: "https://www.google.com/maps/place/Quintana+Gastronomia/@-25.441833,-49.2896289,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce3890b564277:0x75157260ead42611!8m2!3d-25.441833!4d-49.287054!16s%2Fg%2F1v8j1lc5?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            nome: "Maria Eugênia",
            imagem: "eugenia.jpeg",
            frase: "Gastronomia de excelência em um ambiente imersivo na natureza.",
            endereco: "R. Cap. Antônio Pedri, 408 – Santa Felicidade",
            telefone: "(41) 99788-0080",
            horario: "Dom 12:30‑17:00; Qua‑Qui 19:00‑23:30; Sex‑Sáb 12:00‑16:00 & 19:00‑23:30",
            apenasDelivery: false,
            vegano: false,
            googleMaps: "https://www.google.com/maps/place/Restaurante+Maria+Eug%C3%AAnia/@-25.408136,-49.322431,17z/data=!4m15!1m8!3m7!1s0x94dce174a91a3beb:0xc1c222f0356a045d!2sR.+Cap.+Ant%C3%B4nio+Pedri,+408+-+Santa+Felicidade,+Curitiba+-+PR,+82020-400!3b1!8m2!3d-25.408136!4d-49.3198561!16s%2Fg%2F11csknl5y4!3m5!1s0x94dce119df0d6889:0x7fc3dfc1e1c72688!8m2!3d-25.408136!4d-49.3198561!16s%2Fg%2F11t2ycmwz9?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            nome: "GreenGo",
            imagem: "greengo.jpeg",
            frase: "Várias opções saudáveis e veganas para todos os gostos.",
            endereco: "Alameda Dr. Carlos de Carvalho, 1282 – Bigorrilho",
            telefone: "(41) 3347‑4957",
            horario: "Seg‑Sex 11:00‑15:00 / 18:00‑22:00; Sáb 11:00‑22:00; Dom 12:00‑16:00",
            apenasDelivery: false,
            vegano: true,
            googleMaps: "https://www.google.com/maps/place/GreenGo+-+Batel/@-25.4357532,-49.2896964,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce3f4d3b04831:0x1f26fa83996f1338!8m2!3d-25.4357532!4d-49.2871215!16s%2Fg%2F11cnc1y_sj?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            nome: "Viva la Vegan",
            imagem: "vivalavegan.webp",
            frase: "Culinária vegana descomplicada e com porções generosas.",
            endereco: "R. Presidente Carlos Cavalcanti, 566 – Centro",
            telefone: "(41) 3149‑3939",
            horario: "Seg‑Sáb 11:00‑22:00",
            apenasDelivery: false,
            vegano: true,
            googleMaps: "https://www.google.com/maps/place/Viva+la+Vegan/@-25.4258185,-49.27332,17z/data=!4m15!1m8!3m7!1s0x94dce413d98dbe45:0x8f8537c6e3409382!2sR.+Presidente+Carlos+Cavalcanti,+566+-+Centro,+Curitiba+-+PR,+80020-280!3b1!8m2!3d-25.4258185!4d-49.2707451!16s%2Fg%2F11c43vqy34!3m5!1s0x94dce413e8877123:0xa259c8ab5b3ac7e1!8m2!3d-25.4258583!4d-49.2707599!16s%2Fg%2F11fy99wmpz?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            nome: "Don Veggie",
            imagem: "donveggie.jpg",
            frase: "Comida vegana com um toque caseiro e ingredientes frescos.",
            endereco: "Av. Sete de Setembro, 6797",
            telefone: "(41) 3077-0898",
            horario: "Seg-Sex 11:00-15:00",
            apenasDelivery: false,
            vegano: true,
            googleMaps: "https://www.google.com/maps/place/Restaurante+Dom+Veggie/@-25.4517187,-49.3053114,17z/data=!4m15!1m8!3m7!1s0x94dce3983ba7471f:0x2ac15a95fe6170bb!2sAv.+Sete+de+Setembro,+6797+-+Semin%C3%A1rio,+Curitiba+-+PR,+80240-001!3b1!8m2!3d-25.4517187!4d-49.3027365!16s%2Fg%2F11c1nkdgnm!3m5!1s0x94dce3983b4d26e3:0x6b8a94c1428be286!8m2!3d-25.4516697!4d-49.3027229!16s%2Fg%2F1ptxltq0y?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
        },
    ];

    const restaurantesCategorizados = {
        veganos: [
            restaurantes.find(r => r.nome === "GreenGo"),
            restaurantes.find(r => r.nome === "Viva la Vegan"),
            restaurantes.find(r => r.nome === "Don Veggie")
        ].filter(Boolean),
        tradicionais: [
            restaurantes.find(r => r.nome === "Maria Eugênia"),
            restaurantes.find(r => r.nome === "Verd & Co"),
            restaurantes.find(r => r.nome === "Quitana")
        ].filter(Boolean)
    };

    /**
     * Componente HTML para um restaurante.
     * @param {object} restaurante - Objeto contendo os dados do restaurante.
     * @returns {string} HTML renderizado do restaurante.
     */
    function RestaurantCard({ imagem, nome, frase, endereco, telefone, horario, apenasDelivery, googleMaps }) {
        const imagePath = imagem;
        const cleanPhoneNumber = telefone ? telefone.replace(/\D/g, '') : '';
        const enderecoContent = apenasDelivery
            ? `<p><strong>Endereço:</strong> Apenas Delivery</p>`
            : `<p><strong>Endereço:</strong> <a href="${googleMaps}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${nome} no Google Maps">${endereco} (Ver no Google Maps)</a></p>`;

        return `
            <div class="restaurante fade-in" role="article" aria-labelledby="${nome.replace(/\s/g, '-')}-heading">
                <img src="${imagePath}" alt="Fachada ou prato do restaurante ${nome}" width="400" height="250" loading="lazy">
                <div class="textoRests">
                    <h1 id="${nome.replace(/\s/g, '-')}-heading">${nome}</h1>
                    <p class="frase-catavinte">${frase}</p>
                    <p><strong>Horário de Funcionamento:</strong> ${horario}</p>
                    ${enderecoContent}
                    <p><strong>Telefone:</strong> <a href="tel:${cleanPhoneNumber}" aria-label="Ligar para ${nome} no telefone ${telefone}">${telefone}</a></p>
                </div>
            </div>
        `;
    }

    /**
     * Exibe a lista de restaurantes para uma categoria específica.
     * @param {HTMLElement} clickedCard - O elemento do card de categoria clicado.
     * @param {string} categoryKey - Chave da categoria (ex: 'veganos', 'tradicionais').
     */
    const displayRestaurants = (clickedCard, categoryKey) => {
        const selectedRestaurants = restaurantesCategorizados[categoryKey];

        categoryCards.forEach(card => {
            if (card !== clickedCard) {
                card.style.display = 'none';
            }
        });

        clickedCard.classList.add('expanded');

        backButton.style.display = 'block';

        todosRestaurantesDom.innerHTML = selectedRestaurants.map(RestaurantCard).join('');
        restaurantsListSection.style.display = 'block'; // Mostra a seção de restaurantes
        
        restaurantCategorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetView = () => {
        // Mostra todos os cards de categoria
        categoryCards.forEach(card => {
            card.classList.remove('expanded');
            card.style.display = 'flex'; 
        });

        restaurantsListSection.style.display = 'none';
        todosRestaurantesDom.innerHTML = ''; 

        
        backButton.style.display = 'none';

        
        restaurantCategorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('expanded')) return;
            const categoryKey = card.dataset.category;
            displayRestaurants(card, categoryKey);
        });
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (card.classList.contains('expanded')) return;
                const categoryKey = card.dataset.category;
                displayRestaurants(card, categoryKey);
            }
        });
    });

    backButton.addEventListener('click', resetView);
    backButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            resetView();
        }
    });

    
    restaurantsListSection.style.display = 'none'; 
    backButton.style.display = 'none'; 
    categoryCardContainer.style.display = 'flex'; 

    if (window.location.hash) {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }
});