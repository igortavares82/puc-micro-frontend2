import axios from "axios"

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDJmMTJhYzU4MTg4ZWQwYTZjOTg5NDcwZTI2NjQ1MyIsIm5iZiI6MTc0Mjk3NjQxNy4zODksInN1YiI6IjY3ZTNiNWExMGVlNTNkNGU3MWYwYjQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33tsRXy-PfLp6qxEh24SjmvcgUlwklpKgxPHxb43QYs'
    }
})