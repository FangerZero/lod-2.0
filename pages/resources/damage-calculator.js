import fs from 'fs/promises';
import path from 'path';
import Header from '../../components/layout/header'
import { useState } from 'react'

export default function DamageCalculator(props) {
    const [data, setData] = useState({});
    const {enemies} = props;
    const [dataErr, setDataErr] = useState({"level": false, "addition": false, "attack": false, "enemy": false})

    const fillData = (key, value) => {
        let newValue = value;
        if (key === "level" && (value < 1 || value > 99)) {
            setDataErr({...dataErr, [key]: true});
            console.log('level error');
            return;
        } else if (key === "addition" && (value < 100 || value > 500)) {
            setDataErr({...dataErr, [key]: true});
            console.log('addition error');
            return;
        } else if (key === "attack" && (value < 1 || value > 200)) {
            setDataErr({...dataErr, [key]: true});
            console.log('attack error');
            return;
        } else if (key === "enemy" && value == 0) {
            setDataErr({...dataErr, [key]: true});
            console.log('enemy error');
            return;
        }
        setDataErr({...dataErr, [key]: false});
        setData({...data, [key]: value});
    };

    const calculateDmg = (type) => {
        const {level, attack, enemy, addition} = data;
        if (level && attack && enemy && addition) {
            // BaseDmg = (lv+5) * Atk * 5 / Def
            const base = (level * 1 + 5) * attack * 5 / enemy;
            if (type === "base") {
                return Math.round(base);
            }
            // Addition Dmg = baseDmg * Dmg%
            return Math.round(base*(addition/100));
        }
    }

    return (
      <div>
        <Header title="Damage Calculator" description="Timeline information" />
        Level: <input className={dataErr.level ? 'text-box-invalid' : 'text-box'} type="number" min="1" max="99" required id="level" name="level" onChange={(e) => fillData("level", e.target.value)} placeholder="Level" data-cy="level"/>
        Attack Stat: <input className={dataErr.attack ? 'text-box-invalid' : 'text-box'} type="text" id="attack" name="attack" onChange={(e) => fillData("attack", e.target.value)} data-cy="attack" placeholder="Attack Stat"/>
        Addition Dmg%: <input className={dataErr.addition ? 'text-box-invalid' : 'text-box'} type="number" min="100" max="500" id="addition" name="addition" onChange={(e) => fillData("addition", e.target.value)} placeholder="Addition %" data-cy="addition"/>
        Enemy: 
            <select className={dataErr.enemy ? 'text-box-invalid' : 'text-box'} id="enemy" name="enemy" onChange={(e) => fillData("enemy", e.target.value)} defaultValue={'select'} data-cy="enemy">
                <option value="select" disabled hidden>Select An Enemy</option>
                {enemies.map(enemy => <option key={enemy.name} value={enemy.defense}>{enemy.name}</option>)}
            </select>
        <div>Thick Borders Represents Invalid Data</div>
        <div data-cy="base-dmg">Base Damage: {calculateDmg("base")}</div>
        <div data-cy="addition-dmg">Completed Addition Damage: {calculateDmg()}</div>
      </div>
    )
  }
  
//  *****    Will update with Firebase later     *****
async function getDBEnemies() {
    const filePath = path.join(process.cwd(), 'testData','enemies.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    console.log('data', data);
    return data;
  } 
  
  export async function getStaticProps() {
    const enemies = await getDBEnemies();
  
    if (!enemies) {
      return { notFound: true };
    }
  
    return {
        props: {
          enemies: enemies
        },
    };
  }