var titleInput = $('.title-input');
var bodyInput = $('.body-input');
var saveBtn = $('.save-button');
var searchInput = $('.search-input');
var ul = $('ul');
var li = $('li');
var deleteBtn = $('.delete-button');
var bottomContainer = $('.bottom-container');
var upVote = $('.up-vote');
var downVote = $('.down-vote');
var ideasArray = [];

$(document).ready(function() {
  var ideas = parse()
  ideas.forEach(function(idea) {
    ideasArray.push(idea)
    ul.prepend(
      `<li>
        <div>
          <h3 contenteditable="true">${idea.titleInput}</h3>
          <button class="delete-button"><img></button>
          <p contenteditable="true">${idea.bodyInput}</p>
          <button class="up-vote"><img></button>
          <button class="down-vote"><img></button>
          <h5 class="quality">quality: swill</h5>
        </div>
      </li>`);
  })
});

function addIdeaData() {
  ideasArray.push({
    titleInput: titleInput.val(), 
    bodyInput: bodyInput.val(),
  });
}

saveBtn.on('click', function(e) {
  e.preventDefault();
  addIdeaData();
  stringify();
  ul.prepend(
    `<li>
      <div>
        <h3 contenteditable="true">${titleInput.val()}</h3>
        <button class="delete-button"><img></button>
        <p contenteditable="true">${bodyInput.val()}</p>
        <button class="up-vote"><img></button>
        <button class="down-vote"><img></button>
        <h5 class="quality">quality: swill</h5>
      </div>
    </li>`);
  titleInput.val('');
  bodyInput.val(''); 
});

function stringify(idea) {
  var stringifiedObject = JSON.stringify(ideasArray);
  console.log(stringifiedObject);
  localStorage.setItem("idea", stringifiedObject);
}

function parse(idea) {
  var retrievedObject = localStorage.getItem("idea");
  console.log(retrievedObject)
  var parsedItem = JSON.parse(retrievedObject);
  return parsedItem;
}


ul.on('keyup', changeIdea)
function changeIdea(event) {
 if (event.keyCode === 13){
  console.log('works'); 
  // addIdeaData();
  // stringify();
  // parse();
 }
}

//Use localStorage.removeItem method to delete idea from local storage





ul.on('click', function(e) {
  if (e.target.className === 'delete-button') { 
   $(e.target).parents('li').remove();
  }

});

ul.on('click', function(e) {
  // $(this).parent().css('background-color', 'red');
    return (e.target.className === 'up-vote') 
    ? $(e.target).nextAll('h5.quality').text('quality: plausible') : 
    $(e.target).nextAll('h5.quality').text('quality: swill') ? 
    (e.target.className === 'up-vote') :
    $(e.target).nextAll('h5.quality').text('quality: swill');
  //   console.log(qualityIdea.text('works')); 
  //   qualityIdea.text('swill');
  //   console.log('test');
  });

// })


