import React from 'react'
import { useState, useEffect } from 'react'
import {Container , PostCard} from '../components'
import appwriteServiceInstance from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteServiceInstance.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        .catch((error) => {
            console.error("Error fetching posts:", error)
        })
    },[])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap justify-between items-center mb-8'>
        {posts.map((post) => {
            <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <PostCard post={post} />
                </div>
            })}
        </div>

      </Container>
    </div>
  )
}

export default AllPosts
