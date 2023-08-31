"use client"
import Link from 'next/link'

export default function blog() {
  const markdownFiles = getBlogPosts();
  const blogLinks = markdownFiles.map((data) => {
    const link = "/blog/" + data.filename
    return (
      <Link className='w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-md' key={data.filename} href={link}>
        <div className='flex justify-between items-center'>
          <div className='font-normal text-2xl'>{data.attributes.title}</div>
          <div className='text-zinc-500'>{data.attributes.date}</div>
        </div>
        <div className='text-zinc-600'>{data.attributes.summary}</div>
      </Link>
    )
  })

  console.log(blogLinks)

  if (blogLinks.length == 0) {
    return (
      <div className='flex flex-col gap-3 mx-4 md:mx-36 lg:mx-48 my-5'>
        <div className='text-3xl'>Blog</div>
        <div className='flex flex-col gap-3 my-24 md:my-36'>
          Blogs coming soon.
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-3 mx-4 md:mx-36 lg:mx-48 my-5'>
      <div className='text-3xl'>Blog</div>
      <div className='flex flex-col gap-3 my-4 md:my-36'>
        {blogLinks}
      </div>
    </div>
  )
}

const getBlogPosts = () => {
  try {
    const markdownContext = require.context('../../../content/blog', false, /^\.\/.*\.md$/);
    const markdownFiles = markdownContext
      .keys()
      .map((filename) => {
        const blogData = markdownContext(filename)
        blogData.filename = filename.slice(2, -3)
        return blogData
      })
    return markdownFiles;
  } catch (e) {
    return []
  }
}