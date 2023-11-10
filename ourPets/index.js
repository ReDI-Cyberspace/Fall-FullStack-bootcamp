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

const petsCardSection = document.querySelector(".ourPetsRendered");

const renderAnimals = (animals) => {
  for (const animal of animals) {
    const div = createAnimalCard(animal);
    petsCardSection.append(div);
  }
};

renderAnimals(pets);
