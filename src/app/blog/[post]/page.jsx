export default function Page({ params }) {
    const markdownContext = require('../../../../content/blog/' + params.post + '.md');
    const Content = markdownContext.react;
    console.log(markdownContext)
    return (
        <>
            <h1>{markdownContext.attributes.title}</h1> 
            <b>{markdownContext.attributes.date}</b>
            <Content />
        </>
    )
}