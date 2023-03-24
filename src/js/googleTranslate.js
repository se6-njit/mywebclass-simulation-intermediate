// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor augue massa, ac maximus nibh dapibus vel. Nulla luctus, magna at pulvinar tincidunt, massa lacus iaculis risus, nec efficitur risus ex ac lectus. Quisque id lacus non velit aliquet ultrices. Morbi vel arcu varius, commodo nulla eu, luctus est. Donec efficitur, sapi';
const target = 'en';

async function translateText() {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();