const listOfSpells = [
  ['cDPW', 'Dispel Magic'],
  ['cSWWS', 'Summon Ice Elemental'],
  ['cWSSW', 'Summon Fire Elemental'],
  ['cw', 'Magic Mirror'],
  ['DFFDD', 'Lightning Bolt'],
  ['DFPW', 'Cure Heavy Wounds'],
  ['DFW', 'Cure Light Wounds'],
  ['DFWFd', 'Blindness'],
  ['DPP', 'Amnesia'],
  ['DSF', 'Confusion/Maladroitness'],
  ['DSFFFc', 'Disease'],
  ['DWFFd', 'Blindness'],
  ['DWSSSP', 'Delay Effect'],
  ['DWWFWD', 'Poison'],
  ['FFF', 'Paralysis'],
  ['FPSFW', 'Summon Troll'],
  ['FSSDD', 'Fireball'],
  ['P', 'Shield'],
  ['p', 'Surrender'],
  ['PDWP', 'Remove Enchantment'],
  ['PPws', 'Invisibility'],
  ['PSDD', 'Charm Monster'],
  ['PSDF', 'Charm Person'],
  ['PSFW', 'Summon Ogre'],
  ['PWPFSSSD', 'Finger of Death'],
  ['PWPWWc', 'Haste'],
  ['SD', 'Magic Missile'],
  ['SFW', 'Summon Goblin'],
  ['SPFP', 'Anti-spell'],
  ['SPFPSDW', 'Permanency'],
  ['SPPc', 'Time Stop'],
  ['SPPFD', 'Time Stop'],
  ['SSFP', 'Resist Cold'],
  ['SWD', 'Fear (No CFDS)'],
  ['SWWc', 'Fire Storm'],
  ['WDDc', 'Clap of Lightning'],
  ['WFP', 'Cause Light Wounds'],
  ['WFPSFW', 'Summon Giant'],
  ['WPFD', 'Cause Heavy Wounds'],
  ['WPP', 'Counter Spell'],
  ['WSSc', 'Ice Storm'],
  ['WWFP', 'Resist Heat'],
  ['WWP', 'Protection'],
  ['WWS', 'Counter Spell']
]

window.addEventListener('load', _ => {
  chrome.extension.sendMessage({method: 'getHand'}, response => {
    console.log("I got a response: ", response) 
    document.getElementById('lo').innerHTML = response.leftOpp
    document.getElementById('ro').innerHTML = response.rightOpp
    document.getElementById('lp').innerHTML = response.leftPlyr
    document.getElementById('rp').innerHTML = response.rightPlyr

    var regexp = new RegExp('^'+)
  })
})