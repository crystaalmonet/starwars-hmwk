export async function getAllStarships(page = 1) { //add a default value of 1 for the page parameter
    //define the base url for swapi - the url to fetch data from
    const url = `https://swapi.dev/api/starships/?page=${page}`;   //use page parameter in the API endpoint
    try {
        const response = await fetch(url);
        const data = await response.json();  //Await the response.json() to get the actual JSON data

        //fetch additional details for each starship using the url property
        const starshipsWithDetails = await Promise.all(
            data.results.map(async (starship) => {
                const detailResponse = await fetch(starship.url);
                return detailResponse.json();
            })
        );
        return {
            results: starshipsWithDetails,
            //inlcude the next URL for the next page
            next: data.next,
            //include the previous url for the previous page
            previous: data.previous,
        };

    } catch (error) {
        console.error("Error fetching starships:", error);
        throw error;
    }
}