import { Pipe, Tuples, Objects, Unions, Call } from "hotscript";

export type FromTupleToObjectKeys<
  K extends readonly [...any[]] | [],
  CN extends readonly [string, ...string[]] | []
> = Pipe<
  Call<Tuples.Zip, Pipe<CN, [Tuples.ToUnion, Unions.ToTuple]>, K>,
  [Tuples.ToUnion, Objects.FromEntries]
>;
