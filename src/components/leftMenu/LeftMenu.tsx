
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from './ProfileCard'
import Ad from '../Ad'

export default function LeftMenu({type}:{type:"home"|"profile"}) {
  return (
    <div className='flex flex-col gap-6'>
      {type==="home" && <ProfileCard/> }
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gary-500 flex flex-col gap-2 '>
        <Link href="/myPost" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/posts.png" alt="" width={20} height={20}/>
        <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
  
        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/activity.png" alt="" width={20} height={20}/>
        <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/market.png" alt="" width={20} height={20}/>
        <span>Market Place</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/events.png" alt="" width={20} height={20}/>
        <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
    
        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/albums.png" alt="" width={20} height={20}/>
        <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
    
        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/videos.png" alt="" width={20} height={20}/>
        <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/news.png" alt="" width={20} height={20}/>
        <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

   
        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/courses.png" alt="" width={20} height={20}/>
        <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
      

        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/lists.png" alt="" width={20} height={20}/>
        <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>


        <Link href="/" className='flex items-center gap-4 p-2 hover:bg-slate-100'>
        <Image src="/settings.png" alt="" width={20} height={20}/>
        <span>Settings</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
      </div>
      <Ad size={'sm'}/>
    </div>
  )
}
