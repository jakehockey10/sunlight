$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
});

$( "#districts" ).on( "click", function( event ) {
    districts.load()
});

// TODO: add loaders for more features

$('#nominations').on('click', function (event) {
    nominations.load()
});
$('#bills').on('click', function(event) {
	bills.load()
})
