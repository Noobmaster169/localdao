"use client"

import Image from 'next/image'
import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import { ICommunity } from '@/models/community.models'
import CommunityFocusedView from './CommunityFocusedView'

type communityCardProps = {
  community: ICommunity
}

const CommunityCard = ({community}: communityCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
      className="
      flex flex-col outline-[#40A4FF] w-full h-full rounded-lg border-[#40A4FF] border-[3px] shadow-[0_0_30px_#40A4FF] items-center justify-center
      hover:cursor-pointer transform transition duration-300 hover:-translate-y-4 hover:shadow-blue-500 pt-8 px-4 pb-4 z-15 bg-[#051650] bg-opacity-50"
      onClick={() => setIsOpen(true)}
      >
        <div className="bg-clear flex flex-col items-center justify-center">
        <Image
          src={community.imageUrl}
          alt="coverImage"
          width={250}
          height={250}
          className="rounded-t-md h-[250px] w-[250px] object-cover"
        />
        {/* Text */}
        <div className="flex flex-col items-center justify-center px-2 pt-6">
          <h1 className="text-2xl font-semibold line-clamp-1">{community.title}</h1>
        </div>
        </div>
      </div>
      <CommunityFocusedView community={community} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default CommunityCard;