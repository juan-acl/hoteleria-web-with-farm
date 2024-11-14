/* eslint-disable prettier/prettier */
// Source: auth.slice.ts

export interface InitialStateAuth {
    currentUser: User | null;
    token: string | null;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}
