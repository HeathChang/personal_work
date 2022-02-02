<script>
import Product from './product.svelte'
import Modal from './Modal.svelte'
	let products = [
		{
			id: 'p1',
			title: 'A book2',
			price: '10.00'
		}
	]
	function addToCart(event){
		console.log(event);
	}
	function deleteProduct(event){
		console.log(event.detail);
	}
</script>

{#each products as product}
<!-- <Product title = "{product.title}" price="{product.price}" on:add-to-cart="{addToCart}" on:delete="{deleteProduct}" /> -->
<Product  {...product} on:add-to-cart="{addToCart}" on:delete="{deleteProduct}" />
{/each}

<Modal>
	<h1 slot="header">Hello World</h1>
	<p>This works really ! </p>
	<button slot="footer">Confirm</button>
</Modal>