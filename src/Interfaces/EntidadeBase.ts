export interface EntidadeBase {
    id: string,
    createdAt: Date,
    updatedAt: Date | null,
    active: boolean,
    isDeleted: boolean
}