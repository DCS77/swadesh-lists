import { Language } from "./types";
import { LanguageLists } from "./languages";
import type { WordDetails } from "./types";

export const WORD_LIST_SIZE = 207;

export function getLanguageList(language: Language): WordDetails[] | undefined {
  return LanguageLists.get(language);
}

export function getWordDetails(
  language: Language,
  index: number
): WordDetails | undefined {
  const languageList = LanguageLists.get(language);

  if (!languageList || languageList.length < index) {
    return undefined;
  }

  return languageList[index];
}

export { Language, WordDetails };
