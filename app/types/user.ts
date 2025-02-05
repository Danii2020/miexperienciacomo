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