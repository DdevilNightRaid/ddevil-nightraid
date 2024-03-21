import MyHeader from '@/components/myComponents/MyHeader'
import { Divider } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AccertinityUiInput, TailwindConfigTS, TemplateFormComponent } from './formcode';
const AccertinityUiForm = () => {
    return (
        <main>
            <MyHeader
                title='Starter Form Kit'
                desc="This form provides animated form components with react hook forms so you can get started soon to implement your backend, I have used Aceternity UI, Shadcn UI and React hook forms. It can be used to allow customers to book services or contact purpose"
            />
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 1:</h3>
                <p>Install packages:</p>
                <div>
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
                                yarn add -D framer-motion clsx tailwind-merge @radix-ui/react-label @tabler/icons-react @hookform/resolvers react-hook-form sonner zod
                            </SyntaxHighlighter>
                        </Snippet>
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
                                npx shadcn-ui@latest add button calendar form popover 
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 2:</h3>
                <p>Update tailwind.config.ts</p>
                <div>
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
                                {TailwindConfigTS}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 3:</h3>
                <p>Acertinity Ui input.tsx file with some changes</p>
                <div>
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
                                {AccertinityUiInput}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section>
                <h3 className='text-base font-semibold'>Step 4:</h3>
                <p>Now your template from component</p>
                <div>
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
                                {TemplateFormComponent}
                            </SyntaxHighlighter>
                        </Snippet>
                    </div>
                </div>
            </section>
            <Divider className="my-4" />
            <section className='mb-10'>
                <h3 className='text-base font-semibold'>Step 5:</h3>
                <p>Please check out features section's nodemailer tab to implement send email functionality</p>
                <div>
                    <Link href="/features" className='font-bold hover:underline'>Features tab</Link>
                </div>
            </section>
        </main>
    )
}

export default AccertinityUiForm