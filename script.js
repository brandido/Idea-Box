var titleInput = $('.title-input');
var bodyInput = $('.body-input');
var saveBtn = $('.save-button');
var searchInput = $('.search-input');
var ul = $('ul')

// bodyInput.on('keyup')

var ideasArray = [];

function addIdeaData() {
  ideasArray.push({
    titleInput: titleInput.value, 
    bodyInput: bodyInput.value,
    // quality: quality.value
  });
}

saveBtn.on('click', function(e){
  e.preventDefault();
  addIdeaData();
  console.log('works');
  ul.append(`<li>
          <div>
            <h3>${titleInput.val()}</h3>
            <button class="delete-button"><img></button>
            <p>${bodyInput.val()}</p>
            <button class="up-vote"><img></button>
            <button class="down-vote"><img></button>
            <h5>quality: swill</h5>
          </div>
        </li>`);
  titleInput.val('');
  bodyInput.val(''); 
});






