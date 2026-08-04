const cardsContainer = document.getElementById('recipe-cards');
const cardTemplate = document.getElementById('recipe-card-template');

function setText(card, selector, value) {
    card.querySelector(selector).textContent = value;
}

function setPrompt(card, selector, prompt) {
    const field = card.querySelector(selector);
    field.textContent = '';
    field.dataset.placeholder = prompt;
    field.setAttribute('aria-label', prompt);
}

function createChecklistItem(prompt) {
    const item = document.createElement('li');
    const marker = document.createElement('span');
    const label = document.createElement('span');

    marker.className = 'list-marker';
    marker.setAttribute('aria-hidden', 'true');
    label.className = 'editable';
    label.contentEditable = 'true';
    label.dataset.placeholder = prompt;
    label.setAttribute('aria-label', prompt);

    item.append(marker, label);
    return item;
}

function createStep(step, index) {
    const item = document.createElement('li');
    const number = document.createElement('span');
    const content = document.createElement('div');
    const title = document.createElement('h3');
    const instruction = document.createElement('p');
    const checkbox = document.createElement('span');

    item.className = 'recipe-step';
    if (step.adult) item.classList.add('adult-step');

    number.className = 'step-number';
    number.textContent = String(index + 1).padStart(2, '0');
    title.textContent = step.title;
    instruction.className = 'editable';
    instruction.contentEditable = 'true';
    instruction.dataset.placeholder = step.text;
    instruction.setAttribute('aria-label', step.text);
    checkbox.className = 'step-check';
    checkbox.setAttribute('aria-label', `Step ${index + 1} complete`);

    content.append(title, instruction);
    item.append(number, content, checkbox);
    return item;
}

function renderRecipeCard(recipe, index) {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.id = recipe.id;
    card.style.setProperty('--accent', recipe.accent);

    setText(card, '.card-number', String(index + 1).padStart(2, '0'));
    setText(card, '.recipe-name', recipe.name);
    setText(card, '.make-time', recipe.makeTime);
    setText(card, '.recipe-yield', recipe.yield);
    setText(card, '.difficulty', recipe.difficulty);
    setPrompt(card, '.recipe-intro', cardPlaceholders.intro);
    setPrompt(card, '.safety-note', cardPlaceholders.safetyNote);
    setPrompt(card, '.top-tip', cardPlaceholders.topTip);

    const boxList = card.querySelector('.box-items');
    cardPlaceholders.boxItems.forEach(item => boxList.append(createChecklistItem(item)));

    const homeList = card.querySelector('.home-items');
    cardPlaceholders.homeItems.forEach(item => homeList.append(createChecklistItem(item)));

    const stepsList = card.querySelector('.steps-list');
    cardPlaceholders.steps.forEach((step, stepIndex) => {
        stepsList.append(createStep(step, stepIndex));
    });

    cardsContainer.append(card);
}

kidRecipeCards.forEach(renderRecipeCard);
document.getElementById('print-cards').addEventListener('click', () => window.print());
