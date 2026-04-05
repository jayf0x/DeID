import { Github, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Previews } from "./components/Preview";


export const Home = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-h-fit mt-24 w-full flex flex-col items-center justify-center px-6 lg:px-2 gap-8 overflow-hidden"
      >
        <div className="text-center lg:text-left max-w-2xl space-y-4" >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100"
          >

            <img src="logo.png" alt="DeID" className="h-[250px]" />


            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Keep your data private
            </span>
            <p className="text-lg text-indigo-500 dark:text-indigo-300 align-super opacity-80">
              [De-Identification]
            </p>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-2xl text-muted-foreground font-medium"
          >
            <TypeAnimation
              sequence={[
                "Lightning fast De-Identification, fully local",
                2500,
                "Setup once, use everywhere.",
                2500,
                "Narrative coherence across files",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 lg:justify-start text-muted-foreground text-base md:text-lg"
          >
            <MapPin size={24} className="text-primary" /> <span>Local</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:justify-start gap-5 pt-4"
          >
            <a
              href="https://github.com/jayf0x/DeID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center flex-row text-muted-foreground hover:text-primary transition"
            >
              <Github size={24} />
              <span>https://github.com/jayf0x/DeID</span>
            </a>
          </motion.div>
        </div>
        <Previews />
      </motion.section>
    </div>
  );
};

