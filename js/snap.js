/**
 * @fileoverview Contains the main actions to hide or display the main menu and sub-menu while the mobile version is active.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

/**
 * Displays or hide the Features or Company dropdown for the desktop version.
 * @param {Event} event - The button event that triggers the action.
 * @param {boolean} visible - Indicates whether the dropdown should be displayed or not.
 */
const showDesktopDropDown = (event, visible) => {
	const id = event.target.id;
	document.getElementById(`${id}Bt`).style.backgroundImage = visible ? 'url("../images/icon-arrow-up.svg")' : 'url("../images/icon-arrow-down.svg")';
	document.getElementById(`${id}Bt`).style.color = visible ? 'black' : 'hsl(0, 0%, 41%)';
	document.getElementById(`drop-${id}`).style.display = visible ? 'flex' : 'none';
}

/**
 * Displays or hide the Features or Company dropdown for the mobile version.
 * @param {Event} event - The button event that triggers the action.
 */
const showMobileDropDown = (event) => {
	const originID = event.target.attributes["id"].value;
	let visible;
	if (originID == "featuresBt-mb") {
		visible = document.getElementById("features-submenu-mb").style.display === "block";
		document.getElementById("features-submenu-mb").style.display = visible ? "none" : "block";
		document.getElementById('featuresBt-mb').style.backgroundImage = visible ? "url('images/icon-arrow-down.svg')" : "url('images/icon-arrow-up.svg')";
	} else {
		visible = document.getElementById("company-submenu-mb").style.display === "block";
		document.getElementById("company-submenu-mb").style.display = visible ? "none" : "block";
		document.getElementById('companyBt-mb').style.backgroundImage = visible ? "url('images/icon-arrow-down.svg')" : "url('images/icon-arrow-up.svg')";
	}
}

/**
 * Hides the mobile menu.
 */
const closeMobileMenu = () => {
	document.getElementById("mobile-nav").style.display = "none";
}

/**
 * Displays the mobile menu.
 */
const showMobileMenu = () => {
	document.getElementById("mobile-nav").style.display = "block";
}

(() => {
	document.getElementById("features").addEventListener('mouseenter', (event) => showDesktopDropDown(event, true), false);
	document.getElementById("company").addEventListener('mouseenter', (event) => showDesktopDropDown(event, true), false);

	document.getElementById("features").addEventListener('mouseleave', (event) => showDesktopDropDown(event, false), false);
	document.getElementById("company").addEventListener('mouseleave', (event) => showDesktopDropDown(event, false), false);

	document.getElementById("mobile-close").addEventListener('click', closeMobileMenu, false);
	document.getElementById("header-hamburger").addEventListener('click', showMobileMenu, false);

	document.getElementById("featuresBt-mb").addEventListener('click', showMobileDropDown, false);
	document.getElementById("companyBt-mb").addEventListener('click', showMobileDropDown, false);
})()