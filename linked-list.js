var parent = $("#section-2");

$('#enter-button').on('click', createCard);
$('#enter-button').on('click', deleteEntry)


function createCard(){
  event.preventDefault();
  console.log("hello")
  var websiteTitleInput =$("#website-title-input").val();
  var websiteUrlInput =$("#website-url-input").val();
  parent.prepend(`
    <ul id="website-list">
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
  </ul>
`);
}

function deleteEntry() {

}
 
     
        
