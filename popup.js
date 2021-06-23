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
  tags.forEach(tag => {

    let article = document.createElement(tag.tagName);
    article.classList.add(...tag.classes);

    let childElements = [];
    tag.child.forEach(childItem => {
      let element = document.createElement(childItem.tagName);
      childItem.classes.forEach(childClass => {
        element.classList.add(childClass);
      });
      element.textContent = childItem.value;
      element.href = childItem.attr;
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
