import fs from 'fs/promises';
import path from 'path';
import Header from '../../components/layout/header'
import {damageCalcuations} from '../../components/util/damage-calculations'
import { useState } from 'react'


export default function DamageCalculator(props) {
    const [data, setData] = useState({ "weaponElement": "none", "dragoonField": "", "dragoonModifier": 0, "playerPowerUp": false, "enemyPowerDown": false, "playerFear": false, "enemyFear": false});
    const [additionDropDown, setAdditionDropDown] = useState([]);
    // const {currentPlayer, setCurrentPlayer} = useState({});
    const [additionLevelDropDown, setAdditionLevelDropDown] = useState(null);
    const [dragoonAdditionLevels, setDragoonAdditionLevels] = useState(null);
    const [currentAddition, setCurrentAddition] = useState('');
    const [currentAdditionLevel, setCurrentAdditionLevel] = useState('');
    const [currentDragoonModifier, setCurrentDragoonModifier] = useState('');
    const {enemies, players} = props;
    const [dataErr, setDataErr] = useState({"playerLevel": false, "attackStat": false })
    const elements = ["None", "Fire", "Darkness", "Wind", "Light", "Earth", "Thunder", "Water"];
  
    const fillData = (key, value) => {
        if (key === "playerLevel" && (value < 1 || value > 99)) {
            setDataErr({...dataErr, [key]: true});
            return;
        } else if (key === "attackStat" && (value < 1 || value > 200)) {
            setDataErr({...dataErr, [key]: true});
            return;
        } else if (key === "playerLevel" || key === "attackStat") {
          setDataErr({...dataErr, [key]: false});
        } else if (key === "maxHitPercent") {
          setCurrentAdditionLevel(value);
        } else if (key === "dragoonModifier") {
          setCurrentDragoonModifier(value);
        }
        console.log(key, ': ', value);
        setData({...data, [key]: value});
    };

    const calculateDmg = () => {
      console.log('currentAdditionLevel', currentAdditionLevel);
      if (data.playerLevel && data.attackStat && data.enemy && data.maxHitPercent) {
        const enemyObject = enemies.find(mob => mob.name === data.enemy);
        return damageCalcuations({...data, "enemy": enemyObject});
      }
    }

    const updateAdditionDropDown = (playerName) => {
      const playerDetails = players.find(player => player.name === playerName);
      const newAdditions = playerDetails.additions.map(addition => {
        return {"name": addition.name, "hits": addition.hits, "levels": addition.levels};
      });
      const dragoonAdditions = playerDetails.dragoon.map(dragoon => {
        return {"name": dragoon.name, "hits": 4, "levels": dragoon.levels};
      });
      setAdditionDropDown([...newAdditions, ...dragoonAdditions]);
      setData({...data, ['playerElement']: playerDetails.element});
      // setCurrentPlayer({...playerDetails});
      fillData("dragoonModifier", 0);
      fillData("maxHitPercent", 0);
      setCurrentAddition("");
      setCurrentAdditionLevel("");
      setCurrentDragoonModifier("");
    }

    const updateAdditionLevelDropDown = (additionName) => {
      setCurrentAddition(additionName);
      setCurrentAdditionLevel("");
      setCurrentDragoonModifier("");
      const additionDetails = additionDropDown.find(addition => addition.name === additionName);
      if(additionName.search(/dragoon/i) === -1) {
        const additionLevels = additionDetails.levels.map(level => {
          return { "level": level.level, "damage": level.damage}
        })
        setDragoonAdditionLevels(null);
        setAdditionLevelDropDown(additionLevels);
        fillData("maxHitPercent", 0);
        fillData("dragoonModifier", 0);
      } else {
        // Dragoon Addition
        setDragoonAdditionLevels(additionDetails.levels);
        setAdditionLevelDropDown(null);
        fillData("maxHitPercent", 200); // Default for all dragoons 
      }
    }

    return (
      <div className="md:justify-center md: mx-20">
        <Header title="Damage Calculator" description="Timeline information" />
        <div className="flex flex-row flex-wrap">
          <div className="damage-calc-items">
            Player: 
            <select className="text-box" id="player" name="player" onChange={(e) => updateAdditionDropDown(e.target.value)} defaultValue={'default'} data-cy="player">
                <option value="default" disabled hidden>Select A Player</option>
                {players.map(player => <option key={player.name} value={player.name}>{player.name}</option>)}
            </select>
          </div>
          <div className="damage-calc-items">
            Player Level: <input className={dataErr.playerLevel ? 'text-box-invalid' : 'text-box'} type="number" min="1" max="99" required id="playerLevel" name="playerLevel" onChange={(e) => fillData("playerLevel", e.target.value)} placeholder="Player Level" data-cy="playerLevel"/>
          </div>
          <div className="damage-calc-items">
            Player Attack Stat: <input className={dataErr.attackStat ? 'text-box-invalid' : 'text-box'} type="text" id="attackStat" name="attackStat" onChange={(e) => fillData("attackStat", e.target.value)} data-cy="attackStat" placeholder="Attack Stat"/>
          </div>
          <div className="damage-calc-items">
            Addition: 
            <select className="text-box" id="addition" name="addition" placeholder="Select An Addition" onChange={(e) => updateAdditionLevelDropDown(e.target.value)} value={currentAddition} data-cy="addition">
                <option value="" hidden>Select An Addition</option>
                {additionDropDown && additionDropDown.map(addition => <option key={addition.name} value={addition.name}>{addition.name}</option>)}
            </select>
          </div>
          <div className="damage-calc-items">
            {additionLevelDropDown && 
              <>
                Addition Level: 
                <select className="text-box" id="additionLevel" name="additionLevel" onChange={(e) => fillData("maxHitPercent", e.target.value)} value={currentAdditionLevel} data-cy="maxHitPercent">
                  <option value="" hidden>Select A Level</option>
                  {additionLevelDropDown && additionLevelDropDown.map(additionLevel => <option key={additionLevel.level} value={additionLevel.damage}>{additionLevel.level}</option>)}
                </select>
              </>
            }
          </div>
          <div className="damage-calc-items">
            {dragoonAdditionLevels &&
              <>
                Dragoon Level: 
                <select className="text-box" id="dragoonModifier" name="dragoonModifier" onChange={(e) => fillData("dragoonModifier", e.target.value)} value={currentDragoonModifier} data-cy="dragoonModifier">
                  <option value="" hidden>Select A Level</option>
                  {dragoonAdditionLevels.map(dragoonAdditionLevel => <option key={`${dragoonAdditionLevel.level}-${dragoonAdditionLevel.spell}`} value={dragoonAdditionLevel.attack}>{dragoonAdditionLevel.level}</option>)}
                </select>
              </>
            }
          </div>
          <div className="damage-calc-items">
            Weapon Element: 
            <select className="text-box" id="weaponElement" name="weaponElement" onChange={(e) => fillData("weaponElement", e.target.value)} defaultValue={'select'} data-cy="player">
                <option value="select" disabled hidden>Select Weapon Element</option>
                {elements && elements.map(element => <option key={element} value={element.toLocaleLowerCase()}>{element}</option>)}
            </select>
          </div>
          <div className="damage-calc-items">
            Player PowerUp: <input className="check-box" type="checkbox" onChange={() => fillData("playerPowerUp", !data.playerPowerUp)}/> 
          </div>
          <div className="damage-calc-items">
            Player Fearful: <input className="check-box" type="checkbox" onChange={() => fillData("playerFear", !data.playerFear)}/> 
          </div>
          <div className="damage-calc-items">
            Enemy PowerDown: <input className="check-box" type="checkbox" onChange={() => fillData("enemyPowerDown", !data.enemyPowerDown)}/> 
          </div>
          <div className="damage-calc-items">
            Enemy Fearful: <input className="check-box" type="checkbox" onChange={() => fillData("enemyFear", !data.enemyFear)}/> 
          </div>
          <div className="damage-calc-items">
            Dragoon Special Field: 
            <select className="text-box" id="dragoonField" name="dragoonField" onChange={(e) => fillData("dragoonField", e.target.value)} defaultValue={'select'} data-cy="player">
                <option value="select" disabled hidden>Select A Field</option>
                {elements && elements.map(element => <option key={element} value={element.toLocaleLowerCase()}>{element}</option>)}
            </select>
          </div>
          <div className="damage-calc-items">
            Enemy: 
            <select className={dataErr.enemy ? 'text-box-invalid' : 'text-box'} id="enemy" name="enemy" onChange={(e) => fillData("enemy", e.target.value)} defaultValue={'select'} data-cy="enemy">
                <option value="select" disabled hidden>Select An Enemy</option>
                {enemies.map(enemy => <option key={enemy.name} value={enemy.name}>{enemy.name}</option>)}
            </select>
          </div>
        </div>
        <div>
          <ul>
            <li>Thick Borders Represents Invalid Data</li>
            <li>Damage is currently calculated as though every hit was complete for the addition. </li>
          </ul>
        </div>
        <div className="text-lg font-semibold" data-cy="addition-dmg">Damage: {calculateDmg()}</div>
      </div>
    )
  }
  
//  *****    Will update with Firebase later     *****
  async function getDBEnemies() {
    const filePath = path.join(process.cwd(), 'testData','enemies.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
  } 
  async function getDBPlayers() {
    const filePath = path.join(process.cwd(), 'testData','characters.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data.filter(char => char.type === "Player");
    // return data;
  } 
  export async function getStaticProps() {
    const enemies = await getDBEnemies();
    const players = await getDBPlayers();
  
    if (!enemies) {
      return { notFound: true };
    }
  
    return {
        props: {
          enemies: enemies,
          players: players
        },
    };
  }