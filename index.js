/* import "./Gallery/styles.css"; */

const models = [
  {
    title:"Bodies",
    id:1,
    type:"object",
    imgUrl:"/Assets/javier-miranda-mIg0GL63lFk-unsplash.jpg"
  },
  {
    title:"Mandalorian helmet",
    id:2,
    type:"object",
    imgUrl:"/Assets/lekoarts-WyPFXoVrGx0-unsplash.jpg"
    /* getImageSrc: () => require("/Assets/0176.png"), */
  },
  {
    title:"Sunset",
    id:3,
    type:"scene",
    imgUrl:"/Assets/0176.png",
    /* img:<img src="./0176.png"/> */
    /* getImageSrc:require("/Assets/0176.png"), */
  },
  {
    title:"Wormhole",
    id:4,
    type:"scene",
    imgUrl:"/Assets/shubham-dhage-uKonPA2r3Xc-unsplash.jpg"
    /* getImageSrc:require("/Assets/0176.png"), */
  },
  {
    title:"Dimensions",
    id:5,
    type:"scene",
    /* getImageSrc: () => require("/Assets/0176.png"), */
    imgUrl:"/Assets/trent-pickering-gPe52XyVGhU-unsplash.jpg"
  },
  {
    title:"Passage",
    id:6,
    type:"scene",
    /* getImageSrc: () => require("/Assets/0176.png"), */
    imgUrl:"/Assets/sharath-kumar-hari-CaQYGwIGC3g-unsplash.jpg",
  },
  {
    title:"Purple Nebula",
    id:7,
    type:"abstract",
    /* getImageSrc: () => require("/Assets/0176.png"), */
    imgUrl:"/Assets/nebula.jpg",
  },
  {
    title:"Full Moon",
    id:8,
    type:"object",
    imgUrl:"/Assets/viktor-forgacs-FZtyDSI8wo0-unsplash.jpg",
  },
  {
    title:"Purple Flame",
    id:9,
    type:"abstract",
    imgUrl:"/Assets/Particle~3.png",
  },
  {
    title:"Portal Scene",
    id:10,
    type:"scene",
    imgUrl:"/Assets/scene2.png",
  },
  {
    title:"Flare Star",
    id:11,
    type:"abstract",
    imgUrl:"/Assets//simon-lee-vYsX30q0ARE-unsplash.jpg",
  },
  {
    title:"Somewhere Galaxy",
    id:12,
    type:"scene",
    imgUrl:"/Assets/javier-miranda-bDFP8PxzW1Q-unsplash.jpg",
  },
]

$(() => {
  $("#title").append(
    $("<h1></h1>").text("All"),
    $("<div>").addClass("btn-container")
  )
  $(".btn-container").append(
    $("<button></button>").addClass("btn-gl").text("3D Objects").attr("id", "objects").css({
      "margin": 6,
    }),
    $("<button></button>").addClass("btn-gl").text("Scenes").attr("id", "scenes").css({
      "margin": 6,
    }),
    $("<button></button>").addClass("btn-gl").text("Abstracts").attr("id", "abstracts").css({
      "margin": 6,
    }),
    $("<button></button>").addClass("btn-gl").text("Sort by name").attr("id", "name").css({
      "margin": 6,
    }),
  )
  $("#img-cont").append(
  $("<div>").addClass("img-card").css({
    display: "flex",/*  width: 1000, height: "900", */ "flex-flow": "row wrap", justifyContent: "center", alignItems: "center",
    /* flexDirection:"row", *//*  backgroundColor: "cyan", */
  })
  /* .height("auto").width("auto") */
  )

  const iterate = (modelsArray) => {
    $(".img-card").html("");
    modelsArray.map((model) => {
    $(".img-card").append(
    $("<div>").addClass("img-container").css({"margin": 2, "border":"1px solid black", "border-radius": 5, "padding": 2, alignItems: "center", "overflow": "hidden"}).height(280).width(200).append(
    $("<img>").addClass("img-3d").attr({
        "src": model.imgUrl,
        "type": model.type,
        "title": model.title,
        /* "width": 240,
        "height": 240, -doesn't work */
      }).height(180).width(200).css({"cursor": "pointer"}),
      $("<h6>").addClass("model-title").text(model.title).css({"font-weight":"bold", "margin-top": 10}),
      $("<p>").addClass("model-desc").text("Perferendis eos tempore amet illo. Sample title*")
    )
    )
  })
  }
  iterate(models);

  $("#objects").on("click", () => {
    const filteredObj = models.filter(model => model.type ==="object")
    iterate(filteredObj)
  })

  $("#scenes").on("click", () => {
    /* $(".img-card").html(""); */
    const filteredEnvi = models.filter(model => model.type ==="scene")
    /* .css( "border", "3px double red" ); */
    iterate(filteredEnvi)
    /* $(".img-card") *//* .toggle(); */
  })

  $("#abstracts").on("click", () => {
    const filteredAbs = models.filter(model => model.type ==="abstract")
    iterate(filteredAbs)
  })

  $("#name").on("click", () => {
    const sorted = models.toSorted((a, b)=> a.title.localeCompare(b.title))
    iterate(sorted)
  })

})

  /* $(".btn-gl").hover(
    function() {
    $( this ).css("background-color", "blue").css("color", "#fff")
  }) */