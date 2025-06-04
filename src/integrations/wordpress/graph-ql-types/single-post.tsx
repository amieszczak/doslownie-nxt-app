export type SinglePostGl = {
    id: string,
    title: string,
    databaseId: number,
    content: string,
    date: string,
    modified: string,
    excerpt: string,
    slug: string,
    featuredImage: {
        node: {
            link: string,
        }
    }
    categories: {
        nodes: {
            name: string,
            slug: string,
            databaseId: string,
        }
    }
    author: {
        node: {
            name: string,
            slug: string,
            description: string,
        }
    }
}