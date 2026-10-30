document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const pricingFilter = document.getElementById('pricingFilter');
    const aiGrid = document.getElementById('aiGrid');
    const resultCount = document.getElementById('resultCount');
    const noResultsMsg = document.getElementById('noResultsMsg');

    // Key shortcut: '/' to focus search input
    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    const getPricingClass = (pricing) => {
        if (!pricing) return 'price-free';
        if (pricing === 'Free' || (pricing.includes('Free') && pricing !== 'Freemium')) return 'price-free';
        if (pricing === 'Freemium') return 'price-freemium';
        if (pricing === 'Subscription') return 'price-paid';
        if (pricing.includes('Limited')) return 'price-limited';
        return 'price-free';
    };

    // Render cards function
    const renderCards = (tools) => {
        aiGrid.innerHTML = '';
        resultCount.textContent = tools.length;

        if (tools.length === 0) {
            noResultsMsg.classList.remove('hidden');
        } else {
            noResultsMsg.classList.add('hidden');
        }

        tools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'ai-card';
            
            const pricingBadgeClass = getPricingClass(tool.pricing);

            const tagsHTML = tool.categories.map(cat => {
                return `<span class="category-tag" data-cat="${cat}">${cat}</span>`;
            }).join('');

            card.innerHTML = `
                <div class="card-header">
                    <div class="card-top">
                        <h3>🤖 ${tool.name}</h3>
                        <span class="pricing-badge ${pricingBadgeClass}">${tool.pricing}</span>
                    </div>
                </div>
                <p class="ai-card-desc">${tool.description}</p>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
                <div class="card-footer">
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="visit-btn">
                        Visit ↗
                    </a>
                </div>
            `;
            aiGrid.appendChild(card);
        });

        // Add click events to category tags to filter by category
        aiGrid.querySelectorAll('.category-tag').forEach(tag => {
            tag.addEventListener('click', (e) => {
                const cat = e.target.getAttribute('data-cat');
                categoryFilter.value = cat;
                filterTools();
            });
        });
    };

    // Filter function
    const filterTools = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const categoryValue = categoryFilter.value;
        const pricingValue = pricingFilter.value;

        const filtered = aiTools.filter(tool => {
            // Check Search match in name, description, or category
            const matchesSearch = !searchTerm || 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.categories.some(c => c.toLowerCase().includes(searchTerm));
            
            // Check Category match
            const matchesCategory = (categoryValue === 'All' || tool.categories.includes(categoryValue));
            
            // Check Pricing match
            let matchesPricing = true;
            if (pricingValue !== 'All') {
                if (pricingValue === 'Free') {
                    matchesPricing = tool.pricing === 'Free';
                } else if (pricingValue === 'Freemium') {
                    matchesPricing = tool.pricing === 'Freemium';
                } else if (pricingValue === 'Limited Prompts') {
                    matchesPricing = tool.pricing.includes('Limited');
                } else if (pricingValue === 'Subscription') {
                    matchesPricing = tool.pricing === 'Subscription';
                } else {
                    matchesPricing = tool.pricing === pricingValue;
                }
            }

            return matchesSearch && matchesCategory && matchesPricing;
        });

        renderCards(filtered);
    };

    // Event Listeners
    searchInput.addEventListener('input', filterTools);
    categoryFilter.addEventListener('change', filterTools);
    pricingFilter.addEventListener('change', filterTools);

    // Initial Render
    if (typeof aiTools !== 'undefined') {
        renderCards(aiTools);
    } else {
        console.error("aiTools data not found. Make sure data.js is loaded before script.js");
    }
});
