import { Button } from '@/components/ui/button'
import React from 'react'
interface NavProps {
    setFontFamily: React.Dispatch<React.SetStateAction<string>>
}
const Nav = ({ setFontFamily }: NavProps) => {
    return (
        <nav className='flex gap-2 p-1 bg-card'>
            <Button
                onClick={() => setFontFamily("inter")}
                variant={"link"}
            >
                <span>Intern</span>
            </Button>
            <Button
                onClick={() => setFontFamily("workSans")}
                variant={"link"}
            >
                <span>WorkSans</span>
            </Button>
            <Button
                onClick={() => setFontFamily("spaceGrotesk")}
                variant={"link"}
            >
                <span>Space Grotesk</span>
            </Button>
            <Button
                onClick={() => setFontFamily("dmSans")}
                variant={"link"}
            >
                <span>DM Sans</span>
            </Button>
            <Button
                onClick={() => setFontFamily("openSans")}
                variant={"link"}
            >
                <span>Open Sans</span>
            </Button>
        </nav>
    )
}

export default Nav