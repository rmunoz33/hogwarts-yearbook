// https://hp-api.onrender.com/

export const fetchStudents = async () => {
  try {
    const response = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const fetchStaff = async () => {
  try {
    const response = await fetch(
      "https://hp-api.onrender.com/api/characters/staff"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
};

export const fetchSpells = async () => {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching spells:", error);
    throw error;
  }
};

export const fetchHouseMembers = async (house) => {
  try {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching house members:", error);
    throw error;
  }
};

// Add more API call functions as needed
