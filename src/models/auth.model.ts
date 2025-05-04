export type AuthModel = {
    id: number;
    full_name: string;
    email: string;
    mobile: string;
    address: string;
    role_id: number;
    status: number;
    created_by: number;
    created_on: string | null;
    updated_by: number | null;
    updated_on: string | null;
    token: string;
}
