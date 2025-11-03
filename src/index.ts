export type HelloOptions = {
  name?: string;
};

/**
 * Returns a friendly greeting
 */
export function hello(options: HelloOptions = {}): string {
  const who = options.name?.trim() || "world";
  return `Hello, ${who}!`;
}

export default hello;

