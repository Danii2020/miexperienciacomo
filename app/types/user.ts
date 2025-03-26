export type User = {
    name?: string
    professionalRole: string,
    experienceTime: string,
    showName: boolean,
    showPhoto: boolean
}

export type UserDisplay = Pick<User, 'showName' | 'showPhoto'> & {
    name: string;
    imageUrl: string
}

export type UserDataBase = {
    professional_role: string
    experience_time: string
    name: string
    image_url: string | null
}