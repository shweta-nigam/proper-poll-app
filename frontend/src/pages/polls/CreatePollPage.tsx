import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Plus, Trash2, Copy, Check, Sparkles } from "lucide-react";

import { createPoll } from "../../api/poll.api.js";

const CreatePollPage = () => {
  const [loading, setLoading] = useState(false);
  const [createdPollId, setCreatedPollId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [copied, setCopied] = useState(false);

  const [pollLink, setPollLink] = useState("");

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
      console.log("Response", response);

      const pollId = response.data._id;
      console.log({ pollId });

      const generatedLink = `${window.location.origin}/polls/${pollId}/respond`;

      setPollLink(generatedLink);

      setCreatedPollId(pollId);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(pollLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-6
          py-14
        "
      >
        {/* Header */}
        <div
          className="
            mb-12
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
              text-sm
              text-[var(--text-secondary)]
              mb-5
            "
          >
            <Sparkles size={16} />
            Premium Poll Creator
          </div>

          <h1
            className="
              text-5xl
              font-black
              leading-tight
            "
          >
            Create Stunning
            <span
              className="
                text-[var(--primary)]
              "
            >
              {" "}
              Polls
            </span>
          </h1>

          <p
            className="
              mt-5
              text-lg
              text-[var(--text-secondary)]
              max-w-2xl
            "
          >
            Build interactive polls, collect responses, and share instantly with
            your audience.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            space-y-8
          "
        >
          {/* Poll Details */}
          <div
            className="
              p-8
              rounded-3xl
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Poll Details
            </h2>

            <div
              className="
                space-y-5
              "
            >
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
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#181818]
                  border
                  border-[var(--border)]
                  outline-none
                  focus:border-[var(--primary)]
                "
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
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#181818]
                  border
                  border-[var(--border)]
                  outline-none
                  resize-none
                  focus:border-[var(--primary)]
                "
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
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#181818]
                  border
                  border-[var(--border)]
                  outline-none
                  focus:border-[var(--primary)]
                "
              />

              <label
                className="
                  flex
                  items-center
                  gap-3
                  text-[var(--text-secondary)]
                "
              >
                <input
                  type="checkbox"
                  checked={formData.allowAnonymous}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      allowAnonymous: e.target.checked,
                    })
                  }
                />
                Allow anonymous responses
              </label>
            </div>
          </div>

          {/* Questions */}
          {formData.questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className="
                  p-8
                  rounded-3xl
                  bg-[var(--bg-card)]
                  border
                  border-[var(--border)]
                "
            >
              <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-6
                  "
              >
                <h2
                  className="
                      text-2xl
                      font-bold
                    "
                >
                  Question {questionIndex + 1}
                </h2>

                {formData.questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(questionIndex)}
                    className="
                        p-3
                        rounded-xl
                        bg-[#181818]
                        hover:bg-red-500/20
                        transition-all
                      "
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>

              <div
                className="
                    space-y-5
                  "
              >
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={question.questionText}
                  onChange={(e) =>
                    handleQuestionChange(questionIndex, e.target.value)
                  }
                  className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-[var(--border)]
                      outline-none
                      focus:border-[var(--primary)]
                    "
                />

                {/* Options */}
                <div
                  className="
                      space-y-4
                    "
                >
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="
                            flex
                            gap-3
                          "
                    >
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
                        className="
                              flex-1
                              px-5
                              py-4
                              rounded-2xl
                              bg-[#181818]
                              border
                              border-[var(--border)]
                              outline-none
                              focus:border-[var(--primary)]
                            "
                      />

                      {question.options.length > 2 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeOption(questionIndex, optionIndex)
                          }
                          className="
                                px-4
                                rounded-2xl
                                bg-[#181818]
                                hover:bg-red-500/20
                                transition-all
                              "
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
                  className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-[var(--border)]
                      hover:border-[var(--primary)]
                      transition-all
                    "
                >
                  <Plus size={18} />
                  Add Option
                </button>
              </div>
            </div>
          ))}

          {/* Add Question */}
          <button
            type="button"
            onClick={addQuestion}
            className="
              w-full
              py-5
              rounded-3xl
              border-2
              border-dashed
              border-[var(--border)]
              hover:border-[var(--primary)]
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-all
              flex
              items-center
              justify-center
              gap-3
              text-lg
              font-semibold
            "
          >
            <Plus size={22} />
            Add Another Question
          </button>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-5
              rounded-3xl
              text-lg
              font-bold
              bg-[var(--primary)]
              hover:bg-[var(--primary-hover)]
              transition-all
              disabled:opacity-60
            "
          >
            {loading ? "Creating Poll..." : "Create Poll"}
          </button>

          <button
            type="button"
            disabled={!createdPollId}
            onClick={() => navigate(`/polls/${createdPollId}/analytics`)}
            className="
    w-full
    py-5
    rounded-3xl
    text-lg
    font-bold
    bg-[var(--primary)]
    hover:bg-[var(--primary-hover)]
    transition-all
    disabled:opacity-60
  "
          >
            Analytics
          </button>
        </form>

        {/* Share Link */}
        {pollLink && (
          <div
            className="
              mt-10
              p-8
              rounded-3xl
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                mb-5
              "
            >
              Share Poll
            </h2>

            <div
              className="
                flex
                gap-3
              "
            >
              <input
                type="text"
                value={pollLink}
                readOnly
                className="
                  flex-1
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#181818]
                  border
                  border-[var(--border)]
                  outline-none
                "
              />

              <button
                onClick={copyLink}
                className="
                  px-6
                  rounded-2xl
                  bg-[var(--primary)]
                  hover:bg-[var(--primary-hover)]
                  transition-all
                  flex
                  items-center
                  gap-2
                  font-semibold
                "
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePollPage;
