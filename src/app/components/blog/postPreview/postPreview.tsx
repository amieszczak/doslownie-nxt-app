import Image from "next/image";
import Link from "next/link";

export default function PostPreview({title, content, photo, url}: {title: string, content: string, photo?: string, url: string}) {
    return(
        <Link href={url} className='w-full h-[50vh] border border-black flex '>
            {photo 
            && 
            <div className='w-1/2 h-full'>
                <Image src={photo} alt='' width={1000} height={1000} className='w-full h-full object-cover'/>
            </div>}
            <div className='w-1/2 overflow-hidden p-10'>
                <h1 className='text-3xl mb-10'>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Link>
    )
}