import Image from 'next/image'
import { useRouter } from 'next/router'
import Rating from '../util/Rating'
import { useContext, useState, useEffect } from 'react'
import { CourseContext } from '@/context/CourseContext'

const PlaylistCard = ({ playlist }: any) => {
  const { id, name, description, imageUrl, categoryId, noOfVotes, rating } =
    playlist
  const router = useRouter()
  const { videos } = useContext(CourseContext)
  
  // calculate total views of all videos where playlistId = id
  const videoCount = videos.filter((video: any) => video.playlistId === id).length
  
  const handleClick = () => {
    router.push(`/courses/playlist/${id}`)
  }
  return (
    <div
      onClick={handleClick}
      className='flex cursor-pointer  flex-col hover:scale-105  transition space-y-4  bg-white dark:bg-zinc-900 rounded-xl w-full  p-4 overflow-hidden'
    >
      <div className='w-full space-y-2'>
        <div className='relative w-full h-24 overflow-hidden aspect-w-3 aspect-h-2'>
          <Image
            src={imageUrl}
            alt={name}
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
          <div className='absolute bottom-0 z-10 w-full px-4 text-sm text-white rounded-b-xl backdrop-blur-sm bg-black/30'>
            <div className='flex items-center justify-between'>
              <span className='material-icons'>playlist_play</span>
              <span className='ml-2 text-lg'>{videoCount} videos</span>
            </div>
          </div>
        </div>

        <h3 className='items-center font-medium font-inter'>{name}</h3>
        {/* <Rating value={rating} noOfVotes={noOfVotes} /> */}
        <div className=''></div>
      </div>
    </div>
  )
}

export default PlaylistCard
