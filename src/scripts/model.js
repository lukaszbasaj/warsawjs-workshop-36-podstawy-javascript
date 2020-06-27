const params = {
    method: "GET",
};
const url = "https://swapi.dev/api/films/";

export function fetchMovies() {
    return fetch(url, params)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            return data.results;
        });
}
