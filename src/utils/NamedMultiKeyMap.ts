import MultikeyMap from "multikey-map";
import { NTuple } from "@/types/types";

import { FromTupleToObjectKeys } from "@/types/functions";

export default class NamedMultiKeyMap<
  K extends NTuple<any>,
  V,
  CN extends NTuple<string>
> {
  //@ts-expect-error
  private multikeymap = new MultikeyMap<K, V>();
  constructor(public columnNames: CN) {}

  private fromObjectToTupleKeys(obKeys: FromTupleToObjectKeys<K, CN>): K {
    const ans: any[] = [];
    for (const key of this.columnNames) {
      ans.push((obKeys as any)[key]);
    }
    return ans as K;
  }

  get(keys: K | FromTupleToObjectKeys<K, CN>) {
    if (!Array.isArray(keys)) {
      keys = this.fromObjectToTupleKeys(
        keys as FromTupleToObjectKeys<K, CN>
      ) as K;
    }
    return this.multikeymap.get(keys as K);
  }

  set(keys: K | FromTupleToObjectKeys<K, CN>, value: V) {
    if (!Array.isArray(keys)) {
      keys = this.fromObjectToTupleKeys(
        keys as FromTupleToObjectKeys<K, CN>
      ) as K;
    }
    return this.multikeymap.set(keys as K, value);
  }

  has(keys: K | FromTupleToObjectKeys<K, CN>): boolean {
    if (!Array.isArray(keys)) {
      keys = this.fromObjectToTupleKeys(
        keys as FromTupleToObjectKeys<K, CN>
      ) as K;
    }
    return this.multikeymap.has(keys as K);
  }
}
