export type PostTagsQl = {
    tags : {
        edges: {
            node: {
                name: string,
                slug: string,
            }
        }
    }
}