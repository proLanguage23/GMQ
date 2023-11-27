import React from "react";
import { motion } from "framer-motion";

function EntryForm() {
  return (
    <motion.div
      className="border bg-white rounded overflow-auto md:w-2/3 w-full p-3 m-2 h-[90vh] mt-11"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3
      }}
      viewport={{
        once: true,
      }}
    >
      here is a entry form
    </motion.div>
  );
}

export default EntryForm;