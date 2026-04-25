import type { Character, Spell } from "./types";

const BASE_URL = "https://hp-api.onrender.com/api";

async function fetchJson<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  return response.json();
}

export const fetchAllCharacters = () => fetchJson<Character[]>("/characters");
export const fetchCharacterById = (id: string) => fetchJson<Character[]>(`/character/${id}`);
export const fetchStudents = () => fetchJson<Character[]>("/characters/students");
export const fetchStaff = () => fetchJson<Character[]>("/characters/staff");
export const fetchHouseMembers = (house: string) => fetchJson<Character[]>(`/characters/house/${house}`);
export const fetchSpells = () => fetchJson<Spell[]>("/spells");
