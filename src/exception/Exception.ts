export class Exception extends Error {
  public constructor(message: string) {
    super(message);
  }
}

export class IndexOutOfBoundsException extends Exception {}

export class NoSuchElementException extends Exception {}
