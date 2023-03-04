export const API = "https://api.themoviedb.org/3";

export async function get(path) {
  const response = await fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjJmZDk3MzIzN2E1ODAwYzNiMmNkNTdiMjQ2MTJjMiIsInN1YiI6IjYzYzJjMDBjZGY4NTdjMDBiYzIyNDU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3yP1TCDvyWZeqfRnoug9l7r-F9RGgvfRJHQVUCC1UL0",
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }

  const data = await response.json();

  return data;
}
