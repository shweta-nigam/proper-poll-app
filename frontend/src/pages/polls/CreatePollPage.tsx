import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Copy,
  Check,
  Sparkles,
  QrCode,
  ExternalLink,
  Download,
  Share2,
  BarChart2,
} from "lucide-react";

import { createPoll } from "../../api/poll.api.js";
import { drawQRCodeToCanvas, downloadQRCode } from "../../utils/qrGenerator.js";

const CreatePollPage = () => {
  const [loading, setLoading] = useState(false);
  const [createdPollId, setCreatedPollId] = useState("");
  const [copied, setCopied] = useState(false);
  const [pollLink, setPollLink] = useState("");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  // const renderQR = useCallback(
  //   async (canvas: HTMLCanvasElement | null) => {
  //     canvasRef.current = canvas;
  //     if (canvas && pollLink) {
  //       await drawQRCodeToCanvas(canvas, pollLink, {
  //         size: 190,
  //         margin: 2,
  //         darkColor: "#000000",
  //         lightColor: "#ffffff",
  //       });
  //     }
  //   },
  //   [pollLink],
  // );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function generateQR() {
      if (!pollLink || !canvasRef.current) return;

      await drawQRCodeToCanvas(canvasRef.current, pollLink, {
        size: 190,
        margin: 2,
      });
    }

    generateQR();
  }, [pollLink]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    allowAnonymous: true,
    expiryDate: "",
    questions: [
      {
        questionText: "",
        isRequired: true,
        options: [{ text: "" }, { text: "" }],
      },
    ],
  });

  const handleQuestionChange = (questionIndex: number, value: string) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].questionText = value;
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string,
  ) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options[optionIndex].text = value;
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const addOption = (questionIndex: number) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.push({
      text: "",
    });
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          questionText: "",
          isRequired: true,
          options: [{ text: "" }, { text: "" }],
        },
      ],
    });
  };

  const removeQuestion = (questionIndex: number) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions.splice(questionIndex, 1);
    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formData,
        expiryDate: new Date(formData.expiryDate).toISOString(),
      };

      const response = await createPoll(payload);
      const pollId = response.data._id;
      const generatedLink = `${window.location.origin}/polls/${pollId}/respond`;

      setPollLink(generatedLink);
      setCreatedPollId(pollId);
    } catch (error) {
      console.error("Error creating poll:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    if (!pollLink) return;
    try {
      await navigator.clipboard.writeText(pollLink);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const openPoll = () => {
    if (!pollLink) return;
    window.open(pollLink, "_blank");
  };

  const downloadQR = async () => {
    if (!pollLink) return;

    await downloadQRCode(pollLink, `poll-qr-${createdPollId || "code"}.png`);
  };

  const sharePoll = async () => {
    if (!pollLink) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: formData.title || "Check out this poll!",
          text: formData.description || "Participate in my poll",
          url: pollLink,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      copyLink();
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-sm text-[var(--text-secondary)] mb-4 sm:mb-5">
            <Sparkles size={16} />
            Premium Poll Creator
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Create Stunning
            <span className="text-[var(--primary)]"> Polls</span>
          </h1>

          <p className="mt-3 sm:mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
            Build interactive polls, collect responses, and share instantly with
            your audience.
          </p>
        </div>

        {/* Responsive 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Create Poll Form (~65-70% / 7 of 12 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Poll Details */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)]">
                <h2 className="text-2xl font-bold mb-6">Poll Details</h2>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Poll title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl bg-[#181818] border border-[var(--border)] outline-none focus:border-[var(--primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                    required
                  />

                  <textarea
                    placeholder="Poll description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-[#181818] border border-[var(--border)] outline-none resize-none focus:border-[var(--primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                  />

                  <input
                    type="datetime-local"
                    value={formData.expiryDate}
                    onClick={(e) => e.currentTarget.showPicker()}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        expiryDate: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl bg-[#181818] border border-[var(--border)] outline-none focus:border-[var(--primary)] text-[var(--text-primary)]"
                    required
                  />

                  <label className="flex items-center gap-3 text-[var(--text-secondary)] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.allowAnonymous}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          allowAnonymous: e.target.checked,
                        })
                      }
                      className="w-4 h-4 accent-[var(--primary)] rounded cursor-pointer"
                    />
                    Allow anonymous responses
                  </label>
                </div>
              </div>

              {/* Questions List */}
              {formData.questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      Question {questionIndex + 1}
                    </h2>

                    {formData.questions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeQuestion(questionIndex)}
                        className="p-3 rounded-xl bg-[#181818] hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 transition-all cursor-pointer"
                        title="Remove Question"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="space-y-5">
                    <input
                      type="text"
                      placeholder="Enter your question"
                      value={question.questionText}
                      onChange={(e) =>
                        handleQuestionChange(questionIndex, e.target.value)
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-[#181818] border border-[var(--border)] outline-none focus:border-[var(--primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                      required
                    />

                    {/* Options */}
                    <div className="space-y-4">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex gap-3">
                          <input
                            type="text"
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option.text}
                            onChange={(e) =>
                              handleOptionChange(
                                questionIndex,
                                optionIndex,
                                e.target.value,
                              )
                            }
                            className="flex-1 px-5 py-4 rounded-2xl bg-[#181818] border border-[var(--border)] outline-none focus:border-[var(--primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
                            required
                          />

                          {question.options.length > 2 && (
                            <button
                              type="button"
                              onClick={() =>
                                removeOption(questionIndex, optionIndex)
                              }
                              className="px-4 rounded-2xl bg-[#181818] hover:bg-red-500/20 text-[var(--text-secondary)] hover:text-red-400 transition-all cursor-pointer"
                              title="Remove Option"
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => addOption(questionIndex)}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#181818] border border-[var(--border)] hover:border-[var(--primary)] transition-all cursor-pointer text-sm font-medium"
                    >
                      <Plus size={18} />
                      Add Option
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Question Button */}
              <button
                type="button"
                onClick={addQuestion}
                className="w-full py-5 rounded-3xl border-2 border-dashed border-[var(--border)] hover:border-[var(--primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center gap-3 text-lg font-semibold cursor-pointer bg-transparent"
              >
                <Plus size={22} />
                Add Another Question
              </button>

              {/* Submit & Analytics Actions */}
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-3xl text-lg font-bold bg-[var(--primary)] hover:bg-[var(--primary-hover)] transition-all disabled:opacity-60 cursor-pointer shadow-lg hover:shadow-red-900/20"
                >
                  {loading ? "Creating Poll..." : "Create Poll"}
                </button>

                {createdPollId && (
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        `${window.location.origin}/polls/${createdPollId}/analytics`,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="w-full py-4 rounded-3xl text-base font-semibold bg-[#222222] border border-[var(--border)] hover:border-[var(--primary)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BarChart2 size={18} />
                    View Analytics
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Sticky Share Poll Card (~30-35% / 5 of 12 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={createdPollId ? "created" : "empty"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6 shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Share Poll
                  </h3>
                  {createdPollId && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                      Ready
                    </span>
                  )}
                </div>

                {/* QR Code Section */}
                <div className="flex flex-col items-center justify-center py-4">
                  {createdPollId ? (
                    <div className="p-3 bg-white rounded-2xl shadow-inner border border-gray-200 flex items-center justify-center">
                      <canvas ref={canvasRef} className="block rounded-lg" />
                    </div>
                  ) : (
                    <div className="w-48 h-48 rounded-2xl border-2 border-dashed border-[#333333] bg-[#181818] flex flex-col items-center justify-center p-4 text-center">
                      <QrCode size={56} className="text-[#555555] mb-3" />
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Your poll link will appear here after creating the poll.
                      </p>
                    </div>
                  )}
                </div>

                {/* Poll Link Section */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                    Poll Link
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={pollLink}
                      placeholder="https://poll.app/p/abc12"
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[var(--border)] outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] font-mono selection:bg-[var(--primary)] selection:text-white"
                      disabled={!createdPollId}
                    />
                  </div>
                </div>

                {/* Action Buttons Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={copyLink}
                    disabled={!createdPollId}
                    className="py-3 px-4 rounded-xl font-semibold text-sm bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:bg-[#282828] disabled:text-gray-500 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {copied ? (
                      <>
                        <Check size={16} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openPoll}
                    disabled={!createdPollId}
                    className="py-3 px-4 rounded-xl font-semibold text-sm bg-[#181818] hover:bg-[#282828] border border-[var(--border)] hover:border-gray-500 text-[var(--text-primary)] disabled:bg-[#181818] disabled:text-gray-600 disabled:border-transparent disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    Open
                  </button>

                  <button
                    type="button"
                    onClick={downloadQR}
                    disabled={!createdPollId}
                    className="col-span-1 py-3 px-4 rounded-xl font-semibold text-sm bg-[#181818] hover:bg-[#282828] border border-[var(--border)] hover:border-gray-500 text-[var(--text-primary)] disabled:bg-[#181818] disabled:text-gray-600 disabled:border-transparent disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download size={16} />
                    Download QR
                  </button>

                  <button
                    type="button"
                    onClick={sharePoll}
                    disabled={!createdPollId}
                    className="col-span-1 py-3 px-4 rounded-xl font-semibold text-sm bg-[#181818] hover:bg-[#282828] border border-[var(--border)] hover:border-gray-500 text-[var(--text-primary)] disabled:bg-[#181818] disabled:text-gray-600 disabled:border-transparent disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </div>

                {/* Footer Info */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-sm">
                  <div className="text-[var(--text-secondary)]">
                    Responses:{" "}
                    <span className="font-semibold text-[var(--text-primary)]">
                      0
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span>Status:</span>
                    {createdPollId ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        Active <span className="text-xs">🟢</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-400/80 font-semibold">
                        Pending <span className="text-xs">🟡</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePollPage;
