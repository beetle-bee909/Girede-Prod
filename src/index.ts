export type HelloOptions = {
  name?: string;
};
/**
this is update
**/
/**
 * Returns a friendly greeting.
 */
export function hello(options: HelloOptions = {}): string {
  const who = options.name?.trim() || "world";
  return `Hello, ${who}!`;
}

export default hello;

