let tags = [{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100"], [], [], ""),
    new Tag("section", ["img-info", "width100"], [], [], ""),
    new Tag("h2", ["img-info", "width100"], [], [], "O"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
},
{
  tagName: "article",
  classes: ["card", "flex", "column", "width100"],
  attr: [""],
  child: [
    new Tag("div", ["card-image", "width100"], [], [], ""),
    new Tag("section", ["img-info", "width100"], [], [], ""),
    new Tag("h2", ["img-info", "width100"], [], [], "P"),
    new Tag("ul", ["flex", "ul-skills"], [], [], ""),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "Ruby"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "CSS"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "JavaScript"),
    new Tag("li", [], [], [], ""),
    new Tag("a", [], [], [], "html"),
    new Tag("a", ["btn-more"], [], [], "See Project")
  ],
  value: [""]
}];

tags.forEach(tag => {

  let article = document.createElement(tag.tagName);
  article.classList.add(...tag.classes);


  let childElements = [];
  tag.child.forEach(childItem => {
    let element = document.createElement(childItem.tagName);
    childItem.classes.forEach(childClass => {
      element.classList.add(childClass);
    });
    childElements.push(element);
  });


  console.log(childElements[2]);
  childElements[1].append(childElements[2], childElements[3]);
  article.append(childElements[1]);
  // console.log(article);

  //article.append(childElements[0]);
  //console.log(childElements[0]);
  //console.log(childElements[0]);
  // console.log(tag);

  document.getElementById("test").append(article);
})


/*
  < article class="card flex column width100" >

  <div class="card-image width100 height50"></div>

  <section class="img-info flex column height50">
    <h2>Multi-Post Stories<br>Gain+Glory</h2>
      <ul class="flex ul-skills">
        <li><a href="#">Ruby</a></li>
        <li><a href="#">Css</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">html</a></li>
      </ul>
    <a href="#" class="btn-more">See Project</a>
  </section>

        </article>
*/
function Tag(tagName, classes, attr, child, value) {
  this.tagName = tagName;
  this.classes = classes;
  this.attr = attr;
  this.child = child;
  this.value = value;
}



/*


tag = {
  ownTag: v;
  classes: [];
  childrenTags =[
    tag {
      ownTag: v;
      classes =[];
      childrenTags[];
      ownValue: oV;
    }
  ]
      ownValue: oV;
}
          let article = {
            ownTag: article,
            classes: [card,flex,column],
            childrens = [
              div{
                ownTag: div,
                classes: [card-image, width100,height50],
                childrens = [

                ]
              }
            ],
            ownValue
          }

          let tag = {
            ownTag: tag,
            classes: [],
            childrens: [tag,tag],
            ownValue;
          }


        let tag = {
          ownTag: str;
          classes: [str,str];
          atr:[str,str];
          chidlrens[tag,tag];
          Value: "str";
        }

        card1 = New.card();

        generateCard(tag)
        {
          card1.appendChild(str);
          str.classList.add(classes);
          str.addAttr(atr);
          for elem in tag[childrens]
            generateCard(tag);
            if(tag.Value != "")
              tag.value = value;
        }


         <article class="card flex column width100">

          <div class="card-image width100 height50"></div>

          <section class="img-info flex column height50">
            <h2>Multi-Post Stories<br>Gain+Glory</h2>
            <ul class="flex ul-skills">
              <li><a href="#">Ruby</a></li>
              <li><a href="#">Css</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">html</a></li>
            </ul>
            <a href="#" class="btn-more">See Project</a>
          </section>

        </article>
*/

/*
   mark all unnested elements with a sign
    Add all unnested elemnts starting with the article as Container


    tag = {
      ownTag: v;
      classes:[];
      childrenTags = [
        tag {
          ownTag: v;
          classes =[];
          childrenTags[];
          ownValue: oV;
        }
      ]
      ownValue: oV;
    }


    function compileCard(tag)
    {
      let card; // card should be global.
      card.append(tag.ownTag);
      card.classList.add(classes);
      for tag in tags
        compileCard(tag);
        tag.append(ownValue);
    }
*/
