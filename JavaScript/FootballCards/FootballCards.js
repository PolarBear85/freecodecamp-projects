const footballTeam = {
    team:'Leeds Knights',
    year:2025,
    headCoach:'Dave Gorman',
    players: [
        {
            name:'Dave Lister',
            position: 'forward',
            isCaptain: true
        },
        {
            name:'Arnold Rimmer',
            position: 'midfielder',
            isCaptain: false
        },
        {
            name:'The Cat',
            position: 'defender',
            isCaptain: false
        },
        {
            name:'Kryton Android',
            position: 'goalkeeper',
            isCaptain: false
        }
    ]
}


const coachName = document.querySelector('#head-coach');
const teamName = document.querySelector('#team');
const teamYear = document.querySelector('#year');
const playerCardsArr = document.querySelector('#player-cards');
const playerSelector = document.querySelector('#players')


coachName.textContent = footballTeam.headCoach;
teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;


function updatePlayers(selectedPosition) {
    let playerHTML =""
    if (selectedPosition === 'all') {
        playerHTML = footballTeam.players.map(player => {
            const capTitle = player.isCaptain ? '(Captain) ':'';
            return `<div class="player-card">
            <h2>${capTitle}${player.name}</h2>
            <p>Position: ${player.position}</p>
            </div>`
            
        }).join('');
        
    } else {
        
        playerHTML = footballTeam.players
        .filter(player => player.position === selectedPosition)
        .map(player => {
            const capTitle = player.isCaptain ? '(Captain) ':'';
        
            return `<div class="player-card">
            <h2>${capTitle}${player.name}</h2>
            <p>Position: ${player.position}</p>
            </div>`
    })
    .join('')
        
    }


playerCardsArr.innerHTML = playerHTML;
}

playerSelector.addEventListener('change',()=> {
    updatePlayers(playerSelector.value);
});
