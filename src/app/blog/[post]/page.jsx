export default function Page({ params }) {
    const markdownContext = require('../../../../content/blog/' + params.post + '.md');
    const Content = markdownContext.react;
    console.log(markdownContext)
    return (
        <div className="p-7 md:px-60 text-lg">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="font-medium text-3xl">{markdownContext.attributes.title}</div>
                <div className="font-medium text-lg text-gray-500">{markdownContext.attributes.date}</div>
                <div className="font-normal text-lg text-gray-600 text-center">{markdownContext.attributes.summary}</div>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>
            <Content />
        </div>
    )
}