import { genConfig } from 'react-nice-avatar'

const getAvatarConfig = (username = "guest", gender = "male") => {
  // Basic seed logic: ensures same user always gets same avatar
  const seed = username.trim().toLowerCase()

  // Generate config based on gender
  const config = genConfig({
    sex: gender === "female" ? "woman" : "man",
    seed,
  })

  return config
}

export default getAvatarConfig
