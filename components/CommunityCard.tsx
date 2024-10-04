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
      flex flex-col outline-[#40A4FF] w-full rounded-lg border-[#40A4FF] border-[3px] shadow-[0_0_20px_#40A4FF]
      hover:cursor-pointer transform transition duration-300 hover:-translate-y-4 hover:shadow-blue-500 bg-black"
      onClick={() => setIsOpen(true)}
      >
        <div className="bg-clear">
        <Image
          src={community.imageUrl}
          alt="coverImage"
          width={400}
          height={400}
          className="rounded-t-md h-[250px] h-max-[350px] object-cover"
        />
        {/* Text */}
        <div className="flex flex-col p-4">
          <h1 className="text-2xl font-semibold line-clamp-1 bg-black">{community.title}</h1>
        </div>
        </div>
      </div>
      <CommunityFocusedView community={community} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default CommunityCard;