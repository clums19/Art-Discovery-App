/*----- constants -----*/
const $selectArtist = $('#selectArtist');
const $option = $('option');
const $submit = $('#submit');
const $btn = $('#btn');
let artistsData;
const $biography = $('#biography');
// console.log($selectArtist);
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

function render () {
    $option.text(artistsData["id"]);
    console.log(artistsData)
    // function data () {
    //     document.$('165157').addEventListener('click')
    //     }

}

function handleGetData(event){
    event.preventDefault(); 
    // $selectArtist.val();
    let artistText = $('select#selectArtist').val()
    console.log(artistText);

$.ajax({
  url: `https://openaccess-api.clevelandart.org/api/artworks/?&african_american_artists&limit=10&t=${artistText}`
})
    .then(function (data) {
    // console.log(data);
    // displayArtists(data);
    artistsData = data;
    // console.log(artists);
    render()
},
    function displayArtists (data) {
        const artists = data.artist[0];
        console.log(artists)
        // console.log("bad request: ", error);
      }
);
}
$('form').on('submit', handleGetData);

// $('#btn').on ('click', function() {
//     event.preventDefault(); 
//     // console.log(artists);
// })
// let choices = artists.filter(function (artists) {return artists === artists.creators[1]})

// console.log(artists)s




// Dropdown Menu
// Click on the dropdown .on('click')
// Select an option on the drop down menu. Selector?
// Change to another option on the dropdowwn menu forEach ?
// create an on click function to create drop down button and inside of that funtion create the content in the main