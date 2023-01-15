<script>
  import { tick } from 'svelte'
  import Product from './Product.svelte'
  import Modal from './Modal.svelte'

  let text = 'This is some dummy text '
  let products = [
    {
      id: 'p1',
      title: 'A book',
      price: 9.99,
    },
  ]

  let showModal = false
  let closeable = false

  function transform(event) {
    if (event.which !== 9) {
      return
    }
    event.preventDefault()
    const selectionStart = event.target.selectionStart
    const selectionEnd = event.target.selectionEnd
    const value = event.target.value

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd)

    tick().then(() => {
      event.target.selectionStart = selectionStart
      event.target.selectionEnd = selectionEnd
    })
  }

  function addToCart(event) {
    console.log(event)
  }

  function deleteProduct(event) {
    console.log(event.detail)
  }
</script>

{#each products as product}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal = !showModal)}>Show Modal</button>

{#if showModal}
  <Modal
    on:cancel={() => (showModal = !showModal)}
    on:close={() => (showModal = !showModal)}
    let:didAgree={closeable}>
    <h1 slot="header">Hello!</h1>
    <p>This works!</p>
    <button
      slot="footer"
      on:click={() => (showModal = !showModal)}
      disabled={!closeable}>
      Confirm
    </button>
  </Modal>
{/if}

<textarea rows="5" value={text} on:keydown={transform} />
