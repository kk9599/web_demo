<template>
	<div>
	<div>this is the demo </div>
	<p>{{msg}}</p>
	<nav>
<ul>
<li>Good
<ul>
<li>Me</li>
<li>You</li>
<li>Them</li>
<li>Nobody</li>
</ul>
</li>
<li>User
<ul>
<li>Door Post</li>
<li>Wall hanging</li>
<li>Stair Banister</li>
<li>Washington</li>
</ul></li>
<li>Experience
<ul>
<li>CSS3</li>
<li>JavaScript</li>
<li>HTML5</li>
<li>SEO</li>
</ul></li>
<li>Design
<ul>
<li>Party</li>
<li>Dinner</li>
<li>Hike</li>
<li>Foo Camp</li>
</ul>
</li>
</ul>
</nav>	
	</div>
</template>
<script>
export default {
	name: 'demopage',
	data() {
		return {
			msg:'dddd'
		}
	}



}
</script>
<style>

div {
color: #ff0000;
border: 1px solid #00ff00;
border-radius: 0;
transform: scale(1) rotate(0deg);
opacity: 1;
box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
width: 50px;
padding: 100px;
}
div:hover {
color: #000000;
border: 5px dashed #000000;
border-radius: 50%;
transform: scale(2) rotate(-10deg);
opacity: 0.5;
box-shadow: -3px -3px rgba(255, 0, 0, 0.5);
width: 100px;
padding: 20px;
}
</style>