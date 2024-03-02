import React from 'react'
import { Divider } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MyHeader from '@/components/myComponents/MyHeader';
import { codeGoogleAnalytics, codeGtag, codeLayout } from './GACodes';
const ImplementGoogleAnalytics = () => {
    return (
        <main>
            <MyHeader
                title='Google Analytics'
                desc="Implement Google Analytics"
            />
            <Divider className="my-4" />
            <section>
                <h3>Set up .env file.</h3>
                <div>
                    <Snippet
                        hideSymbol
                    >
                        NEXT_PUBLIC_GOOGLE_ID="your tracking id"
                    </Snippet>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 2:</h3>
                <p>Create a gtag.ts file on your root dir.</p>
                <div>
                    <span>gtag.ts</span>
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
                                {codeGtag}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 3:</h3>
                <p>Create a Google Analytics component</p>
                <div>
                    <span>@/app/components/GoogleAnalytics.tsx</span>
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
                                {codeGoogleAnalytics}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 4:</h3>
                <p>GoogleAnalytics component to your root layout.tsx file</p>
                <div>
                    <span>@/app/layout.tsx</span>
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
                                {codeLayout}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ImplementGoogleAnalytics