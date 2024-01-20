import { atom, selector } from "recoil";
import { ISymbolStatType, IWeaponTypes } from "../../@types/maple/WeaponTypes";

export const atomCharacterWeapon = atom<IWeaponTypes>({
  key: "atomCharacterWeapon",
  default: {},
});

export const atomCharacterSymbolStats = selector({
  key: "atomCharacterSymbolStats",
  get: ({ get }) => {
    const symbols = get(atomCharacterWeapon).symbols;
    const totalStats: ISymbolStatType = {
      symbol_hp: 0,
      symbol_dex: 0,
      symbol_force: 0,
      symbol_str: 0,
      symbol_int: 0,
      symbol_luk: 0,
    };

    symbols?.forEach((symbol) => {
      totalStats.symbol_hp += symbol.symbol_hp ? +symbol.symbol_hp : 0;
      totalStats.symbol_dex += symbol.symbol_dex ? +symbol.symbol_dex : 0;
      totalStats.symbol_force += symbol.symbol_force ? +symbol.symbol_force : 0;
      totalStats.symbol_str += symbol.symbol_str ? +symbol.symbol_str : 0;
      totalStats.symbol_int += symbol.symbol_int ? +symbol.symbol_int : 0;
      totalStats.symbol_luk += symbol.symbol_luk ? +symbol.symbol_luk : 0;
    });

    return totalStats;
  },
});

