
import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import {
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  createResponse,
} from "../../api/response.api.js";

import {
  getSinglePoll,
} from "../../api/poll.api.js";

interface PollOption {
  text: string;
}

interface PollQuestion {
  questionText: string;
  options: PollOption[];
}

interface PollData {
  _id: string;
  title: string;
  description: string;
  questions: PollQuestion[];
}

function ResponsePage() {
  const { pollId } = useParams();

  const [poll, setPoll] =
    useState<PollData | null>(null);

  const [selectedOption, setSelectedOption] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const data =
          await getSinglePoll(
            pollId as string
          );

        setPoll(data.data || data);
      } catch (err) {
        console.error(err);

        setError(
          "Failed to load poll"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPoll();
  }, [pollId]);

  const handleSubmit = async () => {
    if (!selectedOption) {
      return setError(
        "Please select an option"
      );
    }

    try {
      setSubmitting(true);

      setError("");

      await createResponse({
        pollId: pollId as string,
        selectedOption,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to submit response"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
        style={{
          background:
            "var(--bg-primary)",
        }}
      >
        <Loader2
          className="
            animate-spin
          "
          size={40}
          color="white"
        />
      </div>
    );
  }

  if (!poll) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-xl
          font-semibold
        "
        style={{
          background:
            "var(--bg-primary)",
          color:
            "var(--text-primary)",
        }}
      >
        Poll not found
      </div>
    );
  }

  return (
    <div
      className="
        min-h-screen
        px-4
        py-12
        flex
        items-center
        justify-center
      "
      style={{
        background:
          "var(--bg-primary)",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          w-full
          max-w-3xl
          rounded-3xl
          border
          p-8
          md:p-10
          shadow-2xl
        "
        style={{
          background:
            "var(--bg-card)",
          borderColor:
            "var(--border)",
        }}
      >
        {submitted ? (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-16
              text-center
            "
          >
            <div
              className="
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
              "
              style={{
                background:
                  "rgba(192, 36, 39, 0.15)",
              }}
            >
              <CheckCircle2
                size={48}
                color="#c02427"
              />
            </div>

            <h2
              className="
                text-3xl
                font-bold
                mb-3
              "
              style={{
                color:
                  "var(--text-primary)",
              }}
            >
              Response Submitted
            </h2>

            <p
              className="
                text-base
              "
              style={{
                color:
                  "var(--text-secondary)",
              }}
            >
              Thank you for participating
              in this poll.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  px-4
                  py-1.5
                  text-sm
                  font-medium
                  mb-5
                "
                style={{
                  background:
                    "rgba(192, 36, 39, 0.12)",
                  color:
                    "var(--primary)",
                }}
              >
                Live Poll
              </div>

              <h1
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  mb-4
                "
                style={{
                  color:
                    "var(--text-primary)",
                }}
              >
                {poll.title}
              </h1>

              <p
                className="
                  text-lg
                  leading-relaxed
                "
                style={{
                  color:
                    "var(--text-secondary)",
                }}
              >
                {poll.description}
              </p>
            </div>

            {poll.questions?.map(
              (
                question,
                index
              ) => (
                <div
                  key={index}
                  className="mb-8"
                >
                  <h2
                    className="
                      text-xl
                      font-semibold
                      mb-5
                    "
                    style={{
                      color:
                        "var(--text-primary)",
                    }}
                  >
                    {
                      question.questionText
                    }
                  </h2>

                  <div className="space-y-4">
                    {question.options.map(
                      (
                        option,
                        optionIndex
                      ) => {
                        const isSelected =
                          selectedOption ===
                          option.text;

                        return (
                          <motion.button
                            whileHover={{
                              scale: 1.01,
                            }}
                            whileTap={{
                              scale: 0.99,
                            }}
                            key={
                              optionIndex
                            }
                            onClick={() =>
                              setSelectedOption(
                                option.text
                              )
                            }
                            className="
                              w-full
                              rounded-2xl
                              border
                              p-5
                              text-left
                              transition-all
                              duration-300
                            "
                            style={{
                              borderColor:
                                isSelected
                                  ? "var(--primary)"
                                  : "var(--border)",

                              background:
                                isSelected
                                  ? "rgba(192, 36, 39, 0.12)"
                                  : "transparent",
                            }}
                          >
                            <div
                              className="
                                flex
                                items-center
                                justify-between
                              "
                            >
                              <span
                                className="
                                  text-base
                                  font-medium
                                "
                                style={{
                                  color:
                                    "var(--text-primary)",
                                }}
                              >
                                {
                                  option.text
                                }
                              </span>

                              <div
                                className="
                                  h-5
                                  w-5
                                  rounded-full
                                  border-2
                                  flex
                                  items-center
                                  justify-center
                                "
                                style={{
                                  borderColor:
                                    isSelected
                                      ? "var(--primary)"
                                      : "#555",
                                }}
                              >
                                {isSelected && (
                                  <div
                                    className="
                                      h-2.5
                                      w-2.5
                                      rounded-full
                                    "
                                    style={{
                                      background:
                                        "var(--primary)",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </motion.button>
                        );
                      }
                    )}
                  </div>
                </div>
              )
            )}

            {error && (
              <p
                className="
                  text-sm
                  mb-5
                  font-medium
                "
                style={{
                  color: "#ff6b6b",
                }}
              >
                {error}
              </p>
            )}

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              disabled={submitting}
              onClick={handleSubmit}
              className="
                w-full
                rounded-2xl
                py-4
                text-base
                font-semibold
                transition-all
                duration-300
                disabled:opacity-60
                flex
                items-center
                justify-center
                gap-3
              "
              style={{
                background:
                  "var(--primary)",
                color:
                  "var(--text-primary)",
              }}
            >
              {submitting ? (
                <>
                  <Loader2
                    className="
                      animate-spin
                    "
                    size={20}
                  />
                  Submitting...
                </>
              ) : (
                "Submit Response"
              )}
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default ResponsePage;