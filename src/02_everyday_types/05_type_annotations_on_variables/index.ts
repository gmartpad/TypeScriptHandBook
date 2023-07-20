// When you declare a variable using const, var or let, you can iptionaly add a
// type annotaition to explicitly especify the type of the variable:

let myName: string = "Alice";

/**
 * TypeScript doesn't use "types on the left"-style declarations like int x = 0;
 * Type annotations will always go after the thing being types.
 */

// In most cases, though, this isn't needed. Wherever possible, TypeScript tries
// to automatically infer the types in your code. For example, the type of a
// variable is inferred based on the type of its initializer:

// No type annotation needed -- 'myOtherName' inferred as type 'string'
let myOtherName = "Alice";

// For the most part you dont need to explicitly learn the rules of inference.
// If you're starting out, try using fewer type annotations than you think
// you might be surprised how few you need for TypeScript to fully understand
// what's going on.