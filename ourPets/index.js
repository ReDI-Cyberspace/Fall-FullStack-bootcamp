const pets = [
  {
    type: "cat",
    name: "Nero",
    imageURL: "../assets/ourPets/cats/kari-shea-eMzblc6JmXM-unsplash.jpg",
    description: `Meet Nero, the embodiment of elegance in feline form. Cloaked
    in luxurious, long gray fur, he's a vision of sophistication
    and grace. Nero's affectionate nature is as soft as his plush
    coat, and his purrs are a gentle melody that resonates with
    love.`,
  },
  {
    type: "cat",
    name: "Emily",
    imageURL:
      "../assets/ourPets/cats/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
    description: `Meet Emily, a feline enchantress draped in a luxurious coat of
    long, ginger fur. Her charm is undeniable, a magnetic force
    that draws you in from the moment you lay eyes on her. Emily
    is not just a cat; she's a master of the art of companionship,
    with a heart as warm as her vibrant fur. Her affectionate
    purrs are like a soothing melody, and her playful antics are
    bound to bring a smile to even the most stoic faces`,
  },
  {
    type: "cat",
    name: "Yola",
    imageURL: "../assets/ourPets/cats/mike-van-putten-pF-CcO3vajA-unsplash.jpg",
    description: `Meet Yola, the purr-fect blend of charm and affection. Her
    striking coat mirrors her beautiful yin and yang personality.
    Yola isn't just a visual delight—she's a bundle of kindness
    and love. With a vast heart and playful spirit, she's a
    connoisseur of human companionship, whether cuddling on laps
    or enjoying gentle pets.`,
  },
  {
    type: "cat",
    name: "Roxy",
    imageURL: "../assets/ourPets/cats/michael-sum-LEpfefQf4rU-unsplash.jpg",
    description: `Meet Roxy, the ginger guru of chill vibes and comic relief.
    With her laid-back demeanor and warm fur, she's the epitome of
    relaxation. Picture her lounging in a sunlit spot, turning
    everyday moments into hilarious escapades. Roxy's the perfect
    blend of calm and funny, bringing smiles and tranquility
    wherever she goes.`,
  },
  {
    type: "dog",
    name: "Ranger",
    imageURL: "../assets/ourPets/dogs/fatty-corgi-1QsQRkxnU6I-unsplash.jpg",
    description: `Say hello to Ranger, the corgi extraordinaire! This pint-sized
    ball of fur is all about playtime and cuddles. With a heart as
    big as those adorable ears, Ranger will have you wrapped
    around his paw in no time. Whether he's chasing after toys or
    snuggling up for a cozy cuddle session, this lovable corgi is
    the perfect companion for fun and affection.`,
  },
  {
    type: "dog",
    name: "Ziggy",
    imageURL: "../assets/ourPets/dogs/joe-caione-qO-PIF84Vxg-unsplash.jpg",
    description: `Meet Ziggy, the embodiment of canine joy and energy! This
    white fluffy dynamo is all about play, run, and endless fun.
    With a fur coat as soft as a cloud, Ziggy is ready to turn any
    day into a playful adventure. Whether he's chasing after a
    squeaky toy or zooming around with boundless enthusiasm,
    Ziggy's zest for life is contagious. Get ready for a fluffy
    friend who'll keep you on your toes and bring a smile to your
    face with every playful romp.`,
  },
  {
    type: "dog",
    name: "Magnus",
    imageURL: "../assets/ourPets/dogs/pauline-loroy-U3aF7hgUSrk-unsplash.jpg",
    description: `Say hello to Magnus, the brainy and affectionate border collie
    with a stunning white and brown coat. Magnus isn't just a
    pretty face; he's a canine Einstein, always ready to impress
    with his intelligence. When he's not showcasing his smarts,
    this charming collie is a cuddle enthusiast. Human snuggles
    are his favorite pastime, turning him into a lovable and warm
    companion. Get ready for a mix of brilliance and cuddle
    sessions with Magnus, your new furry genius friend.`,
  },
  {
    type: "turtle",
    name: "Rudolph",
    imageURL:
      "../assets/ourPets/turtles/fernando-mate-J1R-xl_TPPM-unsplash.jpg",
    description: `Meet Rudolph, the energetic young turtle with a shell full of
    zest! This little reptile isn't just a slow-paced crawler;
    he's a bundle of activity, always ready for some turtle-sized
    adventures. Rudolph is not only a great companion for humans
    but also a social butterfly among other pets. Whether it's
    hanging out with furry friends or exploring his aquatic
    domain, Rudolph brings a splash of excitement to every
    environment!`,
  },
  {
    type: "turtle",
    name: "Yoda",
    imageURL: "../assets/ourPets/turtles/ben-collins-b0VO10Zips8-unsplash.jpg",
    description: `Meet Yoda, the tranquil sage of the turtle world. With a shell
    that carries the wisdom of the ages, Yoda is the epitome of
    calm and relaxation. This wise reptile brings a sense of peace
    to any environment, creating a serene atmosphere with every
    gentle movement. Yoda's slow and deliberate nature invites you
    to pause, unwind, and appreciate the tranquility that this
    calm turtle exudes. Get ready for a serene journey with Yoda,
    your own wise and relaxing companion in the world of turtles.`,
  },
  {
    type: "turtle",
    name: "Felicity",
    imageURL: "../assets/ourPets/turtles/rudy-jr-puuFDpCkODQ-unsplash.jpg",
    description: `Say hello to Felicity, the lively young turtle with a shell
    full of curiosity and boundless energy! This little reptile is
    not your average slowpoke—Felicity is always on the move,
    exploring and embracing the wonders of the world around her.
    Her inquisitive nature makes her a delightful companion for
    humans, as she loves to be in the midst of the action. Whether
    it's investigating new surroundings or enjoying the company of
    her human friends, Felicity brings an energetic and
    inquisitive spirit to every moment.`,
  },
  {
    type: "rabbits",
    name: "Yoshi",
    imageURL: "../assets/ourPets/rabbits/sandy-millar-HoZtQxSpaqo-unsplash.jpg",
    description: `Meet Yoshi, the gentle soul with velvety fur and a heart that
    blooms with trust. This shy bunny may take a little time to
    open up, but once he finds the perfect family, his true warmth
    shines through. Yoshi is a master at forming deep connections,
    and his love is as sweet as a delicate blossom. Patient and
    kind, Yoshi transforms into a friendly and loving companion,
    bringing joy to the hearts of those fortunate enough to earn
    his trust. Prepare for a journey of friendship and tender
    moments with Yoshi, the bashful bunny with a heart full of
    love.`,
  },
  {
    type: "rabbit",
    name: "Buck",
    imageURL:
      "../assets/ourPets/rabbits/nikolett-emmert-sGE_5LO8uwM-unsplash.jpg",
    description: `Say hello to Buck, the brilliant bunny with a penchant for
    play and cuddles! With ears as sharp as his intellect, Buck is
    a master at hide and seek, turning every game into a
    delightful adventure. This super-smart bunny knows how to keep
    you on your toes, and when the playtime excitement settles,
    he's a cuddle enthusiast. Buck's affectionate nature
    transforms him into the perfect snuggle buddy, making every
    moment spent together a cozy delight. Get ready for a mix of
    clever antics and heartwarming cuddles with Buck, your new
    furry genius friend.`,
  },
  {
    type: "rabbit",
    name: "Roy",
    imageURL: "../assets/ourPets/rabbits/daniel-rios-GS8-m_u7iK4-unsplash.jpg",
    description: `Meet Roy, the long-haired bundle of joy with a passion for
    running, playing, and spreading happiness! With a fur coat
    that's as soft as a cloud, Roy is a bunny that knows how to
    have a good time. This fluffy friend is not just an expert at
    frolicking around; he's also a fan of kids and fruits. Whether
    it's a playful dash around the room or sharing a sweet treat,
    Roy is the perfect companion for fun-loving moments. Get ready
    for a hoppy adventure with Roy, the long-haired bunny with a
    heart for play and a taste for fruity delights!`,
  },
  {
    type: "rabbit",
    name: "Florentino",
    imageURL: "../assets/ourPets/rabbits/sandy-millar-qRB6rdYQ_8Q-unsplash.jpg",
    description: `Say hello to Florentino, the adorable and clever bunny that's
    as cute as can be! With floppy ears and a twitchy nose,
    Florentino is not just a fluffy ball of cuteness; he's also
    incredibly smart. This little bunny has a soft spot for
    humans, showering them with love and affection. Get ready to
    be charmed by Florentino's fuzzy antics and enjoy the
    delightful company of your new, smart bunny friend.`,
  },
];

