$(document).ready(function(){	

	function addCase() {

		let nameCase = $('input').val(),
			descCase = $('textarea').val();

		if (nameCase.length !== 0 && descCase.length !== 0) {

			$('input').removeClass('error');
			$('textarea').removeClass('error');

			$('.forma-block').css({'height': '500px'});
			$('.name-newdelo').css({'padding': '30px 40px 30px 40px','color': 'red'});
			$('.list-zero').remove();
			$('.left').append(`

				<div class="addedCase"> 
					<div class="top">
						<div class="zagolovokCase">${nameCase}</div>
						<button class="krestik"></button>
					</div>
					<div class="addedCaseLine"></div>
					<div class="descriptionCase">${descCase}</div>
				</div>

			`);

			nameCase = $('input').val('');
			descCase = $('textarea').val('');
		}	else {
			$('input').addClass('error');
			$('textarea').addClass('error');
		}
	}	

	$('#button-add').on('click', addCase);
});












