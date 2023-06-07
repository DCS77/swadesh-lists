# Swadesh Lists

Easily incorporate Swadesh vocabulary lists for each language into your project.

Vocabulary has been copied from the [Swadesh lists by language](https://en.wiktionary.org/wiki/Category:Swadesh_lists_by_language) on [Wiktionary](https://en.wiktionary.org). Just over 40% of languages listed there have been added to this project so far.

## Usage

```js
import {
  getLanguageList,
  getWordDetails,
  getWordProperties,
  Language,
  WordDetails,
  WORD_LIST_SIZE,
} from "@languagevocab/swadesh-lists";

const spanishList = getLanguageList(Language.SPANISH);

const firstJapaneseWordDetails = getWordDetails(Language.JAPANESE, 0);

const lastFrenchWordDetails = getWordDetails(
  Language.FRENCH,
  WORD_LIST_SIZE - 1
);
```
