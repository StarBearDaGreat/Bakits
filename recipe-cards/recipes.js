const kidRecipeCards = [
    {
        id: 'overnight-chocolate-chip',
        name: 'Overnight Chocolate Chip Cookies',
        accent: '#A95735',
        makeTime: '35 min + chill',
        yield: '18 cookies',
        difficulty: 'Medium'
    },
    {
        id: 'cultured-butter',
        name: 'Cultured Butter Cookies',
        accent: '#B88928',
        makeTime: '28 min + chill',
        yield: '27 cookies',
        difficulty: 'Easy'
    },
    {
        id: 'mexican-hot-chocolate',
        name: 'Mexican Hot Chocolate Cookies',
        accent: '#9C4A43',
        makeTime: '45 min + chill',
        yield: '15 cookies',
        difficulty: 'Medium'
    },
    {
        id: 'caramelized-gochujang',
        name: 'Caramelized Gochujang Cookies',
        accent: '#A7412E',
        makeTime: '22 min + chill',
        yield: '16 cookies',
        difficulty: 'Easy'
    },
    {
        id: 'pistachio-pinwheel',
        name: 'Pistachio Pinwheel Cookies',
        accent: '#527B55',
        makeTime: '45 min + chill',
        yield: '12 cookies',
        difficulty: 'Easy'
    },
    {
        id: 'matcha-latte',
        name: 'Matcha Latte Cookies',
        accent: '#647C4E',
        makeTime: '26 min',
        yield: '12 cookies',
        difficulty: 'Easy'
    }
];

const cardPlaceholders = {
    intro: 'Add a warm, one-sentence description of this cookie.',
    safetyNote: 'List the jobs that need adult help, including the oven, hot trays or sharp tools.',
    boxItems: [
        'Pre-measured ingredient + amount',
        'Pre-measured ingredient + amount',
        'Pre-measured ingredient + amount',
        'Pre-measured ingredient + amount'
    ],
    homeItems: [
        'Fresh ingredient + amount',
        'Fresh ingredient + amount',
        'Kitchen tool',
        'Kitchen tool'
    ],
    steps: [
        { title: 'Get ready', text: 'Add one clear action: wash hands, line the tray or prepare the oven.' },
        { title: 'Start the mixture', text: 'Name the ingredients and describe exactly how the mixture should look.' },
        { title: 'Bring it together', text: 'Use one short instruction and a child-friendly visual cue.' },
        { title: 'Shape and rest', text: 'Give the size, spacing and chilling time in one clear sentence.' },
        { title: 'Bake with an adult', text: 'Add the oven temperature, shelf position and exact baking time.', adult: true },
        { title: 'Cool and enjoy', text: 'Add the cooling time and a simple sign that the cookies are ready.' }
    ],
    topTip: 'Add one useful trick that helps this cookie turn out brilliantly.'
};
