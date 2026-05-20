import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaDownload, FaTrashAlt, FaArrowLeft } from "react-icons/fa";

const SavedNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchId, setSearchId] = useState("");
  const [tooltip, setTooltip] = useState(null); // { type: 'delete' | 'download', id, title }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("saved_notes") || "[]");
    setNotes(stored.reverse());
  }, []);

  const filtered = notes.filter((note) => {
    const matchesDate = !searchDate || note.date === searchDate;
    const matchesId = !searchId || String(note.id).includes(searchId);
    return matchesDate && matchesId;
  });

  const showTooltip = (type, id, title = "") => {
    if (type === "download") {
      setTooltip({ type, id });
      setTimeout(() => setTooltip(null), 2000);
    } else {
      setTooltip({ type, id, title });
    }
  };

  const handleDownloadTxt = (note) => {
    const blob = new Blob([note.content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${note.title.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showTooltip("download", note.id);
  };

  const confirmRemove = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("saved_notes", JSON.stringify(updatedNotes));
    setTooltip(null);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0f0f1b] text-white p-6 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto bg-[#1c1c2b] rounded-3xl shadow-[0_0_30px_#00f0ff66] p-6 relative mt-23">

        {/* Tooltip Animation */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              key={tooltip.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#2e2e3f] text-cyan-200 px-6 py-3 rounded-xl shadow-[0_0_20px_#00f0ff99] text-sm z-50"
            >
              {tooltip.type === "download" ? (
                <span>✅ Download started!</span>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <p>🗑 Delete <strong>{tooltip.title}</strong>?</p>
                  <div className="flex gap-3 mt-1">
                    <button
                      onClick={() => confirmRemove(tooltip.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setTooltip(null)}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row gap-4">
          <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-md">📚 Saved Notes</h1>
          <Link
            to="/notes"
            className="bg-[#2e2e3f] text-cyan-200 px-4 py-2 rounded shadow hover:bg-cyan-700 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Notes
          </Link>
        </div>

        {/* Search Inputs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex flex-col text-cyan-300 w-full md:w-auto max-w-xs">
            <label className="text-sm mb-1">Search by ID:</label>
            <input
              type="text"
              placeholder="Enter Note ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="px-3 py-2 rounded bg-[#2e2e3f] text-cyan-200 outline-none w-full"
            />
          </div>

          <div className="flex flex-col text-cyan-300 w-full md:w-auto max-w-xs">
            <label className="text-sm mb-1">Search by Date:</label>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="px-3 py-2 rounded bg-[#2e2e3f] text-cyan-200 outline-none w-full"
            />
          </div>
        </div>

        {/* Notes List */}
        {filtered.length > 0 ? (
          <div className="grid gap-5">
            {filtered.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-[#2e2e3f] p-5 rounded-xl text-cyan-300 shadow-[0_0_12px_#00f0ff22]"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-cyan-400">{note.title}</h2>
                  <span className="text-xs text-cyan-500">
                    ID: {String(note.id).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <Link
                    to={`/view/${note.id}`}
                    className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm shadow"
                  >
                    <FaEye /> View
                  </Link>
                  <button
                    onClick={() => handleDownloadTxt(note)}
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded text-sm shadow"
                  >
                    <FaDownload /> Download
                  </button>
                  <button
                    onClick={() => showTooltip("delete", note.id, note.title)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm shadow"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-cyan-400 text-center mt-10">📬 No notes found</p>
        )}
      </div>
    </motion.div>
  );
};

export default SavedNotesPage;
