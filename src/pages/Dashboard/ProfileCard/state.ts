// state.ts
import { atom } from 'jotai'
import { Profile } from './types'

const initialValue: Profile = {
  profilePicture: '../assets/profilepic.jpg',
  username: 'johndoe123',
  email: 'johndoe@example.com',
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: '10+ years experience in software development, with extensive experience in end-to-end application development using React, React Native and Node.js.',
}

// Atom to hold the profile object
export const profileAtom = atom<Profile>(initialValue)

// Atom to update specific fields in the profile
export const updateProfileAtom = atom(
  null,
  (get, set, update: Partial<Profile>) => {
    const currentProfile = get(profileAtom)
    set(profileAtom, { ...currentProfile, ...update })
  },
)
