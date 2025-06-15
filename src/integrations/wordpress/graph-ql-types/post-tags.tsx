export type PostTagsQl = {
    tags : {
        edges: {
            node: {
                name: string,
                slug: string,
            },
            posts: {
                edges: {
                    node: {
                        title: string,
                        slug: string,                    
                    }
                }
            }
        }
    }
}