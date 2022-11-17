const mobileMenu = document.getElementById('mobile_topnav');
const openButton = document.getElementById('mobile_topnav__button_open');
const closeButton = document.getElementById('mobile_topnav__button_close');

if (mobileMenu !== null && openButton !== null) {
	openButton.addEventListener('click', (e) => {
		mobileMenu.classList.remove('hidden');
	});
}

if (mobileMenu !== null && closeButton !== null) {
	closeButton.addEventListener('click', (e) => {
		mobileMenu.classList.add('hidden');
	});
}
