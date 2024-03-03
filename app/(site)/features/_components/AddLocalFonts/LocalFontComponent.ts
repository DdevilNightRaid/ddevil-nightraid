export const LocalFontComponent = `
import React from 'react'
import localFont from "next/font/local"

const myFont = localFont({
    src: "/path_to_your/font.woff2"
})

const DisplayMyFontComponent = () => {
    return (
        <div>
            <h2 className={\`$\{myFont.className\} text-xl\`}>Use my font</h2>
        </div>
    )
}

export default DisplayMyFontComponent
`