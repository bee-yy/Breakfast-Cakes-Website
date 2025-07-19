import locationsMap from "../assets/locations-map.png";
import locationIcon from "../assets/locationIcon.svg";
import locationImg1 from "../assets/locationPage-img1.svg";

function AddBgImg() {
	let images = document.querySelectorAll(".bg-img");

	images.forEach((img) => {
		if (img.id === "first-img") {
			console.log(locationImg1);

			img.querySelector("img").src = locationImg1;
		}
		img.style.display = "block";
	});
}

export const contactContent = () => {
	AddBgImg();
	let div = document.createElement("div");

	div.innerHTML = `<section  id= "contact-page-section"
	class="scroll-animate">
			<h2>We can be at your door step</h2>
			<p>
				Contact us for your delivery, pickup or just come right in to our
				aesthetically pleasing atmosphere that soothes your cravings. It’s
				guilt free pleasure!
			</p>
		</section>
		<section id = locations-section class="scroll-animate">
			<h4>Our Locations</h4>
			<div class ="locations-wrapper">
			<article>
				<!--  -->
				<div>
				
	
            <p> 	<img src="${locationIcon}" alt="" />
						Burnaby, BC <br>
Breakfast Cakes Burnaby 6530 Greenleaf Ave, Suite 102 Burnaby, BC V5H 3Z1</p>
				</div>
			</article>


      <article>
				<!--  -->
				<div>

	
	            <p> <img src="${locationIcon}" alt="" />
							
							Calgary, AB <br>
Breakfast  Cakes Calgary 817 Sage Meadows Blvd NW Calgary, AB T3P 0G3</p>
				</div>
			</article>


      <article>
				<!--  -->
				<div>
			
						
						
            <p> <img src="${locationIcon}" alt="" />
						Toronto, ON <br>
Breakfast  Cakes Toronto 229 Bloor Street West, Unit 5 Toronto, ON M5S 1T8</p>
				</div>
			</article>


      <article>
				<!--  -->
				<div >
						
						
            <p> <img src="${locationIcon}" alt="" /> Winnipeg, MB <br>
Breakfast  Cakes Winnipeg 1047 Pembina Hwy, Unit B Winnipeg, MB R3T 1Z6</p>
				</div>
			</article>
		</section>
		<section class="scroll-animate">
			<div class="map-wrapper">
	<img src="${locationsMap}" alt="locations map" />		
  	</div>

		</div>
		</section>`;

	return div;
};
