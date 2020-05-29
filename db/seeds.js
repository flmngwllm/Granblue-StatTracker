const mongoose = require('./connection')
const User = require('../models/User')
const Character = require('../models/Character')


const Gran = new Character({
    name: 'Gran',
    description: "This hero's adventure began when he received a letter from his father asking him to come to the Island of the Astrals, Estalucia. Now he travels the skies with his flying lizard-like buddy, Vyrn, and the mysterious blue-haired girl who saved his life by linking it with her own, Lyria. Honest to a fault, he'll come to the aid of anyone who needs his assistance. Although his swordplay is rough and self-taught, he possesses the power to overcome any obstacle—thanks in no small part to Lyria's assistance.",
    image: '',
    wins: 0,
    losses: 0
})

const Katalina = new Character({
    name: 'Katalina',
    description: "A former imperial knight that abandoned her post to protect Lyria. When she was loyal to the empire, she was charged with guarding Lyria, but this changed when she caught wind of the twisted experiments that were being performed on the girl. This prompted her to orchestrate an escape for Lyria, the catalyst that began their sky-bound adventures with Gran.",
    image: '',
    wins: 0,
    losses: 0
})

const Lancelot = new Character({
    name: 'Lancelot',
    description: 'A dual-wielding master swordsman who serves as the captain of the Order of White Dragons of Feendrache Kingdom. He rushes across the battlefield at blinding speed, a flurry of shining, crystalline slashes. Those who set eyes on this fighting style immediately recognize why he was made captain of his order.',
    image: '',
    wins: 0,
    losses: 0
})

const Percival = new Character({
    name: 'Percival',
    description: "He travels to lands far and wide to learn the secrets of statecraft, all in hopes of founding his dream country. Before he set out on a journey to achieve such lofty goals, he and Lancelot served as officers in the same order of knights, studying under the same master. He received his nickname, the Lord of Flames, from the noble way he wields his blazing long sword. Those who come face-to-face with him find themselves either entranced or terrified by his abilities.",
    image: '',
    wins: 0,
    losses: 0
})

const Narmaya = new Character({
    name: 'Narmaya',
    description: "A katana master who was born into a line of expert martial artists. Through diligent tempering Narmaya combined her family's martial arts with magic and formed her own unique blade technique—one which she wields with extraordinary finesse. Although her short stature may paint her as easy pickings, a wise opponent should not underestimate her ability to freely switch between Dawnfly and Freeflutter stances, lest they be cut down in the blink of an eye.",
    image: '',
    wins: 0,
    losses: 0
})

const Soriz = new Character({
    name: 'Soriz',
    description: "Soriz once tried his hands at wielding a weapon, before he realized that his hands themselves were the ultimate tool for battle. He threw himself wholeheartedly into training his fists, proving to the world his conviction and earning fame as a fearsome warrior. Even now he continues to hone his aged body, always striving for newer peaks. Despite his usual stoic expression, he's got quite the unsavory side hiding underneath, but most opponents are too busy facing off against his boulder-like fists and log-like kicks to do much about his discourteous behavior.",
    image: '',
    wins: 0,
    losses: 0
})

const Lowain = new Character({
    name: 'Lowain',
    description: "A free spirit who was all about his part-time job, a good gab sesh with the boys, and a dash of adventure every now and then. That all changed when Katalina visited the restaurant where he worked. It was infatuation at first sight. Determined to follow her, he quit his job and began a new life as the cook on Gran's crew. He's a fair hand with a dagger, but with his buddies Elsam and Tomoi there to run interference and baffle opponents, he can really ruin an enemy's day... probably.",
    image: '',
    wins: 0,
    losses: 0

})

const Metera = new Character({
    name: 'Metera',
    description: "An Erune woman blessed with myriad talents, chief among them the abilities to wield a magic bow and to sustain flight completely unaided. She once acted as a guardian for her home village, watching over an altar where a sinister force was enshrined. But she grew tired of the tiresome regimen and abandoned her post. Now she wanders wherever the wind takes her. Her arrows are a reflection of this freedom-unhindered by any obstacle and sure to find their target. Once she sets her eyes on a mark, there’s nowhere to hide.",
    image: '',
    wins: 0,
    losses: 0

})

