#!/usr/bin/env node

function slugify(text) {
  if (typeof text !== 'string') {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .trim()
    // .replace(/\s+/g, '-')      // Replace spaces with -
    .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
    .replace(/\-\-+/g, '-');   // Replace multiple - with single -
}

// This block makes the script runnable as a CLI tool
if (require.main === module) {
  const inputText = process.argv.slice(2).join(' ');
  if (!inputText) {
    console.log('Usage: npx slugify-cli <some text to slugify>');
    process.exit(1);
  }
  console.log(slugify(inputText));
}

// Export the function so we can test it directly
module.exports = slugify;