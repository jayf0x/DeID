
import { motion } from "framer-motion";



const URLS = [
    '/preview.png',
    '/logo.png',
]


// TODO: This needs to be a smooth carousel with faded edges on the side
// - needs to be responsible design so that on mobile it's 1 or ~1.3 image on the screen
// - images need to scale with original aspect ratio 
// - overlay white gradient on both sides
// - modern Google like design
export const Previews = () => <div className="flex flex-row gap-2 w-[40%] lg:h-[300px]">
    {URLS.map((url, index) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
            className="relative flex justify-center"
        >

            <div key={`preview-${url}`}>
                <img
                    src={url}
                    alt={url}
                    className="relative  h-full w-auto rounded-sm shadow-sm object-fit "
                />
            </div>
        </motion.div>
    ))}
</div>
