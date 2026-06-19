import { test } from "node:test";
import assert from "node:assert";
import { sumar, esPar } from "./index.js";

test("sumar 2 + 3 debe dar 5", () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test("esPar(4) debe dar true", () => {
  assert.strictEqual(esPar(4), true);
});

test("esPar(7) debe dar false", () => {
  assert.strictEqual(esPar(7), false);
});
