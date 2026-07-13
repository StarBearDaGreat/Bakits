// Recipe data
const recipes = {
    'Overnight-Chocolate-Chip-Cookies': {
        name: 'Overnight Chocolate Chip Cookies',
        image: "url('https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-threeByTwoMediumAt2X.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Medium',
        yield: '18 cookies',
        time: '35 minutes, 12 hour chilling',
        description: 'Our Classic Chocolate Chip cookie is a timeless favorite that brings joy to every bite. Made with premium Belgian chocolate chips and real butter, these cookies deliver the perfect balance of crispy edges and chewy centers. The recipe has been perfected over years to ensure that golden-brown exterior and melty chocolate goodness. Whether you\'re baking for a special occasion or just treating yourself, these cookies are guaranteed to become a household staple.',
        included: [
            'All premeasured non-perishable ingredients needed',
            'Premium all-purpose flour',
            'Authentic 70% chocolate chips',
            'Pure vanilla extract',
            'Rich brown sugar for an extra caramelized flavor',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    },
    'Mexican-Hot-Chocolate-Cookies': {
        name: 'Mexican Hot Chocolate Cookies',
        image: "url('https://static01.nyt.com/images/2023/11/29/multimedia/29cookieweek6-hotchoc-fktb/29cookieweek6-hotchoc-fktb-threeByTwoMediumAt2X.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Medium',
        yield: '15 cookies',
        time: '45 minutes,  30 min chilling',
        description: 'A wholesome and hearty cookie that combines rolled oats with plump, juicy raisins. Our Oatmeal Raisin cookies offer a delightful chewiness and natural sweetness that makes them perfect for breakfast or an afternoon snack. Enhanced with a hint of cinnamon and nutmeg, each bite brings warmth and comfort. These cookies are loved by health-conscious bakers who don\'t want to compromise on flavor.',
        included: [
            'All premeasured non-perishable ingredients needed',
            'Premium cayanne pepper powder',
            'Rich and organic cinnamon',
            'Nutmeg spice',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    },
    'Cultured-Butter-Cookies': {
        name: 'Cultured Butter Cookies',
        image: "url('https://static01.nyt.com/images/2013/10/09/dining/09APPE2/09JPAPPE1-jumbo.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Easy',
        yield: '27 cookies',
        time: '28 minutes, 2 hours chilling',
        description: 'For the true chocolate lover, our Double Chocolate Delight is an indulgent experience. Rich cocoa powder is combined with dark chocolate chunks to create an intensely chocolatey cookie with a fudgy texture. The cookies have a beautiful crackled surface and maintain their soft, decadent interior. Perfect for special occasions or when you need a serious chocolate fix.',
        included: [
            'All pre-measured non-perishable ingredients needed',
            'Premium vanilla extract',
            'Demarara sugar for a delightful crunch',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    },
    'Caramelized-Gochujang-Cookies': {
        name: 'Caramelized Gochujang Cookies',
        image: "url('https://static01.nyt.com/images/2025/09/25/multimedia/29summer100rex5-cookies-qmkc/29summer100rex5-cookies-qmkc-threeByTwoMediumAt2X-v2.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Easy',
        yield: '16 cookies',
        time: '22 minutes, 15 minute chilling',
        description: 'Our Peanut Butter Bliss cookies are a peanut butter lover\'s dream come true. Made with creamy peanut butter and featuring the classic crisscross pattern on top, these cookies deliver rich, nutty flavor in every bite. They have a wonderful tender crumb and that signature peanut butter cookie texture. Simple to make yet incredibly satisfying.',
        included: [
            'All premeasured non-perishable ingredients needed',
            'Gochujang - a fermented Korean chili paste with a hint of sweetness',
            'Dark brown sugar for an extra carmelized flavor',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    },
    'Pistachio-Pinwheel-Cookies': {
        name: 'Pistachio Pinwheel Cookies',
        image: "url('https://static01.nyt.com/images/2020/12/07/dining/cs-pistachio-pinwheels/merlin_180932526_f83d4853-083b-4b02-947d-dfa06b746508-threeByTwoMediumAt2X.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Easy',
        yield: '12 cookies',
        time: '45 minutes, 30 minute chilling',
        description: 'Sometimes simplicity is perfection. Our Classic Sugar Cookies are buttery, tender, and topped with sparkling sugar crystals. These versatile cookies are perfect for any occasion and can be decorated to match any theme. The dough is easy to work with and the cookies hold their shape beautifully, making them ideal for cookie decorating parties or simple everyday treats.',
        included: [
            'All premeasured non-perishable ingredients needed',
            'Premium almond flour',
            'Pre-blended pistachios',
            'Almond extract',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    },
    'Matcha-Latte-Cookies': {
        name: 'Matcha Latte Cookies',
        image: "url('https://static01.nyt.com/images/2023/11/29/multimedia/29cookieweek1-matcha-tpzw/29cookieweek1-matcha-tpzw-threeByTwoMediumAt2X.jpg?quality=75&auto=webp') center/cover",
        difficulty: 'Easy',
        yield: '12 cookies',
        time: '26 minutes',
        description: 'Rolled in cinnamon sugar and baked to perfection, our Snickerdoodle cookies are a cozy treat that brings back childhood memories. These cookies have a distinctive tangy flavor from cream of tartar and a wonderful soft, chewy texture. The cinnamon-sugar coating creates a slightly crispy exterior that gives way to a tender center. They\'re the perfect companion to a glass of cold milk or hot cocoa.',
        included: [
            'Premium Matcha)',
            'Pure vanilla extract',
            'Creamy almond butter',
            'QR code with video instruction',
            'Step-by-step recipe card with the exact measurements so that you can repeat the recipe whenever you want'
        ]
    }
};


