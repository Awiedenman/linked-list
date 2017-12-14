var parent = $("#section-2");

$('#enter-button').on('click', function() {
  createCard();
  numberOfLinks();
  deleteEntry();
});

$('#section-1').on('input', '#website-title-input, #website-url-input', enableButton);
$('#section-2').on('click','.website-list-read-button', function() {
  readButton();
  changeBackground();
});

$('#section-2').on('click','#website-list-delete-button', function() { 
  $(this).closest('li').remove();
  numberOfLinks();
});


function createCard(){
  event.preventDefault();
  var websiteTitleInput =$("#website-title-input").val();
  var websiteUrlInput =$("#website-url-input").val();
  parent.prepend(`
    <li>
      <section class= list-title-box>
        <h2 id="website-list-title">${websiteTitleInput}</h2>
      </section>
      <section class=list-url-box>
        <a id="website-list-url" href="${websiteUrlInput}">${websiteUrlInput}</a>
      </section>
      <section>
        <button class="website-list-read-button">Read</button>
        <button id="website-list-delete-button" class= "background-on-read">Delete</button>
      </section>
    </li>  
`);
}

  function numberOfLinks() {
    $('#number-of-cards').text(+ $('.list-title-box').length);
  };

  function enableButton() {
    if ($('#website-title-input').val() == '' && $('#website-url-input').val() == '') {
      $('.enable-on-input').prop('disabled', true);
    } else if ($('#website-title-input').val() == '' || $('#website-url-input').val() == '') {
      $('.enable-on-input').prop('disabled', true);
    } else {
        $('.enable-on-input').prop('disabled', false);
    }
  };

  function deleteEntry() {
    $('#website-title-input').val('');
    $('#website-url-input').val('');
    $('.enable-on-input').prop('disabled', true);
    }
   
  function readButton() {
    $(event.target).toggleClass('website-list-red');
  }
    
  function changeBackground() {
    $(event.target.parentNode.parentNode).toggleClass('website-list-stlying-after-read');
  } 




 
     
        
