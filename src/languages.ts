import { Language, WordDetails } from "./types";

import { AfrikaansList } from "./languages/afrikaans";
import { AlbanianList } from "./languages/albanian";
import { AncientGreekList } from "./languages/ancient-greek";
import { ArabicEgyptianList } from "./languages/arabic-egyptian";
import { ArabicMoroccanList } from "./languages/arabic-moroccan";
import { ArabicList } from "./languages/arabic";
import { ArmenianList } from "./languages/armenian";
import { BengaliList } from "./languages/bengali";
import { BurmeseList } from "./languages/burmese";
import { CantoneseList } from "./languages/cantonese";
import { CebuanoList } from "./languages/cebuano";
import { CzechList } from "./languages/czech";
import { DanishList } from "./languages/danish";
import { DutchList } from "./languages/dutch";
import { EnglishList } from "./languages/english";
import { EsperantoList } from "./languages/esperanto";
import { EstonianList } from "./languages/estonian";
import { FinnishList } from "./languages/finnish";
import { FrenchList } from "./languages/french";
import { GeorgianList } from "./languages/georgian";
import { GermanList } from "./languages/german";
import { GreekList } from "./languages/greek";
import { HawaiianList } from "./languages/hawaiian";
import { HebrewModernList } from "./languages/hebrew-modern";
import { HindiList } from "./languages/hindi";
import { HungarianList } from "./languages/hungarian";
import { IcelandicList } from "./languages/icelandic";
import { IlocanoList } from "./languages/ilocano";
import { IndonesianList } from "./languages/indonesian";
import { IrishList } from "./languages/irish";
import { ItalianList } from "./languages/italian";
import { JapaneseList } from "./languages/japanese";
import { JavaneseList } from "./languages/javanese";
import { KazakhList } from "./languages/kazakh";
import { KhmerList } from "./languages/khmer";
import { KoreanList } from "./languages/korean";
import { LatinList } from "./languages/latin";
import { LatvianList } from "./languages/latvian";
import { LithuanianList } from "./languages/lithuanian";
import { MacedonianList } from "./languages/macedonian";
import { MandarinNanjingneseList } from "./languages/mandarin-nanjingnese";
import { MandarinSichuaneseList } from "./languages/mandarin-sichuanese";
import { MandarinStandardList } from "./languages/mandarin-standard";
import { MongolianList } from "./languages/mongolian";
import { NepaliList } from "./languages/nepali";
import { PersianList } from "./languages/persian";
import { PolishList } from "./languages/polish";
import { PortugueseBrazilianList } from "./languages/portuguese-brazilian";
import { PortugueseEuropeanList } from "./languages/portuguese-european";
import { PunjabiList } from "./languages/punjabi";
import { RomanianList } from "./languages/romanian";
import { RussianList } from "./languages/russian";
import { SlovakList } from "./languages/slovak";
import { SpanishList } from "./languages/spanish";
import { SwahiliList } from "./languages/swahili";
import { SwedishList } from "./languages/swedish";
import { TagalogList } from "./languages/tagalog";
import { ThaiList } from "./languages/thai";
import { TurkishList } from "./languages/turkish";
import { UkrainianList } from "./languages/ukrainian";
import { UrduList } from "./languages/urdu";
import { UyghurList } from "./languages/uyghur";
import { UzbekList } from "./languages/uzbek";
import { VietnameseList } from "./languages/vietnamese";
import { WelshList } from "./languages/welsh";
import { ZuluList } from "./languages/zulu";

export const LanguageLists = new Map<Language, WordDetails[]>([
  [Language.AFRIKAANS, AfrikaansList],
  [Language.ALBANIAN, AlbanianList],
  [Language.ANCIENT_GREEK, AncientGreekList],
  [Language.ARABIC_EGYPTIAN, ArabicEgyptianList],
  [Language.ARABIC_MOROCCAN, ArabicMoroccanList],
  [Language.ARABIC, ArabicList],
  [Language.ARMENIAN, ArmenianList],
  [Language.BENGALI, BengaliList],
  [Language.BURMESE, BurmeseList],
  [Language.CANTONESE, CantoneseList],
  [Language.CEBUANO, CebuanoList],
  [Language.CZECH, CzechList],
  [Language.DANISH, DanishList],
  [Language.DUTCH, DutchList],
  [Language.ENGLISH, EnglishList],
  [Language.ESPERANTO, EsperantoList],
  [Language.ESTONIAN, EstonianList],
  [Language.FINNISH, FinnishList],
  [Language.FRENCH, FrenchList],
  [Language.GEORGIAN, GeorgianList],
  [Language.GERMAN, GermanList],
  [Language.GREEK, GreekList],
  [Language.HAWAIIAN, HawaiianList],
  [Language.HEBREW_MODERN, HebrewModernList],
  [Language.HINDI, HindiList],
  [Language.HUNGARIAN, HungarianList],
  [Language.ICELANDIC, IcelandicList],
  [Language.ILOCANO, IlocanoList],
  [Language.INDONESIAN, IndonesianList],
  [Language.IRISH, IrishList],
  [Language.ITALIAN, ItalianList],
  [Language.JAPANESE, JapaneseList],
  [Language.JAVANESE, JavaneseList],
  [Language.KAZAKH, KazakhList],
  [Language.KHMER, KhmerList],
  [Language.KOREAN, KoreanList],
  [Language.LATIN, LatinList],
  [Language.LITHUANIAN, LithuanianList],
  [Language.LATIN, LatvianList],
  [Language.MACEDONIAN, MacedonianList],
  [Language.MANDARIN_NANJINGNESE, MandarinNanjingneseList],
  [Language.MANDARIN_SICHUANESE, MandarinSichuaneseList],
  [Language.MANDARIN_STANDARD, MandarinStandardList],
  [Language.MONGOLIAN, MongolianList],
  [Language.NEPALI, NepaliList],
  [Language.PERSIAN, PersianList],
  [Language.POLISH, PolishList],
  [Language.PORTUGUESE_BRAZILIAN, PortugueseBrazilianList],
  [Language.PORTUGUESE_EUROPEAN, PortugueseEuropeanList],
  [Language.PUNJABI, PunjabiList],
  [Language.ROMANIAN, RomanianList],
  [Language.RUSSIAN, RussianList],
  [Language.SLOVAK, SlovakList],
  [Language.SPANISH, SpanishList],
  [Language.SWAHILI, SwahiliList],
  [Language.SWEDISH, SwedishList],
  [Language.TAGALOG, TagalogList],
  [Language.THAI, ThaiList],
  [Language.TURKISH, TurkishList],
  [Language.UKRAINIAN, UkrainianList],
  [Language.URDU, UrduList],
  [Language.UYGHUR, UyghurList],
  [Language.UZBEK, UzbekList],
  [Language.VIETNAMESE, VietnameseList],
  [Language.WELSH, WelshList],
  [Language.ZULU, ZuluList],
]);
