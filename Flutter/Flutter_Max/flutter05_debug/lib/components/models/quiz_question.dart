class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final shuffledList = List.of(answers); // copy a list
    //.shuffle yield nothing.
    shuffledList.shuffle(); // mutating
    return shuffledList;
  }
}
