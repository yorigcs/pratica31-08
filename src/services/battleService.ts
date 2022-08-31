import axios from 'axios'
interface battle {
    firstUser: string
    secondUser: string
}

interface Result {
    winner: string | null
    loser: string | null,
    draw: boolean
}

const battleService = async (users: battle) => {
    const result = await getGitHubData(users.firstUser, users.secondUser)
    console.log(result)

}

const getGitHubData = async (firstUser: string, secondUser: string) => {
    try {
        let result: Result = {
            winner: null,
            loser: null,
            draw: true
        }

        const { data: firtUserRepo } = await axios.get(`https://api.github.com/users/${firstUser}/repos`)
        const { data: secondUserRepo } = await axios.get(`https://api.github.com/users/${secondUser}/repos`)
        let firstUserStart = 0;
        let secondUserStart = 0;

        firtUserRepo.forEach(repo => firstUserStart += repo.stargazers_count)
        secondUserRepo.forEach(repo => secondUserStart += repo.stargazers_count)
        if (firstUserStart > secondUserStart) {
            result.winner = firstUser
            result.loser = secondUser
            result.draw = false
        } else if (firstUserStart > secondUserStart) {
            result.winner = firstUser
            result.loser = secondUser
            result.draw = false
        }
        return result
    } catch (err) {
        return null
    }
}

export default battleService