var menu = new MmenuLight(
	document.querySelector('#menu-mobile'),
	'all'
);
var navigator = menu.navigation({
	// selectedClass: 'Selected',
	// slidingSubmenus: true,
	// theme: 'dark',
	// title: 'Menu'
});
var drawer = menu.offcanvas({
	// position: 'left'
});
//	Open the menu.
document.querySelector('a[href="#menu-mobile"]')
	.addEventListener('click', evnt => {
		evnt.preventDefault();
		drawer.open();
	});