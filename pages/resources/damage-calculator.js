import fs from 'fs/promises';
import path from 'path';
import Header from '../../components/layout/header'
import { useState } from 'react'

export default function DamageCalculator(props) {
    const [data, setData] = useState({});
    const {enemies} = props;

    const fillData = (key, value) => {
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
        Level: <input className="text-box" type="number" min="1" max="99" required id="level" name="level" onChange={(e) => fillData("level", e.target.value)} data-cy="level"/>
        Attack Stat: <input className="text-box" type="text" id="attack" name="attack" onChange={(e) => fillData("attack", e.target.value)}  data-cy="attack"/>
        Addition Dmg%: <input className="text-box" type="number" min="100" max="500" id="addition" name="addition" onChange={(e) => fillData("addition", e.target.value)}  data-cy="addition"/>
        Enemy: 
            <select className="text-box" id="enemy" name="enemy" onChange={(e) => fillData("enemy", e.target.value)}>
                {enemies.map(enemy => <option key={enemy.name} value={enemy.defense}>{enemy.name}</option>)}
            </select>
        <div>Base Damage: {calculateDmg("base")}</div>
        <div>Completed Addition Damage: {calculateDmg()}</div>
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