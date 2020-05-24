
const body = document.querySelector('body');
const footer = document.querySelector('footer');
changeTheme = ev => {
	body.classList.toggle('light-theme');
	footer.classList.toggle('light_footer');
	
};