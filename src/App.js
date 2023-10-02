import './App.css';
import { useEffect, useState } from 'react';
import { STATS_CONSTANT } from './constants';
import Logo from './img/descarga.png'


function App() {

  const [stats, setStats] = useState({ str: 0, agi: 0, vit: 0, ene: 0, cmd: 0 });
  const [clase, setClase] = useState('bk')
  const [points, setPoints] = useState(0);

  useEffect(() => {


    let final_stats = { str: 0, agi: 0, vit: 0, ene: 0, cmd: 0 };
    let total_points = points;
    let sobrante = 0;

    final_stats.str = Math.round((total_points * STATS_CONSTANT[clase].str) / STATS_CONSTANT[clase].total);
    final_stats.agi = Math.round((total_points * STATS_CONSTANT[clase].agi) / STATS_CONSTANT[clase].total);
    final_stats.vit = Math.round((total_points * STATS_CONSTANT[clase].vit) / STATS_CONSTANT[clase].total);
    final_stats.ene = Math.round((total_points * STATS_CONSTANT[clase].ene) / STATS_CONSTANT[clase].total);
    
    if(clase == 'rf'){
      final_stats.cmd = Math.round((total_points * STATS_CONSTANT[clase].cmd) / STATS_CONSTANT[clase].total);
    }

    sobrante = (final_stats.str + final_stats.agi + final_stats.vit + final_stats.ene + final_stats.cmd) - total_points;
    
    console.log(sobrante, (final_stats.str + final_stats.agi + final_stats.vit + final_stats.ene + final_stats.cmd))

    setStats(final_stats)

  }, [clase, points])

  return (
    <div className="App">

      <div className='stats-container'>
        <img src={Logo} />
        <h2>REPARTILOS SAMA</h2>
        <p> STR: {stats.str} </p>
        <p> AGI: {stats.agi} </p>
        <p> VIT: {stats.vit} </p>
        <p> ENE: {stats.ene} </p>
        {clase === 'dl' ? <p> CMD: {stats.cmd} </p> : null}

        <div className='stats-form'>
          <p>Points</p>
          <input
            id="name"
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
          <p>Clase</p>
          <select
            value={clase}
            onChange={e => setClase(e.target.value)}
          >
            <option value="bk">BLADE KNIGHT</option>
            <option value="elf_agi">ELF AGILIDAD</option>
            <option value="elf_ene">ELF ENERGIA</option>
            <option value="sum">SUM</option>
            <option value="mg_caballero">MG FUERZA</option>
            <option value="mg_mago">MG MAGO</option>
            <option value="mg_balanced">MG BALANCEADO</option>
            <option value="rf_str">RF FUERZA</option>
            <option value="rf_ene">RF ENERGIA</option>
            <option value="rf_vit">RF VIDA</option>
            <option value="sm">WIZARD</option>
          </select>
        </div>
      </div>

    </div>
  );
}

export default App;
