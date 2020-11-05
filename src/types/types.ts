
export interface ICompany {
    active: boolean
    logo:string
    name: string
    posPrice: number
    prePrice: number
    quantity: number
}

export interface IUserContext { 
    isSigned: boolean
    setIsSigned: (status: boolean) => void
}