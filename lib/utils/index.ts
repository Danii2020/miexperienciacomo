export const slugify = (str: string, userId: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-') + "-" + userId.slice(0, userId.indexOf("-"));
};

export const capitalizeLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}