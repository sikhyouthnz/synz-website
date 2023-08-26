export default function Page({ params }) {
    const markdownContext = require('../../../../content/blog/' + params.post + '.md');
    const Content = markdownContext.react;
    console.log(markdownContext)
    return (
        <div className="flex flex-col justify-center items-center p-7 md:px-60 text-lg">
            <div className="font-medium text-3xl">{markdownContext.attributes.title}</div>
            <br/>
            <div className="font-medium text-lg text-gray-500">{markdownContext.attributes.date}</div>
            <div className="font-normal text-lg text-gray-600">{markdownContext.attributes.summary}</div>
            <br/>
            <Content />
        </div>
    )
}