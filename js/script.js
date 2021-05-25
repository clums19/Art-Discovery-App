/*----- constants -----*/
let artistsData;
const $selectArtist = $('#selectArtist');
const $submit = $('#submit');
const $artist = $('#name');
const $title = $('#title');
const $info = $('#info');
const $facts = $('#facts');
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

function render () {
    console.log(artistsData)
    $artist.append(artistsData.data[0].creators[0].description);
    $title.append(artistsData.data[0].title);
    $info.append(artistsData.data[0].url)
    $facts.append(artistsData.data[0].wall_description)
}


function handleGetData(event){
    event.preventDefault(); 
    let artistText = $('select#selectArtist').val();

$.ajax({
  url: `https://openaccess-api.clevelandart.org/api/artworks/?&african_american_artists&limit=10&title=${artistText}`
})
    .then(function (data) {
    artistsData = data;
    render()
});

}

$('form').on('submit', handleGetData);



// Dropdown Menu
// Click on the dropdown .on('click')
// Select an option on the drop down menu. Selector?
// Change to another option on the dropdowwn menu forEach ?
// create an on click function to create drop down button and inside of that funtion create the content in the main