class ErrorDTO {
  constructor({code, message}) {
    this.raw = {code, message};
  }

  get code() {
    return this.raw.code;
  }

  get message() {
    return this.raw.message;
  }
}

export default ErrorDTO;
