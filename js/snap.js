/**
 * @fileoverview Contains the main actions to hide or display the main menu and the sub-menu while the mobile version is running.
 * @author Daniel Martinez Duque
 * @date 2024-08-04
 */

(()=>{
	document.getElementById("mobile-close").addEventListener('click',closeMobileMenu,false);
	document.getElementById("header-hamburger").addEventListener('click',showMobileMenu,false);
	document.getElementById("featuresBt-mb").addEventListener('click',deploySubmenu,false);
	document.getElementById("companyBt-mb").addEventListener('click',deploySubmenu,false);
})()

/**
 * Hide the menu.
 */
function closeMobileMenu(){
	document.getElementById("mobile-nav").style.display ="none";
}

/**
 * Display the menu.
 */
function showMobileMenu(){
	document.getElementById("mobile-nav").style.display ="block";
}


/**
 * Deploys the Submenu.
 * @param {Event} event 
 */
function deploySubmenu(event){
	var originID = event.target.attributes["id"].value;
	
	if(originID == "featuresBt-mb"){
		
		if(document.getElementById("features-submenu-mb").style.display == "none"){
			document.getElementById("features-submenu-mb").style.display ="block";
			document.getElementById('featuresBt-mb').style.backgroundImage = "url('images/icon-arrow-up.svg')";
		}else{
			document.getElementById("features-submenu-mb").style.display ="none";
			document.getElementById('featuresBt-mb').style.backgroundImage = "url('images/icon-arrow-down.svg')";
		}
	}else{
		if(document.getElementById("company-submenu-mb").style.display == "none"){
			document.getElementById("company-submenu-mb").style.display ="block";
			document.getElementById("companyBt-mb").style.backgroundImage ="url('images/icon-arrow-up.svg')";
		}else{
			document.getElementById("company-submenu-mb").style.display ="none";
			document.getElementById("companyBt-mb").style.backgroundImage ="url('images/icon-arrow-down.svg')";
		}
	}
}