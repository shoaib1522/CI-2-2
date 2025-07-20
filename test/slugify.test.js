// test/slugify.test.js

const slugify = require('../slugify');

describe('slugify', () => {
  test('should convert basic text', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('should handle multiple spaces', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
  });

  test('should remove special characters', () => {
    expect(slugify('Hello World!@#$%^&*()')).toBe('hello-world');
  });

  test('should handle uppercase letters', () => {
    expect(slugify('I LOVE Node.js')).toBe('i-love-nodejs');
  });

  test('should handle empty string input', () => {
    expect(slugify('')).toBe('');
  });

  test('should handle non-string input gracefully', () => {
    expect(slugify(12345)).toBe('');
    expect(slugify(null)).toBe('');
  });
});