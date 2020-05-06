$(document).ready(function(){	

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
					<div class=addedCase-top>
						<div class="zagolovokCase">${nameCase}</div>
						<button class="krestik"></button>
						<button class="strelochka"></button>
						<div class="addedCaseLine"></div>
					</div>
					<div class=addedCase-bottom>
						<div class="descriptionCase">${descCase}</div>
					</div>
				</div>
			`);

			nameCase = $('input').val('');
			descCase = $('textarea').val('');
			
		}	else {
			$('input').addClass('error');
			$('textarea').addClass('error');
			}
	}	

	function removeCase(item) {
		item.remove();

		let items = $('.addedCase');

		if (items.length == 0) {
			$('.list-zero').show();
		}
	}

	function hideDescr(item) {
		item.slideToggle();
	}

	$('#button-add').on('click', addCase);

	$('body').on('click', '.krestik', function(event){
		event.preventDefault();

		let item = $(this).parents('.addedCase');

		removeCase(item);

	});

	$('body').on('click', '.strelochka', function(event){
		event.preventDefault();



		let item = $(this).parents('.addedCase').find('.addedCase-bottom');

		hideDescr(item);

		let transform = $(this);
		transform.toggleClass('rotate');

	});

});












