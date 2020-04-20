$(document).ready(function(){	

	// function initialState() {
	// 	if (localStorage.getItem('comments') == null) {
	// 		$('.list-zero').show();
	// 	} else {
	// 		$('.list-zero').hide();
	// 		$('.left').html(localStorage.getItem('.comments'));
	// 	}
	// }

	// initialState();

	// function addToStorage() {
	// 	let content = $('.left').html();
	// 	console.log(content)

	// 	localStorage.setItem('comments', content);
	// }

	function addCase() {

		let nameCase = $('input').val(),
			descCase = $('textarea').val();

		if (nameCase.length !== 0 && descCase.length !== 0) {

			$('input').removeClass('error');
			$('textarea').removeClass('error');

			$('.forma-block').css({'height': '500px'});
			$('.name-newdelo').css({'padding': '30px 40px 30px 40px','color': 'red'});
			$('.list-zero').hide();
			$('.left').append(`
				<div class="addedCase"> 
					<div class="zagolovokCase">${nameCase}</div>
					<button class="krestik"></button>
					<button class="strelochka"></button>
					<div class="addedCaseLine"></div>
					<div class="descriptionCase">${descCase}</div>
				</div>
			`);

			nameCase = $('input').val('');
			descCase = $('textarea').val('');

			// addToStorage();
			
		}	else {
			$('input').addClass('error');
			$('textarea').addClass('error');
			}
	}	

	function removeCase(item) {
		item.remove();

		let items = $('.addedCase');

		// addToStorage();

		if (items.length == 0) {
			$('.list-zero').show();
		// 	localStorage.remove('comments')
		}

	}

	function hideDescr(item) {
		item.hide();
	}

	$('#button-add').on('click', addCase);

	$('body').on('click', '.krestik', function(event){
		event.preventDefault();

		let item = $(this).parents('.addedCase');

		removeCase(item);
	});

	$('body').on('click', '.strelochka', function(event){
		event.preventDefault();
		console.log(event);

		let item = $(this).parents('.descriptionCase');

		hideDescr(item);
	});
});












