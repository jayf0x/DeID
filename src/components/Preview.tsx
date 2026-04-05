
import { motion } from "framer-motion";



const URLS = [
    '/preview.png',
    '/logo.png',
]



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
                    className="relative  h-full w-auto rounded-sm border-2 border-blue-500 shadow-sm object-fit "
                />
            </div>
        </motion.div>
    ))}
</div>
