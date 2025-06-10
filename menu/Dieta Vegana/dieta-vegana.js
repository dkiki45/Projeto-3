// dieta-vegana.js (dentro da pasta Dieta Vegana/)

document.addEventListener('DOMContentLoaded', () => {
    const audienceCards = document.querySelectorAll('.audience-card');
    const mealPlanSection = document.querySelector('.meal-plan-section');
    const mealPlanContent = document.querySelector('.meal-plan-content');
    const backButton = document.querySelector('.back-button');
    const cardContainer = document.querySelector('.card-container');

    const mealPlans = {
        iniciantes: {
            title: "Plano Alimentar para Iniciantes no Veganismo",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Mingau de aveia com leite vegetal, banana e chia",
                        "Pão integral com homus e fatias de pepino",
                        "Smoothie de frutas vermelhas com proteína vegetal."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Arroz integral, lentilha, brócolis e abóbora assada",
                        "Salada de grão de bico com quinoa e mix de folhas",
                        "Wrap de tortilha com feijão preto, abacate e vegetais."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Sopa de legumes com tofu defumado",
                        "Curry de grão de bico com espinafre e arroz basmati",
                        "Hambúrguer de lentilha com pão integral e salada."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Maçã com pasta de amendoim",
                        "Mix de castanhas e sementes",
                        "Iogurte de coco com granola."
                    ]
                }
            ]
        },
        ativos: {
            title: "Plano Alimentar para Veganos Ativos",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Aveia com proteína vegetal, frutas e manteiga de amendoim",
                        "Panquecas veganas de banana com xarope de bordo e nozes",
                        "Tofu mexido com vegetais e torradas de pão de fermentação natural."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Tempeh grelhado, batata doce assada e aspargos",
                        "Salada power bowl com quinoa, feijão, vegetais e molho tahini",
                        "Strogonoff vegano de cogumelos com arroz e batata palha assada."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Macarrão integral com molho pesto vegano e brócolis",
                        "Chili vegano com tortilhas de milho",
                        "Lasanha de abobrinha com recheio de castanhas e molho de tomate."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Barra de proteína vegana",
                        "Frutas secas e castanhas",
                        "Smoothie pós-treino com proteína, espinafre e leite de amêndoas."
                    ]
                }
            ]
        },
        familiares: {
            title: "Plano Alimentar para Famílias Veganas",
            sections: [
                {
                    category: "Café da Manhã",
                    items: [
                        "Cereais integrais com leite vegetal e frutas picadas",
                        "Crepioca vegana com recheio de requeijão de castanhas e legumes",
                        "Smoothie cremoso de manga e cenoura."
                    ]
                },
                {
                    category: "Almoço",
                    items: [
                        "Arroz e feijão, com legumes salteados e tofu em cubos",
                        "Pizza vegana com queijo de batata e vegetais coloridos",
                        "Bolonhesa de lentilha com espaguete integral."
                    ]
                },
                {
                    category: "Jantar",
                    items: [
                        "Sopa-creme de ervilha com croutons caseiros",
                        "Burritos veganos com feijão, arroz, milho e salsa",
                        "Nuggets veganos assados com purê de batata e salada."
                    ]
                },
                {
                    category: "Lanches",
                    items: [
                        "Mini sanduíches de pasta de amendoim e geleia",
                        "Frutas variadas e palitos de cenoura com homus",
                        "Biscoitos integrais veganos."
                    ]
                }
            ]
        }
    };

    // Função para exibir o plano alimentar (MESMA LÓGICA DO DIETA TRADICIONAL)
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
        mealPlanSection.style.display = 'block';
        mealPlanSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Função para recolher tudo (MESMA LÓGICA DO DIETA TRADICIONAL)
    const resetView = () => {
        audienceCards.forEach(card => {
            card.classList.remove('expanded');
            card.style.display = 'flex';
        });
        mealPlanSection.style.display = 'none';
        backButton.style.display = 'none';
        cardContainer.style.display = 'flex';
        document.querySelector('.audience-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Adiciona evento de clique a cada cartão (MESMA LÓGICA DO DIETA TRADICIONAL)
    audienceCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('expanded')) return;

            audienceCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                }
            });

            card.classList.add('expanded');
            backButton.style.display = 'block';

            const audienceKey = card.dataset.audience;
            displayMealPlan(audienceKey);
        });
    });

    // Adiciona evento de clique ao botão voltar (MESMA LÓGICA DO DIETA TRADICIONAL)
    backButton.addEventListener('click', resetView);

    // Adiciona evento para quando a URL tem um hash (para rolagem suave ao carregar)
    if (window.location.hash) {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }
});