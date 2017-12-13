var parent = $("#section-2");

$('#enter-button').on('click', createCard);
$('#enter-button').on('click', deleteEntry);
$('#section-1').on('input', '#website-title-input, #website-url-input', enableButton);
// $('#website-list-read-button').on('click', .website-list-read-button-after-read
$('#section-2').on('click','.website-list-read-button', readButton);
$('#section-2').on('click','#website-list-delete-button', removeBookmarkFromList);

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
        <button id="website-list-delete-button">Delete</button>
      </section>
    </li>  
`);
}

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

function removeBookmarkFromList() {
  if(event.target.id === 'website-list-delete-button') {
    $(this).closest('li').remove();
 };  
}
  function readButton() {
    $(event.target).toggleClass('website-list-red');
 };  


 
     
        
