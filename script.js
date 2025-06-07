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
        "Pizze": [
            { name: "Margherita", description: "Molho de tomate, mozzarella de búfala e manjericão", price: "R$52", vegetarian: true },
            { name: "Calabrese", description: "Molho de tomate, mozzarella, linguiça calabresa artesanal e cebola roxa", price: "R$59" },
            { name: "Portuguesa", description: "Molho de tomate, mozzarella, presunto cozido, ovos, cebola e azeitonas pretas", price: "R$62" },
            { name: "Quattro Formaggi", description: "Molho de tomate, mozzarella, gorgonzola, provolone e parmesão", price: "R$69", vegetarian: true },
            { name: "Parma e Rúcula", description: "Molho de tomate, mozzarella, presunto de Parma, rúcula selvagem e lascas de parmesão", price: "R$75" },
            { name: "Funghi e Tartufo", description: "Molho de tomate, mozzarella, mix de cogumelos frescos e azeite trufado", price: "R$79", vegetarian: true },
            { name: "Gamberi e Zucchine", description: "Molho de tomate, mozzarella, camarões salteados, abobrinha grelhada e raspas de limão siciliano", price: "R$85" },
            { name: "Isola Speciale", description: "Molho de tomate, mozzarella de búfala, tomate cereja confit, presunto de Parma, rúcula e pesto", price: "R$89" }
        ],
        "Dolci - Sobremesas": [
            { name: "Tiramisù Classico", description: "Creme de mascarpone, biscoito savoiardi embebido em café e cacau em pó", price: "R$35", vegetarian: true },
            { name: "Panna Cotta com Frutas Vermelhas", description: "Flan de creme de leite com calda de frutas vermelhas frescas", price: "R$32", vegetarian: true },
            { name: "Cannoli Siciliani (2 un)", description: "Massa crocante recheada com creme de ricota doce, frutas cristalizadas e pistache", price: "R$38", vegetarian: true },
            { name: "Torta Caprese", description: "Torta de chocolate e amêndoas sem farinha, servida com sorvete de creme", price: "R$36", vegetarian: true }
        ],
        "Il nostro gelato - Sorvete Artesanal": [
            { name: "Gelato Pequeno (01 bola)", price: "R$18", vegetarian: true },
            { name: "Gelato Médio (02 bolas)", price: "R$22", vegetarian: true },
            { name: "Gelato Grande (03 bolas)", price: "R$30", vegetarian: true },
            { name: "Gelato al Pistacchio Siciliano DOP (01 bola)", description: "Sorvete de Pistache Siciliano DOP", price: "R$20", vegetarian: true }
        ],
        "Bevande - Bebidas": [
            { name: "Acqua Minerale (com/sem gás) 300ml", price: "R$8", vegetarian: true },
            { name: "Refrigerantes (Lata)", description: "Coca-Cola, Coca-Cola Zero, Guaraná Antarctica, Guaraná Zero, Sprite", price: "R$9", vegetarian: true },
            { name: "Sucos Naturais", description: "Laranja, Limão, Abacaxi com Hortelã, Melancia", price: "R$12", vegetarian: true },
            { name: "Cervejas Long Neck", description: "Heineken, Stella Artois, Corona", price: "R$15", vegetarian: true },
            { name: "Café Espresso", price: "R$7", vegetarian: true },
            { name: "Café com Leite", price: "R$9", vegetarian: true },
            { name: "Chás (quente/gelado)", price: "R$8", vegetarian: true }
        ],
        "Carta dei Vini": {
            "Vinhos Tintos": [
                { name: "Chianti Classico DOCG (Toscana, Itália)", price: "Garrafa R$180 / Taça R$45", vegetarian: true },
                { name: "Barolo DOCG (Piemonte, Itália)", price: "Garrafa R$450", vegetarian: true },
                { name: "Nero d'Avola IGT (Sicília, Itália)", price: "Garrafa R$150 / Taça R$40", vegetarian: true },
                { name: "Malbec Reserva (Mendoza, Argentina)", price: "Garrafa R$160 / Taça R$42", vegetarian: true },
                { name: "Cabernet Sauvignon Gran Reserva (Valle Central, Chile)", price: "Garrafa R$170", vegetarian: true }
            ],
            "Vinhos Brancos": [
                { name: "Pinot Grigio DOC (Veneto, Itália)", price: "Garrafa R$140 / Taça R$38", vegetarian: true },
                { name: "Vermentino di Sardegna DOC (Sardenha, Itália)", price: "Garrafa R$165", vegetarian: true },
                { name: "Sauvignon Blanc (Loire, França)", price: "Garrafa R$190 / Taça R$48", vegetarian: true },
                { name: "Chardonnay (Califórnia, EUA)", price: "Garrafa R$175", vegetarian: true }
            ],
            "Vinhos Rosés": [
                { name: "Rosato Salento IGT (Puglia, Itália)", price: "Garrafa R$130 / Taça R$35", vegetarian: true },
                { name: "Provence Rosé AOP (Provence, França)", price: "Garrafa R$210", vegetarian: true }
            ],
            "Espumantes": [
                { name: "Prosecco DOC Treviso Brut (Veneto, Itália)", price: "Garrafa R$150 / Taça R$40", vegetarian: true },
                { name: "Champagne Brut (Champagne, França)", price: "Garrafa R$550", vegetarian: true }
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
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.querySelector('.search-results-list');
    const closeSearchBtn = document.getElementById('close-search');
    const backToTopBtn = document.getElementById('back-to-top');

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
        // For now, just show the menu - could be expanded to show an about modal
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

    // Generate navigation and content
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

        // Generate menu sections
        for (const category in menuData) {
            const categorySlug = createSlug(category);

            // Create navigation link
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.textContent = category.split(' - ')[0];
            navLink.href = `#${categorySlug}`;
            navLink.setAttribute('data-category', categorySlug);
            navItem.appendChild(navLink);
            navList.appendChild(navItem);

            // Create menu section
            const section = document.createElement('section');
            section.id = categorySlug;
            section.className = 'menu-section';
            section.setAttribute('data-category', category);

            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = category;
            section.appendChild(sectionTitle);

            // Handle items or subcategories
            if (Array.isArray(menuData[category])) {
                menuData[category].forEach(item => {
                    section.appendChild(createMenuItem(item, category));
                });
            } else if (typeof menuData[category] === 'object') {
                for (const subCategory in menuData[category]) {
                    const subSectionTitle = document.createElement('h3');
                    subSectionTitle.textContent = subCategory;
                    section.appendChild(subSectionTitle);
                    menuData[category][subCategory].forEach(item => {
                        section.appendChild(createMenuItem(item, category));
                    });
                }
            }

            // Add category-specific notes
            const categoryNotes = getCategoryNotes(category);
            if (categoryNotes) {
                const notes = document.createElement('div');
                notes.className = 'section-notes';
                notes.innerHTML = categoryNotes;
                section.appendChild(notes);
            }

            menuContent.appendChild(section);
        }

        // Re-bind event listeners after content generation
        bindEventListeners();
    };

    // Create individual menu item
    const createMenuItem = (item, category) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        
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

        return itemDiv;
    };

    // Get category-specific notes
    const getCategoryNotes = (category) => {
        const notes = {
            "Paste & Risotti": "Os pratos podem conter alergênicos, pimenta e cheiro verde. Temos também massa integral e sem glúten.",
            "Secondi Piatti - Terra & Mare": "Os pratos podem conter alergênicos, pimenta e cheiro verde. Comunique ao garçom eventuais restrições.",
            "Pizze": "Adicional de Burrata na Pizza - R$25. Massa com fermentação natural. Opção de massa integral disponível.",
            "Il nostro gelato - Sorvete Artesanal": "Todos as sobremesas e sorvetes são artesanais de nossa produção. O Isola Cucina Italiana nasceu da ideia de recriar um ambiente típico de uma casa na Itália, com produtos tradicionais da cozinha familiar, para garantir o máximo nível de qualidade. Todos os pratos são feitos na hora e a preparação pode demorar dependendo do fluxo.",
            "Carta dei Vini": "Rolha (Traga seu vinho) - R$50"
        };
        return notes[category] || null;
    };

    // Search functionality
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
        document.querySelectorAll('.menu-item').forEach(item => {
            const searchableText = [
                item.dataset.name || '',
                item.dataset.description || '',
                item.dataset.optionName || '',
                item.dataset.optionDescription || '',
                item.dataset.category || ''
            ].join(' ');
            
            if (searchableText.includes(searchTerm)) {
                const clone = item.cloneNode(true);
                highlightText(clone, searchTerm);
                results.push(clone);
            }
        });
        
        if (results.length > 0) {
            results.forEach(result => {
                searchResultsList.appendChild(result);
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

    const highlightText = (element, searchTerm) => {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            { acceptNode: () => NodeFilter.FILTER_ACCEPT },
            false
        );
        
        const nodesToReplace = [];
        let currentNode;
        
        while (currentNode = walker.nextNode()) {
            if (currentNode.nodeValue.toLowerCase().includes(searchTerm)) {
                nodesToReplace.push(currentNode);
            }
        }
        
        nodesToReplace.forEach(node => {
            const text = node.nodeValue;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const newHTML = text.replace(regex, '<span class="highlight">$1</span>');
            
            const tempSpan = document.createElement('span');
            tempSpan.innerHTML = newHTML;
            
            if (node.parentNode) {
                while (tempSpan.firstChild) {
                    node.parentNode.insertBefore(tempSpan.firstChild, node);
                }
                node.parentNode.removeChild(node);
            }
        });
    };

    // Navigation functionality
    const setupNavigation = () => {
        // Smooth scrolling for nav links
        const navLinks = document.querySelectorAll('#menu-nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                e.target.classList.add('active');
            });
        });

        // Intersection Observer for active nav highlighting
        const sections = document.querySelectorAll('.menu-section');
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Set first nav link as active initially
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
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