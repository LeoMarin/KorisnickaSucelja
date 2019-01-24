import tryndaImage from "static/trynda.jpg"
import morelloImage from "static/morello.jpg"
const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === 'trynda' && password === 'ritopls') {
    return setUser({
      username: 'trynda',
      firstName: 'Marc',
      lastName: 'Merrill',
      email: 'marcmerrill@riot.com',
      dob: '27-08-1984',
      pictureUrl: tryndaImage,
      bio: 'Gamer soul who has adult responsibilities... OP Dad. Co-founder of Riot Games. Co-creator of League of Legends. Husband to the real Ashe.'
    })
  }

  if (username === 'morello' && password === 'betternerf') {
    return setUser({
      username: 'morello',
      firstName: 'Ryan',
      lastName: 'Scott',
      email: 'ryanscott@riot.com',
      dob: '10-04-1982',
      pictureUrl: morelloImage,
      bio: 'Design Lead for a Riot Games R&D project. Dungeon Master and Tekken hopeful. My views represent my employer regardless of my intent. Unreasonably reasonable.'
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const handleRegister = ({ username, email, password, repeatPassword }) => {
  if (!isBrowser) return false
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  setUser({})
  callback()
}
