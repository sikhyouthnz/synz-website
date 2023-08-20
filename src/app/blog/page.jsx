"use client"
// import Head from "next/head"
// import { Component } from 'react'
// import { attributes, react as HomeContent } from '../../../content/home.md'

export default function blog() {
  const markdownFiles = getBlogPosts();

  const Com = markdownFiles[0].react;
  console.log(typeof com)
  return (
    <>
      <Com />
    </>
  )
}

const getBlogPosts = () => {
  const markdownContext = require.context('../../../content/blog', false, /^content\/blog.*\.md$/);
  const markdownFiles = markdownContext
  .keys()
  .map((filename) => markdownContext(filename))

  return markdownFiles;
}

// export default class Home extends Component {
//   render() {
//     const mdFiles = require.co
//     let { title, cats } = attributes
//     return (
//       <>
//         <Head>
//           <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
//         </Head>
//         <article>
//           <h1>{title}</h1>
//           <HomeContent />
//           <ul>
//             {cats.map((cat, k) => (
//               <li key={k}>
//                 <h2>{cat.name}</h2>
//                 <p>{cat.description}</p>
//               </li>
//             ))}
//           </ul>
//         </article>
//       </>
//     )
//   }
// }