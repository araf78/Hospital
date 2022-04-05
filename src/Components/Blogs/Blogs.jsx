import React from 'react';

const Blogs = () => {
    return (
        <div className="flex ml-20 mr-20">
            <div className="bg-green-200 mr-20 mt-10 border-2 border-orange-500 p-4 rounded-lg shadow-xl">
                <h2 className="text-3xl mb-3">Q1. What is Semantic Tag ?</h2>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Semantic tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.</p>
            </div>
            <div className="bg-green-200 mt-10 border-2 border-orange-500 p-4 rounded-lg shadow-xl">
                <h2 className="text-3xl mb-3">Q2. Difference between to Inline Block or Inline Block elements ?</h2>
                <p> The major difference is that inline-block allows to set a width and height on the element.Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements don’t start from a new line and don’t have top and bottom margins as block elements have.They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it.</p>
            </div>
        </div>
    );
};

export default Blogs;