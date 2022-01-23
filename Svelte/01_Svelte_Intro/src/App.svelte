<h1>Hello {name.toUpperCase()}, My age is {age + 1}</h1>
<button on:click="{incrementAge}"> Change Age</button>


<script>
	let name= 'heath';
	let age= 30;

	function incrementAge() {
		age += 1
	}
</script>


<style>
	h1 {
		color: purple;
	}
</style>
