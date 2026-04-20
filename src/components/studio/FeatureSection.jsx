import React from "react";
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="py-24 lg:py-40 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/2] overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e3e9c11fd_generated_94f9f0bd.png"
              alt="Cocktail being poured in premium bar setting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="text-xs tracking-widest uppercase text-primary font-medium">
                Case Study
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-tight">
                From concept to seven figures.
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-lg">
              Mozwell Studios launched Mozwell Claremont from concept to opening, developing the brand identity, marketing strategy, and advertising systems behind the restaurant. Within its first year the concept generated $1.5M+ in revenue.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-lg">
              Advertising campaigns produced 1.43M impressions, 34,700 clicks, $0.30 CPC. Weekly events promoted through paid media included jazz nights, trivia nights, and live DJ programming.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-foreground">1.43M</p>
                <p className="text-xs text-muted-foreground mt-1">Impressions</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-foreground">34.7K</p>
                <p className="text-xs text-muted-foreground mt-1">Clicks</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-foreground">$0.30</p>
                <p className="text-xs text-muted-foreground mt-1">CPC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}