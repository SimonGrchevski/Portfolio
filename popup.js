let tags = [{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100"], [], [], ""),
    new Tag("section", ["img-info", "width100"], [], [], ""),
    new Tag("h2", ["img-info", "width100"], [], [], "Multi-Post Stories<br>Gain+Glory"),
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
    new Tag("section", ["img-info", "flex", "column"], [], [], ""),
    new Tag("h2", ["img-info", "width100"], [], [], "Multi-Post Stories<br>Gain+Glory"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "Ruby"),
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

  console.log(article);

  document.getElementById("test").append(article);
})
