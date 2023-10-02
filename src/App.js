import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { STATS_CONSTANT, RESET_POINTS, LEVEL_POINTS } from './constants';
import Logo from './img/descarga.png'


function App() {

  const [stats, setStats] = useState({ str: 0, agi: 0, vit: 0, ene: 0, total: 0 });
  const [clase, setClase] = useState('bk')
  const [resets, setResets] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {

    let RESET_POINTS = 820;
    let LEVEL_POINTS = clase.startsWith('mg') ? 7 : 5;
    console.log(LEVEL_POINTS, clase)

    let final_stats = { str: 0, agi: 0, vit: 0, ene: 0, total: 0 };
    let total_points = (level * LEVEL_POINTS) + (resets * RESET_POINTS);

    final_stats.str = (total_points * STATS_CONSTANT[clase].str) / 50000;
    final_stats.agi = (total_points * STATS_CONSTANT[clase].agi) / 50000;
    final_stats.vit = (total_points * STATS_CONSTANT[clase].vit) / 50000;
    final_stats.ene = (total_points * STATS_CONSTANT[clase].ene) / 50000;
    final_stats.total = total_points;
    setStats(final_stats)

  }, [clase, level, resets])

  return (
    <div className="App">

      <div className='stats-container'>
        <img src={Logo} />
        <h2>REPARTILOS SAMA</h2>
        <p> STR: {stats.str} </p>
        <p> AGI: {stats.agi} </p>
        <p> VIT: {stats.vit} </p>
        <p> ENE: {stats.ene} </p>
        <p> TUS PUNTOS: {stats.total} </p>

        <div className='stats-form'>
          <p>Level</p>
          <input
            id="name"
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <p>Reset</p>
          <input
            id="name"
            type="text"
            value={resets}
            onChange={(e) => setResets(e.target.value)}
          />
          <p>Clase</p>
          <select
            value={clase}
            onChange={e => setClase(e.target.value)}
          >
            <option value="bk">BLADE KNIGHT</option>
            <option value="elf_agi">ELF_AGI</option>
            <option value="elf_ene">ELF_ENE</option>
            <option value="sum">SUM</option>
            <option value="mg_caballero">MG_CABALLERO</option>
            <option value="mg_mago">MG_MAGO</option>
            <option value="mg_balanced">MG_BALANCED</option>
            <option value="sm">WIZARD</option>
          </select>
        </div>
      </div>

    </div>
  );
}

export default App;