const createAnimalCard = (animal) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${animal.imageURL}" class="card-img-top" alt="${animal.name}" />
  <div class="card-body">
    <h5 class="card-title">${animal.name}</h5>
    <p class="card-text">${animal.description}</p>
  </div>
  `;
  return div;
};

const petsCardSection = document.querySelector(".ourPets");

const renderAnimals = (animals) => {
  petsCardSection.innerHTML = "";
  for (const animal of animals) {
    const div = createAnimalCard(animal);
    petsCardSection.append(div);
  }
};

renderAnimals(pets);

const filter = (type) => {
  renderAnimals(pets.filter((pet) => pet.type === type));
};

const filterDogsButton = document.getElementById("filter-dogs");
filterDogsButton.addEventListener("click", () => filter("dog"));

const filterCatsButton = document.getElementById("filter-cats");
filterCatsButton.addEventListener("click", () => filter("cat"));

const filterTurtlesButton = document.getElementById("filter-turtles");
filterTurtlesButton.addEventListener("click", () => filter("turtle"));

const filterRabbitsButton = document.getElementById("filter-rabbits");
filterRabbitsButton.addEventListener("click", () => filter("rabbit"));

let sorted = false;
const sortByNameButton = document.getElementById("sort-by-name");
sortByNameButton.addEventListener("click", () => {
  renderAnimals(
    sorted
      ? pets.sort((a, b) => b.name.localeCompare(a.name))
      : pets.sort((a, b) => a.name.localeCompare(b.name))
  );
  sorted = !sorted;
});

document.getElementById("reset").addEventListener("click", () => {
  renderAnimals(pets);
});
