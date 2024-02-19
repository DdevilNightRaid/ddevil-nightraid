"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts';
interface AsideProps {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}
const Aside = ({ setDisplayContent }: AsideProps) => {
  const isMobile = useMediaQuery("(max-width: 720px)")
  const pathname = usePathname();
  //States
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isResetting, setIsResetting] = useState(false);

  // Refs
  const asideRef = useRef<ElementRef<"aside">>(null);
  const isResizingRef = useRef(false);
  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile])
  // functions 
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }
  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef) return;
    let newWidth = e.clientX
    if (newWidth < 100) newWidth = 100;
    if (newWidth > 800) newWidth = 800;

    if (asideRef.current) {
      asideRef.current.style.width = `${newWidth}px`
    }

  }
  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }
  const resetWidth = () => {
    if (asideRef.current) {
      setIsResetting(true)
      asideRef.current.style.width = "12rem"
      setIsCollapsed(false)
      setTimeout(() => setIsResetting(false), 300)
    }
  }
  const collapse = () => {
    if (asideRef.current) {
      console.log(asideRef.current)
      setIsResetting(true)
      asideRef.current.style.width = "0"
      setIsCollapsed(true)
      setTimeout(() => setIsResetting(false), 300)
    }
  }
  return (
    <>
      <aside
        ref={asideRef}
        className={cn(
          "relative group/aside h-full w-[12rem] bg-card rounded-sm",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        {/* Aside Controls  */}
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className='opacity-0 group-hover/aside:opacity-60 h-full w-2 bg-secondary absolute top-0 right-0 transition-all duration-1 cursor-ew-resize'
        />
        <div
          role={"button"}
          onClick={collapse}
          className='absolute top-1 right-4 h-7 w-7 flex items-center justify-center bg-secondary-foreground hover:cursor-pointer'
        >
          <ChevronsLeft className='h-4 w-4' />
        </div>

        {
          !isCollapsed && (
            <div className='flex flex-col w-full mt-10 pr-3 gap-2 transition-all duration-300'>
              <Button
                onClick={() => setDisplayContent("colors")}
                variant="link"
                size={"link"}
                className="text-left"
              >
                <span>Color Pallet</span>
              </Button>
              <Button
                variant="link"
                size={"link"}
                onClick={() => setDisplayContent("fontsizes")}
              >
                <span>Font Sizes</span>
              </Button>
              <Button
                variant="link"
                size={"link"}
                onClick={() => setDisplayContent("favcolors")}
              >
                <span>Colors</span>
              </Button>
            </div>
          )
        }
      </aside>
      {
        isCollapsed && (
          <div
            role={"button"}
            onClick={resetWidth}
            className='h-7 w-7 flex items-center justify-center bg-secondary-foreground hover:cursor-pointer'
          >
            <ChevronsRight className='h-4 w-4' />
          </div>
        )
      }
    </>
  )
}

export default Aside