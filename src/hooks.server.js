// Broken

import { sequence } from "@sveltejs/kit/hooks";

const seq1 = async ({ event, resolve }) => {
  return resolve(event);
};

export const handle = sequence(seq1);

// Working

// export const handle = async ({ event, resolve }) => {
//     return resolve(event);
//   };
