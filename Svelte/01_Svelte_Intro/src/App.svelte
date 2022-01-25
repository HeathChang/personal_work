<h1>Hello {uppercaseName}, My age is {age + 1}</h1>
<button on:click="{incrementAge}"> Change Age</button>
<!-- <input type="text" value="{name}" on:input="{nameInput}"> -->
<input type="text" bind:value="{name}" >
<ConctactCard userName="{name}"/>

<script>
	import ConctactCard from './ConctactCard.svelte';

	let name= 'heath';
	let age= 30;

	// add dynamic calculation: 
	$: uppercaseName = name.toUpperCase();
	$: console.log(name)
	$: if (name === 'Jeffrey') { 
		console.log('Hello')
		age = 31
	}
	function nameInput(event){
		const enteredValue = event.target.value
		name = enteredValue
	}

	function incrementAge() {
		age += 1
	}
	
	function changeName() {
		name = 'Jeffrey'
	}
</script>


<style>
	h1 {
		color: purple;
	}
</style>
