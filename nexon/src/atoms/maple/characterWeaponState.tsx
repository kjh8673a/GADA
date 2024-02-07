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
    const stats: { 아케인심볼: ISymbolStatType; 어센틱심볼: ISymbolStatType } = {
      아케인심볼: {
        symbol_hp: 0,
        symbol_dex: 0,
        symbol_force: 0,
        symbol_str: 0,
        symbol_int: 0,
        symbol_luk: 0,
      },
      어센틱심볼: {
        symbol_hp: 0,
        symbol_dex: 0,
        symbol_force: 0,
        symbol_str: 0,
        symbol_int: 0,
        symbol_luk: 0,
      },
    };

    symbols?.forEach((symbol) => {
      const type = symbol ? symbol?.symbol_name?.split(":")[0].trim() : "";

      if (type === "아케인심볼" || type === "어센틱심볼") {
        stats[type].symbol_hp += symbol.symbol_hp ? +symbol.symbol_hp : 0;
        stats[type].symbol_dex += symbol.symbol_dex ? +symbol.symbol_dex : 0;
        stats[type].symbol_force += symbol.symbol_force ? +symbol.symbol_force : 0;
        stats[type].symbol_str += symbol.symbol_str ? +symbol.symbol_str : 0;
        stats[type].symbol_int += symbol.symbol_int ? +symbol.symbol_int : 0;
        stats[type].symbol_luk += symbol.symbol_luk ? +symbol.symbol_luk : 0;
      }
    });

    return stats;
  },
});

