import "./css/styles.css";
import { homeContent } from "./modules/home";
import { menuContent } from "./modules/menu";
import { contactContent } from "./modules/contact";

//global

let mainContainer = document.querySelector(".container");
// function
function tabSwitch(e) {
	// clear current content for main-container
	mainContainer.innerHTML = "";
	let page = e.target.id;

	switch (page) {
		case "home-nav":
			console.log("Home Page");
			let content = mainContainer.append(homeContent());
			break;

		case "menu-nav":
			console.log("Menu Items Page");
			mainContainer.append(menuContent());

			break;

		case "contact-nav":
			console.log("Contact Page");
			
			mainContainer.append(contactContent());
			break;

		default:
			break;
	}
}

// add event listener to buttons
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => button.addEventListener("click", tabSwitch));

document.addEventListener("DOMContentLoaded", () => {
	mainContainer.append(homeContent());
});

//tab switching
