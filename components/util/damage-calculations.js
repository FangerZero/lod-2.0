export const damageCalcuations = (damageCalcStats) => {   
    const opposingElements = [
        {"fire": "water"},
        {"water": "fire"},
        {"light": "dark"},
        {"dark": "light"},
        {"earth": "wind"},
        {"wind": "earth"}
    ];
    const {playerLevel, attackStat, maxHitPercent, dragoonModifier, weaponElement, playerPowerUp, enemyPowerDown, dragoonField, enemy, playerElement, playerFear, enemyFear} = damageCalcStats
    const enemyDefense = enemy.defense;
    // const enemyMagicalDefense = enemy['magical-defense'];
    const playerPowerUpBonus = playerPowerUp ? 50 : 0;
    const enemyPowerDownBonus = enemyPowerDown ? 50 : 0;
    let weaponElementBonus = 0;
    if (opposingElements[enemy.element] === weaponElement) {
        weaponElementBonus = 100;
    } else if (enemy.element === "none" || enemy.element === "thunder") {
        weaponElementBonus = 0;
    } else if (enemy.element === weaponElement) {
        weaponElementBonus = -25;
    }

    let dragoonFieldBonus = 0;
    /*
    if (opposingElements[dragoonField] === player.dragoon.element) {
        dragoonFieldBonus = 50;
    }*/
    
    /*  True Formula
        const FIRST = floor{[hit[1] + hit[2] + hit[n]] * multi / 100}; 
        const SECOND = floor[(FIRST * AT) / 100];
        const THIRD = round({SECOND * [lvl + 5] * 5} / DEF);
        const FOURTH = floor{[THIRD] * [100 + wpn elem bonus] / 100};
        const FIFTH = floor(FOURTH * {100 + pwr up + pwr down} / 100);
        const SIXTH = floor[FIFTH * (100 + drgn special bonus) / 100];
    */
// console.log('damageCalcStats', damageCalcStats);

    const dragoonModifierBonus = dragoonModifier > 0 ? Number(dragoonModifier) : 100;
     // console.log('dragoonModifierBonus', dragoonModifierBonus);
    /***********************************************************************
     * maxHitPercent: Completing the addition, each attack has it's % split up
     * double hit lv 1 Dmg = 150%, split between 100% and 50% 
     * but lv 2 Dmg = 157%, and could be 100% and 57% or 104% and 53% 
     * for now we're just going to assume that the addition is complete
     ***********************************************************************/
    const FIRST = Math.floor(maxHitPercent * dragoonModifierBonus / 100);
     // console.log('FIRST', FIRST);
    /***********************************************************************
     * attackStat: Physical or Magical Attack of Character
     ***********************************************************************/
    const SECOND = Math.floor((FIRST * Number(attackStat)) / 100);
     // console.log('SECOND', SECOND);
    /***********************************************************************
     * characterLevel: Base Level of character
     * enemyDefense: Physical or Magical Defense of Enemy
     ***********************************************************************/
    const THIRD = Math.round((SECOND * (Number(playerLevel) + 5) * 5) / enemyDefense);
     // console.log('THIRD', THIRD);
    /***********************************************************************
     * weaponElement: If the weapon has an element that is Positive or Negative to the enemy attacking
     ***********************************************************************/
    const FOURTH = Math.floor((THIRD * (100 + Number(weaponElementBonus))) / 100);
     // console.log('FOURTH', FOURTH);
    /***********************************************************************
     * playerPowerUp: Some sort of Power Up Bonus towards player? Some monsters use it
     * enemyPowerDown: Some sort of Power Down Bonus towards monster?
     ***********************************************************************/
    const FIFTH = Math.floor((FOURTH * (100 + Number(playerPowerUpBonus) + Number(enemyPowerDownBonus))) / 100);
     // console.log('FIFTH', FIFTH);
    /***********************************************************************
     * dragoonFieldBonus: 
     *  If Dragoon same element as Dimension field +50 bonus
     *  If Dragoon lv 5 and opposite element -25 Bonus
     *  If Dragoon Under lv 5 and Opposite Element -50 bonus
     ***********************************************************************/
    const SIXTH = Math.floor((FIFTH * (100 + Number(dragoonFieldBonus))) / 100);
     // console.log('SIXTH', SIXTH);
    const SEVENTH = playerFear ? Math.floor(SIXTH / 2) : SIXTH;
    const EIGHTH = enemyFear ? Math.floor(SEVENTH * 2) : SEVENTH;
    return EIGHTH;
}