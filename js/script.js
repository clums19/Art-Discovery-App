/*----- constants -----*/
let artistsData;
const $selectArtist = $('#selectArtist');
const $option = $('option');
const $submit = $('#submit');
const $btn = $('#btn');
const $artist = $('#name');
const $title = $('#title');
const $info = $('#info')
const $biography = $('#biography');
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/



function handleGetData(event){
    event.preventDefault(); 
    let artistText = $('select#selectArtist').val();
  
    // ) 
    // function data () {
    // if (value = '165157');
    // // return ()
    // console.log(artistText);


$.ajax({
  url: `https://openaccess-api.clevelandart.org/api/artworks/?&african_american_artists&limit=10&title=${artistText}`
})
    .then(function (data) {
    artistsData = data;
    render()
});
}
function render () {
    console.log(typeof artistsData)
    $artist.append(artistsData.collection);
    // function myFunction() {
    //     $option.value = "165157"
    //   }
}
$('form').on('submit', handleGetData);


// Dropdown Menu
// Click on the dropdown .on('click')
// Select an option on the drop down menu. Selector?
// Change to another option on the dropdowwn menu forEach ?
// create an on click function to create drop down button and inside of that funtion create the content in the main