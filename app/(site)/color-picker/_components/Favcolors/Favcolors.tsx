import FavColorAccordion from '@/components/FavColorAccordion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { blackVar } from '@/lib/constants/Colors'
import MaxWidthWrapper from '@/lib/MaxWidthWrapper'

const Favcolors = () => {

    return (
        <MaxWidthWrapper className='px-5'>
            <h2>Some of the colors that I use.</h2>
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Black</AccordionTrigger>
                        <AccordionContent>
                           <FavColorAccordion colorVar={blackVar}/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </MaxWidthWrapper>
    )
}

export default Favcolors