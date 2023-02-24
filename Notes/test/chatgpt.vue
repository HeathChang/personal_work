<template>
  <div>
    <input v-model="question" type="text" placeholder="Ask a question...">
    <button @click="getAnswer">Submit</button>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      question: '',
      answer: ''
    }
  },
  methods: {
    async getAnswer() {
      const response = await axios.post(`https://api.openai.com/v1/engine/${ENGINE_ID}/completions`, {
        prompt: this.question,
        max_tokens: 100,
        n: 1,
        stop: ["\n"]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${<YOUR_API_KEY>}`
            }
            });
            this.answer = response.data.choices[0].text;
            }
            }
            }
</script>
