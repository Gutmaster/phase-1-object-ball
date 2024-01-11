function gameObject(){
    return {
        "home":{
            "teamName":'Brooklyn Nets',
            "colors":['Black', 'White'],
            "players":{
                'Alan Anderson':{'number':0, 'shoe':16, 'points':22, 'rebounds':12, 'assists':12, 'steals':3, 'blocks':1, 'slamDunks':1},
                'Reggie Evans':{'number':30, 'shoe':14, 'points':12, 'rebounds':12, 'assists':12, 'steals':12, 'blocks':12, 'slamDunks':7},
                'Brook Lopez':{'number':11, 'shoe':17, 'points':17, 'rebounds':19, 'assists':10, 'steals':3, 'blocks':1, 'slamDunks':15},
                'Mason Plumlee':{'number':1, 'shoe':19, 'points':26, 'rebounds':12, 'assists':6, 'steals':3, 'blocks':8, 'slamDunks':5},
                'Jason Terry':{'number':31, 'shoe':15, 'points':19, 'rebounds':2, 'assists':2, 'steals':4, 'blocks':11, 'slamDunks':1}
            }
        },
        "away":{
            "teamName":'Charlotte Hornets',
            "colors":['Turquoise', 'Purple'],
            "players":{
                'Jeff Adrien':{'number':4, 'shoe':18, 'points':10, 'rebounds':1, 'assists':1, 'steals':2, 'blocks':7, 'slamDunks':2},
                'Bismak Biyombo':{'number':0, 'shoe':16, 'points':12, 'rebounds':4, 'assists':7, 'steals':7, 'blocks':15, 'slamDunks':10},
                'DeSagna Diop':{'number':2, 'shoe':14, 'points':24, 'rebounds':12, 'assists':12, 'steals':4, 'blocks':5, 'slamDunks':5},
                'Ben Gordon':{'number':8, 'shoe':15, 'points':33, 'rebounds':3, 'assists':2, 'steals':1, 'blocks':1, 'slamDunks':0},
                'Brendan Haywood':{'number':33, 'shoe':15, 'points':6, 'rebounds':12, 'assists':12, 'steals':22, 'blocks':5, 'slamDunks':12}
            }
        }
    }
}

function homeTeamName(){
    return gameObject()["home"]["teamName"]
}

function searchPlayer(name){
    for(let teamKey in gameObject()){
        for(let playerKey in gameObject()[teamKey]["players"]){
            if(playerKey === name){
                return gameObject()[teamKey]["players"][playerKey]
            }
        }
    }
}

function searchTeam(team){
    for(let teamKey in gameObject()){
        if(gameObject()[teamKey].teamName === team){
            return gameObject()[teamKey]
        }
    }
}

function numPointsScored(name){
    return searchPlayer(name).points
}

function shoeSize(name){
    return searchPlayer(name).shoe
}

function teamColors(team){
    return searchTeam(team).colors
}

function teamNames(){
    const teamsArray = []
    for(let teamKey in gameObject()){
        teamsArray.push(gameObject()[teamKey]["teamName"])
    }
    return teamsArray
}

function playerNumbers(teamName){
    const team = searchTeam(teamName)
    const numbers = []

    for(const player in team["players"]){
        numbers.push(team["players"][player].number)
    }
    return numbers
}

function playerStats(name){
    return searchPlayer(name)
}

function bigShoeRebounds(){
    const game = gameObject()
    let biggestShoe = null

    for(const teamKey in game){
        for(const playerKey in game[teamKey]["players"]){
            if(!biggestShoe || biggestShoe.shoe < game[teamKey]["players"][playerKey].shoe){
                biggestShoe = game[teamKey]["players"][playerKey]
            }
        }
    }
    return biggestShoe.rebounds
}

function mostPointsScored(){
    const game = gameObject()
    let mostPoints = null
    let name = "Kirk Pointless"
    for(const teamKey in game){
        for(const playerKey in game[teamKey]["players"]){
            if(!mostPoints || mostPoints.points < game[teamKey]["players"][playerKey].points){
                mostPoints = game[teamKey]["players"][playerKey]
                name = playerKey
            }
        }
    }
    return name
}

function winningTeam(){
    const game = gameObject()
    let winningTeam
    let highestPoints = 0

    for(const teamKey in game){
        let points = 0
        for(const playerKey in game[teamKey]["players"]){
            points += game[teamKey]["players"][playerKey].points
        }
        if(points > highestPoints){
            highestPoints = points
            winningTeam = game[teamKey].teamName
        }
    }
    return winningTeam   
}

function playerWithLongestName(){
    const game = gameObject()
    let longest = ""

    for(const teamKey in game){
        for(const playerKey in game[teamKey]["players"]){
            if(playerKey.length > longest.length){
                longest = playerKey
            }
        }
    }
    return longest
}

function playerWithMostSteals(){
    const game = gameObject()
    let mostSteals = 0
    let stealer

    for(const teamKey in game){
        for(const playerKey in game[teamKey]["players"]){
            if(game[teamKey]["players"][playerKey].steals > mostSteals){
                mostSteals = game[teamKey]["players"][playerKey].steals
                stealer = playerKey
            }
        }
    }
    return stealer
}

function doesLongNameStealATon(){
    if(playerWithLongestName() === playerWithMostSteals()){
        return true
    }
    return false
}