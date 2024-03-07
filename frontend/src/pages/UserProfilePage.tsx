import { useUpdateMyUser } from '@/api/MyUserApi'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'

export default function UserProfilePage() {
    const { updateUser, isLoading } = useUpdateMyUser();
  return (
    <UserProfileForm onSave={updateUser} isLoading={isLoading} />
  )
}
