export default class Validator {
  validateUsername(userName) {
    const basicValidation = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
    const noMoreThan3Numbers = /\d{4}/;

    if (basicValidation.test(userName)) {
      return !noMoreThan3Numbers.test(userName);
    }
    return false;
  }
}