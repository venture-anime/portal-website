import ren from "Assets/images/character/ren.jpg";
import mayu from "Assets/images/character/mayu.jpg";
import dan from "Assets/images/character/dan.jpg";
import lucas from "Assets/images/character/lucas.jpg";
import mikaela from "Assets/images/character/mikaela.jpg";
import hiro from "Assets/images/character/hiro.jpg";
import chloe from "Assets/images/character/chloe.jpg";
import meiko from "Assets/images/character/meiko.jpg";
import sanosuke from "Assets/images/character/sanosuke.jpg";

const CHARACTER_ID_REN = "ren";
const CHARACTER_ID_MAYU = "mayu";
const CHARACTER_ID_DAN = "dan";
const CHARACTER_ID_LUCAS = "lucas";
const CHARACTER_ID_MIKAELA = "mikaela";
const CHARACTER_ID_HIRO = "hiro";
const CHARACTER_ID_CHLOE = "chloe";
const CHARACTER_ID_MEIKO = "meiko";
const CHARACTER_ID_SANOSUKE = "sanosuke";

export const CHARACTER_IMAGES = {
    [CHARACTER_ID_REN]: ren,
    [CHARACTER_ID_MAYU]: mayu,
    [CHARACTER_ID_DAN]: dan,
    [CHARACTER_ID_MIKAELA]: mikaela,
    [CHARACTER_ID_LUCAS]: lucas,
    [CHARACTER_ID_HIRO]: hiro,
    [CHARACTER_ID_CHLOE]: chloe,
    [CHARACTER_ID_MEIKO]: meiko,
    [CHARACTER_ID_SANOSUKE]: sanosuke,
};

export const CHARACTER_VOICE = {
    [CHARACTER_ID_REN]: "cast.tazaki",
    [CHARACTER_ID_MAYU]: "cast.unset",
    [CHARACTER_ID_DAN]: "cast.akiyama",
    [CHARACTER_ID_MIKAELA]: "cast.toda",
    [CHARACTER_ID_LUCAS]: "cast.unset",
    [CHARACTER_ID_HIRO]: "cast.suzuki",
    [CHARACTER_ID_CHLOE]: "cast.unset",
    [CHARACTER_ID_MEIKO]: "cast.kitahara",
    [CHARACTER_ID_SANOSUKE]: "cast.asada",
};

export const CHARACTERS = Object.keys(CHARACTER_IMAGES);
