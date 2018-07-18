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
  ul.prepend(`<li>
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

ul.on('click', function(e) {
  if (e.target.className === 'delete-button') { 
   $(e.target).parents('li').remove();
  }

});

ul.on('click', function(e) {
  // $(this).parent().css('background-color', 'red');
    return (e.target.className === 'up-vote') 
    ? $(e.target).nextAll('h5.quality').text('quality: plausible') : 
    $(e.target).nextAll('h5.quality').text('quality: test1') ? 
    (e.target.className === 'up-vote') :
    $(e.target).nextAll('h5.quality').text('quality: swill');
  //   console.log(qualityIdea.text('works')); 
  //   qualityIdea.text('swill');
  //   console.log('test');
  });

// })


