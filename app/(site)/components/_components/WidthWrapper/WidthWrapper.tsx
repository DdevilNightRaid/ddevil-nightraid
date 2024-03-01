import React from 'react'
import { Divider } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyBlock } from 'react-code-blocks';
const code = `
import React from 'react'
import { cn } from './utils';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn(
      'mx-auto w-full max-w-screen-xl px-2.5 md:px-20 h-full',
      className,
    )}>
      {children}
    </div>
  )
}
export default MaxWidthWrapper
`
const exampleCode = `
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const ExampleComponent = () => {
  return (
    <MaxWidthWrapper className="bg-gray-200 p-4">
      <h1 className="text-2xl">Example Content</h1>
      <p>This is an example of using the MaxWidthWrapper component.</p>
    </MaxWidthWrapper>
  );
};

export default ExampleComponent;

`
const WidthWrapper = () => {
  return (
    <main className=''>
      <header className='flex flex-col'>
        <h2 className='text-base'>Component</h2>
        <h1 className='text-3xl'>MaxWidthWrapper</h1>
        <Divider className="my-4" />
        <div>
          <span className='text-base font-semibold'>
            Purpose
          </span>
          <p>
            This component is designed to provide a responsive container with
            a maximum width for your project's content. It ensures that your content doesn't stretch too wide on larger screens, improving readability and maintaining a consistent design aesthetic.
          </p>
        </div>
      </header>
      <Divider className="my-4" />
      <section className='flex flex-col gap-4'>
        <h3 className='text-base font-semibold'>Props:</h3>
        <div className='flex flex-col gap-2'>
          <div>
            <h3 className='font-medium'>1. children (required):</h3>
            <p className='ml-2'>
              This is a React node that represents the content you want to wrap within the MaxWidthWrapper.
              It can be any valid React element or a string.
            </p>
          </div>
          <div>
            <h3 className='font-medium'>2. className (optional):</h3>
            <p className='ml-2'>
              This prop allows you to add additional CSS classes to the MaxWidthWrapper.
              This is useful if you want to customize the styling of the wrapper beyond the default styles applied by the component.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-base font-semibold'>Usage:</h3>
          <div>
            <Snippet
              hideSymbol
              className='flex flex-col-reverse items-start justify-start gap-0 w-fit rounded-md pb-0 px-0'
            >
              <SyntaxHighlighter
                language="tsx"
                style={atomDark}
                customStyle={{
                  padding: '10px'
                }}
              >
                {code}
              </SyntaxHighlighter>
            </Snippet>
          </div>
        </div>
      </section>
      <Divider className="my-4" />
      <div>
        <h3 className='text-base font-semibold'>Example:</h3>
        <div>
          <Snippet
            hideSymbol
            className='flex flex-col-reverse items-start justify-start gap-0 w-fit rounded-md pb-0 px-0'
          >
            <SyntaxHighlighter
              language="tsx"
              style={atomDark}
              customStyle={{
                padding: '10px'
              }}
            >
              {exampleCode}
            </SyntaxHighlighter>
          </Snippet>
        </div>
      </div>
      <Divider className="my-4" />
      <div className='mt-5 mb-10 p-4 border rounded-sm'>
        <h3 className='text-base font-semibold'>Note:</h3>
        <p className='text-bold'>You can grab the cn function here</p>
      </div>
    </main>
  )
}

export default WidthWrapper