"use client"
import Link from 'next/link'

export default function blog() {
  const markdownFiles = getBlogPosts();
  const Com = markdownFiles[0].react;
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
  return (
    <div className='flex flex-col gap-3 mx-48 my-48 justify-center items-center'>
      {blogLinks}
    </div>
  )
}

const getBlogPosts = () => {
  const markdownContext = require.context('../../../content/blog', false, /^\.\/.*\.md$/);
  const markdownFiles = markdownContext
    .keys()
    .map((filename) => {
      const blogData = markdownContext(filename)
      blogData.filename = filename.slice(2, -3)
      return blogData
    })

  return markdownFiles;
}