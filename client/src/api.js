const BASE_URL = "http://localhost:3000/api";

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects`);
  return res.json();
};

export const getSkills = async () => {
  const res = await fetch(`${BASE_URL}/skills`);
  return res.json();
};
