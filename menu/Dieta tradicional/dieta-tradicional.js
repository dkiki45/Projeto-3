// dieta-tradicional.js (dentro da pasta Dieta Tradicional/)

document.addEventListener('DOMContentLoaded', () => {
    const audienceCards = document.querySelectorAll('.audience-card');
    const mealPlanSection = document.querySelector('.meal-plan-section');
    const mealPlanContent = document.querySelector('.meal-plan-content');
    const backButton = document.querySelector('.back-button');
    const cardContainer = document.querySelector('.card-container'); // Para esconder os outros cards

    const mealPlans = {
        jovens: {
            title: "Plano Alimentar para Jovens Adultos",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Aveia com frutas vermelhas e whey protein",
                        "Ovos mexidos com torradas integrais e abacate",
                        "Smoothie de banana, espinafre, leite vegetal e proteína."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Peito de frango grelhado, batata doce e mix de vegetais",
                        "Salmão assado, quinoa e brócolis",
                        "Lentilha com arroz integral e salada verde."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Carne magra (bife/frango) com legumes no vapor",
                        "Sopa de legumes com frango desfiado",
                        "Omelete com queijo cottage e salada."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Iogurte grego com granola",
                        "Mix de castanhas e uma fruta",
                        "Shake de proteína."
                    ]
                }
            ]
        },
        'meia-idade': { // Use aspas para chaves com hífen
            title: "Plano Alimentar para Adultos de Meia-idade",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Pão integral com azeite e tomate, acompanhado de café",
                        "Ovos cozidos com queijo branco e uma fruta",
                        "Vitamina de frutas com sementes de chia."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Arroz integral, feijão, peixe branco e legumes",
                        "Salada completa com grão de bico e frango desfiado",
                        "Wrap integral com recheio de carne e vegetais."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Sopa de abóbora com gengibre",
                        "Frango desfiado com purê de couve-flor",
                        "Salada de folhas escuras com atum e azeite."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Frutas frescas",
                        "Um punhado de amêndoas",
                        "Torrada integral com pasta de amendoim."
                    ]
                }
            ]
        },
        idosos: {
            title: "Plano Alimentar para Idosos",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Mingau de aveia com frutas macias e canela",
                        "Pão de queijo caseiro com um copo de leite",
                        "Iogurte natural com mel e sementes de linhaça."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Purê de batata com carne moída bem cozida e brócolis no vapor",
                        "Peixe cozido com arroz e purê de abóbora",
                        "Sopa nutritiva com legumes variados e carne."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Omelete suave com espinafre",
                        "Caldo de legumes com pedacinhos de frango",
                        "Creme de milho com queijo."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Frutas cozidas ou assadas",
                        "Gelatina com frutas",
                        "Vitamina de abacate."
                    ]
                }
            ]
        }
    };

    // Função para exibir o plano alimentar
    const displayMealPlan = (audienceKey) => {
        const plan = mealPlans[audienceKey];
        if (!plan) return;

        let html = `<h3>${plan.title}</h3>`;
        plan.sections.forEach(section => {
            html += `
                <div class="meal-category">
                    <h4>${section.category}</h4>
                    <ul>
                        ${section.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        mealPlanContent.innerHTML = html;
        mealPlanSection.style.display = 'block'; // Mostra a seção do plano
        mealPlanSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola suavemente
    };

    // Função para recolher tudo
    const resetView = () => {
        audienceCards.forEach(card => {
            card.classList.remove('expanded');
            card.style.display = 'flex'; // Volta a exibir os cartões escondidos
        });
        mealPlanSection.style.display = 'none'; // Esconde o plano alimentar
        backButton.style.display = 'none'; // Esconde o botão voltar
        cardContainer.style.display = 'flex'; // Volta a exibir o container dos cards
        // Rola suavemente de volta para o topo da seção de audiência, se necessário
        document.querySelector('.audience-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Adiciona evento de clique a cada cartão
    audienceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Se já estiver expandido, não faz nada
            if (card.classList.contains('expanded')) return;

            // Esconde os outros cartões
            audienceCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                }
            });

            // Expande o cartão clicado
            card.classList.add('expanded');
            
            // Exibe o botão voltar
            backButton.style.display = 'block';

            // Exibe o plano alimentar correspondente
            const audienceKey = card.dataset.audience;
            displayMealPlan(audienceKey);
        });
    });

    // Adiciona evento de clique ao botão voltar
    backButton.addEventListener('click', resetView);

    // Adiciona evento para quando a URL tem um hash (para rolagem suave ao carregar)
    if (window.location.hash) {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }
});