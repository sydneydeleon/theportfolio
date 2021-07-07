import React from 'react'
import './NewHorizons.css';
import NewHorizonsHeader from './NewHorizonsHeader';
import NewHorizonsMenu from './NewHorzionsMenu';
import SwitchConsole from './images/switch.png';

function HorizonsControls() {
    return (
        <>
        <div className="horizonsbody" style={{ height:1430}}></div>
        <NewHorizonsHeader />
        <NewHorizonsMenu />
        <div className="horizons-container">
        <h2>Game controls</h2>	
<img src={SwitchConsole} alt="Head" className="horizons-switch" />
<div className="tablecontainer tablecont">
<table>
  <tr>
    <th>Action</th>
    <th>Input</th>
  </tr>
  <tr>
    <td>Open inventory</td>
    <td>X</td>
  </tr>
  <tr>
    <td>Pick up</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>Move</td>
    <td>Left Stick</td>
  </tr>
  <tr>
    <td>Change camera</td>
    <td>Right Stick</td>
  </tr>
  <tr>
    <td>Run</td>
    <td>B</td>
  </tr>
  <tr>
    <td>Write message</td>
    <td>R</td>
  </tr>
  <tr>
    <td>ZR</td>
    <td>Reactions</td>
  </tr>
  <tr>
    <td>ZL</td>
    <td>Pull out NookPhone</td>
  </tr>
  <tr>
    <td>d-pad right</td>
    <td>Change tool</td>
  </tr>
  <tr>
    <td>d-pad left</td>
    <td>Change tool</td>
  </tr>
  <tr>
    <td>d-pad down</td>
    <td>Unequip tool/enter design mode when in house</td>
  </tr>
  <tr>
    <td>d-pad up</td>
    <td>Tool ring</td>
  </tr>
  <tr>
    <td>Save and exit</td>
    <td>-</td>
  </tr>
</table>

</div>
        </div>
        
</>
    )
}

export default HorizonsControls
