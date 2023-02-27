<template>
  <div class="profile-single" :class="{ 'show-options': isOpen }" @click="isOpen = !isOpen">
    <span>{{ selectedOption ? selectedOption.label : 'Please select one' }}</span>
    <div class="triangle"></div>
    <ul class="options" v-show="isOpen">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

let selectedOption = null;
let isOpen = false;

const selectOption = (option) => {
  selectedOption = option;
  isOpen = false;
};
</script>

<style>
/* Style for the select box */
.profile-single {
  position: relative;
  width: 200px;
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  color: #333;
  border: none;
  outline: none;
}

/* Style for the triangle */
.profile-single .triangle {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%) rotate(135deg);
  transition: 0.3s ease;
  width: 10px;
  height: 10px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  background-color: #f2f2f2;
}

/* Style for the triangle when options are displayed */
.profile-single.show-options .triangle {
  transform: translateY(-50%) rotate(315deg);
  transition: 0.3s ease
}

/* Style for the options list */
.profile-single .options {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  padding: 0;
  background-color: #f2f2f2;
  list-style: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Style for the options list items */
.profile-single .options li {
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
}

/* Style for the selected option */
.profile-single span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
