/*----- constants -----*/
let artistsData;
const $selectArtist = $('#selectArtist');
const $submit = $('#submit');
const $artist = $('#name');
const $title = $('#title');
const $facts = $('#facts');
/*----- app's state (variables) -----*/
/*----- cached element references -----*/

$("#jacob").wrap("<a target='_blank' href='https://clevelandart.org/art/2007.158'></a>")
$("#aaron").wrap("<a target='_blank' href='https://clevelandart.org/art/2005.181'></a>")
$("#rob").wrap("<a target='_blank' href='https://clevelandart.org/art/2014.12'></a>")
$("#edomina").wrap("<a target='_blank' href='https://clevelandart.org/art/2011.110'></a>")
$("#simone").wrap("<a target='_blank' href='https://clevelandart.org/art/2019.175'></a>")
$("#savage").wrap("<a target='_blank' href='https://clevelandart.org/art/2003.40'></a>")
$("#lewis").wrap("<a target='_blank' href='https://clevelandart.org/art/2017.1'></a>")
$("#puryear").wrap("<a target='_blank' href='https://clevelandart.org/art/2002.65'></a>")
$("#cole").wrap("<a target='_blank' href='https://clevelandart.org/art/2017.128'></a>")
$("#sallee").wrap("<a target='_blank' href='https://clevelandart.org/art/2006.202'></a>")


/*----- event listeners -----*/
/*----- functions -----*/

function render () {
    console.log(artistsData)
    $artist.html(artistsData.data[0].creators[0].description);
    $title.html(artistsData.data[0].title);
    $facts.html(artistsData.data[0].wall_description);
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