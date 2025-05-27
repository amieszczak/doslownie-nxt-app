
export default function PostPreview({title}: {title: string}) {
    return(
        <div className='w-full h-[50vh] border border-black'>
            <h1>{title}</h1>
        </div>
    )
}