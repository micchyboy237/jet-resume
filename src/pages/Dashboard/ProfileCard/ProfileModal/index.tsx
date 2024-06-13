import { useAtomValue, useSetAtom } from 'jotai'
import React, { useState } from 'react'
import Modal from '../../../../components/Modal'
import { profileAtom, updateProfileAtom } from '../state'
import {
  Button,
  FileInput,
  Form,
  FormField,
  FormImage,
  Input,
  Label,
  TextArea,
} from './styles'

interface ProfileModalProps {
  isOpen: boolean
  closeModal: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, closeModal }) => {
  const profile = useAtomValue(profileAtom)
  const [formState, setFormState] = useState(profile)
  const updateProfile = useSetAtom(updateProfileAtom)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormState({ ...formState, profilePicture: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile(formState)
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title="Edit Profile">
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <FileInput
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
          {formState.profilePicture && (
            <FormImage src={formState.profilePicture} alt="Profile Preview" />
          )}
        </FormField>
        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="bio">Bio</Label>
          <TextArea name="bio" value={formState.bio} onChange={handleChange} />
        </FormField>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  )
}

export default ProfileModal
