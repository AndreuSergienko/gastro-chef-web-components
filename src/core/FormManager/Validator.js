export class Validator {
  static email(message) {
    return (value) => {
      const regExp = /^(.+)@(.+)$/g;
      if (!regExp.test(value)) {
        return {
          message,
        };
      }

      return {};
    };
  }

  static phone(message) {
    return (value) => {
      const regExp = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;
      if (!regExp.test(value)) {
        return {
          message,
        };
      }

      return {};
    };
  }

  static password(message) {
    return (value) => {
      if (value.length < 7) {
        return {
          message,
        };
      }

      return {};
    };
  }

  static required(message) {
    return (value) => {
      if (value === '') {
        return {
          message,
        };
      }

      return {};
    };
  }
}