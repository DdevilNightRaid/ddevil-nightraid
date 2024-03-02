import React from 'react'
import { Divider } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { myMailComponent, sendmailCode } from './RequiredCodes';
const Nodemailer = () => {
    return (
        <main>
            <header className='flex flex-col'>
                <h2 className='text-base'>Component</h2>
                <h1 className='text-3xl'>Node mailer</h1>
                <Divider className="my-4" />
                <div>
                    <span className='text-base font-semibold'>
                        Purpose
                    </span>
                    <p>
                        Send email from your site.
                    </p>
                </div>
            </header>
            <Divider className="my-4" />
            <section className='flex flex-col gap-4'>
                <h3 className='text-base font-semibold'>Step 1:</h3>
                <p>Install dependencies:</p>
                <div>
                    <Snippet
                        hideSymbol
                    >
                        npm i nodemailer
                    </Snippet>
                </div>
                <h3>Set up .env file.</h3>
                <div>
                    <Snippet
                        hideSymbol
                    >
                        GMAIL_KEY="your app password from gmail"
                    </Snippet>
                </div>
            </section>
            <Divider className="my-4" />
            <section className='flex flex-col gap-4'>
                <h3 className='text-base font-semibold'>Step 2:</h3>
                <p>Create a sendmail.ts file on your lib dir, to house the main mailing function</p>
                <div>
                    <span>@/lib/sendmail.ts</span>
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
                                {sendmailCode}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section className='flex flex-col gap-4'>
                <h3 className='text-base font-semibold'>Step 3:</h3>
                <p>Now you can use the function in your component.</p>
                <div>
                    <span>@/lib/MyMailComponent.tsx</span>
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
                                {myMailComponent}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Nodemailer