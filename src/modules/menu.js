import appleCinnamonImg from "../assets/apple-cinnamon.png";
import bananaOatsCakeImg from "../assets/banana-bread.png";
import bananaBreadImg from "../assets/banana-bread.png";
import dateSweetenedCakeImg from "../assets/date-sweetened-cake.png";
import greekYogurtLemonCakeImg from "../assets/greek-yogurt-lemon-cake.png";
import almondFlourProteinCakeImg from "../assets/almond-flour-protein-cake.png";

function removeBgImg() {
	let images = document.querySelectorAll(".bg-img");

	images.forEach((img) => {
		if (img.id !== "last-img") {
			img.style.display = "none";
		}
	});
}

export const menuContent = () => {
	let div = document.createElement("div");

	removeBgImg();

	div.innerHTML = `	<section id ="menu-items-section">
						<div class="article-wrapper"> 
	<div class="whole-grain-cakes">

				<h2>Whole Grain Cakes</h2>

				<article>
					<div class="menu-img-wrapper">
						<img src="${appleCinnamonImg}" alt="" />
					</div>
					<h4>Apple Cinnamon Cake</h4>
					<p>
						Our Apple Cinnamon Cake brings the cozy flavors of autumn to
						your plate, anytime you need a delicious pick-me-up. Packed
						with real apples and warming cinnamon, this cake is designed
						to provide slow-release energy. The fiber from the apples
						contributes to satiety and digestive health, making it an
						excellent choice for a balanced breakfast or a post-workout
						treat that aids in recovery and keeps your energy levels
						steady.
					</p>
				</article>

				<article>
					<div class="menu-img-wrapper">
						<img src="${bananaOatsCakeImg}" alt="" />
					</div>
					<h4>Banana Oat Cake</h4>
					<p>
						Our Banana Oat Cake is a wholesome delight, perfect for
						starting your day right or as a pre-workout boost. Made with
						hearty oats and naturally sweet bananas, it offers sustained
						energy and a good source of fiber to keep you feeling full and
						satisfied. It's a comforting and nutritious choice that will
						help stabilize your blood sugar levels, preventing that
						mid-morning slump.
					</p>
				</article>
			</div>
			</div>

						<div class="article-wrapper"> 
			
			<div>

				<h2>Fruit Sweetened Cakes</h2>

				<article>
					<div class="menu-img-wrapper">
						<img src="${bananaBreadImg}" alt="" />
					</div>
					<h4>Banana Bread</h4>
					<p>
						Our Banana Bread is a beloved classic, reimagined for your
						healthy lifestyle. Crafted with ripe bananas for natural
						sweetness and moisture, it delivers quick, yet sustained
						energy. It's an excellent source of carbohydrates to replenish
						glycogen stores after a workout, and its wholesome ingredients
						help to keep you feeling energized without the sugar crash
						often associated with traditional baked goods.
					</p>
				</article>

				<article>
					<div class="menu-img-wrapper">
						<img src="${dateSweetenedCakeImg}" alt="" />
					</div>
					<h4>Date-Sweetened Cocoa Cake</h4>
					<p>
						Our Date-Sweetened Cocoa Cake indulges your chocolate cravings
						the healthy way. Naturally sweetened with nutrient-rich dates,
						this decadent cake provides a sustained energy release. The
						natural sugars from dates, combined with the antioxidants from
						cocoa, make this a guilt-free treat that supports your energy
						levels while satisfying your sweet tooth without compromising
						your health goals.
					</p>
				</article>
			</div>
			</div>

						<div class="article-wrapper"> 

			<div>
				<h2>High Protein Cakes</h2>
				<article>
					<div class="menu-img-wrapper">
						<img
						 src="${greekYogurtLemonCakeImg}" alt="" />
					</div>
					<h4>Greek Yogurt Lemon Cake</h4>
					<p>
						Our Greek Yogurt Lemon Cake is a refreshing and protein-packed
						option that's perfect for a light yet energizing start to your
						day or a post-workout recovery. The inclusion of Greek yogurt
						boosts the protein content, aiding in muscle repair and
						keeping you feeling fuller for longer. Its bright lemon flavor
						offers a delightful zest, making it a truly invigorating and
						satisfying treat that helps maintain steady blood sugar
					</p>
				</article>
				<article>
					<div class="menu-img-wrapper">
						<img src="${almondFlourProteinCakeImg}" alt="" />
					</div>
					<h4>Almond Flour Protein Cake</h4>
					<p>
						The Almond Flour Protein Cake is a powerhouse of nutrition
						designed for maximum energy and recovery. Made with almond
						flour, it's naturally high in protein and healthy fats,
						providing sustained energy and supporting muscle development.
						This cake is ideal for post-workout replenishment, helping to
						repair and build muscles while ensuring you stay fueled and
						satisfied throughout your morning without any energy dips.
					</p>
				</article>
			</div>
			</div>
		</section>`;

	return div;
};
