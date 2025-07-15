import "swiper/css/bundle"; // includes all Swiper styles
import Swiper from "swiper/bundle"; // includes all modules

import patronImage from "../assets/patron.png";
import halfAppleCinnamonCake from "../assets/half-apple-cinnamon.png";
import img1 from '../assets/bg-img-1.svg';

function AddBgImg() {
	let img = document.querySelector("#first-img");
	img.querySelector("img").src =img1;

	let images = document.querySelectorAll(".bg-img");
	
		images.forEach((img) => {
				img.style.display = "block";
	

		});

	

}

export const homeContent = () => {
	AddBgImg();
	let div = document.createElement("div");

	div.innerHTML = `<section id="home-section-one" class="section">
			<h2>Health Cakes <br />Healthy Minds</h2>

			<p>
				Our handcrafted treats are designed to delight your taste buds while
				providing sustained energy, mental clarity, and a sense of
				well-being
			</p>
		</section>

		<section id="home-section-two" class="section">
			<div>
				<h3>Our Journey</h3>

				<p>Bella, the founder of Healthy Cakes, Healthy Minds, has always
					had a deep love for sweets — especially cake. From childhood
					birthdays to cozy evenings in, dessert was her comfort and joy.
					But as she grew more mindful of her health and energy, she
					struggled with the guilt that came after indulging. Determined to
					find a better way, she began experimenting in her kitchen:
					swapping refined sugar for dates and bananas, white flour for
					oats and almonds. Slowly but surely, she crafted recipes that
					were both nourishing and delicious — cakes that fed both body and
					soul. </p>
					<p>
					Six months ago, Bella turned her passion into a purpose. She
					opened Healthy Cakes, Healthy Minds, a warm and welcoming
					breakfast spot where people can start their day with food that
					tastes indulgent but fuels wellness. Her mission is simple: to
					show that you don’t have to choose between health and happiness.
					Every cake on the menu is a small act of balance — sweet enough
					to feel like a treat, wholesome enough to feel like self-care.
				</p>
			</div>
		</section>

		<section id="home-section-three" class="section">
			<h3>Our Happy Patrons</h3>

			<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">	<div class="wrapper">
					<img class ="patron-img" src="${patronImage}" alt="Image of our client Anna "/>
					
				
        <blockquote>
				"I've been searching for delicious and truly healthy treats, and
				Breakfast Cakes absolutely delivers! As someone who's always on the
				go, their Apple Cinnamon Breakfast Cake and Almond Flour Protein
				Cake have become my absolute favorites. They're not just incredibly
				tasty; I genuinely feel more energized and focused throughout my
				mornings. It's amazing to enjoy a cake that actually helps me stay
				full, supports my workouts, and doesn't give me that dreaded sugar
				crash. Healthy Cakes has completely changed my breakfast routine for
				the better – and my mind feels clearer too!"  <span> --Anna</span> </blockquote> 

				</div></div>
    <div class="swiper-slide">	<div class="wrapper">
					<img class ="patron-img" src="${patronImage}" alt="Image of our client Anna "/>
					
				
        <blockquote>
				"I've been searching for delicious and truly healthy treats, and
				Breakfast Cakes absolutely delivers! As someone who's always on the
				go, their Apple Cinnamon Breakfast Cake and Almond Flour Protein
				Cake have become my absolute favorites. They're not just incredibly
				tasty; I genuinely feel more energized and focused throughout my
				mornings. It's amazing to enjoy a cake that actually helps me stay
				full, supports my workouts, and doesn't give me that dreaded sugar
				crash. Healthy Cakes has completely changed my breakfast routine for
				the better – and my mind feels clearer too!"  <span> --Anna</span> </blockquote> 

				</div></div>

				<div class="swiper-slide">	<div class="wrapper">
					<img class ="patron-img" src="${patronImage}" alt="Image of our client Anna "/>
					
				
        <blockquote>
				"I've been searching for delicious and truly healthy treats, and
				Breakfast Cakes absolutely delivers! As someone who's always on the
				go, their Apple Cinnamon Breakfast Cake and Almond Flour Protein
				Cake have become my absolute favorites. They're not just incredibly
				tasty; I genuinely feel more energized and focused throughout my
				mornings. It's amazing to enjoy a cake that actually helps me stay
				full, supports my workouts, and doesn't give me that dreaded sugar
				crash. Healthy Cakes has completely changed my breakfast routine for
				the better – and my mind feels clearer too!"  <span> --Anna</span> </blockquote> 

				</div></div>

				<div class="swiper-slide">	<div class="wrapper">
					<img class ="patron-img" src="${patronImage}" alt="Image of our client Anna "/>
					
				
        <blockquote>
				"I've been searching for delicious and truly healthy treats, and
				Breakfast Cakes absolutely delivers! As someone who's always on the
				go, their Apple Cinnamon Breakfast Cake and Almond Flour Protein
				Cake have become my absolute favorites. They're not just incredibly
				tasty; I genuinely feel more energized and focused throughout my
				mornings. It's amazing to enjoy a cake that actually helps me stay
				full, supports my workouts, and doesn't give me that dreaded sugar
				crash. Healthy Cakes has completely changed my breakfast routine for
				the better – and my mind feels clearer too!"  <span> --Anna</span> </blockquote> 

				</div></div>
    <div class="swiper-slide">	<div class="wrapper">
					<img class ="patron-img" src="${patronImage}" alt="Image of our client Anna "/>
					
				
        <blockquote>
				"I've been searching for delicious and truly healthy treats, and
				Breakfast Cakes absolutely delivers! As someone who's always on the
				go, their Apple Cinnamon Breakfast Cake and Almond Flour Protein
				Cake have become my absolute favorites. They're not just incredibly
				tasty; I genuinely feel more energized and focused throughout my
				mornings. It's amazing to enjoy a cake that actually helps me stay
				full, supports my workouts, and doesn't give me that dreaded sugar
				crash. Healthy Cakes has completely changed my breakfast routine for
				the better – and my mind feels clearer too!"  <span> --Anna</span> </blockquote> 

				</div></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

		
		</section>

		<section id ="home-section-four">
		
			<h3>Health Benefits</h3>
			<p>
				Each category for our menus is infused with nutritious benefits that
				ensures you have a healthy breakfast with joy!.
			</p>
		
		<div class="menu-category-wrapper"> 
		<div><img class="half-img"
		src="${halfAppleCinnamonCake}" alt=""/></div>

			<article>
				<p>
					Our whole grain cakes are a nourishing way to start your day.
					Made with hearty oats and wholesome flours, they offer:
				</p>
				<ul>
					<li>High fiber to support digestion and keep you satisfied</li>
					<li>Complex carbs for long-lasting, steady energy</li>
					<li>B vitamins that boost metabolism and brain health</li>
					<li>Better blood sugar control than refined flour options</li>
				</ul>
			</article></div></div>

		
  
		</section>`;

	requestAnimationFrame(() => {
		new Swiper(".mySwiper", {
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	});
	return div;
};
