export default class NoQuoterContextError extends Error {
  constructor() {
    super("Not quoter context found");
  }
}
