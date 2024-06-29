export default function Page({ params }) {
    const markdownContext = require('../../../../content/blog/' + params.post + '.md');
    const Content = markdownContext.react;

    return (
        <div className="p-7 md:px-60 text-lg flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="font-medium text-3xl">{markdownContext.attributes.title}</div>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>
            <div className="prose lg:prose-xl">
                <Content />
            </div>
        </div>
    )
}
