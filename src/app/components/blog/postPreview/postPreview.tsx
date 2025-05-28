import Image from "next/image"

export default function PostPreview({title, content, photo}: {title: string, content: string, photo?: string}) {
    return(
        <div className='w-full h-[50vh] border border-black flex '>
            {photo 
            && 
            <div className='w-1/2 h-full'>
                <Image src={photo} alt='' width={100} height={100} className='w-full h-full object-cover'/>
            </div>}
            <div className='w-1/2 overflow-hidden p-10'>
                <h1 className='text-3xl mb-10'>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}