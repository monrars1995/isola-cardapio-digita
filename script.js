
document.addEventListener('DOMContentLoaded', () => {
    // Define menu data structure (based on menu_structure.md)
    const menuData = {
        "Antipasti - Entradas": [
            { name: "Le Bruschette (2 un)", options: [
                { name: "Parma & Brie", description: "parma, brie, mel e nozes", price: "R$42" },
                { name: "Parmigiano", description: "tomate, manjericão, oregano, parmesão", price: "R$32" },
                { name: "Funghi e Provola", description: "mix de cogumelos saltados e provolone", price: "R$39" }
            ]},
            { name: "Tartare di Tonno (80g)", description: "Picadinho de atum fresco, manga e aromas cítricos", price: "R$59" },
            { name: "Polpo alla Gallurese (80g)", description: "Saladinha de polvo com batatas e tomatinhos", price: "R$69" },
            { name: "Guazzetto del Golfo (1 dúzia)", description: "Misto de mariscos frescos na concha em molho de tomate levemente picante", price: "R$59" },
            { name: "Tagliere Antipasto Misto Terra", description: "Queijos e embutidos artesanais típicos italianos", price: "R$79" },
            { name: "Seppiette Grigliate al Limone (150g)", description: "Lula grelhada, pesto de rúcula, pimenta do reino & zest de limão", price: "R$52" },
            { name: "Pai e Casu", description: "Queijo meia cura grelhado, derretido sobre pão artesanal, mel orgânico e nozes", price: "R$59" },
            { name: "Burratina (60g)", description: "Com presunto de parma e molho pesto de manjericão", price: "R$52", notes: "usamos apenas burratas frescas, conferir disponibilidade." },
            { name: "Carpaccio di Pesce Marinato", description: "Carpaccio de peixe marinado", price: "R$52" },
            { name: "Fritto Misto", description: "Fritura de misto de frutos do mar", price: "R$79" },
            { name: "Porção adicional de pão", description: "Pão artesanal produzido no restaurante", price: "R$18" }
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
        "Secondi Piatti - Pratos Principais": [
            { name: "Filetto ai Funghi", description: "Filet mignon grelhado ao molho de cogumelos frescos e batata rústica", price: "R$99" },
            { name: "Filetto al Pepe Verde", description: "Filet mignon grelhado ao molho de pimenta verde e batata rústica", price: "R$99" },
            { name: "Polpo alla Griglia", description: "Polvo grelhado com batatas douradas e brócolis", price: "R$119" },
            { name: "Salmone al Limone", description: "Salmão grelhado ao molho de limão siciliano, alcaparras e purê de batata", price: "R$89" },
            { name: "Pescato del Giorno", description: "Peixe do dia grelhado com legumes salteados", price: "R$89" },
            { name: "Cotoletta alla Milanese", description: "Costeleta de porco empanada e frita, acompanha salada de rúcula e tomate cereja", price: "R$79" }
        ],
        "Contorni - Acompanhamentos": [
            { name: "Legumes Grelhados", price: "R$25" },
            { name: "Batata Rústica", price: "R$25" },
            { name: "Purê de Batata", price: "R$25" },
            { name: "Brócolis Salteado", price: "R$25" }
        ],
        "Menu Bambini - Menu Infantil": [
            { name: "Spaghetti al Sugo o Burro", price: "R$39" },
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
            { name: "Tiramisù Classico", description: "Creme de mascarpone, biscoito savoiardi embebido em café e cacau em pó", price: "R$35" },
            { name: "Panna Cotta com Frutas Vermelhas", description: "Flan de creme de leite com calda de frutas vermelhas frescas", price: "R$32" },
            { name: "Cannoli Siciliani (2 un)", description: "Massa crocante recheada com creme de ricota doce, frutas cristalizadas e pistache", price: "R$38" },
            { name: "Torta Caprese", description: "Torta de chocolate e amêndoas sem farinha, servida com sorvete de creme", price: "R$36" },
            { name: "Gelato Artigianale (bola)", description: "Sabores: Pistache, Chocolate Belga, Creme, Limão Siciliano", price: "R$18" }
        ],
        "Bevande - Bebidas": [
            { name: "Acqua Minerale (com/sem gás) 300ml", price: "R$8" },
            { name: "Refrigerantes (Lata)", description: "Coca-Cola, Coca-Cola Zero, Guaraná Antarctica, Guaraná Zero, Sprite", price: "R$9" },
            { name: "Sucos Naturais", description: "Laranja, Limão, Abacaxi com Hortelã, Melancia", price: "R$12" },
            { name: "Cervejas Long Neck", description: "Heineken, Stella Artois, Corona", price: "R$15" },
            { name: "Café Espresso", price: "R$7" },
            { name: "Café com Leite", price: "R$9" },
            { name: "Chás (quente/gelado)", price: "R$8" }
        ],
        "Carta dei Vini": {
            "Vinhos Tintos": [
                { name: "Chianti Classico DOCG (Toscana, Itália)", price: "Garrafa R$180 / Taça R$45" },
                { name: "Barolo DOCG (Piemonte, Itália)", price: "Garrafa R$450" },
                { name: "Nero d'Avola IGT (Sicília, Itália)", price: "Garrafa R$150 / Taça R$40" },
                { name: "Malbec Reserva (Mendoza, Argentina)", price: "Garrafa R$160 / Taça R$42" },
                { name: "Cabernet Sauvignon Gran Reserva (Valle Central, Chile)", price: "Garrafa R$170" }
            ],
            "Vinhos Brancos": [
                { name: "Pinot Grigio DOC (Veneto, Itália)", price: "Garrafa R$140 / Taça R$38" },
                { name: "Vermentino di Sardegna DOC (Sardenha, Itália)", price: "Garrafa R$165" },
                { name: "Sauvignon Blanc (Loire, França)", price: "Garrafa R$190 / Taça R$48" },
                { name: "Chardonnay (Califórnia, EUA)", price: "Garrafa R$175" }
            ],
            "Vinhos Rosés": [
                { name: "Rosato Salento IGT (Puglia, Itália)", price: "Garrafa R$130 / Taça R$35" },
                { name: "Provence Rosé AOP (Provence, França)", price: "Garrafa R$210" }
            ],
            "Espumantes": [
                { name: "Prosecco DOC Treviso Brut (Veneto, Itália)", price: "Garrafa R$150 / Taça R$40" },
                { name: "Champagne Brut (Champagne, França)", price: "Garrafa R$550" }
            ]
        }
    };

    const navList = document.querySelector('#menu-nav ul');
    const menuContent = document.getElementById('menu-content');

    // Function to create slug for ID
    const createSlug = (text) => {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[àáâãäå]/g, 'a')    // Replace accented 'a'
            .replace(/[èéêë]/g, 'e')    // Replace accented 'e'
            .replace(/[ìíîï]/g, 'i')    // Replace accented 'i'
            .replace(/[òóôõö]/g, 'o')    // Replace accented 'o'
            .replace(/[ùúûü]/g, 'u')    // Replace accented 'u'
            .replace(/ç/g, 'c')         // Replace ç
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    };

    // Generate Navigation and Content
    for (const category in menuData) {
        const categorySlug = createSlug(category);

        // Create Nav Link
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = category.split(' - ')[0]; // Use shorter name for nav if available
        navLink.href = `#${categorySlug}`;
        navItem.appendChild(navLink);
        navList.appendChild(navItem);

        // Create Menu Section
        const section = document.createElement('section');
        section.id = categorySlug;
        section.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = category;
        section.appendChild(sectionTitle);

        // Handle items or subcategories
        if (Array.isArray(menuData[category])) {
            // It's an array of items
            menuData[category].forEach(item => {
                section.appendChild(createMenuItem(item));
            });
        } else if (typeof menuData[category] === 'object') {
            // It's an object with subcategories (like Vinhos)
            for (const subCategory in menuData[category]) {
                const subSectionTitle = document.createElement('h3');
                subSectionTitle.textContent = subCategory;
                section.appendChild(subSectionTitle);
                menuData[category][subCategory].forEach(item => {
                    section.appendChild(createMenuItem(item));
                });
            }
        }

        // Add specific notes if they exist for the category
        if (category === "Paste & Risotti") {
            const notes = document.createElement('p');
            notes.classList.add('section-notes');
            notes.textContent = "Notas: Os pratos podem conter alergênicos, pimenta e cheiro verde. Temos também massa integral e sem glúten.";
            section.appendChild(notes);
        }
        if (category === "Pizze") {
            const notes = document.createElement('p');
            notes.classList.add('section-notes');
            notes.textContent = "Notas: Adicional de Burrata na Pizza - R$25. Massa com fermentação natural. Opção de massa integral disponível.";
            section.appendChild(notes);
        }
         if (category === "Carta dei Vini") {
            const notes = document.createElement('p');
            notes.classList.add('section-notes');
            notes.textContent = "Nota: Rolha (Traga seu vinho) - R$50";
            section.appendChild(notes);
        }

        menuContent.appendChild(section);
    }

    // Function to create a single menu item element
    function createMenuItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        
        // Data attributes para facilitar a pesquisa
        itemDiv.dataset.name = item.name.toLowerCase();
        if (item.description) {
            itemDiv.dataset.description = item.description.toLowerCase();
        }

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('item-details');

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('item-name');
        nameSpan.textContent = item.name;
        
        // Adicionar ícone caso seja vegetariano
        if (item.vegetarian) {
            const vegetarianIcon = document.createElement('i');
            vegetarianIcon.className = 'fas fa-leaf vegetarian-icon';
            vegetarianIcon.title = 'Opção vegetariana';
            vegetarianIcon.setAttribute('aria-label', 'Opção vegetariana');
            nameSpan.appendChild(vegetarianIcon);
        }
        
        detailsDiv.appendChild(nameSpan);

        if (item.description) {
            const descriptionSpan = document.createElement('span');
            descriptionSpan.classList.add('item-description');
            descriptionSpan.textContent = item.description;
            detailsDiv.appendChild(descriptionSpan);
        }

        if (item.notes) {
            const notesSpan = document.createElement('span');
            notesSpan.classList.add('item-notes');
            notesSpan.textContent = item.notes;
            detailsDiv.appendChild(notesSpan);
        }

        // Handle options (like Bruschette)
        if (item.options) {
            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('item-options');
            item.options.forEach(option => {
                const optionSpan = document.createElement('span');
                optionSpan.innerHTML = `&nbsp;&nbsp;- ${option.name} (${option.description}) - <strong>${option.price}</strong>`;
                optionsDiv.appendChild(optionSpan);
                
                // Adicionar dados para pesquisa
                itemDiv.dataset.optionName = (itemDiv.dataset.optionName || '') + ' ' + option.name.toLowerCase();
                itemDiv.dataset.optionDescription = (itemDiv.dataset.optionDescription || '') + ' ' + option.description.toLowerCase();
            });
            detailsDiv.appendChild(optionsDiv);
            itemDiv.appendChild(detailsDiv);
        } else {
            itemDiv.appendChild(detailsDiv);
            const priceSpan = document.createElement('span');
            priceSpan.classList.add('item-price');
            priceSpan.textContent = item.price;
            itemDiv.appendChild(priceSpan);
        }

        return itemDiv;
    }

    // Animate sections on scroll
    const sectionsToAnimate = document.querySelectorAll('.menu-section');

    if ('IntersectionObserver' in window) {
        const sectionObserverOptions = {
            root: null, // relative to document viewport 
            rootMargin: '0px',
            threshold: 0.1 // 10% of item is visible
        };

        const sectionObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('section-hidden');
                    observer.unobserve(entry.target);
                }
            });
        };

        const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);

        sectionsToAnimate.forEach(section => {
            section.classList.add('section-hidden');
            sectionObserver.observe(section);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        sectionsToAnimate.forEach(section => {
            section.classList.remove('section-hidden');
        });
    }

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('#menu-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to the clicked link
            e.target.classList.add('active');

            // Smooth scroll is handled by CSS `scroll-behavior: smooth;`
            // We just need to make sure the link's default behavior (jumping) happens
            // If CSS scroll-behavior is not supported, uncomment below:
            /*
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            */
        });
    });

    // Highlight nav link on scroll
    const sections = document.querySelectorAll('.menu-section');
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '-50% 0px -50% 0px', // trigger when section is in the middle 50% of the viewport
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

    // Set the first nav link as active initially
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }

    // Sistema de Busca
    const searchInput = document.getElementById('menu-search');
    const searchButton = document.getElementById('search-button');
    const searchClear = document.getElementById('search-clear');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.querySelector('.search-results-list');
    const closeSearchBtn = document.getElementById('close-search');
    
    // Implementar busca
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) return;
        
        searchClear.style.display = 'inline-block';
        searchResultsList.innerHTML = '';
        const results = [];
        
        // Buscar em todos os itens do menu
        document.querySelectorAll('.menu-item').forEach(item => {
            const itemName = item.dataset.name || '';
            const itemDescription = item.dataset.description || '';
            const optionNames = item.dataset.optionName || '';
            const optionDescriptions = item.dataset.optionDescription || '';
            
            const searchableText = `${itemName} ${itemDescription} ${optionNames} ${optionDescriptions}`;
            
            if (searchableText.includes(searchTerm)) {
                // Clone do item para resultados
                const clone = item.cloneNode(true);
                
                // Destacar termos de pesquisa
                highlightText(clone, searchTerm);
                
                results.push(clone);
            }
        });
        
        if (results.length > 0) {
            results.forEach(result => {
                searchResultsList.appendChild(result);
            });
            
            searchResults.classList.remove('hidden');
            document.querySelectorAll('.menu-section').forEach(section => {
                section.style.display = 'none';
            });
        } else {
            const noResults = document.createElement('p');
            noResults.textContent = 'Nenhum resultado encontrado para sua busca.';
            noResults.classList.add('no-results');
            searchResultsList.appendChild(noResults);
            
            searchResults.classList.remove('hidden');
            document.querySelectorAll('.menu-section').forEach(section => {
                section.style.display = 'none';
            });
        }
    }
    
    // Função para destacar texto nos resultados
    function highlightText(element, searchTerm) {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            { acceptNode: node => NodeFilter.FILTER_ACCEPT },
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
            const regex = new RegExp(searchTerm, 'gi');
            const newHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
            
            const tempSpan = document.createElement('span');
            tempSpan.innerHTML = newHTML;
            
            if (node.parentNode) {
                while (tempSpan.firstChild) {
                    node.parentNode.insertBefore(tempSpan.firstChild, node);
                }
                node.parentNode.removeChild(node);
            }
        });
    }
    
    // Limpar busca
    function clearSearch() {
        searchInput.value = '';
        searchClear.style.display = 'none';
        searchResults.classList.add('hidden');
        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'block';
        });
    }
    
    // Event listeners para busca
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim().length > 0) {
            searchClear.style.display = 'inline-block';
        } else {
            searchClear.style.display = 'none';
        }
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        } else if (e.key === 'Escape') {
            clearSearch();
        }
    });
    
    searchButton.addEventListener('click', performSearch);
    searchClear.addEventListener('click', clearSearch);
    closeSearchBtn.addEventListener('click', clearSearch);
    
    // Botão de voltar ao topo
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
});
