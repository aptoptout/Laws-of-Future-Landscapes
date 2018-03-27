let currentQ = '00.01';

new Vue({
  el: '#app',
  data: {
    curr_question_title: ai_questions['07:30'].questions[currentQ].title,
    curr_question_text: ai_questions['07:30'].questions[currentQ].text,
    curr_question_answers: ai_questions['07:30'].questions[currentQ].answers,
    activeLiIndex: null
  },
  methods: {
    getNextQuestion: function() {
      let selected = document.getElementsByClassName("active")[0];
      if(selected != null) {
        currentQ = selected.dataset.next;
        this.curr_question_title = ai_questions['07:30'].questions[currentQ].title;
        this.curr_question_text = ai_questions['07:30'].questions[currentQ].text;
        this.curr_question_answers = ai_questions['07:30'].questions[currentQ].answers;
        selected.classList.remove("active");
        console.log(currentQ);
      } else {
        return;
      }
    }
  },
  components: {
    'answer-item': {
      props: ['answer', 'next', 'index', 'active'],
      template: '<div :class="{active : active}" @click.stop="toggleRowActive" :data-next="next">{{ answer }}</div>',
      methods: {
        toggleRowActive() {
          this.$emit('newactive', this.index);
        }
      }
    }
  }
})