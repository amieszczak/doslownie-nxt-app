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

        if (!responseJSON.ok) {
            throw new Error(`HTTP error! status: ${responseJSON.status}`);
        }

        const response = await responseJSON?.json();

        if (response?.errors) {
            console.error('GraphQL errors:', response.errors);
            return null;
        }

        return response?.data;
    } catch (error) {
        console.error('Fetch API error:', error);
        return null;
    }
};

export default fetchAPI;