document.addEventListener('DOMContentLoaded', () => {
    // Enhanced menu data structure with better organization
    const menuData = {
        "Antipasti - Entradas": [
            { 
                name: "Le Bruschette (2 un)", 
                options: [
                    { name: "Parma & Brie", description: "parma, brie, mel e nozes", price: "R$42" },
                    { name: "Parmigiano", description: "tomate, manjericão, oregano, parmesão", price: "R$32", vegetarian: true },
                    { name: "Funghi e Provola", description: "mix de cogumelos saltados e provolone", price: "R$39", vegetarian: true }
                ]
            },
            { name: "Tartare di Tonno (80g)", description: "Picadinho de atum fresco, manga e aromas cítricos", price: "R$59" },
            { name: "Polpo alla Gallurese (80g)", description: "Saladinha de polvo com batatas e tomatinhos", price: "R$69" },
            { name: "Guazzetto del Golfo (1 dúzia)", description: "Misto de mariscos frescos na concha em molho de tomate levemente picante", price: "R$59" },
            { name: "Tagliere Antipasto Misto Terra", description: "Queijos e embutidos artesanais típicos italianos", price: "R$79" },
            { name: "Seppiette Grigliate al Limone (150g)", description: "Lula grelhada, pesto de rúcula, pimenta do reino & zest de limão", price: "R$52" },
            { name: "Pai e Casu", description: "Queijo meia cura grelhado, derretido sobre pão artesanal, mel orgânico e nozes", price: "R$59", vegetarian: true },
            { name: "Burratina (60g)", description: "Com presunto de parma e molho pesto de manjericão", price: "R$52", notes: "usamos apenas burratas frescas, conferir disponibilidade." },
            { name: "Carpaccio di Pesce Marinato", description: "Carpaccio de peixe marinado", price: "R$52" },
            { name: "Fritto Misto", description: "Fritura de misto de frutos do mar", price: "R$79" },
            { name: "Porção adicional de pão", description: "Pão artesanal produzido no restaurante", price: "R$18", vegetarian: true }
        ],
        "Insalate - Saladas": [
            { name: "Insalata Mediterrânea", description: "Folhas mistas orgânicas com camarão refogado no suco de laranja", price: "R$59" },
            { name: "Insalata di Parma", description: "Folhas mistas orgânicas, presunto de Parma e queijo", price: "R$64" }
        ],
        "Paste & Risotti": [
            { name: "Spaghetti Pomodoro e Basilico", description: "Molho de tomate e manjericão", price: "R$52", vegetarian: true },
            { name: "Gnocchi ai Quattro Formaggi", description: "Nhoque de batata ao molho quatros queijos", price: "R$69", vegetarian: true },
            { name: "Culurgiones Pomodoro e Basilico", description: "Típico ravioli Sardo recheado com batata, hortelä e queijo parmesão ao molho de tomate e manjericão", price: "R$69", vegetarian: true },
            { name: "Risotto ai Funghi", description: "Risoto com misto de cogumelos e azeite trufado", price: "R$79", vegetarian: true },
            { name: "Risotto Gamberi, Limone e Zafferano", description: "Risoto com camarão, limão Siciliano e açafrão", price: "R$95" },
            { name: "Spaghetti alla Carbonara Sbagliata", description: "Guanciale, queijo pecorino, ovos e cebola", price: "R$66" },
            { name: "Spaghetti all' Oristanese", description: "Marisco na concha e bottarga", price: "R$99" },
            { name: "Spaghetti ai Gamberoni", description: "Camarão VG de mar e leve molho de tomate", price: "R$99" },
            { name: "Malloreddus alla Campidanese", description: "Típica massa artesanal com molho de linguiça e tomate, pecorino e perfume de açafrão", price: "R$69" },
            { name: "Linguine Isola", description: "Misto de frutos do mar com tomate fresco", price: "R$99" },
            { name: "Fettuccine Mari e Monti", description: "Camarão e funghi Porcini com um toque de besciamella", price: "R$75" },
            { name: "Fettuccine Gamberi e Pesto", description: "Camarão, tomate cereja e molho Pesto", price: "R$75" },
            { name: "Gnocchi al Nero di Seppia con Gamberi e Zucchine", description: "Nhoque a tinta de lula com camarão, abobrinha e tomate cereja", price: "R$79" },
            { name: "Tagliolini al Limone, Gamberi e Crema di Pistacchio", description: "Talharim caseiro ao limão, camarão, creme de pistache e farofa de pão", price: "R$89" }
        ],
        "Pizze": [
            { name: "Margherita", description: "Molho de tomate, mozzarella e manjericão", price: "R$59", vegetarian: true },
            { name: "Ai 4 Formaggi", description: "Mozzarella, provolone, gorgonzola e parmesão", price: "R$69", vegetarian: true },
            { name: "Ai Funghi", description: "Molho de tomate, mozzarella e cogumelos orgânicos", price: "R$69", vegetarian: true },
            { name: "Napoli", description: "Molho de tomate, anchovas, alcaparras e orégano", price: "R$56" },
            { name: "Diavola", description: "Molho de tomate, mozzarella e calabresa picante", price: "R$79" },
            { name: "Speck e Brie", description: "Molho de tomate, mozzarella, presunto cru tipo 'speck' e queijo brie", price: "R$79" },
            { name: "Provola e Salame", description: "Molho de tomate, salame tipo 'finocchiona' e queijo provolone", price: "R$72" },
            { name: "Prosciutto e Funghi", description: "Molho de tomate, mozzarella, presunto cozido e funghi champignon", price: "R$79" },
            { name: "Marinara ai 3 Pomodori", description: "Pomodoro seco, molho de tomate, tomate cereja, orégano, alho e manjericão", price: "R$54", vegetarian: true },
            { name: "Doppia Margherita", description: "Molho de tomate com dupla mozzarella e parmesão", price: "R$65", vegetarian: true },
            { name: "Parmigiana", description: "Molho de tomate, mozzarella, beringela grelhada e creme de parmesão", price: "R$69", vegetarian: true },
            { name: "Sa Sarda", description: "Molho de tomate, toscana artesanal, mozzarella e pecorino romano", price: "R$79" },
            { name: "Carlofortina", description: "Molho de tomate, mozzarella, atum fresco e cebola", price: "R$66" },
            { name: "Sa Stobada", description: "Batata ao forno, toscana artesanal e provolone", price: "R$79" },
            { name: "Guanciotta", description: "Guanciale, gorgonzola, mozzarella e cebola", price: "R$76" },
            { name: "Parma", description: "Mozzarella, presunto de Parma, rúcula, lascas de parmesão e tomate cereja", price: "R$79" },
            { name: "Gamberi e Pesto", description: "Molho de tomate, mozzarella, camarão e pesto de manjericão", price: "R$89" },
            { name: "S'Burrata", description: "Burratinha, mortadela e pistache", price: "R$89" },
            { name: "Capricciosa", description: "Molho de tomate, mozzarella, champignon, presunto, azeitona e alcachofra", price: "R$89" },
            { name: "Hortolana", description: "Beringela, abobrinha, alcachofra e cebola roxa", price: "R$79", vegetarian: true }
        ],
        "Secondi Piatti - Terra & Mare": [
            { name: "Filetto al Gorgonzola", description: "Filé ao molho gorgonzola, acompanhado de nhoque frito", price: "R$95" },
            { name: "Filetto alla Boscaiola", description: "Filé com cogumelos porcini, acompanhado de risotto ao queijo Brie", price: "R$109" },
            { name: "Gamberoni a Succhittu (4 un)", description: "Camarão VG ao molho chardonnay, pimenta, salsa, acompanhado de purê de batata", price: "R$99" },
            { name: "Pesce all' Acqua Pazza", description: "Filé de peixe cozinhado no Chardonnay, com tomate fresco, azeitonas e alcaparras, acompanhado de batatas com ervas finas", price: "R$99" },
            { name: "Tonno Scottato con Cuscuz Mediterraneo", description: "Filé de atum celado, acompanhado de cuscuz Mediterrâneo", price: "R$89" }
        ],
        "Contorni - Acompanhamentos": [
            { name: "Legumes Grelhados", price: "R$25", vegetarian: true },
            { name: "Batata Rústica", price: "R$25", vegetarian: true },
            { name: "Purê de Batata", price: "R$25", vegetarian: true },
            { name: "Brócolis Salteado", price: "R$25", vegetarian: true }
        ],
        "Menu Bambini - Menu Infantil": [
            { name: "Spaghetti al Sugo o Burro", price: "R$39", vegetarian: true },
            { name: "Filetto Grelhado com Batata Frita", price: "R$49" }
        ],
        "Dessert - Sobremesas": [
            { name: "Seadas", description: "Típico pastel da Sardegna, recheado com queijo coalho e coberto com mel orgânico", price: "R$39", vegetarian: true },
            { name: "Tortino al Cioccolato con Gelato", description: "Petit gateau ao chocolate com sorvete", price: "R$39", vegetarian: true },
            { name: "Tiramisu'", description: "Camadas de biscoito, café, queijo mascarpone, cacau", price: "R$32", vegetarian: true },
            { name: "Affogato al Caffe ou Alcoolico", description: "Sorvete de baunilha afogado no café quente ou Amarula", price: "R$29", vegetarian: true },
            { name: "Coppa Crema", description: "Sorvete cremoso com pedaços de brownie e granela de castanha", price: "R$42", vegetarian: true }
        ],
        "Il nostro gelato - Sorvete Artesanal": [
            { name: "Gelato Pequeno (01 bola)", price: "R$18", vegetarian: true },
            { name: "Gelato Médio (02 bolas)", price: "R$22", vegetarian: true },
            { name: "Gelato Grande (03 bolas)", price: "R$30", vegetarian: true },
            { name: "Gelato al Pistacchio Siciliano DOP (01 bola)", description: "Sorvete de Pistache Siciliano DOP", price: "R$20", vegetarian: true }
        ],
        "Bevande - Bebidas": {
            "Analcoólicos": [
                { name: "Café Expresso", price: "R$9" },
                { name: "Água sem gás 300ml", price: "R$7" },
                { name: "Água com gás 300ml", price: "R$9" },
                { name: "Água de coco", price: "R$9" },
                { name: "Soda Italiana", price: "R$17" },
                { name: "Cocktail Isola", price: "R$24" },
                { name: "Refrigerante", price: "R$8" },
                { name: "Suco de fruta natural", price: "R$14" },
                { name: "Suco de uva integral", price: "R$15" }
            ],
            "Cervejas": [
                { name: "Corona", price: "R$15" },
                { name: "Corona Cero (0% álcool)", price: "R$16" },
                { name: "Heineken 600ml", price: "R$24" },
                { name: "Heineken Long Neck", price: "R$16" },
                { name: "Stella Artois 600ml", price: "R$22" },
                { name: "Stella Artois Long Neck", price: "R$15" },
                { name: "Stella Pure Gold (sem glúten)", price: "R$16" }
            ],
            "Super Alcoólicos": [
                { name: "Rum (dose)", price: "R$15" },
                { name: "Gin (dose)", price: "R$19" },
                { name: "Whisky 8 anos", price: "R$19" },
                { name: "Whisky 12 anos", price: "R$25" },
                { name: "Cachaça (dose)", price: "R$15" },
                { name: "Vodka Nacional (dose)", price: "R$15" },
                { name: "Vodka importada (dose)", price: "R$19" }
            ],
            "Digestivos": [
                { name: "Amarula", price: "R$19" },
                { name: "Cointreau", price: "R$20" },
                { name: "Grappa", price: "R$35" },
                { name: "Sambuca Molinari", price: "R$25" },
                { name: "Limoncello artesanal", description: "Limão Siciliano orgânico, álcool e açúcar", price: "R$19" },
                { name: "Mirto artesanal", description: "Baga de mirto, álcool e açúcar", price: "R$19" }
            ],
            "Roskas Especiais": [
                { name: "Antonio", description: "Vodka, morango, manjericão e açúcar", price: "Nacional R$24 / Importada R$27" },
                { name: "Ulysse", description: "Vodka, abacaxi, gengibre e açúcar", price: "Nacional R$24 / Importada R$27" },
                { name: "Tropi", description: "Vodka, morango, maracujá e açúcar", price: "Nacional R$24 / Importada R$27" },
                { name: "Roska Aperol", description: "Vodka, limão, laranja e aperol", price: "Nacional R$24 / Importada R$27" },
                { name: "Roska Cocoloco", description: "Vodka, uva, açúcar e água de coco", price: "Nacional R$24 / Importada R$27" }
            ],
            "Roskas Clássicas": [
                { name: "Nacional", description: "Conferir sabores com o garçom", price: "R$23" },
                { name: "Importada", description: "Conferir sabores com o garçom", price: "R$25" }
            ],
            "Long Drinks": [
                { name: "Sex on the beach", description: "Vodka, liquor de pêssego, suco laranja e groselha", price: "R$30" },
                { name: "Aperol Spritz", description: "Aperol, prosecco, laranja e água com gás", price: "R$30" },
                { name: "Limoncello Spritz", description: "Limoncello, prosecco, limão e água com gás", price: "R$30" },
                { name: "Cuba Libre", description: "Bacardi, lime e coca cola", price: "R$23" },
                { name: "Gin Tonic", description: "Gin, lime e água tônica", price: "R$26" }
            ],
            "Drinks": [
                { name: "Caipirinha", description: "Limão, cachaça e açúcar", price: "R$22" },
                { name: "Mojito", description: "Hortelã, açúcar, lime e Bacardi", price: "R$26" },
                { name: "Daiquiri Basilico", description: "Bacardi, lime, açúcar e manjericão", price: "R$25" },
                { name: "Cocktail Martini", description: "Gin e Vermut branco", price: "R$27" },
                { name: "Negroni Sbagliato", description: "Campari, vermut e prosecco", price: "R$30" },
                { name: "Margarita", description: "Tequila, cointreau e lime", price: "R$30" },
                { name: "Whisky Sour", description: "Whisky 8 anos, limão siciliano e açúcar", price: "R$30" }
            ]
        },
        "Carta dei Vini": {
            "Espumantes": [
                { name: "Prosecco Brut Faces Brut Lidio Carraro", description: "100% Chardonnay - Brasil", price: "R$100" },
                { name: "Alghero Torbato Brut D.O.C Sella & Mosca", description: "100% Torbato - Sardegna, Itália", price: "R$200" }
            ],
            "Vinhos Brancos Sud América": [
                { name: "Dadivas Chardonnay Lidio Carraro", description: "100% Chardonnay - Brasil", price: "R$110" },
                { name: "Faces Chardonnay Lidio Carraro", description: "80% Chardonnay, 15% Riesling, 5% Moscato - Brasil", price: "R$95" },
                { name: "Leyda Reserva Chardonnay – Leyda", description: "100% Chardonnay - Chile", price: "R$150" },
                { name: "Mancura Etnia Sauvignon Blanc", description: "100% Sauvignon Blanc - Valle Central, Chile", price: "R$115" }
            ],
            "Vinhos Brancos Europa": [
                { name: "Alcesti Edesia Grillo", description: "100% Grillo - Sicilia, Itália", price: "R$115" },
                { name: "La Cala Sella & Mosca", description: "100% Vermentino - Sardegna, Itália", price: "R$175" },
                { name: "I Piani Nuraghe Majore Sella & Mosca", description: "100% Vermentino - Sardegna, Itália", price: "R$115" },
                { name: "Falanghina Beneventano Black Label IGP", description: "100% Falanghina - Itália", price: "R$105" }
            ],
            "Vinhos Rosés": [
                { name: "Alghero Rosato Sella & Mosca", description: "100% Sangiovese - Sardegna, Itália", price: "R$120" },
                { name: "Vivia Susumaniello Salento IGP", description: "100% Susumaniello - Puglia, Itália", price: "R$105" }
            ],
            "Vinhos Tintos Sud América": [
                { name: "Faces Merlot Lidio Carraro", description: "75% Merlot, 15% Tannat, 10% Cabernet - Brasil", price: "R$95" },
                { name: "Isola dei Sapori Cabernet Sauvignon", description: "100% Cabernet Sauvignon - Brasil", price: "R$105" },
                { name: "Leyda Reserva Carmenere Rapel", description: "100% Carmenere - Chile", price: "R$150" }
            ],
            "Vinhos Tintos Europa": [
                { name: "Chianti Poggio Tosco DOCG", description: "90% Sangiovese, 10% Canaiolo - Toscana, Itália", price: "R$130" },
                { name: "Aglianico Beneventano Black Label IGP", description: "100% Aglianico - Campania, Itália", price: "R$105" },
                { name: "Sybar Primitivo IGP", description: "100% Primitivo di Puglia - Itália", price: "R$160" },
                { name: "Alcesti Nero D'Avola", description: "100% Nero D'Avola - Sicilia, Itália", price: "R$115" },
                { name: "Defuk Pinot Nero", description: "100% Pinot Nero - Toscana, Itália", price: "R$115" },
                { name: "San Marzano II Pumo Negroamaro di Salento IGP", description: "100% Negramaro - Puglia, Itália", price: "R$160" },
                { name: "Cannonau DOC Sella & Mosca", description: "100% Cannonau - Sardegna, Itália", price: "R$115" },
                { name: "Cannonau Reserva Sella & Mosca", description: "100% Cannonau - Sardegna, Itália", price: "R$220" }
            ],
            "Vinhos da Casa": [
                { name: "Vinho da casa 500ml", description: "Merlot ou Chardonnay", price: "R$65" },
                { name: "Taça de vinho", price: "R$24" }
            ]
        }
    };

    // DOM elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const menuApp = document.getElementById('menu-app');
    const enterMenuBtn = document.getElementById('enter-menu');
    const aboutRestaurantBtn = document.getElementById('about-restaurant');
    const backToWelcomeBtn = document.getElementById('back-to-welcome');
    
    const navList = document.querySelector('#menu-nav ul');
    const menuContent = document.getElementById('menu-content');
    const searchInput = document.getElementById('menu-search');
    const searchButton = document.getElementById('search-button');
    const searchClear = document.getElementById('search-clear');
    const backToTopBtn = document.getElementById('back-to-top');

    // State management
    let currentCategory = null;
    let allMenuItems = [];

    // Welcome screen functionality
    const showMenu = () => {
        welcomeScreen.classList.add('hidden');
        menuApp.classList.remove('hidden');
        document.body.style.paddingTop = '140px';
        
        // Generate menu if not already generated
        if (!navList.children.length) {
            generateMenu();
        }
    };

    const showWelcome = () => {
        welcomeScreen.classList.remove('hidden');
        menuApp.classList.add('hidden');
        document.body.style.paddingTop = '0';
        clearSearch();
    };

    const showAbout = () => {
        // For now, just show the menu - this function is a point of extension for future implementations
        // Could be expanded to show an about modal or navigate to a dedicated section
        showMenu();
    };

    // Utility functions
    const createSlug = (text) => {
        return text.toString().toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Dynamic category rendering
    const renderCategory = (categorySlug) => {
        // Clear existing content except search results
        const existingSections = menuContent.querySelectorAll('.menu-section');
        existingSections.forEach(section => section.remove());

        // Find the category data
        let categoryData = null;
        let categoryName = null;

        for (const category in menuData) {
            if (createSlug(category) === categorySlug) {
                categoryData = menuData[category];
                categoryName = category;
                break;
            }
        }

        if (!categoryData) return;

        // Create and render the section
        const section = document.createElement('section');
        section.id = categorySlug;
        section.className = 'menu-section';
        section.setAttribute('data-category', categoryName);

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = categoryName;
        section.appendChild(sectionTitle);

        // Handle items or subcategories
        if (Array.isArray(categoryData)) {
            categoryData.forEach(item => {
                section.appendChild(createMenuItem(item, categoryName));
            });
        } else if (typeof categoryData === 'object') {
            for (const subCategory in categoryData) {
                const subSectionTitle = document.createElement('h3');
                subSectionTitle.textContent = subCategory;
                section.appendChild(subSectionTitle);
                categoryData[subCategory].forEach(item => {
                    section.appendChild(createMenuItem(item, categoryName));
                });
            }
        }

        // Add category-specific notes
        const categoryNotes = getCategoryNotes(categoryName);
        if (categoryNotes) {
            const notes = document.createElement('div');
            notes.className = 'section-notes';
            notes.innerHTML = categoryNotes;
            section.appendChild(notes);
        }

        menuContent.appendChild(section);
        currentCategory = categorySlug;

        // Trigger animation
        setTimeout(() => {
            section.classList.remove('section-hidden');
        }, 50);
    };

    // Generate navigation and initial setup
    const generateMenu = () => {
        // Clear existing content
        navList.innerHTML = '';
        menuContent.innerHTML = '';

        // Add search results container
        const searchContainer = document.createElement('div');
        searchContainer.id = 'search-results';
        searchContainer.className = 'search-results-container hidden';
        searchContainer.innerHTML = `
            <h2>Resultados da Busca <button id="close-search" aria-label="Fechar resultados"><i class="fas fa-times"></i></button></h2>
            <div class="search-results-list"></div>
        `;
        menuContent.appendChild(searchContainer);

        // Generate all menu items for search
        allMenuItems = [];
        for (const category in menuData) {
            if (Array.isArray(menuData[category])) {
                menuData[category].forEach(item => {
                    allMenuItems.push({ ...item, category });
                });
            } else if (typeof menuData[category] === 'object') {
                for (const subCategory in menuData[category]) {
                    menuData[category][subCategory].forEach(item => {
                        allMenuItems.push({ ...item, category, subCategory });
                    });
                }
            }
        }

        // Generate navigation
        let isFirst = true;
        for (const category in menuData) {
            const categorySlug = createSlug(category);

            // Create navigation link
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.textContent = category.split(' - ')[0];
            navLink.href = `#${categorySlug}`;
            navLink.setAttribute('data-category', categorySlug);
            
            if (isFirst) {
                navLink.classList.add('active');
                isFirst = false;
            }
            
            navItem.appendChild(navLink);
            navList.appendChild(navItem);
        }

        // Render first category
        const firstCategorySlug = createSlug(Object.keys(menuData)[0]);
        renderCategory(firstCategorySlug);

        // Re-bind event listeners after content generation
        bindEventListeners();
        setupNavigation();
        setupAnimations();
    };

    // Create individual menu item with modal functionality
    const createMenuItem = (item, category) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.style.cursor = 'pointer';
        
        // Add data attributes for search
        itemDiv.dataset.name = item.name.toLowerCase();
        itemDiv.dataset.category = category.toLowerCase();
        if (item.description) {
            itemDiv.dataset.description = item.description.toLowerCase();
        }

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'item-details';

        const nameSpan = document.createElement('div');
        nameSpan.className = 'item-name';
        nameSpan.textContent = item.name;
        
        // Add vegetarian icon
        if (item.vegetarian) {
            const vegetarianIcon = document.createElement('span');
            vegetarianIcon.className = 'vegetarian-icon';
            vegetarianIcon.innerHTML = '<i class="fas fa-leaf"></i>';
            vegetarianIcon.title = 'Opção vegetariana';
            vegetarianIcon.setAttribute('aria-label', 'Opção vegetariana');
            nameSpan.appendChild(vegetarianIcon);
        }
        
        detailsDiv.appendChild(nameSpan);

        if (item.description) {
            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'item-description';
            descriptionDiv.textContent = item.description;
            detailsDiv.appendChild(descriptionDiv);
        }

        if (item.notes) {
            const notesDiv = document.createElement('div');
            notesDiv.className = 'item-notes';
            notesDiv.textContent = item.notes;
            detailsDiv.appendChild(notesDiv);
        }

        // Handle options (like Bruschette)
        if (item.options) {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'item-options';
            item.options.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.innerHTML = `${option.name} (${option.description}) - <strong>${option.price}</strong>`;
                if (option.vegetarian) {
                    const vegIcon = document.createElement('span');
                    vegIcon.className = 'vegetarian-icon';
                    vegIcon.innerHTML = '<i class="fas fa-leaf"></i>';
                    vegIcon.style.marginLeft = '8px';
                    optionDiv.appendChild(vegIcon);
                }
                optionsDiv.appendChild(optionDiv);
                
                // Add search data
                itemDiv.dataset.optionName = (itemDiv.dataset.optionName || '') + ' ' + option.name.toLowerCase();
                itemDiv.dataset.optionDescription = (itemDiv.dataset.optionDescription || '') + ' ' + option.description.toLowerCase();
            });
            detailsDiv.appendChild(optionsDiv);
            itemDiv.appendChild(detailsDiv);
        } else {
            itemDiv.appendChild(detailsDiv);
            const priceSpan = document.createElement('div');
            priceSpan.className = 'item-price';
            priceSpan.textContent = item.price;
            itemDiv.appendChild(priceSpan);
        }

        // Add click event for modal
        itemDiv.addEventListener('click', () => openModal(item, category));

        return itemDiv;
    };

    // Modal functionality
    const createModal = () => {
        const modal = document.createElement('div');
        modal.id = 'item-modal';
        modal.className = 'modal-overlay hidden';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title"></h3>
                    <button class="modal-close" aria-label="Fechar">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-description"></div>
                    <div class="modal-price"></div>
                    <div class="modal-options"></div>
                    <div class="modal-notes"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    };

    const openModal = (item, category) => {
        let modal = document.getElementById('item-modal');
        if (!modal) {
            modal = createModal();
        }

        // Populate modal content
        const title = modal.querySelector('.modal-title');
        const description = modal.querySelector('.modal-description');
        const price = modal.querySelector('.modal-price');
        const options = modal.querySelector('.modal-options');
        const notes = modal.querySelector('.modal-notes');

        title.textContent = item.name;
        
        if (item.vegetarian) {
            const vegIcon = document.createElement('span');
            vegIcon.className = 'vegetarian-icon';
            vegIcon.innerHTML = '<i class="fas fa-leaf"></i>';
            vegIcon.style.marginLeft = '8px';
            title.appendChild(vegIcon);
        }

        description.textContent = item.description || '';
        price.textContent = item.price || '';

        // Handle options
        options.innerHTML = '';
        if (item.options) {
            const optionsTitle = document.createElement('h4');
            optionsTitle.textContent = 'Opções:';
            options.appendChild(optionsTitle);
            
            item.options.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'modal-option';
                optionDiv.innerHTML = `
                    <span class="option-name">${option.name}</span>
                    <span class="option-description">${option.description}</span>
                    <span class="option-price">${option.price}</span>
                `;
                if (option.vegetarian) {
                    const vegIcon = document.createElement('span');
                    vegIcon.className = 'vegetarian-icon';
                    vegIcon.innerHTML = '<i class="fas fa-leaf"></i>';
                    optionDiv.appendChild(vegIcon);
                }
                options.appendChild(optionDiv);
            });
        }

        notes.textContent = item.notes || '';

        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Bind close events
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal;

        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        closeBtn.onclick = closeModal;
        overlay.onclick = (e) => {
            if (e.target === overlay) closeModal();
        };

        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        });
    };

    // Get category-specific notes
    const getCategoryNotes = (category) => {
        const notes = {
            "Paste & Risotti": "Os pratos podem conter alergênicos, pimenta e cheiro verde. Temos também massa integral e sem glúten.",
            "Pizze": "Nossas pizzas são preparadas no estilo napoletano moderno em tamanho único de 30cm. Feitas com pré-fermento de longa maturação com temperatura controlada. Os pratos podem conter alergênicos, pimenta e cheiro verde. Comunique ao garçom eventuais restrições.",
            "Secondi Piatti - Terra & Mare": "Os pratos podem conter alergênicos, pimenta e cheiro verde. Comunique ao garçom eventuais restrições.",
            "Dessert - Sobremesas": "Todas as sobremesas são artesanais de nossa produção. O Isola Cucina Italiana nasceu da ideia de recriar um ambiente típico de uma casa na Itália, com produtos tradicionais da cozinha familiar, para garantir o máximo nível de qualidade.",
            "Il nostro gelato - Sorvete Artesanal": "Todos os sorvetes são artesanais de nossa produção. O Isola Cucina Italiana nasceu da ideia de recriar um ambiente típico de uma casa na Itália, com produtos tradicionais da cozinha familiar, para garantir o máximo nível de qualidade. Todos os pratos são feitos na hora e a preparação pode demorar dependendo do fluxo.",
            "Bevande - Bebidas": "Temos uma seleção especial de bebidas artesanais e importadas. Consulte nosso garçom para sugestões de harmonização.",
            "Carta dei Vini": "Nossa carta de vinhos foi cuidadosamente selecionada para harmonizar perfeitamente com nossa culinária italiana. Consulte nosso sommelier para recomendações."
        };
        return notes[category] || null;
    };

    // Enhanced search functionality
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            clearSearch();
            return;
        }
        
        searchClear.style.display = 'inline-block';
        const searchResultsList = document.querySelector('.search-results-list');
        searchResultsList.innerHTML = '';
        const results = [];
        
        // Search through all menu items
        allMenuItems.forEach(item => {
            const searchableText = [
                item.name || '',
                item.description || '',
                item.category || '',
                item.subCategory || ''
            ].join(' ').toLowerCase();
            
            // Also search in options
            let optionsText = '';
            if (item.options) {
                optionsText = item.options.map(opt => `${opt.name} ${opt.description}`).join(' ').toLowerCase();
            }
            
            if (searchableText.includes(searchTerm) || optionsText.includes(searchTerm)) {
                results.push(item);
            }
        });
        
        if (results.length > 0) {
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'search-result-item';
                resultDiv.style.cursor = 'pointer';
                
                const nameDiv = document.createElement('div');
                nameDiv.className = 'result-name';
                nameDiv.innerHTML = highlightSearchTerm(result.name, searchTerm);
                
                if (result.vegetarian) {
                    const vegIcon = document.createElement('span');
                    vegIcon.className = 'vegetarian-icon';
                    vegIcon.innerHTML = '<i class="fas fa-leaf"></i>';
                    vegIcon.style.marginLeft = '8px';
                    nameDiv.appendChild(vegIcon);
                }
                
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'result-category';
                categoryDiv.textContent = result.subCategory || result.category;
                
                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'result-description';
                if (result.description) {
                    descriptionDiv.innerHTML = highlightSearchTerm(result.description, searchTerm);
                }
                
                const priceDiv = document.createElement('div');
                priceDiv.className = 'result-price';
                priceDiv.textContent = result.price || '';
                
                resultDiv.appendChild(nameDiv);
                resultDiv.appendChild(categoryDiv);
                if (result.description) resultDiv.appendChild(descriptionDiv);
                resultDiv.appendChild(priceDiv);
                
                // Add click event to open modal
                resultDiv.addEventListener('click', () => openModal(result, result.category));
                
                searchResultsList.appendChild(resultDiv);
            });
            showSearchResults();
        } else {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'Nenhum resultado encontrado para sua busca.';
            searchResultsList.appendChild(noResults);
            showSearchResults();
        }
    };

    const highlightSearchTerm = (text, searchTerm) => {
        if (!text) return '';
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    };

    const showSearchResults = () => {
        const searchResults = document.getElementById('search-results');
        searchResults.classList.remove('hidden');
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'none';
        });
    };

    const clearSearch = () => {
        searchInput.value = '';
        searchClear.style.display = 'none';
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
            searchResults.classList.add('hidden');
        }
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'block';
        });
    };

    // Navigation functionality
    const setupNavigation = () => {
        // Smooth scrolling for nav links
        const navLinks = document.querySelectorAll('#menu-nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                e.target.classList.add('active');
                
                // Render the selected category
                const categorySlug = e.target.getAttribute('data-category');
                renderCategory(categorySlug);
                
                // Scroll to top of content
                menuContent.scrollIntoView({ behavior: 'smooth' });
            });
        });
    };

    // Animation setup
    const setupAnimations = () => {
        const sectionsToAnimate = document.querySelectorAll('.menu-section');

        if ('IntersectionObserver' in window) {
            const animationObserverOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('section-hidden');
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, animationObserverOptions);

            sectionsToAnimate.forEach(section => {
                section.classList.add('section-hidden');
                animationObserver.observe(section);
            });
        } else {
            sectionsToAnimate.forEach(section => {
                section.classList.remove('section-hidden');
            });
        }
    };

    // Back to top functionality
    const setupBackToTop = () => {
        window.addEventListener('scroll', debounce(() => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, 100));
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // Bind all event listeners
    const bindEventListeners = () => {
        // Welcome screen buttons
        enterMenuBtn.addEventListener('click', showMenu);
        aboutRestaurantBtn.addEventListener('click', showAbout);
        backToWelcomeBtn.addEventListener('click', showWelcome);

        // Search functionality
        const debouncedSearch = debounce(performSearch, 300);
        
        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim().length > 0) {
                searchClear.style.display = 'inline-block';
            } else {
                searchClear.style.display = 'none';
                clearSearch();
            }
        });
        
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            } else if (e.key === 'Escape') {
                clearSearch();
            } else {
                debouncedSearch();
            }
        });
        
        searchButton.addEventListener('click', performSearch);
        searchClear.addEventListener('click', clearSearch);
        
        // Re-bind close search button
        const newCloseSearchBtn = document.getElementById('close-search');
        if (newCloseSearchBtn) {
            newCloseSearchBtn.addEventListener('click', clearSearch);
        }
    };

    // Accessibility improvements
    const setupAccessibility = () => {
        // Add keyboard navigation for menu items
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Ensure proper tab order
                const focusableElements = document.querySelectorAll(
                    'a, button, input, [tabindex]:not([tabindex="-1"])'
                );
                // Handle tab navigation if needed
            }
        });

        // Add ARIA labels where needed
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.setAttribute('role', 'article');
            item.setAttribute('aria-label', `Menu item ${index + 1}`);
        });
    };

    // Performance optimizations
    const setupPerformanceOptimizations = () => {
        // Lazy load images if any are added in the future
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    };

    // Error handling
    const setupErrorHandling = () => {
        window.addEventListener('error', (e) => {
            console.error('Application error:', e.error);
            // Could show user-friendly error message here
        });

        // Handle network errors for future API calls
        window.addEventListener('online', () => {
            console.log('Connection restored');
        });

        window.addEventListener('offline', () => {
            console.log('Connection lost');
        });
    };

    // Initialize application
    const init = () => {
        try {
            // Setup initial event listeners
            bindEventListeners();
            setupBackToTop();
            setupAccessibility();
            setupPerformanceOptimizations();
            setupErrorHandling();
            
            console.log('Cardápio Digital Isola initialized successfully');
        } catch (error) {
            console.error('Failed to initialize application:', error);
        }
    };

    // Start the application
    init();
});