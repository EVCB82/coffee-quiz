"use client";

import { useState } from "react";
import Image from "next/image";
import {
  questions,
  coffeeResults,
  PersonalityType,
  CoffeeResult,
} from "./data/quizData";

type QuizState = "welcome" | "quiz" | "result";

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);

  const handleStartQuiz = () => {
    setQuizState("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState("result");
    }
  };

  const calculateResult = (): CoffeeResult => {
    const counts: Record<PersonalityType, number> = {
      adventurer: 0,
      classic: 0,
      creative: 0,
      socialite: 0,
      intellectual: 0,
      minimalist: 0,
      romantic: 0,
      energizer: 0,
      nurturer: 0,
      trendsetter: 0,
    };

    answers.forEach((answer) => {
      counts[answer]++;
    });

    let maxCount = 0;
    let winningPersonality: PersonalityType = "classic";

    (Object.keys(counts) as PersonalityType[]).forEach((personality) => {
      if (counts[personality] > maxCount) {
        maxCount = counts[personality];
        winningPersonality = personality;
      }
    });

    return coffeeResults[winningPersonality];
  };

  const handleRestart = () => {
    setQuizState("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  if (quizState === "welcome") {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="logo-container">
            <Image
              src="/basecamp-logo.svg"
              alt="Basecamp Coffee"
              width={200}
              height={60}
              priority
            />
          </div>
          <h1 className="quiz-title">Find Your Perfect Brew</h1>
          <p className="quiz-subtitle">
            At Basecamp Coffee, we believe your coffee should be as unique as you are.
            Answer 8 simple questions and discover which drink from our menu matches your personality.
          </p>
          <button className="start-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (quizState === "quiz") {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="progress-container">
            <p className="progress-text">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="question-text">{question.question}</h2>

          <div className="answers-container">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswer(answer.personality)}
              >
                <span className="answer-icon">{answer.icon}</span>
                <span className="answer-text">{answer.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (quizState === "result") {
    const result = calculateResult();
    const shareText = `I'm ${result.title}! My perfect coffee is ${result.coffee}. ${result.tagline} Find yours at Basecamp Coffee!`;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "My Coffee Personality",
            text: shareText,
            url: shareUrl,
          });
        } catch (err) {
          // User cancelled or share failed
        }
      }
    };

    const shareToTwitter = () => {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(url, "_blank", "width=550,height=420");
    };

    const shareToFacebook = () => {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
      window.open(url, "_blank", "width=550,height=420");
    };

    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied!");
      } catch (err) {
        // Fallback for older browsers
        prompt("Copy this link:", shareUrl);
      }
    };

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="result-icon">{result.icon}</div>
          <h1 className="result-title">{result.title}</h1>
          <p className="result-coffee">Your Basecamp Order: {result.coffee}</p>
          <p className="result-tagline">&ldquo;{result.tagline}&rdquo;</p>
          <p className="result-description">{result.description}</p>
          <p className="result-cta">
            Pop into your local Basecamp and try your perfect match!
          </p>

          <div className="share-section">
            <p className="share-label">Share your result:</p>
            <div className="share-buttons">
              <button onClick={shareToTwitter} className="share-button share-twitter" aria-label="Share on X">
                𝕏
              </button>
              <button onClick={shareToFacebook} className="share-button share-facebook" aria-label="Share on Facebook">
                f
              </button>
              <button onClick={copyLink} className="share-button share-copy" aria-label="Copy link">
                🔗
              </button>
              {typeof navigator !== "undefined" && navigator.share && (
                <button onClick={handleShare} className="share-button share-native" aria-label="Share">
                  📤
                </button>
              )}
            </div>
          </div>

          <button className="restart-button" onClick={handleRestart}>
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}
