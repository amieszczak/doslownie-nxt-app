const API_URL = 'https://wordpress.papuzka.com.pl/wp-admin/graphql';

const fetchAPI = async (query: string, variables = {}) => {
    try {
        const responseJSON = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables
            }),
            next: { revalidate: 60 }
        });

        const response = await responseJSON?.json();

        return response?.data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchAPI;