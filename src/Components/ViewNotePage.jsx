import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { motion, AnimatePresence } from "framer-motion";

const ViewNotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("saved_notes") || "[]");
    const foundNote = stored.find((n) => String(n.id) === id);
    if (!foundNote) {
      alert("Note not found!");
      navigate("/saved");
    } else {
      setNote(foundNote);
    }
  }, [id, navigate]);

  const handleDownloadPdf = () => {
    if (!note) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(note.title, 10, 20);
    const lines = doc.splitTextToSize(note.content, 180);
    doc.text(lines, 10, 35);
    doc.save(`${note.title.replace(/\s+/g, "_")}.pdf`);

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  if (!note) return null;

  return (
    <motion.div
      className="min-h-screen bg-[#0f0f1b] text-white p-6 md:p-10 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto bg-[#1c1c2b] rounded-3xl shadow-[0_0_30px_#00f0ff66] p-6 relative ">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#2e2e3f] text-green-300 px-4 py-2 rounded-xl text-sm shadow-[0_0_12px_#00f0ff55]"
            >
              ✅ PDF downloaded!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-400">{note.title}</h1>
          <Link
            to="/saved"
            className="bg-[#2e2e3f] text-cyan-200 px-4 py-2 rounded shadow hover:bg-cyan-700"
          >
            ← Back
          </Link>
        </div>

        <p className="text-sm text-cyan-500 mb-4">📅 Date: {note.date}</p>

        <div className="bg-[#0f0f1b] border border-cyan-500 rounded-xl shadow p-4 text-cyan-200 whitespace-pre-wrap max-h-[70vh] overflow-auto">
          {note.content}
        </div>

        <div className="mt-6">
          <button
            onClick={handleDownloadPdf}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Download PDF
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewNotePage;
