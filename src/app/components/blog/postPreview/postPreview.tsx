import Image from "next/image";
import Link from "next/link";
import category from '../../../../../public/blog/category.svg';
import tag from '../../../../../public/blog/tag.svg';

type Taxonomy = {
    name: string;
    slug: string;
}

export default function PostPreview({title, content, photo, url, categories, tags}: {title: string, content: string, photo?: string, url: string, categories?: Taxonomy[], tags?: Taxonomy[]}) {
        
    return(
        <div className='w-full h-[50vh] border border-black flex '>
            {photo 
            && 
            <div className='w-1/2 h-full'>
                <Image src={photo} alt='' width={1000} height={1000} className='w-full h-full object-cover'/>
            </div>}
            <div className='w-1/2 overflow-hidden p-10 flex flex-col'>
                <h2 className='text-3xl mb-2'>{title}</h2>
                <div className='h-1/2 overflow-hidden' dangerouslySetInnerHTML={{ __html: content }} />
                <div className='flex items-start'>
                    <div className="w-1/2">
                        <Image src={category} alt='kategoria'/>
                        <div className='flex flex-col'>
                            {categories?.map((item, index) => {
                                return (
                                    <Link key={index} className='whitespace-nowrap' href={item.slug}>{item.name}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image src={tag} alt='tag'/>
                        <div className='flex flex-col'>
                            {tags?.map((item, index) => {
                                return (
                                    <Link key={index} className='whitespace-nowrap' href={item.slug}>{item.name}</Link>
                                )
                            })}
                        </div>
                    </div>    
                </div>
                <Link href={url}>Dowiedz się więcej</Link>   
            </div>
        </div>
    )
}