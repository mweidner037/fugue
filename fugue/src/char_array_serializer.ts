import { Serializer, StringSerializer } from "@collabs/core";

export const charArraySerializer: Serializer<string[]> = {
  serialize(value) {
    return StringSerializer.instance.serialize(value.join(""));
  },

  deserialize(message) {
    return [...StringSerializer.instance.deserialize(message)];
  },
} as const;
