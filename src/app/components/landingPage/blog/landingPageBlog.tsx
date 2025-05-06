import getAllPosts from "@/integrations/wordpress/getAllPosts"

export default async function LandingPageBlog() {

    /* const posts = await getAllPosts(); */


    const unitAppearance:string = 'w-1/3 h-[80%] border border-black hover:bg-gray-400 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10';

    return (
        
        <div className='w-screen h-screen flex items-center justify-evenly'>
            <div className={unitAppearance}></div>
            <div className={unitAppearance}></div>
        </div>
    )
}