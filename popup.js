let tags = [{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100", "height50"], [], [], ""),
    new Tag("section", ["img-info", "flex", "column", "height50"], [], [], ""),
    new Tag("h2", [], [], [], "Multi-Post Stories Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], ["#"], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
}];

function Tag(tagName, classes, attr, child, value) {
  this.tagName = tagName;
  this.classes = classes;
  this.attr = attr;
  this.child = child;
  this.value = value;
}

const cardContainer = document.querySelector(".card-container");

function generateCards() {

  let articles = [];
  let click = 1;
  tags.forEach((tag, i) => {

    let article = document.createElement(tag.tagName);
    article.classList.add(...tag.classes);

    let childElements = [];
    tag.child.forEach(childItem => {
      let element = document.createElement(childItem.tagName);
      childItem.classes.forEach(childClass => {
        element.classList.add(childClass);
      });

      element.href = "#";
      element.textContent = childItem.value;

      if (childItem.classes[0] === "btn-more")
        element.addEventListener('click', function () {
          display(i);

        });
      childElements.push(element);
    });

    article.append(childElements[0], childElements[1]);
    childElements[1].append(childElements[2], childElements[3], childElements[12]);

    for (let li = 4; li <= 10; li += 2) {
      childElements[li].append(childElements[li + 1]);
      childElements[3].append(childElements[li]);
    }
    articles.push(article);
  })
  return articles;
}

function populateCards(cards) {
  for (let i = 0; i < cards.length; ++i) {
    let li = document.createElement('li');
    li.append(cards[i]);
    cardContainer.append(li);
  }
}

let cards = generateCards();
populateCards(cards);


modal = {
  //maybe other type
  mModal: [],
  structure: [
    new Tag("section", ["modal-picture"], [], [], ""),
    new Tag("a", ["modal-close-button"], ["#"], "", "X"),
    // take the title h2
    // take the links
    new Tag("section", ["modal-info", "pd-tp-bt"], [], [], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit quis provident dicta qui sapiente aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit quis provident dicta qui sapiente aperiam  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit quis provident dicta qui sapiente aperiam "),
    new Tag("section", ["modal-buttons", "flex"], [], ""),
    new Tag("a", [], ["#"], "", "see live"),
    new Tag("a", [], ["#"], "", "see source")
  ],
  unOrder: [],

  fillModalElements() {
    let mainContain = new Tag("article", ["modal-container", "modal"], [], [], "");
    mModal = document.createElement(mainContain.tagName);
    mModal.classList.add(...mainContain.classes);
    this.unOrder.push(mModal);
    this.structure.forEach(elem => {
      let newElem = document.createElement(elem.tagName);
      newElem.classList.add(...elem.classes);
      newElem.textContent = elem.value;
      newElem.href = elem.attr;

      if (elem.classes[0] == "modal-close-button")
        newElem.addEventListener('click', function () {
          closeModal();
        })

      this.unOrder.push(newElem);
    })
  },

  getModalStructure(card) {


    this.unOrder[4].append(this.unOrder[5], this.unOrder[6]);



    if (document.querySelector('.welcome').style.display === 'none') {
      console.log('desktop');
      let h2buttons = document.createElement('div');
      h2buttons.append(card.querySelector('h2').cloneNode(true), this.unOrder[4]);
      this.unOrder[0].append(
        this.unOrder[2], this.unOrder[1], h2buttons,
        card.querySelector('ul').cloneNode(true), this.unOrder[3]);
    } else {
      console.log('mob');
      this.unOrder[1].append(this.unOrder[2]);
      this.unOrder[0].append(
        this.unOrder[1], card.querySelector('h2').cloneNode(true),
        card.querySelector('ul').cloneNode(true), this.unOrder[3], this.unOrder[4]);
    }


    // console.log('here');
    console.log(this.unOrder[0]);
    return this.unOrder[0];
  }

}

function display(cardId) {
  modal.fillModalElements();
  newModal = modal.getModalStructure(cards[cardId]);
  console.log(newModal);
  document.querySelector("main").append(newModal);
}

function closeModal() {
  let module = document.querySelector(".modal-container");
  module.remove();
  module.querySelectorAll("*").forEach(elem => {
    elem.remove();
  })
}