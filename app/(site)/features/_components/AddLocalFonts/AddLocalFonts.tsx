import MyHeader from '@/components/myComponents/MyHeader'
import React from 'react'
import { Divider } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { LocalFontComponent } from './LocalFontComponent';
const AddLocalFonts = () => {
    return (
        <main>
            <MyHeader
                title='Add local fonts'
                desc='If you are wondering how to add local fonts to your next app then heres how.'
            />
            <Divider className="my-4" />
            <section>
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
                                {LocalFontComponent}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AddLocalFonts