const Djeeta = new Character({
    name: 'Djeeta',
    description: "This heroine's adventure began when she received a letter from her father asking her to come to the Island of the Astrals, Estalucia. Now she travels the skies with her flying lizard-like buddy, Vyrn, and the mysterious blue-haired girl who saved her life by linking it with her own, Lyria.",
    image: '',
    wins: 0,
    losses: 0

})


const Charlotta = new Character({
    name: 'Charlotta',
    description: "A Harvin knight who serves as captain of the Lumiel Order of Holy Knights. Strict with herself, but kind to others, she's earned the trust of all her comrades and possesses superlative martial skills. But she also has a childish side, evidenced by her love of the Little Skyfarer's Lunch, a famed kid's meal popular throughout the skydoms. With gusto she swings the Claíomh Solais-a shining blade nearly the same size as its wielder-easily felling monsters that are ten times her size.",
    image: '',
    wins: 0,
    losses: 0

})


const Vaseraga = new Character({
    name: 'Vaseraga',
    description: "This towering Draph warrior belongs to the Society, an organization which hunts primal beasts. He has formed a contract with the seal weapon known as Great Scythe Grynoth.    The intimidating size of his blade and his immunity to pain sap opponents of their will to fight. Though his somber bearing and curt speech can make him seem unapproachable, he is in fact a calm, kind person who will always go out of his way to help those in need.    His indomitable spirit, raw physical might, and inability to feel pain make for an overwhelmingly aggressive fighting style. Opponents are advised to approach with extreme caution.",
    image: '',
    wins: 0,
    losses: 0

})


const Ferry = new Character({
    name: 'Ferry',
    description: "An Erune girl who once resided on the Mist-Shrouded Isle. She became a spirit at the moment of her death. This grim transformation occurred while she was waiting for her frail sister to return home, a period that had lasted well past her death. At Gran and Lyria's behest, she sets out on a journey to discover the whereabouts of her now-grown sibling. In addition to the crack of her whip, she fights with the faithful bite of her ghostly pets, overwhelming her opponents with phantasmagoric assaults.",
    image: '',
    wins: 0,
    losses: 0

})

const Zeta = new Character({
    name: 'Zeta',
    description: "This fearless fighter belongs to the Society, an organization which hunts primal beasts. She has formed a contract with the seal weapon known as the Spear of Arvess. In addition to the fierce mid-range spear attacks which keep her enemies at a distance, Zeta also has a talent for lightning-quick aerial combat.",
    image: '',
    wins: 0,
    losses: 0

})

const Beezlebub = new Character({
    name: 'Beezlebub',
    description: "One of the Astrals who invaded the Sky Realm thousands of years ago, long before the War broke out. He was sealed away in Pandemonium until the fallen angel Belial released him from his forced slumber. Obsessed with becoming the supreme being, he wields a substance capable of slaying immortals—chaos matter. And at his beck and call is Avatar, the manifestation of destruction. Sky Realm, Astral Realm, Crimson Horizon—his hands will mold these realms into one so that he may stand above all in creation.",
    image: '',
    wins: 0,
    losses: 0

})

const Ladiva = new Character({
    name: 'Ladiva',
    description: 'Monday',
    image: '',
    wins: 0,
    losses: 0

})

const Zooey = new Character({
    name: 'Zooey',
    description: "At first glance Zooey appears to be an innocent young girl, but her true form is that of the Grand Order, a primal beast tasked with keeping the balance of the world. Abhorring chaos, she takes to the skies and readies herself to fight after sensing three singularities: Gran, Beelzebub, and Djeeta, who will disturb the equilibrium of space and time.    With swordsmanship beyond mortal capabilities and lightning magic at her command, as well as the aid of her faithful dragons Dyrn and Lyrn, she will ensure balance is upheld.",
    image: '',
    wins: 0,
    losses: 0

})


Character.remove({})
    .then(() => Gran.save())
    .then(() => Katalina.save())
    .then(() => Metera.save())
    .then(() => Ferry.save())
    .then(() => Lancelot.save())
    .then(() => Percival.save())
    .then(() => Zeta.save())
    .then(() => Vaseraga.save())
    .then(() => Charlotta.save())
    .then(() => Lowain.save())
    .then(() => Ladiva.save())
    .then(() => Beezlebub.save())
    .then(() => Narmaya.save())
    .then(() => Djeeta.save())
    .then(() => Soriz.save())
    .then(() => Zooey.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())