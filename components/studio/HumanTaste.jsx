import React from "react";
import { motion } from "framer-motion";

export default function HumanTaste() {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground leading-none"
        >
          Human taste +<br />
          <span className="italic text-primary">modern tools.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-base lg:text-lg max-w-lg mx-auto mt-10 leading-relaxed"
        >
          Great hospitality brands are built through culture, design, and storytelling. Technology simply helps them scale.
        </motion.p>
      </div>
    </section>
  );
}