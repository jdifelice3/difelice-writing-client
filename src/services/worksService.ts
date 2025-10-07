//import type { Work } from '@johndifelice/types'; 
import type { Work } from '../types';
import { getEndpoints } from '../config/EndPoint';

export const fetchWorks = async() => {
    const res = await fetch('/api/works');

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data:Work[] = await res.json();

    return data;
}

export const fetchWorksByForm = async(form: string) => {
    
    const envs = getEndpoints(import.meta.env.MODE);
    const res = await fetch(`${envs.VITE_API_BASE_URL}/api/works/${form}`);

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data:Work[] = await res.json();

    return data;
}