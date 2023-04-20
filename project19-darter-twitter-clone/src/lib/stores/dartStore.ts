import { writable } from "svelte/store";

const darts = writable<Array<Lib.Dart>>([]);

for (let i = 0; i < 10; i++) {
  const mockDart: Lib.Dart = {
    username: `User ${i}`,
    text: `This is mock dart number ${i}`,
    date: new Date(),
  };

  darts.update((dart) => [...dart, mockDart]);
}

export default {
  subscribe: darts.subscribe,
};
