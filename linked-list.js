var parent = $("#section-2");

$('#enter-button').on('click', createCard);
$('#enter-button').on('click', deleteEntry);

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
        <button id="website-list-read-button">Read</button>
        <button id="website-list-delete-button">Delete</button>
      </section>
    </li>  
`);
}

function deleteEntry() {
$('#website-title-input').val('');
$('#website-url-input').val('');
}

function removeBookmarkFromList() {
  console.log(event, "function");
  console.log(1);
  if(event.target.id === 'website-list-delete-button') {
    console.log('delete button');
    console.log(event);
    console.log("event.pageX: " + event.pageX);
    $(this).closest('li').remove();
  } else {
    console.log('section-2');
 };  
}

 
     
        
