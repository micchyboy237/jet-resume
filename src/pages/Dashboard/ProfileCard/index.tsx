import { useAtomValue } from 'jotai'
import React, { useState } from 'react'
import { GoGear } from 'react-icons/go'
import IconButton from '../../../components/IconButton'
import ProfileModal from './ProfileModal'
import { profileAtom } from './state'
import {
  ProfileCardBio,
  ProfileCardContainer,
  ProfileCardHeaderContainer,
  ProfileCardImage,
  ProfileCardInfo,
  ProfileName,
  ProfileTitle,
} from './styles'
import { Profile } from './types'

const ProfileCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const profile = useAtomValue<Profile>(profileAtom)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <ProfileCardContainer>
      <ProfileCardHeaderContainer>
        <ProfileCardImage
          src={profile.profilePicture}
          alt={`${profile.name}'s profile picture`}
        />
        <ProfileName>{profile.name}</ProfileName>
        <ProfileTitle>{profile.title}</ProfileTitle>
      </ProfileCardHeaderContainer>

      <ProfileCardInfo>
        <div>
          <strong>Username:</strong>
          <span>{profile.username}</span>
        </div>
        <div>
          <strong>Email:</strong>
          <span>{profile.email}</span>
        </div>
      </ProfileCardInfo>

      <ProfileCardBio>{profile.bio}</ProfileCardBio>
      <IconButton circle onClick={openModal}>
        <GoGear />
      </IconButton>
      <ProfileModal isOpen={isModalOpen} closeModal={closeModal} />
    </ProfileCardContainer>
  )
}

export default ProfileCard
