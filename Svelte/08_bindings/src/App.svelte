<script>
  import CustomeInput from './CustomeInput.svelte'
  import Toggle from './Toggle.svelte'
  import { isValidEmail } from './Validation.js'
  // data
  let val = 'Max'
  let selectedOption = 1
  let price = 0
  let agreed
  let favColor = ''
  let singleFavColor = ''
  let usernameInput = ''
  let someDiv
  let CustomInput
  let enteredEmail = ''
  let formIsValid = false

  // dynamic expression
  $: console.log(val)
  $: console.log(selectedOption)
  $: console.log(price)
  $: console.log(agreed)
  $: console.log(favColor)
  $: console.log(singleFavColor)
  $: console.log(CustomInput)

  $: if (isValidEmail(enteredEmail)) {
    formIsValid = true
  } else {
    formIsValid = false
  }

  // function
  function setValue(event) {
    val = event.target.value
  }

  function saveData() {
    //   console.log(document.querySelector('#username').value)
    console.log(usernameInput.value)
    console.dir(someDiv)
    CustomInput.empty()
  }
</script>

<style scoped>
  .invalid {
    border: 1px solid red;
  }
</style>

<!-- <input type="text" value="{val}" on:input="{setValue}"> -->

<!-- Two way binding -->
<!-- <input type="text" bind:value={val}> -->
<p style="color: red">CustomeInput</p>
<CustomeInput bind:val bind:this={CustomInput} />
<p style="color: red">Toggle</p>
<Toggle bind:chosenOption={selectedOption} />
<!-- 
<input
  type="number"
  value={price}
  on:input={(event) => {
    console.log('1'+ event.target.value)
  }} 
  /> -->

<!-- automatic number conversion: two way binding -->
<input type="number" bind:value={price} />

<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms ?
</label>

<hr description="using radio" />
<h1>Favorite Color ?</h1>
<label>
  <input type="radio" value="red" name="color" bind:group={favColor} />
  Red
</label>
<label>
  <input type="radio" value="green" name="color" bind:group={favColor} />
  Green
</label>
<label>
  <input type="radio" value="blue" name="color" bind:group={favColor} />
  Blue
</label>

<hr description="using select" />
<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr description="using this" />
<input type="text" id="username" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>
<div bind:this={someDiv} />

<hr />

<form on:submit|preventDefault>
  <input
    type="email"
    bind:value={enteredEmail}
    class={isValidEmail(enteredEmail) ? '' : 'invalid'} />
  <button type="submit" disabled={!formIsValid}>Submit</button>
</form>
